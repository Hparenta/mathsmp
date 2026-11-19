# MathSMP — Portal Matematika SMP

Website statis untuk GitHub Pages. Halaman utama, materi, Kuis Harian, area TKA, katalog ATP, dan generator perangkat pembelajaran berada dalam satu proyek.

## Prinsip proyek

- **Tanpa layanan berbayar sebagai prasyarat.** Halaman publik dan generator berjalan di browser menggunakan HTML, CSS, dan JavaScript.
- **Tidak ada akun/login pada versi ini.** Ruang Guru adalah katalog perangkat dan alat bantu penyusunan dokumen, bukan sistem pengelolaan multi-pengguna.
- **Dokumen sumber bersifat baca/unduh.** ATP yang telah diterbitkan dapat dibaca melalui peta TP/TPK dan workbook sumber dapat diunduh. Perubahan ATP sumber dilakukan pengelola di repositori GitHub.
- **Generator mendukung AI dengan BYOK (Bring Your Own Key).** Guru menghubungkan Gemini API Key miliknya sendiri dari Google AI Studio. Tanpa API Key, mode manual tetap tersedia.
- **Tidak ada API Key bawaan di repositori.** Kunci tidak disimpan dalam file proyek atau `localStorage`; setelah koneksi berhasil, kunci disimpan pada `sessionStorage` tab browser dan dikirim ke Gemini melalui header `x-goog-api-key` saat permintaan berlangsung.
- **AI menghasilkan draf, bukan dokumen yang otomatis disahkan.** Guru wajib meninjau kesesuaian ATP, kebenaran matematika, butir soal, kunci, pembahasan, asesmen, dan kelayakan aktivitas sebelum digunakan.

## Ruang Guru

- `ruang-guru.html`: dashboard Ruang Guru.
- `atp.html`: katalog interaktif ATP Matematika Fase D, dengan filter kelas, semester, dan pencarian materi/TP/TPK.
- `atp-data.js`: data terstruktur yang diambil dari workbook ATP yang diberikan pengelola.
- `atp/ATP_Matematika_FaseD_Publik.xlsx`: workbook asli yang dapat diunduh dari katalog.
- `generator-soal.html`: generator kerangka naskah soal pilihan ganda, isian, uraian, atau campuran.
- `generator-modul.html`: generator kerangka modul ajar.
- `generator-lkpd.html`: generator kerangka LKPD.
- `ruang-guru-tools.js`: logika pemilihan ATP, pembentukan dokumen manual/AI, validasi keluaran terstruktur, revisi AI, edit pratinjau, unduh Word-compatible (`.doc`), salin teks, dan cetak/simpan PDF.
- `gemini-ai.js`: koneksi Gemini Interactions API, uji API Key dan model, keluaran JSON terstruktur, penyimpanan BYOK di sesi browser, prompt per jenis generator, dan penanganan error API.
- `ruang-guru.css`: gaya tampilan Ruang Guru, katalog ATP, dan halaman generator.

### Isi ATP yang sudah terhubung

Salinan publik workbook disediakan tanpa nama penandatangan dan nomor identitas pada blok pengesahan; file asli yang diunggah tidak diubah. Workbook memiliki tiga sheet: `ATP Matematika Fase D`, `Rekap JP per Semester`, dan `Catatan Revisi & Legenda`.

Data katalog diambil dari sheet utama dan rekap:

- 24 pokok bahasan utama kelas VII–IX.
- 1 Proyek Akhir Kelas IX – Matematika Kontekstual.
- 61 subpokok bahasan/TPK.
- Tujuan Pembelajaran (TP), Tujuan Pembelajaran Khusus (TPK), alokasi JP, dan dimensi profil lulusan.
- Rekap JP: 72 JP per semester, kecuali Kelas IX semester genap 56 JP.

Redaksi TP/TPK dipertahankan dari workbook sumber. Katalog tidak mengubah atau menyelaraskan isi ATP secara otomatis.

**Catatan kualitas sumber:** workbook tidak memuat kolom CP terpisah, sehingga kolom CP pada generator Modul Ajar tetap harus diisi berdasarkan dokumen CP yang digunakan. Lembar rekap menyebut v5 sedangkan judul lembar catatan revisi menyebut v4. Catatan revisi juga memiliki pernyataan cadangan/remedial dihapus, sementara tabel rekap masih memuat alokasi cadangan per semester. Hal-hal ini ditandai untuk klarifikasi pengelola; isi workbook asli tidak diubah.

### Menggunakan referensi ATP pada generator

