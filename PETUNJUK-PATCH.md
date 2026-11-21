PATCH MATHSMP — TENTANG SAYA & KONTAK

Tujuan:
- Menambahkan halaman Tentang Saya dan Kontak.
- Menambahkan tautan Tentang Saya dan Kontak pada navigasi utama dan footer beranda.
- Menampilkan identitas Herdianto Parenta, guru Matematika SMPN 1 Tabang sejak Maret 2019.
- Menambahkan tombol WhatsApp ke nomor 0853 4213 7045.
- Menampilkan logo Instagram, Facebook, YouTube, dan TikTok sebagai placeholder. Saat diklik, halaman menampilkan pesan bahwa akun akan segera ditambahkan.

FILE PATCH:
1. index.html                                  [GANTI FILE LAMA]
2. assets/css/profile-pages.css                 [FILE BARU]
3. pages/profil/tentang-saya.html                [FILE BARU]
4. pages/profil/kontak.html                      [FILE BARU]

CARA PEMASANGAN:
1. Cadangkan index.html yang sekarang.
2. Ganti file index.html di folder utama proyek dengan index.html dari patch.
3. Buat folder assets/css jika belum ada, lalu unggah profile-pages.css ke sana.
4. Buat folder pages/profil jika belum ada.
5. Unggah tentang-saya.html dan kontak.html ke pages/profil/.
6. Commit perubahan ke branch main.

CATATAN:
- Nomor WhatsApp ditautkan menggunakan format internasional Indonesia: https://wa.me/6285342137045.
- Tidak ada email atau tautan akun media sosial yang dibuat karena alamat akun belum diberikan.
- Logo media sosial adalah tombol placeholder, bukan tautan akun sungguhan.
- Halaman menggunakan stylesheet style-baru.css dan homepage-ui.css yang sudah ada pada proyek. Pastikan kedua file tersebut tetap ada.
- Tidak ada file soal, data TKA, materi, atau mesin kuis yang diubah.

PENGUJIAN SETELAH PEMASANGAN:
1. Dari beranda, klik Tentang Saya dan pastikan halaman profil terbuka.
2. Klik Kontak dan pastikan halaman kontak terbuka.
3. Klik tombol WhatsApp dan pastikan menuju nomor 0853 4213 7045.
4. Klik setiap ikon media sosial dan pastikan pemberitahuan "Akun [platform] MathSMP akan segera ditambahkan." tampil.
5. Uji navigasi desktop dan menu mobile, termasuk tombol Beranda, Materi, Latihan Soal, TKA, dan Ruang Guru.
