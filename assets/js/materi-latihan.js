/* Peta materi -> latihan soal.
   Kunci = nama berkas materi (tanpa ekstensi). "topik" = id paket kuis / bank soal materi.
   Materi yang belum punya bank soal sengaja tidak didaftarkan; tombolnya otomatis
   mengarah ke menu Latihan Soal. Tambahkan baris baru di PETA saat bank soalnya siap. */
(function () {
  'use strict';

  var PETA = {
    'Operasi-Bilangan-Rasional': { topik: 'operasiBilanganRasional' },
    'Fungsi-Linear-dan-Grafiknya': { topik: 'fungsiLinear' },
    'Fungsi_Linear_NonLinear_Kelas_VIII': { topik: 'fungsiLinear' },
    'Penyajian-dan-Nilai-Fungsi': { topik: 'relasiFungsi' },
    'Konsep-Relasi': { topik: 'relasiFungsi' },
    'Konsep-Fungsi': { topik: 'relasiFungsi' },
    'Populasi-dan-Sampel': { topik: 'populasiSampel' },
    'bahan_bacaan_teknik_sampling': { topik: 'populasiSampel' },
    'Bangun_Ruang_Sisi_Lengkung_Kelas_IX': { topik: 'bangunRuangSisiLengkung' }
  };

  function kunci(fileUrl) {
    if (!fileUrl) return '';
    var nama = String(fileUrl).split('#')[0].split('?')[0].split('/').pop();
    try { nama = decodeURIComponent(nama); } catch (e) { /* biarkan apa adanya */ }
    return nama.replace(/\.[a-z0-9]+$/i, '');
  }

  function cari(fileUrl) {
    var k = kunci(fileUrl);
    return Object.prototype.hasOwnProperty.call(PETA, k) ? PETA[k] : null;
  }

  // latihanBase = alamat folder pages/latihan/ dari halaman pemanggil (diakhiri "/")
  function tautan(entri, latihanBase) {
    var hub = latihanBase + 'latihan-soal.html';
    if (!entri) return { hub: hub, kuis: null, bank: null };
    var t = encodeURIComponent(entri.topik);
    return {
      hub: hub,
      kuis: latihanBase + 'kuis.html?topik=' + t + '&mapel=matematika',
      bank: latihanBase + 'bank-soal.html?mapel=matematika&topik=' + t
    };
  }

  // Dipakai halaman pages/materi/*: memperbarui tombol latihan sesuai materi yang dibuka.
  function pasang(fileUrl) {
    var tKuis = document.getElementById('tombolKuis');
    if (!tKuis) return;
    var tBank = document.getElementById('tombolBank');
    var catatan = document.getElementById('catatanLatihan');
    var l = tautan(cari(fileUrl), '../latihan/');
    if (l.kuis) {
      tKuis.href = l.kuis;
      tKuis.textContent = '🎯 Kuis Materi Ini →';
      if (tBank) { tBank.href = l.bank; tBank.hidden = false; }
      if (catatan) catatan.hidden = true;
    } else {
      tKuis.href = l.hub;
      tKuis.textContent = '🎯 Latihan Soal →';
      if (tBank) tBank.hidden = true;
      if (catatan) catatan.hidden = false;
    }
  }

  window.MateriLatihan = { cari: cari, tautan: tautan, pasang: pasang };
})();
