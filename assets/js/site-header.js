/* Navbar bersama MathSMP.
   Cara pakai di setiap halaman:
     <link rel="stylesheet" href="…/assets/css/site-header.css">
     <div id="site-header"></div>
     <script src="…/assets/js/site-header.js"></script>
   Menu diubah di satu tempat saja: daftar ITEMS di bawah ini. */
(function () {
  'use strict';

  var script = document.currentScript;
  var src = (script && script.src) || '';
  var ROOT = src.replace(/assets\/js\/site-header\.js.*$/, '');

  var ITEMS = [
    { key: 'beranda', label: 'Beranda', href: 'index.html' },
    { key: 'materi', label: 'Materi', menu: [
      ['Kelas VII', 'pages/materi/materi-kelas-7.html'],
      ['Kelas VIII', 'pages/materi/materi-kelas-8.html'],
      ['Kelas IX', 'pages/materi/materi-kelas-9.html']
    ] },
    { key: 'latihan', label: 'Latihan Soal', href: 'pages/latihan/latihan-soal.html' },
    { key: 'tka', label: 'TKA SMP', menu: [
      ['Persiapan TKA', 'pages/tka/tka.html'],
      ['Bank Soal TKA', 'pages/tka/bank-soal-tka.html'],
      ['Tryout TKA', 'pages/tka/tryout-tka.html']
    ] },
    { key: 'guru', label: 'Ruang Guru', href: 'pages/ruang-guru/ruang-guru.html' },
    { key: 'tentang', label: 'Tentang', href: 'pages/profil/tentang-saya.html' }
  ];

  var path = location.pathname;
  function inPath(part) { return path.indexOf(part) !== -1; }
  var activeKey = inPath('/pages/materi/') ? 'materi'
    : inPath('/pages/latihan/') ? 'latihan'
    : inPath('/pages/tka/') ? 'tka'
    : inPath('/pages/ruang-guru/') ? 'guru'
    : inPath('/pages/profil/tentang-saya') ? 'tentang'
    : !inPath('/pages/') ? 'beranda' : '';
  var currentFile = path.split('/').pop();

  var CHEVRON = '<svg class="sh-chev" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var BURGER = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  function build() {
    var html = '<div class="sh-wrap">' +
      '<a class="sh-brand" href="' + ROOT + 'index.html" aria-label="MathSMP, Beranda">' +
      '<img src="' + ROOT + 'assets/images/logo-mathsmp.svg" width="40" height="40" alt=""><span>Math<b>SMP</b></span></a>' +
      '<button class="sh-toggle" type="button" aria-expanded="false" aria-controls="sh-nav">' + BURGER + '<span>Menu</span></button>' +
      '<nav class="sh-nav" id="sh-nav" aria-label="Navigasi utama">';
    ITEMS.forEach(function (item) {
      var on = item.key === activeKey;
      if (item.menu) {
        html += '<div class="sh-drop"><button class="sh-drop-btn' + (on ? ' sh-active' : '') + '" type="button" aria-expanded="false" aria-haspopup="true">' +
          item.label + CHEVRON + '</button><div class="sh-menu">';
        item.menu.forEach(function (m) {
          var here = on && m[1].split('/').pop() === currentFile;
          html += '<a href="' + ROOT + m[1] + '"' + (here ? ' aria-current="page"' : '') + '>' + m[0] + '</a>';
        });
        html += '</div></div>';
      } else {
        html += '<a class="sh-link' + (on ? ' sh-active' : '') + '" href="' + ROOT + item.href + '"' + (on ? ' aria-current="page"' : '') + '>' + item.label + '</a>';
      }
    });
    return html + '</nav></div>';
  }

  function mount() {
    var host = document.getElementById('site-header');
    if (!host) {
      host = document.createElement('div');
      host.id = 'site-header';
      document.body.insertBefore(host, document.body.firstChild);
    }
    var header = document.createElement('header');
    header.className = 'sh-header';
    header.innerHTML = build();
    host.innerHTML = '';
    host.appendChild(header);

    var toggle = header.querySelector('.sh-toggle');
    var drops = header.querySelectorAll('.sh-drop');

    function closeDrops(except) {
      drops.forEach(function (d) {
        if (d !== except) {
          d.classList.remove('sh-open');
          d.querySelector('.sh-drop-btn').setAttribute('aria-expanded', 'false');
        }
      });
    }
    function closeAll() {
      closeDrops(null);
      header.classList.remove('sh-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('sh-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drops.forEach(function (d) {
      var btn = d.querySelector('.sh-drop-btn');
      btn.addEventListener('click', function () {
        var open = d.classList.toggle('sh-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        closeDrops(d);
      });
    });
    document.addEventListener('click', function (e) { if (!header.contains(e.target)) closeAll(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAll(); }
    });
  }

  if (document.body) { mount(); }
  else { document.addEventListener('DOMContentLoaded', mount); }
})();