1. Buka Generator Soal, Generator Modul Ajar, atau Generator LKPD.
2. Pilih `ATP Matematika Fase D` pada referensi ATP.
3. Pilih kelas dan semester.
4. Pilih pokok bahasan, kemudian subpokok bahasan/TPK.
5. Sistem mengisi materi, TP, TPK, dimensi profil lulusan, dan alokasi JP sesuai data pada workbook. Isian tetap dapat disunting.
6. Pada Generator Modul Ajar, CP tidak diisi otomatis karena tidak tercantum sebagai kolom terpisah pada workbook ATP.
7. Lengkapi bagian lain, buat dokumen, tinjau dan edit pratinjau, lalu unduh Word-compatible (`.doc`) atau cetak/simpan PDF.

### Catatan format keluaran

- Unduh Word menghasilkan berkas `.doc` HTML-kompatibel yang dapat dibuka dan diedit di aplikasi pengolah kata; bukan berkas `.docx` native.
- Cetak/PDF menggunakan dialog cetak browser; pilih “Save as PDF”.
- Hasil generator diunduh ke perangkat pengguna. Generator tidak mengirim data ke GitHub dan tidak menyimpan dokumen bersama.


## Menggunakan AI Gemini (BYOK)

Ketiga generator (`generator-soal.html`, `generator-modul.html`, dan `generator-lkpd.html`) terhubung ke Gemini Developer API menggunakan pola BYOK (*Bring Your Own Key*): setiap guru memakai API Key dari proyek Google miliknya sendiri. Website tidak menyediakan satu kunci bersama.

