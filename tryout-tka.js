(() => {
  "use strict";
  // Konfigurasi awal MathSMP. Bukan standar/durasi resmi TKA.
  const JUMLAH_SOAL = 30;
  const DURASI_MENIT = 60;
  const KELAS = ["VII A", "VII B", "VIII A", "VIII B", "IX A", "IX B"];
  const KEY_RIWAYAT = "mathsmpRiwayatTryoutTKA_v1";
  const HURUF = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const bank = Array.isArray(window.bankSoalTKA?.soal) ? window.bankSoalTKA.soal : [];
  const $ = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[c]));
  const cocokSet = (a, b) => Array.isArray(a) && Array.isArray(b) && a.length === b.length && [...a].sort().every((v, i) => v === [...b].sort()[i]);

  function validasiSoal(q) {
    if (!q || q.status !== "published" || typeof q.id !== "string" || !q.id.trim()) return false;
    if (!q.soal || !String(q.soal).trim() || !Array.isArray(q.pilihan) || q.pilihan.length < 2) return false;
    if (!Array.isArray(q.kunci) || !q.kunci.length || !q.pembahasan || !String(q.pembahasan).trim()) return false;
    if (!["pilihan_tunggal", "pilihan_ganda_kompleks"].includes(q.tipe)) return false;
    if (q.pilihan.some(o => !o || typeof o.kode !== "string" || !o.kode.trim() || typeof o.teks !== "string" || !o.teks.trim())) return false;
    const codes = q.pilihan.map(o => String(o.kode));
    if (codes.some((v, i) => codes.indexOf(v) !== i)) return false;
    if (q.kunci.some(k => !codes.includes(k)) || new Set(q.kunci).size !== q.kunci.length) return false;
    if (q.tipe === "pilihan_tunggal" && q.kunci.length !== 1) return false;
    if (q.tipe === "pilihan_ganda_kompleks" && q.kunci.length < 2) return false;
    return true;
  }
  const ids = new Set();
  const soalValid = bank.filter(q => {
    if (!validasiSoal(q) || ids.has(q.id)) return false;
    ids.add(q.id); return true;
  });

  $("jumlahLayak").textContent = soalValid.length;
  $("durasiLabel").textContent = `${DURASI_MENIT} menit`;
  const status = $("statusKesiapan");
  const startButton = $("tombolMulai");
  if (soalValid.length >= JUMLAH_SOAL) {
    status.classList.add("ready");
    status.innerHTML = `<strong>Bank soal memenuhi syarat.</strong><span>${soalValid.length} soal valid tersedia. Sistem akan memilih tepat ${JUMLAH_SOAL} soal berbeda untuk satu paket.</span>`;
    startButton.disabled = false;
  } else {
    const kurang = JUMLAH_SOAL - soalValid.length;
    status.innerHTML = `<strong>Tryout belum dapat dimulai.</strong><span>Diperlukan ${JUMLAH_SOAL} soal TKA yang valid dan berstatus <code>published</code>. Saat ini tersedia ${soalValid.length}; masih kurang ${kurang} soal.</span>`;
  }

  let paket = [];
  let jawaban = [];
  let ditandai = [];
  let indexAktif = 0;
  let peserta = null;
  let waktuMulai = 0;
  let timerId = null;
  let sudahDikumpulkan = false;

  function acak(daftar) {
    const hasil = [...daftar];
    for (let i = hasil.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [hasil[i], hasil[j]] = [hasil[j], hasil[i]];
    }
    return hasil;
  }
  function simpanJawabanDariLayar() {
    const soal = paket[indexAktif];
    if (!soal) return;
    const terpilih = [...document.querySelectorAll("input[name='jawabanSoal']:checked")].map(e => e.value);
    jawaban[indexAktif] = terpilih;
    renderNavigasi();
    renderStatusPeserta();
  }
  function renderStatusPeserta() {
    const terjawab = jawaban.filter(a => Array.isArray(a) && a.length).length;
    $("statusPengerjaan").textContent = `${peserta.nama} · ${peserta.kelas} · ${terjawab}/${JUMLAH_SOAL} dijawab`;
    $("ringkasanJawaban").textContent = `${terjawab} dari ${JUMLAH_SOAL} soal dijawab`;
    $("barKemajuan").style.width = `${terjawab / JUMLAH_SOAL * 100}%`;
  }
  function renderNavigasi() {
    $("navigasiNomor").innerHTML = paket.map((_, i) => `<button type="button" class="tka-nav-number ${jawaban[i]?.length ? "answered" : ""} ${ditandai[i] ? "flagged" : ""} ${i === indexAktif ? "current" : ""}" data-goto="${i}" aria-label="Buka soal ${i+1}" aria-current="${i === indexAktif ? "step" : "false"}">${i+1}</button>`).join("");
  }
  function renderSoal() {
    const q = paket[indexAktif];
    const multi = q.tipe === "pilihan_ganda_kompleks";
    const options = q.pilihan.map((o, i) => {
      const checked = (jawaban[indexAktif] || []).includes(String(o.kode));
      return `<label class="tka-option ${checked ? "selected" : ""}"><input type="${multi ? "checkbox" : "radio"}" name="jawabanSoal" value="${escapeHTML(o.kode)}" ${checked ? "checked" : ""}><span class="tka-option-key">${escapeHTML(o.kode || HURUF[i])}</span><span>${escapeHTML(o.teks)}</span></label>`;
    }).join("");
    $("wadahSoalAktif").innerHTML = `<article class="tka-current-question"><div class="tka-question-meta"><span>SOAL ${indexAktif+1} DARI ${JUMLAH_SOAL}</span><span>${escapeHTML(q.domain || "Matematika")}</span></div>${q.stimulus ? `<div class="tka-stimulus"><strong>Stimulus</strong><p>${escapeHTML(q.stimulus)}</p></div>` : ""}<h2>${escapeHTML(q.soal)}</h2><p class="tka-question-instruction">${multi ? "Pilih semua jawaban yang tepat." : "Pilih satu jawaban yang paling tepat."}</p><div class="tka-answer-list">${options}</div></article>`;
    $("tombolTandai").classList.toggle("active", !!ditandai[indexAktif]);
    renderNavigasi(); renderStatusPeserta();
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([$("wadahSoalAktif")]).catch(()=>{});
  }
  function updateTimer() {
    const sisa = Math.max(0, DURASI_MENIT * 60 - Math.floor((Date.now() - waktuMulai) / 1000));
    const menit = String(Math.floor(sisa / 60)).padStart(2,"0");
    const detik = String(sisa % 60).padStart(2,"0");
    $("timerTryout").textContent = `${menit}:${detik}`;
    $("timerTryout").classList.toggle("urgent", sisa <= 300);
    if (sisa <= 0 && !sudahDikumpulkan) kumpulkan(true);
  }
  function mulai() {
    const nama = $("namaPeserta").value.trim();
    const kelas = $("kelasPeserta").value;
    if (!nama) { alert("Isi nama peserta terlebih dahulu."); $("namaPeserta").focus(); return; }
    if (!KELAS.includes(kelas)) { alert("Pilih kelas yang tersedia."); $("kelasPeserta").focus(); return; }
    if (soalValid.length < JUMLAH_SOAL) { alert("Bank soal TKA belum mencukupi 30 soal valid."); return; }
    peserta = {nama, kelas};
    paket = acak(soalValid).slice(0, JUMLAH_SOAL);
    if (paket.length !== JUMLAH_SOAL || new Set(paket.map(q=>q.id)).size !== JUMLAH_SOAL) { alert("Paket gagal disiapkan karena ada ID soal ganda atau data tidak valid."); return; }
    jawaban = Array.from({length:JUMLAH_SOAL},()=>[]);
    ditandai = Array(JUMLAH_SOAL).fill(false);
    indexAktif = 0; waktuMulai = Date.now(); sudahDikumpulkan = false;
    $("panelPersiapan").hidden = true; $("riwayatPanel").hidden = true; $("areaTryout").hidden = false;
    $("namaPesertaAktif").textContent = `${nama} · ${kelas}`;
    renderSoal(); updateTimer(); timerId = window.setInterval(updateTimer, 1000);
    window.scrollTo({top:0, behavior:"smooth"});
  }
  function kumpulkan(otomatis=false) {
    if (sudahDikumpulkan) return;
    simpanJawabanDariLayar();
    const belum = jawaban.filter(a=>!a.length).length;
    if (!otomatis && !window.confirm(belum ? `Masih ada ${belum} soal belum dijawab. Kumpulkan sekarang?` : "Kumpulkan seluruh jawaban dan lihat hasil?") ) return;
    sudahDikumpulkan = true;
    if (timerId) window.clearInterval(timerId);
    const benar = paket.reduce((n,q,i)=>n+(cocokSet(jawaban[i] || [], q.kunci) ? 1 : 0),0);
    const dijawab = JUMLAH_SOAL - belum;
    const hasil = {tanggal:new Date().toISOString(), nama:peserta.nama, kelas:peserta.kelas, benar, salah:dijawab-benar, kosong:belum, nilai:Math.round(benar/JUMLAH_SOAL*100)};
    simpanRiwayat(hasil);
    const ulasan = paket.map((q,i)=>{
      const ok = cocokSet(jawaban[i] || [], q.kunci);
      const jawabanSiswa = (jawaban[i] || []).length ? jawaban[i].join(", ") : "Tidak dijawab";
      return `<article class="tka-review-item"><h3>Soal ${i+1}. ${escapeHTML(q.soal)}</h3><p>Jawaban peserta: <strong>${escapeHTML(jawabanSiswa)}</strong></p><p class="${ok ? "review-correct":"review-wrong"}">${ok ? "✓ Benar" : "✗ Belum tepat"} · Kunci: ${escapeHTML(q.kunci.join(", "))}</p><p><strong>Pembahasan:</strong> ${escapeHTML(q.pembahasan)}</p></article>`;
    }).join("");
    $("areaTryout").hidden = true; $("hasilTryout").hidden = false; $("riwayatPanel").hidden = false;
    $("hasilTryout").innerHTML = `<div class="tka-result-heading"><div><span class="section-kicker">HASIL TRYOUT</span><h2>Tryout selesai</h2><p>${otomatis ? "Waktu habis; jawaban dikumpulkan otomatis." : "Jawaban sudah dikumpulkan."}</p></div><div class="tka-score-bubble">${hasil.nilai}<small>/100</small></div></div><div class="tka-result-grid"><div><strong>${benar}</strong><span>Benar</span></div><div><strong>${hasil.salah}</strong><span>Salah</span></div><div><strong>${belum}</strong><span>Kosong</span></div></div><p><strong>${escapeHTML(hasil.nama)}</strong> · ${escapeHTML(hasil.kelas)} · ${new Date(hasil.tanggal).toLocaleString("id-ID")}</p><div class="tka-button-row"><button type="button" class="tka-btn" id="ulangTryout">Tryout baru</button><button type="button" class="tka-btn secondary" id="cetakHasil">Cetak hasil</button></div><h3>Pembahasan dan tinjauan jawaban</h3><div class="tka-review-list">${ulasan}</div>`;
    $("ulangTryout").addEventListener("click",()=>window.location.reload());
    $("cetakHasil").addEventListener("click",()=>window.print());
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([$("hasilTryout")]).catch(()=>{});
    window.scrollTo({top:0,behavior:"smooth"}); renderRiwayat();
  }
  function simpanRiwayat(hasil) {
    try { const daftar = JSON.parse(localStorage.getItem(KEY_RIWAYAT) || "[]"); daftar.unshift(hasil); localStorage.setItem(KEY_RIWAYAT, JSON.stringify(daftar.slice(0,100))); }
    catch (e) { console.warn("Riwayat tryout tidak dapat disimpan pada browser ini.",e); }
  }
  function renderRiwayat() {
    let daftar=[]; try { daftar=JSON.parse(localStorage.getItem(KEY_RIWAYAT)||"[]"); } catch(e) { daftar=[]; }
    if (!daftar.length) { $("riwayatTryout").textContent="Belum ada hasil tryout."; return; }
    $("riwayatTryout").innerHTML=`<div class="tka-table-wrap"><table class="tka-table"><thead><tr><th>Tanggal</th><th>Nama</th><th>Kelas</th><th>Benar</th><th>Nilai</th></tr></thead><tbody>${daftar.map(x=>`<tr><td>${escapeHTML(new Date(x.tanggal).toLocaleString("id-ID"))}</td><td>${escapeHTML(x.nama)}</td><td>${escapeHTML(x.kelas)}</td><td>${x.benar}/30</td><td>${x.nilai}</td></tr>`).join("")}</tbody></table></div>`;
  }
  function unduhCSV() {
    let daftar=[]; try { daftar=JSON.parse(localStorage.getItem(KEY_RIWAYAT)||"[]"); } catch(e) { daftar=[]; }
    if (!daftar.length) { alert("Belum ada riwayat tryout untuk diunduh."); return; }
    const rows=[["Tanggal","Nama","Kelas","Benar","Salah","Kosong","Nilai"],...daftar.map(x=>[new Date(x.tanggal).toLocaleString("id-ID"),x.nama,x.kelas,x.benar,x.salah,x.kosong,x.nilai])];
    const csv=rows.map(row=>row.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\r\n");
    const url=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}));
    const a=document.createElement("a");a.href=url;a.download="Rekap-Tryout-TKA-MathSMP.csv";a.click();URL.revokeObjectURL(url);
  }

  startButton.addEventListener("click", mulai);
  $("wadahSoalAktif").addEventListener("change", simpanJawabanDariLayar);
  $("areaTryout").addEventListener("click", e=>{
    const btn=e.target.closest("[data-action], [data-goto]"); if(!btn) return;
    if(btn.dataset.goto!==undefined){simpanJawabanDariLayar();indexAktif=Number(btn.dataset.goto);renderSoal();return;}
    const action=btn.dataset.action;
    if(action==="prev" && indexAktif>0){simpanJawabanDariLayar();indexAktif--;renderSoal();}
    if(action==="next" && indexAktif<JUMLAH_SOAL-1){simpanJawabanDariLayar();indexAktif++;renderSoal();}
    if(action==="flag"){ditandai[indexAktif]=!ditandai[indexAktif];renderSoal();}
    if(action==="submit")kumpulkan(false);
  });
  $("unduhRiwayat").addEventListener("click",unduhCSV);
  renderRiwayat();
})();
