/* Tombol navigasi melayang untuk bahan bacaan HTML yang dibuka di jendela/tab baru.
   Memberi jalan kembali ke Beranda, halaman Materi kelasnya, dan Latihan Soal
   (langsung ke kuis materi bila sudah tersedia).
   Pasang di bahan bacaan HTML (setelah materi-latihan.js):
     <script src="…/assets/js/materi-latihan.js"></script>
     <script src="…/assets/js/materi-nav.js"></script>
   Tombol disembunyikan bila halaman ditampilkan di dalam bingkai (iframe halaman Materi)
   dan saat dicetak. */
(function () {
  'use strict';
  try { if (window.self !== window.top) return; } catch (e) { return; }

  var script = document.currentScript;
  var ROOT = ((script && script.src) || '').replace(/assets\/js\/materi-nav\.js.*$/, '');
  if (!ROOT) return;

  var path = decodeURIComponent(location.pathname);
  var kelasMatch = path.match(/Materi Kelas (\d)/);
  var kelas = kelasMatch ? kelasMatch[1] : '';
  var ROMAWI = { '7': 'VII', '8': 'VIII', '9': 'IX' };

  var latihanBase = ROOT + 'pages/latihan/';
  var entri = window.MateriLatihan ? window.MateriLatihan.cari(location.pathname) : null;
  var l = window.MateriLatihan ? window.MateriLatihan.tautan(entri, latihanBase) : { hub: latihanBase + 'latihan-soal.html', kuis: null, bank: null };

  var links = [
    { teks: '🏠 Beranda', href: ROOT + 'index.html' }
  ];
  if (kelas) {
    links.push({ teks: '📖 Materi Kelas ' + (ROMAWI[kelas] || kelas), href: ROOT + 'pages/materi/materi-kelas-' + kelas + '.html' });
  }
  links.push({ teks: l.kuis ? '🎯 Kuis Materi Ini' : '🎯 Latihan Soal', href: l.kuis || l.hub });
  if (l.bank) links.push({ teks: '📚 Bank Soal', href: l.bank });

  var css = document.createElement('style');
  css.textContent =
    '.mx-nav{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:9999;display:flex;gap:6px;flex-wrap:wrap;justify-content:center;max-width:calc(100% - 20px);padding:7px;background:rgba(16,42,86,.96);border-radius:16px;box-shadow:0 10px 30px rgba(16,42,86,.35);font-family:system-ui,-apple-system,"Segoe UI",Arial,sans-serif}' +
    '.mx-nav a{display:inline-block;padding:9px 13px;border-radius:11px;background:rgba(255,255,255,.12);color:#fff;font-size:14px;font-weight:700;line-height:1.2;text-decoration:none;white-space:nowrap}' +
    '.mx-nav a:hover,.mx-nav a:focus-visible{background:#fff;color:#102a56;outline:none}' +
    '.mx-nav a.mx-utama{background:#2563eb}' +
    '.mx-nav a.mx-utama:hover,.mx-nav a.mx-utama:focus-visible{background:#fff;color:#102a56}' +
    '@media(max-width:520px){.mx-nav a{padding:8px 10px;font-size:13px}}' +
    '@media print{.mx-nav{display:none}}';

  function pasangNav() {
    document.head.appendChild(css);
    var nav = document.createElement('nav');
    nav.className = 'mx-nav';
    nav.setAttribute('aria-label', 'Navigasi kembali');
    links.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.teks;
      if (item.teks.indexOf('🎯') === 0) a.className = 'mx-utama';
      nav.appendChild(a);
    });
    document.body.appendChild(nav);
    // beri ruang agar tombol tidak menutupi bagian bawah materi
    document.body.style.paddingBottom = (parseInt(getComputedStyle(document.body).paddingBottom, 10) || 0) + 84 + 'px';
  }

  if (document.body) pasangNav();
  else document.addEventListener('DOMContentLoaded', pasangNav);
})();
