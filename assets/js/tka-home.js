(() => {
  "use strict";
  const registry = window.daftarPaketTKA || { mataPelajaran: [], paket: [] };
  const root = document.getElementById("daftarMapelTKA");
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[ch]));
  const iconFor = id => id === "matematika"
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h14M5 12h14M5 20h14M8 2v4M16 10v4M8 18v4"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16M8 7h8M8 11h8M8 15h5"/></svg>`;
  if (!root) return;

  root.innerHTML = registry.mataPelajaran.map(subject => {
    const packages = registry.paket.filter(item => item.mataPelajaranId === subject.id);
    const published = packages.filter(item => item.status === "published");
    const rows = packages.length ? packages.map(pkg => `
      <div class="tka-package-row">
        <span>${esc(pkg.nama)}</span>
        <span class="${pkg.status === "published" ? "tka-status-live" : "tka-status-draft"}">${pkg.status === "published" ? `${pkg.jumlahSoal} soal · Tersedia` : "Dalam persiapan"}</span>
      </div>`).join("") : `<div class="tka-package-row"><span>Paket pertama</span><span class="tka-status-draft">Belum tersedia</span></div>`;
    const firstReady = published[0];
    const bankUrl = `bank-soal-tka.html?mapel=${encodeURIComponent(subject.id)}${firstReady ? `&paket=${encodeURIComponent(firstReady.id)}` : ""}`;
    const tryoutUrl = firstReady
      ? `tryout-tka.html?mapel=${encodeURIComponent(subject.id)}&paket=${encodeURIComponent(firstReady.id)}`
      : "";
    return `<article class="tka-subject-card">
      <div class="tka-subject-icon">${iconFor(subject.id)}</div>
      <h2>${esc(subject.nama)}</h2>
      <p>${esc(subject.deskripsi)}</p>
      <div class="tka-package-list">${rows}</div>
      <p class="tka-home-note">${published.length ? `${published.length} paket siap digunakan.` : "Bank soal belum diisi. Paket akan aktif setelah soal sumber dimasukkan."}</p>
      <div class="tka-package-actions">
        <a class="tka-btn secondary" href="${bankUrl}">Buka Bank Soal</a>
        ${firstReady ? `<a class="tka-btn" href="${tryoutUrl}">Mulai Tryout</a>` : `<span class="tka-btn" aria-disabled="true" style="opacity:.5;cursor:not-allowed">Tryout belum tersedia</span>`}
      </div>
    </article>`;
  }).join("");
})();