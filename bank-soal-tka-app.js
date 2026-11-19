(() => {
  "use strict";
  const data = window.bankSoalTKA || { soal: [] };
  const semuaSoal = Array.isArray(data.soal) ? data.soal : [];
  const el = id => document.getElementById(id);
  function validasi(q) {
    if (!q || q.status !== "published" || typeof q.id !== "string" || !q.id.trim()) return false;
    if (!q.soal || !String(q.soal).trim() || !Array.isArray(q.pilihan) || q.pilihan.length < 2) return false;
    if (!Array.isArray(q.kunci) || !q.kunci.length || !q.pembahasan || !String(q.pembahasan).trim()) return false;
    if (!["pilihan_tunggal", "pilihan_ganda_kompleks"].includes(q.tipe)) return false;
    if (q.pilihan.some(o => !o || typeof o.kode !== "string" || !o.kode.trim() || typeof o.teks !== "string" || !o.teks.trim())) return false;
    const codes = q.pilihan.map(o => o.kode);
    if (new Set(codes).size !== codes.length || q.kunci.some(k => !codes.includes(k)) || new Set(q.kunci).size !== q.kunci.length) return false;
    if (q.tipe === "pilihan_tunggal" && q.kunci.length !== 1) return false;
    if (q.tipe === "pilihan_ganda_kompleks" && q.kunci.length < 2) return false;
    return true;
  }
  const ids = new Set();
  const terbit = semuaSoal.filter(q => {
    if (!validasi(q) || ids.has(q.id)) return false;
    ids.add(q.id); return true;
  });
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[c]));
  const domainList = [...new Set(terbit.map(q => String(q.domain || "Lainnya").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"id"));
  el("jumlahSoalTerbit").textContent = terbit.length;
  el("metricJumlah").textContent = terbit.length;
  el("metricDomain").textContent = domainList.length;
  domainList.forEach(domain => {
    const option = document.createElement("option"); option.value = domain; option.textContent = domain; el("filterDomain").appendChild(option);
  });

  function render() {
    const query = el("cariSoalTKA").value.trim().toLocaleLowerCase("id-ID");
    const domain = el("filterDomain").value;
    const hasil = terbit.filter(q => {
      const teks = [q.id, q.domain, q.subdomain, q.stimulus, q.soal, ...(q.pilihan || []).map(o => o.teks)].join(" ").toLocaleLowerCase("id-ID");
      return (!query || teks.includes(query)) && (!domain || (q.domain || "Lainnya") === domain);
    });
    el("statusBankTKA").hidden = hasil.length > 0;
    if (!terbit.length) {
      el("statusBankTKA").hidden = false;
      el("statusBankTKA").querySelector("h3").textContent = "Bank soal TKA belum diisi";
      el("statusBankTKA").querySelector("p").textContent = "Belum ada butir soal TKA yang berstatus terbit. Kerangka katalog sudah tersedia dan akan menampilkan soal setelah data dimasukkan ke bank-soal-tka.js.";
    } else if (!hasil.length) {
      el("statusBankTKA").hidden = false;
      el("statusBankTKA").querySelector("h3").textContent = "Soal tidak ditemukan";
      el("statusBankTKA").querySelector("p").textContent = "Coba kata kunci atau pilihan domain yang berbeda.";
    }
    el("daftarSoalTKA").innerHTML = hasil.map((q, index) => {
      const options = (q.pilihan || []).map(o => `<li><strong>${escapeHTML(o.kode)}.</strong> ${escapeHTML(o.teks)}</li>`).join("");
      const key = Array.isArray(q.kunci) ? q.kunci : [];
      const keyText = key.map(k => {
        const option = (q.pilihan || []).find(o => o.kode === k);
        return `${escapeHTML(k)}${option ? `. ${escapeHTML(option.teks)}` : ""}`;
      }).join("; ");
      return `<article class="tka-question-card"><div class="tka-question-meta"><span>${escapeHTML(q.domain || "Materi belum ditentukan")}</span><span>${escapeHTML(q.id || `Soal ${index + 1}`)}</span></div>${q.stimulus ? `<div class="tka-stimulus"><strong>Stimulus</strong><p>${escapeHTML(q.stimulus)}</p></div>` : ""}<h3>${index + 1}. ${escapeHTML(q.soal)}</h3><ol class="tka-option-list" type="A">${options}</ol><details class="tka-discussion"><summary>Lihat kunci dan pembahasan</summary><p><strong>Kunci:</strong> ${keyText || "Belum diisi"}</p><p><strong>Pembahasan:</strong> ${escapeHTML(q.pembahasan || "Pembahasan belum diisi.")}</p></details></article>`;
    }).join("");
    if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([el("daftarSoalTKA")]).catch(()=>{});
  }
  el("cariSoalTKA").addEventListener("input", render);
  el("filterDomain").addEventListener("change", render);
  render();
})();
