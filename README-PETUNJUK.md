# Pembaruan MathSMP — TKA Multi-Mata-Pelajaran & Multi-Paket

## Isi pembaruan

- Tryout TKA sekarang memiliki pilihan **mata pelajaran** dan **paket**.
- Matematika memiliki Paket 01 dan Paket 02, masing-masing menyimpan 30 soal secara terpisah.
- Bahasa Indonesia sudah dimasukkan ke daftar mata pelajaran dan memiliki kerangka Paket 01 berstatus `draft`. Belum ada soal Bahasa Indonesia yang dibuat karena file soal sumber belum diberikan.
- Satu mesin katalog dan satu mesin tryout digunakan bersama untuk semua mapel/paket.
- Stimulus bersama dikelola melalui `kelompokStimulus`, sehingga satu bacaan/konteks dapat dipakai beberapa nomor.
- SVG berada pada folder khusus mata pelajaran dan paket.

## Cara memasang

1. Ekstrak ZIP.
2. Buka folder `MathSMP-TKA-MultiMapel`.
3. Salin seluruh isi folder tersebut ke folder utama proyek MathSMP.
4. Izinkan penggantian file yang sudah ada, khususnya:
   - `pages/tka/tka.html`
   - `pages/tka/bank-soal-tka.html`
   - `pages/tka/tryout-tka.html`
   - `assets/js/bank-soal-tka-app.js`
   - `assets/js/tryout-tka.js`
5. Pastikan folder baru `assets/js`, `assets/css`, `data`, dan `assets/images` tergabung ke folder yang sama di proyek, bukan menjadi folder bersarang ganda.
6. Commit/push ke GitHub, kemudian buka halaman TKA dan uji Paket 01 serta Paket 02.

## Struktur data utama

```text
data/bank-soal/tka/
├── daftar-paket.js
├── matematika/
│   ├── paket-01.js
│   └── paket-02.js
└── bahasa-indonesia/
    └── paket-01.js     (draft kosong, menunggu soal sumber)
```

Aset ilustrasi:

```text
assets/images/tka/
└── matematika/
    ├── paket-01/       (15 SVG)
    └── paket-02/       (8 SVG)
```

File lama `matematika/bank-soal-tka.js` adalah kerangka versi sebelumnya dan tidak lagi dibaca oleh halaman TKA baru. Gunakan `paket-01.js` dan `paket-02.js` untuk bank Matematika.

Preview ilustrasi Paket 02 tersedia pada `PREVIEW-PAKET-02.jpg`.

## Catatan Paket 02

File JSON yang diberikan telah dikonversi ke skema MathSMP tanpa menggabungkan banknya dengan Paket 01:
- 30 soal: 15 PG, 8 PGK MCMA, 7 PGK kategori.
- 4 kelompok stimulus bersama: SG1 sampai SG4, masing-masing dipakai oleh tiga nomor.
- 8 SVG diekstrak menjadi file terpisah: 7 ilustrasi soal dan 1 ilustrasi stimulus taman.
- Blueprint, tingkat kesulitan, proses berpikir, instruksi, kunci, pembahasan, dan data pernyataan dipertahankan.
- Durasi Paket 02 diset 90 menit sebagai pengaturan simulasi MathSMP karena file sumber tidak mencantumkan durasi. Ini bukan klaim durasi resmi TKA.
- Paket 02 mempertahankan urutan soal sesuai naskah (`acakSoal: false`) agar kelompok stimulus berurutan tetap utuh.

## Cara menambahkan Paket 03 Matematika

1. Buat `data/bank-soal/tka/matematika/paket-03.js` dengan skema yang sama seperti `paket-02.js`.
2. Simpan ilustrasi pada `assets/images/tka/matematika/paket-03/`.
3. Tambahkan satu objek paket ke `paket` pada `data/bank-soal/tka/daftar-paket.js`, misalnya:
   - `id: "paket-03"`
   - `mataPelajaranId: "matematika"`
   - `nama: "Paket 03"`
   - `status: "published"`
   - `jumlahSoal` dan `durasiMenit` sesuai konfigurasi paket
   - `file: "data/bank-soal/tka/matematika/paket-03.js"`

Tidak perlu mengubah mesin `bank-soal-tka-app.js` atau `tryout-tka.js`.

## Cara memasukkan Bahasa Indonesia

1. Siapkan file soal sumber Bahasa Indonesia.
2. Masukkan bacaan utuh sebagai `kelompokStimulus` bila satu teks dipakai oleh beberapa soal.
3. Masukkan setiap soal dengan `stimulusId` yang merujuk ke kelompok bacaan tersebut.
4. Simpan ilustrasi/teks visual pada folder `assets/images/tka/bahasa-indonesia/paket-01/` bila diperlukan.
5. Isi `data/bank-soal/tka/bahasa-indonesia/paket-01.js`, ubah `status` menjadi `published`, lalu perbarui konfigurasi jumlah soal/durasi.
6. Ubah status paket Bahasa Indonesia pada `daftar-paket.js` menjadi `published`.

## Aturan penilaian pada versi MathSMP

Untuk versi awal ini, PG dan PGK MCMA dinilai benar jika pilihan peserta sama persis dengan kunci. PGK kategori dinilai benar jika semua respons Benar/Salah pada satu nomor tepat. Setiap nomor memberikan satu poin penuh; tidak ada kredit parsial pada versi ini. Ini adalah kebijakan simulasi MathSMP, bukan pernyataan bahwa kebijakan penskoran resmi TKA sama.

## Penyimpanan hasil

Riwayat tryout tetap tersimpan di `localStorage` browser/perangkat peserta. Hasil tidak otomatis terkirim ke akun guru atau ke server. Rekap lintas perangkat membutuhkan backend terpisah.
