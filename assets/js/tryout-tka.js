(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[ch]));
  const HISTORY_KEY = "mathsmpRiwayatTKA_multi_v1";
  const CLASSES = ["VII A","VII B","VIII A","VIII B","IX A","IX B"];

  let data = null;
  let packageMeta = null;
  let subjectMeta = null;
  let groupMap = new Map();
  let validQuestions = [];
  let targetCount = 0;
  let durationMinutes = 0;
  let activeQuestions = [];
  let answers = [];
  let flagged = [];
  let activeIndex = 0;
  let participant = null;
  let startedAt = 0;
  let timerId = null;
  let submitted = false;

  function isCategory(q) {
    return q?.tipe === "pilihan_ganda_kategori";
  }
  function validateQuestion(q, groups) {
    if (!q || q.status !== "published" || typeof q.id !== "string" || !q.id.trim()) return false;
    if (!Number.isInteger(q.nomor) || !String(q.domain || "").trim()) return false;
    if (!String(q.soal || "").trim() || !String(q.pembahasan || "").trim()) return false;
    if (q.stimulusId && !groups.has(q.stimulusId)) return false;

    if (q.tipe === "pilihan_tunggal" || q.tipe === "pilihan_ganda_kompleks") {
      if (!Array.isArray(q.pilihan) || q.pilihan.length < 4 || !Array.isArray(q.kunci) || !q.kunci.length) return false;
      const codes = q.pilihan.map(o => o && o.kode);
      if (codes.some(code => typeof code !== "string" || !code.trim()) || new Set(codes).size !== codes.length) return false;
      if (q.pilihan.some(o => !String(o.teks || "").trim())) return false;
      if (q.kunci.some(k => !codes.includes(k)) || new Set(q.kunci).size !== q.kunci.length) return false;
      if (q.tipe === "pilihan_tunggal" && q.kunci.length !== 1) return false;
      if (q.tipe === "pilihan_ganda_kompleks" && (q.kunci.length < 2 || q.kunci.length >= q.pilihan.length)) return false;
      return true;
    }
    if (isCategory(q)) {
      if (!Array.isArray(q.pernyataan) || q.pernyataan.length !== 3) return false;
      const codes = q.pernyataan.map(p => p && p.kode);
      return !codes.some(code => typeof code !== "string" || !code.trim())
        && new Set(codes).size === codes.length
        && q.pernyataan.every(p => String(p.teks || "").trim() && ["Benar","Salah"].includes(p.kunci));
    }
    return false;
  }

  function shuffle(list) {
    const result = [...list];
    for (let i=result.length-1;i>0;i--) {
      const j=Math.floor(Math.random()*(i+1));
      [result[i],result[j]]=[result[j],result[i]];
    }
    return result;
  }

  function effectiveStimulus(q) {
    const group = q.stimulusId ? groupMap.get(q.stimulusId) : null;
    if (group) return {title:group.judul || "Stimulus bersama",text:group.stimulus || "",illustration:q.ilustrasi || group.ilustrasi || null};
    return {title:q.stimulus ? "Stimulus" : "",text:q.stimulus || "",illustration:q.ilustrasi || null};
  }
  function illustrationHTML(illustration) {
    if (!illustration || !illustration.file) return "";
    const src = window.TKASelector.assetUrl(illustration.file);
    return `<figure class="tka-illustration-wrap"><img class="tka-illustration" src="${esc(src)}" alt="${esc(illustration.alt || "Ilustrasi soal TKA")}" loading="lazy"></figure>`;
  }
  function stimulusHTML(q) {
    const item = effectiveStimulus(q);
    const text = item.text ? `<div class="tka-stimulus-block"><strong>${esc(item.title)}</strong>${esc(item.text)}</div>` : "";
    return `${text}${illustrationHTML(item.illustration)}`;
  }

  function answerState(q, answer) {
    if (isCategory(q)) {
      const count = answer && typeof answer === "object" ? Object.keys(answer).length : 0;
      if (!count) return "empty";
      if (count < q.pernyataan.length) return "partial";
      return "complete";
    }
    return Array.isArray(answer) && answer.length ? "complete" : "empty";
  }
  function setEqual(a,b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    const x=[...a].sort(), y=[...b].sort();
    return x.every((value,index)=>value===y[index]);
  }
  function isCorrect(q, answer) {
    if (isCategory(q)) {
      if (!answer || typeof answer !== "object") return false;
      return q.pernyataan.every(item => answer[item.kode] === item.kunci);
    }
    return setEqual(answer || [], q.kunci || []);
  }

  function updateProgress() {
    const complete = activeQuestions.filter((q,i)=>answerState(q,answers[i])==="complete").length;
    const partial = activeQuestions.filter((q,i)=>answerState(q,answers[i])==="partial").length;
    $("statusPengerjaan").textContent = `${participant.nama} · ${participant.kelas} · ${complete}/${targetCount} lengkap${partial ? ` · ${partial} belum lengkap` : ""}`;
    $("ringkasanJawaban").textContent = `${complete} dari ${targetCount} soal lengkap${partial ? ` · ${partial} belum lengkap` : ""}`;
    $("barKemajuan").style.width = `${targetCount ? complete/targetCount*100 : 0}%`;
  }

  function renderNavigation() {
    $("navigasiNomor").innerHTML = activeQuestions.map((q,i)=>{
      const state=answerState(q,answers[i]);
      return `<button type="button" class="tka-nav-number ${state==="complete"?"answered":""} ${state==="partial"?"partial":""} ${flagged[i]?"flagged":""} ${i===activeIndex?"current":""}" data-goto="${i}" aria-label="Buka soal ${i+1}" aria-current="${i===activeIndex?"step":"false"}">${i+1}</button>`;
    }).join("");
  }

  function renderAnswerControls(q) {
    if (isCategory(q)) {
      return `<div class="tka-statement-list">${q.pernyataan.map(statement=>{
        const selected=answers[activeIndex] && answers[activeIndex][statement.kode];
        const name=`kategori-${activeIndex}-${statement.kode}`;
        return `<div class="tka-statement-row">
          <div class="tka-statement-text"><span class="tka-statement-code">${esc(statement.kode)}</span>${esc(statement.teks)}</div>
          <div class="tka-category-options">
            <label class="tka-category-choice"><input type="radio" name="${esc(name)}" data-category-code="${esc(statement.kode)}" value="Benar" ${selected==="Benar"?"checked":""}> Benar</label>
            <label class="tka-category-choice"><input type="radio" name="${esc(name)}" data-category-code="${esc(statement.kode)}" value="Salah" ${selected==="Salah"?"checked":""}> Salah</label>
          </div>
        </div>`;
      }).join("")}</div>`;
    }
    const multi=q.tipe==="pilihan_ganda_kompleks";
    return `<div class="tka-answer-list">${q.pilihan.map(o=>{
      const checked=(answers[activeIndex]||[]).includes(o.kode);
      return `<label class="tka-option ${checked?"selected":""}">
        <input type="${multi?"checkbox":"radio"}" name="jawabanSoal" value="${esc(o.kode)}" ${checked?"checked":""}>
        <span class="tka-option-key">${esc(o.kode)}</span><span>${esc(o.teks)}</span>
      </label>`;
    }).join("")}</div>`;
  }

  function renderQuestion() {
    const q=activeQuestions[activeIndex];
    if (!q) return;
    const kind=q.tipe==="pilihan_tunggal"?"Pilihan Ganda (PG)":q.tipe==="pilihan_ganda_kompleks"?"PGK · MCMA":"PGK · Kategori";
    const instruction=q.instruksi || (q.tipe==="pilihan_tunggal"?"Pilih satu jawaban yang paling tepat.":q.tipe==="pilihan_ganda_kompleks"?"Pilih semua jawaban yang benar.":"Tentukan Benar atau Salah untuk setiap pernyataan.");
    $("wadahSoalAktif").innerHTML=`<article class="tka-current-question">
      <div class="tka-question-meta"><span>SOAL ${activeIndex+1} DARI ${targetCount}</span><span>${esc(q.domain)} · ${esc(q.subdomain||"")}</span></div>
      <div style="margin-top:9px"><span class="tka-question-kind">${kind}</span></div>
      ${stimulusHTML(q)}
      <h2>${esc(q.soal)}</h2>
      <p class="tka-question-instruction">${esc(instruction)}</p>
      ${renderAnswerControls(q)}
    </article>`;
    $("tombolTandai").classList.toggle("active",!!flagged[activeIndex]);
    renderNavigation();
    updateProgress();
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([$("wadahSoalAktif")]).catch(()=>{});
  }

  function saveCurrentAnswer() {
    const q=activeQuestions[activeIndex];
    if (!q) return;
    if (isCategory(q)) {
      const value={};
      $("wadahSoalAktif").querySelectorAll("input[data-category-code]:checked").forEach(input=>{
        value[input.dataset.categoryCode]=input.value;
      });
      answers[activeIndex]=value;
    } else {
      answers[activeIndex]=[...$("wadahSoalAktif").querySelectorAll("input[name='jawabanSoal']:checked")].map(input=>input.value);
    }
    renderNavigation();
    updateProgress();
    // Keep the selected style in sync after checkbox/radio interaction.
    $("wadahSoalAktif").querySelectorAll(".tka-option").forEach(label=>{
      label.classList.toggle("selected",!!label.querySelector("input")?.checked);
    });
  }

  function updateTimer() {
    const remaining=Math.max(0,durationMinutes*60-Math.floor((Date.now()-startedAt)/1000));
    $("timerTryout").textContent=`${String(Math.floor(remaining/60)).padStart(2,"0")}:${String(remaining%60).padStart(2,"0")}`;
    $("timerTryout").classList.toggle("urgent",remaining<=300);
    if (remaining<=0 && !submitted) collect(true);
  }

  function historyList() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]"); }
    catch (_) { return []; }
  }
  function saveHistory(result) {
    try {
      const rows=historyList();
      rows.unshift(result);
      localStorage.setItem(HISTORY_KEY,JSON.stringify(rows.slice(0,100)));
    } catch (error) { console.warn("Riwayat TKA tidak dapat disimpan di browser ini.",error); }
  }
  function renderHistory() {
    const rows=historyList();
    if (!rows.length) {
      $("riwayatTryout").textContent="Belum ada hasil tryout.";
      return;
    }
    $("riwayatTryout").innerHTML=`<div class="tka-table-wrap"><table class="tka-table"><thead><tr><th>Tanggal</th><th>Mata pelajaran</th><th>Paket</th><th>Nama</th><th>Kelas</th><th>Nilai</th></tr></thead><tbody>${rows.map(row=>
      `<tr><td>${esc(new Date(row.tanggal).toLocaleString("id-ID"))}</td><td>${esc(row.mataPelajaran)}</td><td>${esc(row.paketNama)}</td><td>${esc(row.nama)}</td><td>${esc(row.kelas)}</td><td>${row.nilai}</td></tr>`
    ).join("")}</tbody></table></div>`;
  }

  function answerSummary(q,answer) {
    if (isCategory(q)) return q.pernyataan.map(item=>`${item.kode}: ${esc(answer?.[item.kode]||"Belum dijawab")}`).join(" · ");
    if (!Array.isArray(answer) || !answer.length) return "Tidak dijawab";
    return answer.map(code=>{
      const option=q.pilihan.find(item=>item.kode===code);
      return option?`${esc(code)}. ${esc(option.teks)}`:esc(code);
    }).join("; ");
  }
  function keySummary(q) {
    if (isCategory(q)) return q.pernyataan.map(item=>`${item.kode}: ${esc(item.kunci)}`).join(" · ");
    return q.kunci.map(code=>{
      const option=q.pilihan.find(item=>item.kode===code);
      return option?`${esc(code)}. ${esc(option.teks)}`:esc(code);
    }).join("; ");
  }
  function reviewQuestion(q,index,answer) {
    const correct=isCorrect(q,answer);
    const visual=stimulusHTML(q);
    let comparison="";
    if (isCategory(q)) {
      comparison=q.pernyataan.map(item=>`<div class="tka-review-statement"><strong>${esc(item.kode)}.</strong> ${esc(item.teks)}<br>Jawaban peserta: <strong>${esc(answer?.[item.kode]||"Belum dijawab")}</strong> · Kunci: <strong>${esc(item.kunci)}</strong></div>`).join("");
    } else {
      comparison=`<p>Jawaban peserta: <strong>${answerSummary(q,answer)}</strong></p><p>Kunci: <strong>${keySummary(q)}</strong></p>`;
    }
    return `<article class="tka-review-item">
      <div class="tka-question-meta"><span>${esc(q.domain)}</span><span>Nomor ${index+1}</span></div>
      ${visual}<h3>${esc(q.soal)}</h3>
      <p class="${correct?"review-correct":"review-wrong"}">${correct?"✓ Benar":"✗ Belum tepat"}</p>
      ${comparison}
      <p><strong>Pembahasan:</strong> ${esc(q.pembahasan)}</p>
    </article>`;
  }

  function collect(automatic=false) {
    if (submitted) return;
    saveCurrentAnswer();
    const states=activeQuestions.map((q,i)=>answerState(q,answers[i]));
    const empty=states.filter(state=>state==="empty").length;
    const partial=states.filter(state=>state==="partial").length;
    const correct=activeQuestions.reduce((sum,q,i)=>sum+(isCorrect(q,answers[i])?1:0),0);
    const wrong=states.filter((state,i)=>state==="complete"&&!isCorrect(activeQuestions[i],answers[i])).length;
    if (!automatic && !window.confirm(empty||partial
      ? `Masih ada ${empty} soal kosong dan ${partial} soal belum lengkap. Kumpulkan sekarang?`
      : "Kumpulkan seluruh jawaban dan lihat hasil?")) return;

    submitted=true;
    if (timerId) window.clearInterval(timerId);
    const result={
      tanggal:new Date().toISOString(),
      mataPelajaran:subjectMeta.nama,
      mataPelajaranId:subjectMeta.id,
      paketNama:packageMeta.nama,
      paketId:packageMeta.id,
      nama:participant.nama,
      kelas:participant.kelas,
      benar:correct,
      salah:wrong,
      belumLengkap:partial,
      kosong:empty,
      nilai:Math.round(correct/targetCount*100)
    };
    saveHistory(result);
    $("areaTryout").hidden=true;
    $("hasilTryout").hidden=false;
    $("riwayatPanel").hidden=false;
    $("hasilTryout").innerHTML=`
      <div class="tka-result-heading"><div><span class="section-kicker">HASIL TRYOUT</span><h2>Tryout selesai</h2>
      <p>${automatic?"Waktu habis; jawaban dikumpulkan otomatis.":"Jawaban sudah dikumpulkan."}</p>
      <p>${esc(subjectMeta.nama)} · ${esc(packageMeta.nama)}</p></div><div class="tka-score-bubble">${result.nilai}<small>/100</small></div></div>
      <div class="tka-result-grid"><div><strong>${correct}</strong><span>Benar</span></div><div><strong>${wrong}</strong><span>Salah lengkap</span></div><div><strong>${partial+empty}</strong><span>Belum lengkap/kosong</span></div></div>
      <p><strong>${esc(result.nama)}</strong> · ${esc(result.kelas)} · ${new Date(result.tanggal).toLocaleString("id-ID")}</p>
      <div class="tka-button-row"><button type="button" class="tka-btn" id="ulangTryout">Pilih paket lain</button><button type="button" class="tka-btn secondary" id="cetakHasil">Cetak hasil</button></div>
      <h3>Pembahasan dan tinjauan jawaban</h3><div class="tka-review-list">${activeQuestions.map((q,i)=>reviewQuestion(q,i+1,answers[i])).join("")}</div>`;
    $("ulangTryout").addEventListener("click",()=>window.location.reload());
    $("cetakHasil").addEventListener("click",()=>window.print());
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([$("hasilTryout")]).catch(()=>{});
    $("tombolMulai").disabled=true;
    window.scrollTo({top:0,behavior:"smooth"});
    renderHistory();
  }

  function startTest() {
    if (!data || !packageMeta || !targetCount || validQuestions.length<targetCount) {
      alert("Paket belum memiliki cukup soal yang valid untuk memulai tryout.");
      return;
    }
    const name=$("namaPeserta").value.trim();
    const className=$("kelasPeserta").value;
    if (!name) { alert("Isi nama peserta terlebih dahulu."); $("namaPeserta").focus(); return; }
    if (!CLASSES.includes(className)) { alert("Pilih kelas peserta."); $("kelasPeserta").focus(); return; }

    participant={nama:name,kelas:className};
    activeQuestions=data.konfigurasi.acakSoal ? shuffle(validQuestions).slice(0,targetCount) : validQuestions.slice(0,targetCount);
    if (activeQuestions.length!==targetCount || new Set(activeQuestions.map(q=>q.id)).size!==targetCount) {
      alert("Paket tidak dapat disiapkan karena jumlah soal atau ID tidak valid.");
      return;
    }
    answers=Array.from({length:targetCount},()=>[]);
    flagged=Array(targetCount).fill(false);
    activeIndex=0;
    startedAt=Date.now();
    submitted=false;

    // Sederhanakan halaman setelah peserta benar-benar memulai simulasi.
    // Header minimalis (logo + Beranda) tetap tampil selama ujian.
    document.body.classList.add("tka-exam-mode");
    $("panelPersiapan").hidden=true;
    $("riwayatPanel").hidden=true;
    $("areaTryout").hidden=false;
    document.querySelector(".tka-selector-panel").hidden=true;
    $("namaPesertaAktif").textContent=`${name} · ${className} · ${subjectMeta.nama} · ${packageMeta.nama}`;
    $("timerTryout").textContent=`${String(durationMinutes).padStart(2,"0")}:00`;
    renderQuestion();
    updateTimer();
    timerId=window.setInterval(updateTimer,1000);
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function loadPackage(nextData,pkg,subject) {
    if (timerId) window.clearInterval(timerId);
    data=nextData;
    packageMeta=pkg;
    subjectMeta=subject;
    groupMap=new Map((data.kelompokStimulus||[]).map(group=>[group.id,group]));
    const seen=new Set();
    validQuestions=(data.soal||[]).filter(q=>{
      if(!validateQuestion(q,groupMap)||seen.has(q.id)) return false;
      seen.add(q.id); return true;
    });
    targetCount=Number(data.konfigurasi?.jumlahSoal)||0;
    durationMinutes=Number(data.konfigurasi?.durasiMenit)||0;

    $("judulTryoutTKA").textContent=data.konfigurasi?.judul||pkg.judul;
    $("deskripsiTryoutTKA").textContent=data.konfigurasi?.deskripsi||"Paket tryout telah dimuat.";
    $("jumlahPaketSoal").textContent=targetCount||"—";
    $("jumlahLayak").textContent=validQuestions.length;
    $("jumlahTarget").textContent=targetCount||"—";
    $("durasiLabel").textContent=durationMinutes?`${durationMinutes} menit`:"Belum ditetapkan";
    $("daftarInstruksiTKA").innerHTML=(data.konfigurasi?.instruksi||[]).map(line=>`<li>${esc(line)}</li>`).join("");
    $("panelPersiapan").hidden=false;
    $("areaTryout").hidden=true;
    $("hasilTryout").hidden=true;
    $("riwayatPanel").hidden=false;
    document.querySelector(".tka-selector-panel").hidden=false;

    const ready=data.status==="published" && targetCount>0 && durationMinutes>0 && validQuestions.length>=targetCount;
    $("tombolMulai").disabled=!ready;
    $("statusKesiapan").classList.toggle("ready",ready);
    if (ready) {
      $("statusKesiapan").innerHTML=`<strong>Paket siap digunakan.</strong><span>${validQuestions.length} soal valid tersedia; ${targetCount} soal akan digunakan dengan durasi ${durationMinutes} menit. ${data.konfigurasi.acakSoal?"Urutan soal diacak.":"Urutan soal mengikuti naskah paket."}</span>`;
    } else {
      const draft=data.status!=="published"||!targetCount;
      $("statusKesiapan").innerHTML=`<strong>${draft?"Paket belum tersedia.":"Tryout belum dapat dimulai."}</strong><span>${draft?"Bank soal untuk mata pelajaran/paket ini masih kosong atau berstatus draft.":`Diperlukan ${targetCount} soal valid; saat ini tersedia ${validQuestions.length}. Periksa data paket sebelum mengaktifkan tryout.`}</span>`;
    }
    renderHistory();
    $("tombolMulai").textContent=`Mulai ${targetCount||""} Soal`.trim();
  }

  $("tombolMulai").addEventListener("click",startTest);
  $("wadahSoalAktif").addEventListener("change",saveCurrentAnswer);
  $("areaTryout").addEventListener("click",event=>{
    const button=event.target.closest("[data-action],[data-goto]");
    if(!button) return;
    if(button.dataset.goto!==undefined) {
      saveCurrentAnswer();
      activeIndex=Number(button.dataset.goto);
      renderQuestion();
      return;
    }
    const action=button.dataset.action;
    if(action==="prev"&&activeIndex>0){saveCurrentAnswer();activeIndex--;renderQuestion();}
    if(action==="next"&&activeIndex<targetCount-1){saveCurrentAnswer();activeIndex++;renderQuestion();}
    if(action==="flag"){flagged[activeIndex]=!flagged[activeIndex];renderQuestion();}
    if(action==="submit")collect(false);
  });
  $("unduhRiwayat").addEventListener("click",()=>{
    const rows=historyList();
    if(!rows.length){alert("Belum ada riwayat tryout.");return;}
    const head=["Tanggal","Mata Pelajaran","Paket","Nama","Kelas","Benar","Salah","Belum Lengkap","Kosong","Nilai"];
    const csv=[head,...rows.map(row=>[
      new Date(row.tanggal).toLocaleString("id-ID"),row.mataPelajaran,row.paketNama,row.nama,row.kelas,row.benar,row.salah,row.belumLengkap,row.kosong,row.nilai
    ])].map(row=>row.map(value=>`"${String(value??"").replace(/"/g,'""')}"`).join(",")).join("\r\n");
    const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.href=url;link.download="Rekap-Tryout-TKA-MathSMP.csv";link.click();URL.revokeObjectURL(url);
  });
  renderHistory();
  window.TKASelector.init({mode:"tryout",onLoad:loadPackage});
})();