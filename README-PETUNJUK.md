PATCH MATHSMP — BANK SOAL TKA

Tujuan:
- Menyembunyikan tanda "Kunci" dari daftar pilihan jawaban pada katalog bank soal.
- Menampilkan kunci hanya ketika pengunjung membuka "Lihat kunci dan pembahasan".
- Pada PGK kategori, menampilkan pilihan respons "Benar / Salah" tanpa membocorkan respons benar.
- Menghilangkan pengulangan huruf pilihan seperti "A. A. 30%"; huruf A/B/C/D cukup ditampilkan oleh penomoran daftar.

Pemasangan:
1. Ekstrak ZIP.
2. Salin folder assets ke folder utama proyek MathSMP.
3. Izinkan penggantian file assets/js/bank-soal-tka-app.js.
4. Tidak ada file lain yang perlu diganti.
5. Setelah commit/deploy, muat ulang halaman Bank Soal TKA. Jika masih melihat versi lama, lakukan hard refresh (Ctrl+F5).

Catatan:
- File ini hanya mengubah tampilan katalog Bank Soal TKA.
- Penilaian pada halaman Tryout tidak diubah.
- Kunci dan pembahasan tetap tersedia di elemen details "Lihat kunci dan pembahasan".