1. Buka [Google AI Studio — API Keys](https://aistudio.google.com/api-keys), buat atau pilih proyek dan salin Gemini API Key pribadi. Jangan pernah mengirim API Key melalui chat atau memasukkannya ke file JavaScript/HTML.
2. Buka salah satu generator melalui HTTPS (misalnya GitHub Pages) atau server lokal HTTP. Pemanggilan API langsung dari `file://` dapat ditolak browser.
3. Tempel API Key pada panel **Hubungkan Gemini AI**, pilih model (default `gemini-3.8-flash`), lalu klik **Uji koneksi & model**. Aplikasi mengirim permintaan uji singkat untuk memastikan kunci dan model dapat dipakai melalui Interactions API.
4. Pilih kelas, semester, materi, TP/TPK dari ATP, serta lengkapi konteks yang diperlukan. Klik **Buat … dengan AI** untuk menghasilkan draf substantif; generator manual tetap tersedia tanpa AI.
5. Tinjau hasil, edit pratinjau, dan gunakan kolom **Revisi hasil dengan AI** untuk meminta perubahan dengan bahasa biasa. Unduh Word-compatible (`.doc`) atau cetak/simpan PDF setelah diverifikasi.
6. Klik **Hapus kunci dari sesi** sebelum meninggalkan komputer, terutama jika perangkat dipakai bersama. Menutup tab juga mengakhiri sesi penyimpanan kunci.

### Implementasi API

- Menggunakan REST `POST https://generativelanguage.googleapis.com/v1beta/interactions` dengan header `x-goog-api-key`.
- Menggunakan `response_format` dengan JSON Schema untuk menghasilkan struktur yang langsung dipetakan ke dokumen.
- Setiap permintaan menyetel `store: false`, sehingga interaksi tidak disimpan sebagai riwayat Interactions API yang dapat diambil kembali. Hal ini tidak meniadakan kebijakan pemrosesan data/retensi lain dari penyedia.
- Model awal `gemini-3.8-flash`; daftar model dibaca dari akun dan dibatasi pada keluarga Gemini 3 atau yang lebih baru, sesuai cakupan Interactions API. Model dapat diganti melalui kolom Model ID jika perlu.
- Pengujian tombol koneksi melakukan satu permintaan teks sangat singkat ke model terpilih. Permintaan ini tetap menggunakan kuota API akun guru.

### Keamanan dan privasi BYOK — penting

- **Kunci tidak ditanam di repositori, HTML, JavaScript, query string, atau `localStorage`.** Setelah koneksi berhasil, kunci disimpan di `sessionStorage` tab browser, lalu dikirim langsung ke Google melalui HTTPS. Kunci dapat terlihat oleh orang yang menguasai browser/Developer Tools, ekstensi browser, atau skrip yang berjalan pada halaman. BYOK browser-side bukan penyimpanan rahasia setara backend.
- Google menyarankan agar API Key tidak diekspos pada aplikasi client-side untuk penggunaan produksi; arsitektur yang lebih aman adalah backend perantara yang menjaga kunci di sisi server. BYOK browser-side ini merupakan kompromi untuk penggunaan pribadi guru tanpa biaya backend tetap. Jangan memakai komputer umum atau menjalankan website yang kodenya belum dipercaya.
- Pada tier gratis Gemini, Google menyatakan konten yang dikirim dapat digunakan untuk meningkatkan produk. Hindari mengirim nama/NISN, nilai, identitas peserta didik, informasi pribadi, atau dokumen rahasia sekolah. Pengaturan `store: false` tidak mengubah ketentuan tier gratis tersebut.
- Tier gratis menyediakan akses/token gratis untuk model tertentu, tetapi model yang tersedia, kuota/rate limit, dan syarat dapat berubah. Penggunaan tier berbayar dapat menimbulkan biaya sesuai akun. Periksa [harga dan ketentuan resmi Gemini API](https://ai.google.dev/gemini-api/docs/pricing) sebelum penggunaan.
- Batasi dan pantau penggunaan API Key pada Google AI Studio/Google Cloud sejauh opsi pembatasan yang tersedia pada jenis kunci dan proyek. Jika kunci diduga bocor, cabut atau rotasi kunci melalui konsol Google.
- Aplikasi memvalidasi struktur respons, jumlah soal/tugas, dan kelengkapan beberapa field. Validasi tersebut bukan jaminan seluruh jawaban matematika, pembahasan, atau rancangan pedagogis benar. Guru wajib memeriksa hasil sebelum digunakan.

### Batasan BYOK dan deployment

Aplikasi memanggil Gemini API langsung dari browser. Ini menghindari penyimpanan kunci bersama di GitHub, tetapi tidak cocok untuk aplikasi publik yang harus menjamin kerahasiaan API Key. Untuk penggunaan luas oleh banyak guru atau data yang sensitif, arsitektur sebaiknya ditingkatkan ke backend perantara yang aman. CORS dan izin API tetap perlu diuji pada domain GitHub Pages final.

## Kuis Harian dan TKA terpisah

- **Kuis Harian** menggunakan `bank-soal-populasi-sampel.js`, `bank-soal-operasi-bilangan-rasional.js`, dan `bank-soal-fungsi-linear.js`.
- **Bank Soal TKA** menggunakan `bank-soal-tka.js` dan halaman `bank-soal-tka.html`. Bank TKA sengaja masih kosong karena soal TKA belum disiapkan.
- **Tryout TKA** menggunakan `tryout-tka.js` dan hanya membaca `bank-soal-tka.js`. Satu paket mengambil tepat 30 soal valid yang berbeda.
- Bank kuis reguler tidak dipakai sebagai sumber soal TKA.
- Soal Tryout TKA dimasukkan langsung oleh pengelola ke file bank di repositori; generator soal pada Ruang Guru tidak menerbitkan soal otomatis ke bank Kuis Harian ataupun TKA.

### Menambahkan soal TKA

Tambahkan objek soal ke array `soal` di `bank-soal-tka.js`. Skema objek dan contoh struktur field terdapat sebagai komentar di bagian atas file tersebut. Agar soal dihitung untuk katalog/tryout, set `status: "published"`. Soal harus memiliki ID unik, domain, jenis soal yang didukung, pernyataan soal, opsi, kunci, dan pembahasan.

Jenis soal teknis yang saat ini disiapkan: `pilihan_tunggal` dan `pilihan_ganda_kompleks`. Ini adalah dukungan awal aplikasi, bukan klaim bahwa hanya dua jenis tersebut yang dipakai dalam ketentuan resmi TKA.

Tryout otomatis nonaktif jika jumlah soal valid dan berstatus `published` kurang dari 30. Setelah jumlahnya mencukupi, sistem mengacak dan memilih 30 soal tanpa pengulangan ID. Durasi awal diset 60 menit pada konstanta `DURASI_MENIT` di `tryout-tka.js`; ubah sesuai keputusan pengelola.

## Batasan penting GitHub Pages

GitHub Pages menyajikan file statis. Tanpa backend, website tidak memiliki login yang aman, basis data pusat, sinkronisasi nilai siswa, atau penyimpanan hasil lintas perangkat. Riwayat Tryout TKA versi ini disimpan pada `localStorage` browser peserta. Data/kunci soal yang dimuat di browser dapat diperiksa oleh pengguna yang memahami Developer Tools. Jangan gunakan versi statis ini sebagai ujian berpengamanan tinggi atau tempat menyimpan data pribadi siswa.
