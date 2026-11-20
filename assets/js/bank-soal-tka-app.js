(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[ch]));
  let data = null;
  let packageMeta = null;
  let subjectMeta = null;
  let allValid = [];
  let groupMap = new Map();

  function validateQuestion(q, groups) {
    if (!q || q.status !== "published" || typeof q.id !== "string" || !q.id.trim()) return false;
    if (!Number.isInteger(q.nomor) || !String(q.domain || "").trim()) return false;
    if (!String(q.soal || "").trim() || !String(q.pembahasan || "").trim()) return false;
    if (q.stimulusId && !groups.has(q.stimulusId)) return false;

    if (q.tipe === "pilihan_tunggal" || q.tipe === "pilihan_ganda_kompleks") {
      if (!Array.isArray(q.pilihan) || q.pilihan.length < 4) return false;
      if (!Array.isArray(q.kunci) || !q.kunci.length) return false;
      const codes = q.pilihan.map(o => o && o.kode);
      if (codes.some(code => typeof code !== "string" || !code.trim()) || new Set(codes).size !== codes.length) return false;
      if (q.pilihan.some(o => !String(o.teks || "").trim())) return false;
      if (q.kunci.some(k => !codes.includes(k)) || new Set(q.kunci).size !== q.kunci.length) return false;
      if (q.tipe === "pilihan_tunggal" && q.kunci.length !== 1) return false;
      if (q.tipe === "pilihan_ganda_kompleks" && (q.kunci.length < 2 || q.kunci.length >= q.pilihan.length)) return false;
      return true;
    }

    if (q.tipe === "pilihan_ganda_kategori") {
      if (!Array.isArray(q.pernyataan) || q.pernyataan.length !== 3) return false;
      const codes = q.pernyataan.map(p => p && p.kode);
      if (codes.some(code => typeof code !== "string" || !code.trim()) || new Set(codes).size !== codes.length) return false;
      return q.pernyataan.every(p => String(p.teks || "").trim() && ["Benar", "Salah"].includes(p.kunci));
    }
    return false;
  }

  function effectiveStimulus(q) {
    const group = q.stimulusId ? groupMap.get(q.stimulusId) : null;
    if (group) return { title: group.judul || "Stimulus bersama", text: group.stimulus || "", illustration: q.ilustrasi || group.ilustrasi || null };
    return { title: q.stimulus ? "Stimulus" : "", text: q.stimulus || "", illustration: q.ilustrasi || null };
  }

  function illustrationHTML(illustration) {
    if (!illustration || !illustration.file) return "";
    const src = window.TKASelector.assetUrl(illustration.file);
    return `<figure class="tka-illustration-wrap"><img class="tka-illustration" src="${esc(src)}" alt="${esc(illustration.alt || "Ilustrasi soal TKA")}" loading="lazy"></figure>`;
  }

  function questionHTML(q) {
    const visual = effectiveStimulus(q);
    const stimulus = visual.text
      ? `<div class="tka-stimulus-block"><strong>${esc(visual.title)}</strong>${esc(visual.text)}</div>`
      : "";
    const image = illustrationHTML(visual.illustration);
    const kind = q.tipe === "pilihan_tunggal" ? "Pilihan Ganda (PG)"
      : q.tipe === "pilihan_ganda_kompleks" ? "PGK · MCMA" : "PGK · Kategori";
    let answers = "";
    if (q.tipe === "pilihan_ganda_kategori") {
      answers = `<table class="tka-category-table"><thead><tr><th>Pernyataan</th><th>Respons benar</th></tr></thead><tbody>${q.pernyataan.map(p =>
        `<tr><td><strong>${esc(p.kode)}.</strong> ${esc(p.teks)}</td><td>${esc(p.kunci)}</td></tr>`
      ).join("")}</tbody></table>`;
    } else {
      answers = `<ol class="tka-option-list" type="A">${q.pilihan.map(o => {
        const correct = q.kunci.includes(o.kode);
        return `<li><strong>${esc(o.kode)}.</strong> ${esc(o.teks)}${correct ? ` <span class="tka-status-live">Kunci</span>` : ""}</li>`;
      }).join("")}</ol>`;
    }
    const answerText = q.tipe === "pilihan_ganda_kategori"
      ? q.pernyataan.map(p => `${esc(p.kode)}: ${esc(p.kunci)}`).join(" · ")
      : q.kunci.map(code => {
          const opt = q.pilihan.find(item => item.kode === code);
          return `${esc(code)}${opt ? `. ${esc(opt.teks)}` : ""}`;
        }).join("; ");
    return `<article class="tka-question-card">
      <div class="tka-question-meta"><span>${esc(q.domain)} · ${esc(q.subdomain || "")}</span><span>Nomor ${q.nomor}</span></div>
      <div style="margin-top:9px"><span class="tka-question-kind">${kind}</span></div>
      ${stimulus}${image}
      <h3>${q.nomor}. ${esc(q.soal)}</h3>
      <p class="tka-small-note">${esc(q.instruksi || (q.tipe === "pilihan_tunggal" ? "Pilih satu jawaban." : q.tipe === "pilihan_ganda_kompleks" ? "Pilih semua jawaban yang benar." : "Tentukan Benar atau Salah untuk setiap pernyataan."))}</p>
      ${answers}
      <details class="tka-discussion"><summary>Lihat kunci dan pembahasan</summary><p><strong>Kunci:</strong> ${answerText}</p><p><strong>Pembahasan:</strong> ${esc(q.pembahasan)}</p></details>
    </article>`;
  }

  function render() {
    if (!data) return;
    const query = ($("cariSoalTKA")?.value || "").trim().toLocaleLowerCase("id-ID");
    const domain = $("filterDomain")?.value || "";
    const result = allValid.filter(q => {
      const group = q.stimulusId ? groupMap.get(q.stimulusId) : null;
      const statements = (q.pernyataan || []).map(p => p.teks).join(" ");
      const options = (q.pilihan || []).map(o => o.teks).join(" ");
      const content = [q.id,q.domain,q.subdomain,q.soal,q.stimulus,group?.judul,group?.stimulus,statements,options].join(" ").toLocaleLowerCase("id-ID");
      return (!query || content.includes(query)) && (!domain || q.domain === domain);
    });
    $("statusBankTKA").hidden = result.length > 0;
    if (!allValid.length) {
      $("statusBankTKA").hidden = false;
      $("statusBankTKA").querySelector("h3").textContent = data.status === "draft" ? "Bank soal belum tersedia" : "Belum ada soal yang valid";
      $("statusBankTKA").querySelector("p").textContent = `${packageMeta?.judul || "Paket ini"} belum memiliki soal berstatus published. Soal Bahasa Indonesia belum dimasukkan; halaman ini hanya menampilkan kerangka bank.`;
      $("statusBankTKA").querySelector(".tka-status-pill").textContent = "Menunggu soal sumber";
    } else if (!result.length) {
      $("statusBankTKA").hidden = false;
      $("statusBankTKA").querySelector("h3").textContent = "Soal tidak ditemukan";
      $("statusBankTKA").querySelector("p").textContent = "Ubah kata kunci atau pilih domain yang lain.";
      $("statusBankTKA").querySelector(".tka-status-pill").textContent = "Tidak ada hasil";
    }
    $("daftarSoalTKA").innerHTML = result.map(questionHTML).join("");
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([$("daftarSoalTKA")]).catch(() => {});
  }

  function loadPackage(nextData, pkg, subject) {
    data = nextData;
    packageMeta = pkg;
    subjectMeta = subject;
    groupMap = new Map((data.kelompokStimulus || []).map(group => [group.id, group]));
    const ids = new Set();
    allValid = (data.soal || []).filter(q => {
      if (!validateQuestion(q, groupMap) || ids.has(q.id)) return false;
      ids.add(q.id);
      return true;
    });
    $("judulBankTKA").textContent = data.konfigurasi?.judul || pkg.judul;
    $("deskripsiBankTKA").textContent = data.konfigurasi?.deskripsi || `${subject.nama} · ${pkg.nama}`;
    $("jumlahSoalTerbit").textContent = allValid.length;
    $("metricJumlah").textContent = allValid.length;
    $("metricDomain").textContent = new Set(allValid.map(q => q.domain)).size;
    $("metricStimulus").textContent = (data.kelompokStimulus || []).length;
    const href = `tryout-tka.html?mapel=${encodeURIComponent(subject.id)}&paket=${encodeURIComponent(pkg.id)}`;
    $("tautanTryoutPaket").href = href;
    $("tautanTryoutPaket").textContent = pkg.status === "published" ? "Buka Tryout →" : "Tryout belum tersedia";
    $("tautanTryoutPaket").setAttribute("aria-disabled", pkg.status !== "published" ? "true" : "false");
    $("tautanTryoutPaket").style.opacity = pkg.status === "published" ? "1" : ".55";
    $("cariSoalTKA").value = "";
    $("filterDomain").innerHTML = `<option value="">Semua domain</option>`;
    [...new Set(allValid.map(q => q.domain))].sort((a,b) => a.localeCompare(b,"id")).forEach(domain => {
      const option = document.createElement("option");
      option.value = domain;
      option.textContent = domain;
      $("filterDomain").appendChild(option);
    });
    render();
  }

  $("cariSoalTKA").addEventListener("input", render);
  $("filterDomain").addEventListener("change", render);
  window.TKASelector.init({ mode: "bank", onLoad: loadPackage });
})();