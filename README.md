# MathSMP — Portal Belajar Matematika SMP

Website statis untuk materi, latihan, kuis, persiapan TKA, dan alat bantu guru. Proyek ini disiapkan untuk GitHub Pages.

## Struktur folder

```text
MathSMP/
├── index.html                 # Beranda utama GitHub Pages
├── pages/
│   ├── materi/                # Halaman materi kelas VII–IX
│   ├── latihan/               # Latihan soal dan kuis harian
│   ├── tka/                   # Portal, bank soal, dan tryout TKA
│   └── ruang-guru/            # ATP dan tiga generator guru
├── assets/
│   ├── css/                   # Seluruh stylesheet
│   ├── js/                    # Mesin aplikasi dan integrasi Gemini
│   └── pdf/matematika/        # Modul/bahan PDF
├── data/
│   ├── atp/matematika/        # Data ATP dan workbook sumber
│   └── bank-soal/
│       ├── kuis-harian/matematika/
│       └── tka/matematika/    # Bank TKA terpisah dari kuis harian
└── docs/                      # Petunjuk dan dokumentasi proyek
```

## Menjalankan lokal

Buka `index.html` melalui browser. Untuk pengujian fitur yang memerlukan API lintas-origin, gunakan GitHub Pages atau server lokal statis, bukan membuka file melalui `file://` jika browser memblokir permintaan jaringan.

## Deploy ke GitHub Pages

1. Unggah isi folder proyek ini ke root repository (bukan folder induknya).
2. Pastikan `index.html` berada di root repository.
3. Pada Settings → Pages, pilih branch `main` dan folder `/(root)`.
4. Tunggu deployment selesai, lalu buka URL GitHub Pages.

## Gemini API BYOK

Generator menggunakan Gemini API dengan API Key milik masing-masing guru. Kunci tidak disimpan di file proyek. Secara default kunci disimpan selama sesi tab; opsi ingat perangkat menyimpannya di localStorage browser pada perangkat pribadi. Jangan pernah memasukkan API Key ke GitHub.

Periksa kuota, model yang tersedia, harga, dan ketentuan privasi terbaru di dokumentasi resmi Google AI Studio/Gemini API sebelum digunakan. Hindari mengirim data pribadi atau data sensitif peserta didik.

## Data ATP dan bank soal

- ATP Matematika tersedia di `data/atp/matematika/`.
- Bank kuis harian berada di `data/bank-soal/kuis-harian/matematika/`.
- Bank TKA berada di `data/bank-soal/tka/matematika/` dan tidak dicampur dengan bank kuis harian.
- File soal tetap berupa JavaScript agar bisa dibaca oleh halaman statis. Edit dengan hati-hati dan uji setelah perubahan.
