/* Bank soal TKA Matematika — Paket 02 | dikonversi dari sumber JSON pengguna */
window.dataPaketTKA = {
  "versiSkema": 3,
  "idPaket": "paket-02",
  "status": "published",
  "jenjang": "SMP/MTs",
  "mataPelajaranId": "matematika",
  "mataPelajaran": "Matematika",
  "kelompokStimulus": [
    {
      "id": "SG1",
      "judul": "Susunan Kursi Pentas Seni",
      "stimulus": "Panitia pentas seni di sebuah sekolah menata kursi penonton dalam 10 baris. Baris pertama terdiri atas 12 kursi, baris kedua 15 kursi, baris ketiga 18 kursi, dan seterusnya dengan pertambahan banyak kursi yang tetap pada setiap baris berikutnya.",
      "ilustrasi": null,
      "nomorSoal": [
        5,
        6,
        7
      ],
      "sourceQuestionIds": [
        "Q05",
        "Q06",
        "Q07"
      ]
    },
    {
      "id": "SG2",
      "judul": "Taman Sekolah",
      "stimulus": "Sebuah taman sekolah berbentuk persegi panjang ABCD dengan AB = 24 m dan BC = 10 m seperti pada gambar. Di dalam taman dibuat jalan setapak lurus dari titik A ke titik C yang membagi taman menjadi dua daerah berbentuk segitiga. Seluruh keliling taman akan dipasang pagar, kecuali satu pintu gerbang selebar 4 m pada sisi AB. Harga pagar adalah Rp50.000 per meter.",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/stimulus-sg2-taman-sekolah.svg",
        "alt": "Persegi panjang ABCD dengan diagonal AC",
        "jenis": "geometry",
        "deskripsi": "Persegi panjang ABCD: A di kiri bawah, B di kanan bawah, C di kanan atas, D di kiri atas. AB = 24 m, BC = 10 m. Garis putus-putus merah menunjukkan jalan setapak AC. Terdapat tanda siku-siku di titik B."
      },
      "nomorSoal": [
        11,
        12,
        13
      ],
      "sourceQuestionIds": [
        "Q11",
        "Q12",
        "Q13"
      ]
    },
    {
      "id": "SG3",
      "judul": "Nilai Ulangan Matematika Dua Kelas",
      "stimulus": "Berikut nilai ulangan matematika 10 siswa yang dipilih dari Kelas VIII-A dan 10 siswa yang dipilih dari Kelas VIII-B di sebuah SMP.\nKelas VIII-A: 60, 70, 70, 75, 80, 80, 80, 85, 90, 100\nKelas VIII-B: 70, 74, 76, 78, 80, 82, 82, 84, 86, 88",
      "ilustrasi": null,
      "nomorSoal": [
        17,
        18,
        19
      ],
      "sourceQuestionIds": [
        "Q17",
        "Q18",
        "Q19"
      ]
    },
    {
      "id": "SG4",
      "judul": "Bazar Sekolah",
      "stimulus": "Panitia bazar sekolah di Makassar menyiapkan 360 kotak kue untuk dikemas dan dijual. Pekerjaan mengemas dilakukan oleh beberapa siswa dengan kecepatan kerja yang sama. Jika pekerjaan dikerjakan oleh 6 siswa, seluruh kotak kue selesai dikemas dalam 4 jam. Biaya produksi seluruh 360 kotak kue adalah Rp1.800.000 dan setiap kotak kue dijual dengan harga Rp8.000.",
      "ilustrasi": null,
      "nomorSoal": [
        23,
        24,
        25
      ],
      "sourceQuestionIds": [
        "Q23",
        "Q24",
        "Q25"
      ]
    }
  ],
  "konfigurasi": {
    "judul": "Tryout TKA Matematika SMP — Paket 02",
    "deskripsi": "Paket kedua berisi 30 soal Matematika dengan stimulus tunggal dan stimulus bersama.",
    "jumlahSoal": 30,
    "durasiMenit": 90,
    "acakSoal": false,
    "instruksi": [
      "Baca stimulus bersama atau stimulus pada setiap soal dengan teliti.",
      "Pilihan Ganda (PG): pilih satu jawaban yang paling tepat.",
      "Pilihan Ganda Kompleks MCMA: pilih semua pilihan yang benar.",
      "Pilihan Ganda Kompleks Kategori: tentukan Benar atau Salah untuk setiap pernyataan.",
      "Untuk simulasi MathSMP, satu nomor mendapat skor penuh jika seluruh respons pada nomor itu benar."
    ],
    "kebijakanSkor": "tepat_penuh_per_nomor",
    "catatan": "Durasi 90 menit dan kebijakan skor adalah pengaturan simulasi MathSMP. File sumber tidak mencantumkan durasi."
  },
  "soal": [
    {
      "id": "TKA-MTK-P02-0001",
      "nomor": 1,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q01",
      "sourceItemKind": "single",
      "domain": "Bilangan",
      "subdomain": "Notasi ilmiah",
      "blueprint": {
        "element": "Bilangan",
        "sub_element": "Bilangan Real",
        "material": "Notasi ilmiah",
        "competency": "Menyatakan bilangan yang sangat kecil dalam bentuk notasi ilmiah",
        "cognitive_level": "knowledge_understanding",
        "thinking_process": "identify",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Mudah",
      "levelKognitif": "Pengetahuan dan Pemahaman",
      "prosesBerpikirAsal": "identify",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Diameter sebuah sel darah merah manusia adalah 0,000007 meter.",
      "ilustrasi": null,
      "soal": "Jika ditulis dalam notasi ilmiah, diameter sel darah merah tersebut adalah ... meter.",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Koma digeser 6 tempat ke kanan sehingga 0,000007 = 7 × 10⁻⁶. Pangkat bernilai negatif karena bilangannya kurang dari 1.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "7 × 10⁻⁵"
        },
        {
          "kode": "B",
          "teks": "7 × 10⁻⁶"
        },
        {
          "kode": "C",
          "teks": "7 × 10⁻⁷"
        },
        {
          "kode": "D",
          "teks": "7 × 10⁶"
        }
      ],
      "kunci": [
        "B"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "easy"
    },
    {
      "id": "TKA-MTK-P02-0002",
      "nomor": 2,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q02",
      "sourceItemKind": "single",
      "domain": "Bilangan",
      "subdomain": "Rasio, skala, proporsi, dan laju perubahan",
      "blueprint": {
        "element": "Bilangan",
        "sub_element": "Bilangan Real",
        "material": "Rasio, skala, proporsi, dan laju perubahan",
        "competency": "Menerapkan konsep skala dan kecepatan untuk menentukan waktu tempuh",
        "cognitive_level": "application",
        "thinking_process": "apply",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "apply",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Pada sebuah peta berskala 1 : 250.000, jarak antara Kota Makassar dan Kota Maros adalah 12 cm.",
      "ilustrasi": null,
      "soal": "Sebuah mobil melaju dengan kecepatan rata-rata 40 km/jam dari Makassar ke Maros menurut jarak pada peta tersebut. Lama perjalanan mobil adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Jarak sebenarnya = 12 × 250.000 = 3.000.000 cm = 30 km. Waktu = jarak ÷ kecepatan = 30 ÷ 40 = 0,75 jam = 45 menit.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "4,5 menit"
        },
        {
          "kode": "B",
          "teks": "75 menit"
        },
        {
          "kode": "C",
          "teks": "450 menit"
        },
        {
          "kode": "D",
          "teks": "45 menit"
        }
      ],
      "kunci": [
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0003",
      "nomor": 3,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q03",
      "sourceItemKind": "single",
      "domain": "Bilangan",
      "subdomain": "Bilangan rasional dan irasional",
      "blueprint": {
        "element": "Bilangan",
        "sub_element": "Bilangan Real",
        "material": "Bilangan rasional dan irasional",
        "competency": "Mengidentifikasi bilangan irasional",
        "cognitive_level": "knowledge_understanding",
        "thinking_process": "identify",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Mudah",
      "levelKognitif": "Pengetahuan dan Pemahaman",
      "prosesBerpikirAsal": "identify",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": null,
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Manakah bilangan berikut yang merupakan bilangan irasional?",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "√20 = 2√5 tidak dapat dinyatakan sebagai pecahan karena 20 bukan kuadrat sempurna (irasional). √(9/16) = 3/4 (rasional). Desimal 0,101001000100001… tidak berulang dan tidak berhenti (irasional). 0,272727… adalah desimal berulang yang sama dengan 3/11 (rasional). Jawaban: A dan C.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "√20"
        },
        {
          "kode": "B",
          "teks": "√(9/16)"
        },
        {
          "kode": "C",
          "teks": "0,101001000100001… (banyak angka 0 di antara dua angka 1 bertambah satu setiap kali)"
        },
        {
          "kode": "D",
          "teks": "0,272727… (angka 27 berulang terus-menerus)"
        }
      ],
      "kunci": [
        "A",
        "C"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "easy"
    },
    {
      "id": "TKA-MTK-P02-0004",
      "nomor": 4,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q04",
      "sourceItemKind": "single",
      "domain": "Aljabar",
      "subdomain": "Pertidaksamaan linear satu variabel",
      "blueprint": {
        "element": "Aljabar",
        "sub_element": "Persamaan dan Pertidaksamaan Linear",
        "material": "Pertidaksamaan linear satu variabel",
        "competency": "Memodelkan dan menyelesaikan masalah dengan pertidaksamaan linear satu variabel",
        "cognitive_level": "application",
        "thinking_process": "model",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "model",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Pak Andi memiliki uang Rp200.000. Ia akan membeli satu tas seharga Rp65.000 dan beberapa buku tulis seharga Rp7.000 per buah.",
      "ilustrasi": null,
      "soal": "Banyak buku tulis maksimal yang dapat dibeli Pak Andi adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Misalkan n = banyak buku. Model: 65.000 + 7.000n ≤ 200.000 → 7.000n ≤ 135.000 → n ≤ 19,28. Karena n bilangan bulat, nilai maksimalnya 19 buku (20 buku memerlukan Rp140.000 sehingga melebihi sisa uang).",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "19"
        },
        {
          "kode": "B",
          "teks": "18"
        },
        {
          "kode": "C",
          "teks": "20"
        },
        {
          "kode": "D",
          "teks": "28"
        }
      ],
      "kunci": [
        "A"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0005",
      "nomor": 5,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q05",
      "sourceItemKind": "group",
      "domain": "Aljabar",
      "subdomain": "Barisan berhingga bilangan",
      "blueprint": {
        "element": "Aljabar",
        "sub_element": "Barisan dan Deret",
        "material": "Barisan berhingga bilangan",
        "competency": "Memodelkan pola susunan kursi ke dalam rumus suku ke-n",
        "cognitive_level": "application",
        "thinking_process": "model",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Mudah",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "model",
      "tipe": "pilihan_tunggal",
      "stimulusId": "SG1",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Rumus banyak kursi pada baris ke-n adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Barisan 12, 15, 18, … adalah barisan aritmetika dengan suku pertama 12 dan beda 3. Uₙ = 12 + (n − 1) × 3 = 3n + 9. Uji n = 1 menghasilkan 12 dan n = 2 menghasilkan 15 (sesuai).",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "3n + 12"
        },
        {
          "kode": "B",
          "teks": "12n + 3"
        },
        {
          "kode": "C",
          "teks": "3n + 9"
        },
        {
          "kode": "D",
          "teks": "9n + 3"
        }
      ],
      "kunci": [
        "C"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "easy"
    },
    {
      "id": "TKA-MTK-P02-0006",
      "nomor": 6,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q06",
      "sourceItemKind": "group",
      "domain": "Aljabar",
      "subdomain": "Deret berhingga bilangan",
      "blueprint": {
        "element": "Aljabar",
        "sub_element": "Barisan dan Deret",
        "material": "Deret berhingga bilangan",
        "competency": "Menganalisis kebenaran pernyataan tentang suku dan jumlah deret aritmetika",
        "cognitive_level": "reasoning",
        "thinking_process": "analyze",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "analyze",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": "SG1",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Pernyataan yang benar tentang susunan kursi tersebut adalah ....",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "Uₙ = 3n + 9. A: U₁₀ = 39 sehingga S₁₀ = 10/2 × (12 + 39) = 255 (benar). B: U₄ = 21 sehingga selisih U₁₀ dan U₄ = 18, bukan 15 (salah). C: U₁₂ = 3(12) + 9 = 45 (benar). D: U₅ = 24 sehingga S₅ = 5/2 × (12 + 24) = 90 (benar). Jawaban: A, C, dan D.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Jumlah seluruh kursi pada 10 baris adalah 255."
        },
        {
          "kode": "B",
          "teks": "Selisih banyak kursi pada baris ke-10 dan baris ke-4 adalah 15."
        },
        {
          "kode": "C",
          "teks": "Jika pola dilanjutkan, baris ke-12 memiliki 45 kursi."
        },
        {
          "kode": "D",
          "teks": "Jumlah kursi pada lima baris pertama adalah 90."
        }
      ],
      "kunci": [
        "A",
        "C",
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0007",
      "nomor": 7,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q07",
      "sourceItemKind": "group",
      "domain": "Aljabar",
      "subdomain": "Barisan dan deret berhingga bilangan",
      "blueprint": {
        "element": "Aljabar",
        "sub_element": "Barisan dan Deret",
        "material": "Barisan dan deret berhingga bilangan",
        "competency": "Mengevaluasi dampak perubahan pola terhadap suku dan jumlah deret",
        "cognitive_level": "reasoning",
        "thinking_process": "evaluate",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "evaluate",
      "tipe": "pilihan_ganda_kategori",
      "stimulusId": "SG1",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Panitia mempertimbangkan beberapa perubahan pada pola susunan kursi. Nilailah setiap pernyataan berikut.",
      "instruksi": "Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      "pembahasan": "A: U₁₀ = 10 + 9 × 3 = 37 (Benar). B: U₁₀ = 12 + 9 × 2 = 30 sehingga S₁₀ = 5 × (12 + 30) = 210, bukan 220 (Salah). C: U₁₀ = 12 + 9 × 4 = 48 sehingga S₁₀ = 5 × (12 + 48) = 300 (Benar).",
      "skorMaksimum": 1,
      "pernyataan": [
        {
          "kode": "A",
          "teks": "Jika baris pertama diubah menjadi 10 kursi dengan pertambahan tetap 3 kursi per baris, banyak kursi pada baris ke-10 adalah 37.",
          "kunci": "Benar"
        },
        {
          "kode": "B",
          "teks": "Jika baris pertama tetap 12 kursi dan pertambahan menjadi 2 kursi per baris, jumlah kursi pada 10 baris adalah 220.",
          "kunci": "Salah"
        },
        {
          "kode": "C",
          "teks": "Jika baris pertama tetap 12 kursi dan pertambahan menjadi 4 kursi per baris, jumlah kursi pada 10 baris adalah 300.",
          "kunci": "Benar"
        }
      ],
      "skalaRespons": [
        "Benar",
        "Salah"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0008",
      "nomor": 8,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q08",
      "sourceItemKind": "single",
      "domain": "Aljabar",
      "subdomain": "Sistem persamaan linear dua variabel",
      "blueprint": {
        "element": "Aljabar",
        "sub_element": "Persamaan dan Pertidaksamaan Linear",
        "material": "Sistem persamaan linear dua variabel",
        "competency": "Menyelesaikan SPLDV dan mengevaluasi pernyataan berdasarkan solusinya",
        "cognitive_level": "reasoning",
        "thinking_process": "evaluate",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "evaluate",
      "tipe": "pilihan_ganda_kategori",
      "stimulusId": null,
      "stimulus": "Di kantin sebuah sekolah, Rani membeli 2 porsi nasi kuning dan 3 gelas es teh dengan harga total Rp41.000. Dina membeli 3 porsi nasi kuning dan 2 gelas es teh dengan harga total Rp44.000. Harga setiap porsi nasi kuning dan setiap gelas es teh sama untuk semua pembeli.",
      "ilustrasi": null,
      "soal": "Nilailah setiap pernyataan berikut berdasarkan informasi di atas.",
      "instruksi": "Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      "pembahasan": "Misalkan x = harga nasi kuning dan y = harga es teh: 2x + 3y = 41.000 dan 3x + 2y = 44.000. Dari penyelesaian diperoleh x = Rp10.000 dan y = Rp7.000. A: harga es teh Rp7.000, bukan Rp8.000 (Salah). B: 10.000 − 7.000 = 3.000 (Benar). C: 3 × 10.000 + 3 × 7.000 = 51.000 > 50.000 sehingga uang tidak cukup (Salah).",
      "skorMaksimum": 1,
      "pernyataan": [
        {
          "kode": "A",
          "teks": "Harga satu gelas es teh adalah Rp8.000.",
          "kunci": "Salah"
        },
        {
          "kode": "B",
          "teks": "Selisih harga satu porsi nasi kuning dan satu gelas es teh adalah Rp3.000.",
          "kunci": "Benar"
        },
        {
          "kode": "C",
          "teks": "Uang Rp50.000 cukup untuk membeli 3 porsi nasi kuning dan 3 gelas es teh.",
          "kunci": "Salah"
        }
      ],
      "skalaRespons": [
        "Benar",
        "Salah"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0009",
      "nomor": 9,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q09",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Sudut pada dua garis sejajar yang dipotong garis transversal",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Objek Geometri",
        "material": "Sudut pada dua garis sejajar yang dipotong garis transversal",
        "competency": "Menentukan besar sudut dengan memodelkan hubungan sudut dalam sepihak",
        "cognitive_level": "application",
        "thinking_process": "model",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "model",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Pada gambar, garis k sejajar dengan garis l dan garis m memotong kedua garis tersebut. Dua sudut diberi tanda (2x + 10)° dan (4x − 10)°.",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/soal-09-dua-garis-sejajar-k-dan-l-dipotong-garis-m.svg",
        "alt": "Dua garis sejajar k dan l dipotong garis m",
        "jenis": "geometry",
        "deskripsi": "Garis k dan l horizontal sejajar. Garis m memotong k di atas dan l di bawah. Di antara kedua garis sejajar, di sisi kanan garis m, sudut pada perpotongan dengan k bertanda (2x + 10)° (sudut lancip) dan sudut pada perpotongan dengan l bertanda (4x − 10)° (sudut tumpul)."
      },
      "soal": "Besar sudut yang bertanda (4x − 10)° adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Kedua sudut berada di antara dua garis sejajar dan pada sisi yang sama dari garis m (sudut dalam sepihak), sehingga jumlahnya 180°. (2x + 10) + (4x − 10) = 180 → 6x = 180 → x = 30. Besar sudut (4x − 10)° = 4(30) − 10 = 110°.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "30°"
        },
        {
          "kode": "B",
          "teks": "70°"
        },
        {
          "kode": "C",
          "teks": "120°"
        },
        {
          "kode": "D",
          "teks": "110°"
        }
      ],
      "kunci": [
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0010",
      "nomor": 10,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q10",
      "sourceItemKind": "single",
      "domain": "Aljabar",
      "subdomain": "Relasi dan fungsi: domain, kodomain, dan range",
      "blueprint": {
        "element": "Aljabar",
        "sub_element": "Fungsi",
        "material": "Relasi dan fungsi: domain, kodomain, dan range",
        "competency": "Mengidentifikasi domain, kodomain, dan range suatu fungsi",
        "cognitive_level": "knowledge_understanding",
        "thinking_process": "identify",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Mudah",
      "levelKognitif": "Pengetahuan dan Pemahaman",
      "prosesBerpikirAsal": "identify",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": null,
      "stimulus": "Fungsi f dari himpunan A = {1, 2, 3, 4} ke himpunan B = {2, 4, 6, 8, 10} dinyatakan dengan pasangan berurutan {(1, 2), (2, 4), (3, 6), (4, 8)}.",
      "ilustrasi": null,
      "soal": "Pernyataan yang benar tentang fungsi f adalah ....",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "Domain adalah himpunan asal, yaitu A = {1, 2, 3, 4} (B benar). Kodomain adalah himpunan B = {2, 4, 6, 8, 10}, bukan {2, 4, 6, 8} (A salah). Range adalah anggota kodomain yang menjadi bayangan, yaitu {2, 4, 6, 8} (C benar). Pasangan (3, 6) menunjukkan f(3) = 6 (D benar). Jawaban: B, C, dan D.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Kodomain fungsi f adalah {2, 4, 6, 8}."
        },
        {
          "kode": "B",
          "teks": "Domain fungsi f adalah {1, 2, 3, 4}."
        },
        {
          "kode": "C",
          "teks": "Range fungsi f adalah {2, 4, 6, 8}."
        },
        {
          "kode": "D",
          "teks": "Nilai f(3) = 6."
        }
      ],
      "kunci": [
        "B",
        "C",
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "easy"
    },
    {
      "id": "TKA-MTK-P02-0011",
      "nomor": 11,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q11",
      "sourceItemKind": "group",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Teorema Pythagoras",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Objek Geometri",
        "material": "Teorema Pythagoras",
        "competency": "Menghitung panjang sisi miring segitiga siku-siku",
        "cognitive_level": "knowledge_understanding",
        "thinking_process": "calculate",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Mudah",
      "levelKognitif": "Pengetahuan dan Pemahaman",
      "prosesBerpikirAsal": "calculate",
      "tipe": "pilihan_tunggal",
      "stimulusId": "SG2",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Panjang jalan setapak AC adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Segitiga ABC siku-siku di B. AC² = AB² + BC² = 24² + 10² = 576 + 100 = 676, sehingga AC = 26 m.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "26 m"
        },
        {
          "kode": "B",
          "teks": "34 m"
        },
        {
          "kode": "C",
          "teks": "14 m"
        },
        {
          "kode": "D",
          "teks": "676 m"
        }
      ],
      "kunci": [
        "A"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "easy"
    },
    {
      "id": "TKA-MTK-P02-0012",
      "nomor": 12,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q12",
      "sourceItemKind": "group",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Keliling bangun datar",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Pengukuran",
        "material": "Keliling bangun datar",
        "competency": "Menerapkan keliling persegi panjang pada masalah biaya",
        "cognitive_level": "application",
        "thinking_process": "apply",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "apply",
      "tipe": "pilihan_tunggal",
      "stimulusId": "SG2",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Biaya yang diperlukan untuk membeli pagar adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Keliling taman = 2 × (24 + 10) = 68 m. Panjang pagar = 68 − 4 = 64 m. Biaya = 64 × Rp50.000 = Rp3.200.000.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Rp3.400.000"
        },
        {
          "kode": "B",
          "teks": "Rp3.200.000"
        },
        {
          "kode": "C",
          "teks": "Rp1.700.000"
        },
        {
          "kode": "D",
          "teks": "Rp12.000.000"
        }
      ],
      "kunci": [
        "B"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0013",
      "nomor": 13,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q13",
      "sourceItemKind": "group",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Teorema Pythagoras",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Objek Geometri",
        "material": "Teorema Pythagoras",
        "competency": "Menganalisis sifat segitiga siku-siku dari luas, keliling, dan jarak",
        "cognitive_level": "reasoning",
        "thinking_process": "analyze",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "analyze",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": "SG2",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Pernyataan yang benar tentang segitiga ABC pada taman tersebut adalah ....",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "Segitiga ABC siku-siku di B dengan AC = 26 m. A: luas = ½ × 24 × 10 = 120 m², bukan 240 m² (salah). B: titik tengah sisi miring berjarak sama ke ketiga titik sudut, sehingga BE = ½ × 26 = 13 m (benar). C: dari luas, 120 = ½ × 26 × t sehingga t = 120/13 ≈ 9,2 m, bukan 10 m (salah). D: keliling = 24 + 10 + 26 = 60 m (benar). Jawaban: B dan D.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Luas segitiga ABC adalah 240 m²."
        },
        {
          "kode": "B",
          "teks": "Jika E adalah titik tengah jalan setapak AC, maka panjang BE = 13 m."
        },
        {
          "kode": "C",
          "teks": "Jarak titik B ke jalan setapak AC adalah 10 m."
        },
        {
          "kode": "D",
          "teks": "Keliling segitiga ABC adalah 60 m."
        }
      ],
      "kunci": [
        "B",
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0014",
      "nomor": 14,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q14",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Rotasi",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Transformasi Geometri",
        "material": "Rotasi",
        "competency": "Menentukan bayangan titik oleh rotasi terhadap titik pusat O",
        "cognitive_level": "application",
        "thinking_process": "apply",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "apply",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Segitiga ABC pada bidang koordinat seperti pada gambar dengan A(1, 1), B(4, 1), dan C(1, 3). Segitiga tersebut dirotasi 90° berlawanan arah jarum jam dengan pusat O(0, 0).",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/soal-14-segitiga-abc-pada-bidang-koordinat.svg",
        "alt": "Segitiga ABC pada bidang koordinat",
        "jenis": "geometry",
        "deskripsi": "Bidang koordinat dengan sumbu x dari −4 sampai 5 dan sumbu y dari −3 sampai 4. Segitiga ABC siku-siku di A dengan titik A(1, 1), B(4, 1), dan C(1, 3) berada di kuadran I."
      },
      "soal": "Koordinat bayangan titik C adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Rotasi 90° berlawanan arah jarum jam dengan pusat O(0, 0) memetakan (x, y) menjadi (−y, x). Jadi C(1, 3) menjadi C'(−3, 1). Pilihan (3, −1) adalah hasil rotasi searah jarum jam, (−1, 3) adalah hasil pencerminan terhadap sumbu y, dan (−1, −3) adalah hasil rotasi 180°.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "(3, −1)"
        },
        {
          "kode": "B",
          "teks": "(−1, 3)"
        },
        {
          "kode": "C",
          "teks": "(−3, 1)"
        },
        {
          "kode": "D",
          "teks": "(−1, −3)"
        }
      ],
      "kunci": [
        "C"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0015",
      "nomor": 15,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q15",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Dilatasi, refleksi, dan translasi",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Transformasi Geometri",
        "material": "Dilatasi, refleksi, dan translasi",
        "competency": "Mengevaluasi sifat transformasi terhadap bangun datar pada bidang koordinat",
        "cognitive_level": "reasoning",
        "thinking_process": "evaluate",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "evaluate",
      "tipe": "pilihan_ganda_kategori",
      "stimulusId": null,
      "stimulus": "Segitiga PQR memiliki titik sudut P(1, 2), Q(5, 2), dan R(5, 4).",
      "ilustrasi": null,
      "soal": "Nilailah setiap pernyataan berikut tentang transformasi segitiga PQR.",
      "instruksi": "Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      "pembahasan": "A: luas PQR = ½ × 4 × 2 = 4. Dilatasi pusat O faktor 2 memetakan P'(2, 4), Q'(10, 4), R'(10, 8) dengan luas ½ × 8 × 4 = 16, yaitu empat kali luas semula, bukan dua kali (Salah). B: refleksi adalah transformasi yang mempertahankan bentuk dan ukuran sehingga bayangan kongruen (Benar). C: Q(5, 2) + (−3, 2) = (2, 4) (Benar).",
      "skorMaksimum": 1,
      "pernyataan": [
        {
          "kode": "A",
          "teks": "Dilatasi dengan pusat O(0, 0) dan faktor skala 2 menghasilkan bayangan yang luasnya dua kali luas segitiga PQR.",
          "kunci": "Salah"
        },
        {
          "kode": "B",
          "teks": "Refleksi segitiga PQR terhadap sumbu x menghasilkan bayangan yang kongruen dengan segitiga PQR.",
          "kunci": "Benar"
        },
        {
          "kode": "C",
          "teks": "Bayangan titik Q oleh translasi (−3, 2) berada di titik (2, 4).",
          "kunci": "Benar"
        }
      ],
      "skalaRespons": [
        "Benar",
        "Salah"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0016",
      "nomor": 16,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q16",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Luas gabungan bangun datar",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Pengukuran",
        "material": "Luas gabungan bangun datar",
        "competency": "Menghitung luas gabungan persegi panjang dan setengah lingkaran",
        "cognitive_level": "application",
        "thinking_process": "apply",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "apply",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Halaman sebuah rumah berbentuk gabungan persegi panjang dan setengah lingkaran seperti pada gambar. Gunakan π = 22/7.",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/soal-16-gabungan-persegi-panjang-dan-setengah-lingkara.svg",
        "alt": "Gabungan persegi panjang dan setengah lingkaran",
        "jenis": "geometry",
        "deskripsi": "Persegi panjang berukuran 20 m × 14 m. Pada sisi kanan yang panjangnya 14 m terdapat setengah lingkaran dengan diameter 14 m (garis putus-putus menunjukkan diameter)."
      },
      "soal": "Luas halaman rumah tersebut adalah ... m².",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Luas persegi panjang = 20 × 14 = 280 m². Jari-jari setengah lingkaran = 14 ÷ 2 = 7 m, sehingga luasnya = ½ × 22/7 × 7 × 7 = 77 m². Luas halaman = 280 + 77 = 357 m².",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "357"
        },
        {
          "kode": "B",
          "teks": "434"
        },
        {
          "kode": "C",
          "teks": "588"
        },
        {
          "kode": "D",
          "teks": "280"
        }
      ],
      "kunci": [
        "A"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0017",
      "nomor": 17,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q17",
      "sourceItemKind": "group",
      "domain": "Data dan Peluang",
      "subdomain": "Mean",
      "blueprint": {
        "element": "Data dan Peluang",
        "sub_element": "Data",
        "material": "Mean",
        "competency": "Menghitung rata-rata data tunggal",
        "cognitive_level": "knowledge_understanding",
        "thinking_process": "calculate",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Mudah",
      "levelKognitif": "Pengetahuan dan Pemahaman",
      "prosesBerpikirAsal": "calculate",
      "tipe": "pilihan_tunggal",
      "stimulusId": "SG3",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Rata-rata nilai ulangan siswa Kelas VIII-A tersebut adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Jumlah nilai = 60 + 70 + 70 + 75 + 80 + 80 + 80 + 85 + 90 + 100 = 790. Rata-rata = 790 ÷ 10 = 79.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "77"
        },
        {
          "kode": "B",
          "teks": "79"
        },
        {
          "kode": "C",
          "teks": "80"
        },
        {
          "kode": "D",
          "teks": "790"
        }
      ],
      "kunci": [
        "B"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "easy"
    },
    {
      "id": "TKA-MTK-P02-0018",
      "nomor": 18,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q18",
      "sourceItemKind": "group",
      "domain": "Data dan Peluang",
      "subdomain": "Perbandingan ukuran pemusatan dan penyebaran beberapa kelompok data",
      "blueprint": {
        "element": "Data dan Peluang",
        "sub_element": "Data",
        "material": "Perbandingan ukuran pemusatan dan penyebaran beberapa kelompok data",
        "competency": "Menginterpretasikan dan membandingkan mean, median, modus, dan jangkauan dua kelompok data",
        "cognitive_level": "application",
        "thinking_process": "interpret",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "interpret",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": "SG3",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Pernyataan yang benar berdasarkan data kedua kelas adalah ....",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "VIII-A: rata-rata 79, median 80, modus 80, jangkauan 100 − 60 = 40. VIII-B: jumlah 800 sehingga rata-rata 80, median (80 + 82) ÷ 2 = 81, modus 82, jangkauan 88 − 70 = 18. A benar (80 > 79). B salah (80 ≠ 82). C salah karena jangkauan VIII-B (18) lebih kecil daripada VIII-A (40), sehingga nilai VIII-B lebih homogen. D benar (81 > 80). Jawaban: A dan D.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Rata-rata nilai Kelas VIII-B lebih tinggi daripada rata-rata nilai Kelas VIII-A."
        },
        {
          "kode": "B",
          "teks": "Modus nilai kedua kelas sama."
        },
        {
          "kode": "C",
          "teks": "Nilai di Kelas VIII-B lebih menyebar (jangkauannya lebih besar) daripada nilai di Kelas VIII-A."
        },
        {
          "kode": "D",
          "teks": "Median nilai Kelas VIII-B lebih tinggi daripada median nilai Kelas VIII-A."
        }
      ],
      "kunci": [
        "A",
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0019",
      "nomor": 19,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q19",
      "sourceItemKind": "group",
      "domain": "Data dan Peluang",
      "subdomain": "Mean dan jangkauan",
      "blueprint": {
        "element": "Data dan Peluang",
        "sub_element": "Data",
        "material": "Mean dan jangkauan",
        "competency": "Mengevaluasi pengaruh perubahan data terhadap mean dan jangkauan",
        "cognitive_level": "reasoning",
        "thinking_process": "evaluate",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "evaluate",
      "tipe": "pilihan_ganda_kategori",
      "stimulusId": "SG3",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Nilailah setiap pernyataan berikut tentang perubahan data.",
      "instruksi": "Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      "pembahasan": "A: (790 − 70) ÷ 9 = 80 (Benar). B: (800 + 80) ÷ 11 = 80, sehingga rata-rata tetap (Benar). C: jika nilai 60 diganti 80, nilai terendah baru adalah 70 sehingga jangkauan = 100 − 70 = 30, bukan 20 (Salah).",
      "skorMaksimum": 1,
      "pernyataan": [
        {
          "kode": "A",
          "teks": "Jika satu siswa Kelas VIII-A yang bernilai 70 tidak diikutkan, rata-rata nilai Kelas VIII-A menjadi 80.",
          "kunci": "Benar"
        },
        {
          "kode": "B",
          "teks": "Jika seorang siswa bernilai 80 ditambahkan ke data Kelas VIII-B, rata-rata nilai Kelas VIII-B tetap 80.",
          "kunci": "Benar"
        },
        {
          "kode": "C",
          "teks": "Jika nilai terendah Kelas VIII-A (60) diganti menjadi 80, jangkauan nilai Kelas VIII-A menjadi 20.",
          "kunci": "Salah"
        }
      ],
      "skalaRespons": [
        "Benar",
        "Salah"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0020",
      "nomor": 20,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q20",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Volume bola",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Pengukuran",
        "material": "Volume bola",
        "competency": "Menganalisis hubungan volume bola dan kubus yang memuatnya",
        "cognitive_level": "reasoning",
        "thinking_process": "analyze",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "analyze",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": null,
      "stimulus": "Sebuah bola padat dimasukkan tepat ke dalam kotak berbentuk kubus dengan rusuk 12 cm sehingga bola menyentuh semua sisi kotak (lihat penampang pada gambar). Gunakan π = 3,14.",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/soal-20-penampang-kubus-berisi-bola.svg",
        "alt": "Penampang kubus berisi bola",
        "jenis": "geometry",
        "deskripsi": "Persegi dengan sisi 12 cm yang memuat lingkaran di dalamnya. Lingkaran menyentuh keempat sisi persegi sehingga diameternya sama dengan 12 cm."
      },
      "soal": "Pernyataan yang benar tentang bola dan kotak tersebut adalah ....",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "Jari-jari bola = 6 cm. Volume bola = 4/3 × 3,14 × 6³ = 904,32 cm³ (C benar). Volume kubus = 12³ = 1.728 cm³. A: 1.728 ÷ 904,32 ≈ 1,91 sehingga bukan tepat dua kali (salah). B: volume bola sebanding dengan r³, sehingga jari-jari dua kali semula membuat volume delapan kali semula (salah). D: ruang kosong = 1.728 − 904,32 = 823,68 cm³ yang kurang dari setengah volume kubus (864 cm³) (benar). Jawaban: C dan D.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Volume kubus tepat dua kali volume bola."
        },
        {
          "kode": "B",
          "teks": "Jika jari-jari bola dijadikan dua kali semula, volume bola menjadi dua kali semula."
        },
        {
          "kode": "C",
          "teks": "Volume bola adalah 904,32 cm³."
        },
        {
          "kode": "D",
          "teks": "Volume ruang kosong di dalam kotak kurang dari setengah volume kubus."
        }
      ],
      "kunci": [
        "C",
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0021",
      "nomor": 21,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q21",
      "sourceItemKind": "single",
      "domain": "Data dan Peluang",
      "subdomain": "Peluang kejadian tunggal",
      "blueprint": {
        "element": "Data dan Peluang",
        "sub_element": "Peluang",
        "material": "Peluang kejadian tunggal",
        "competency": "Menentukan peluang kejadian tunggal",
        "cognitive_level": "knowledge_understanding",
        "thinking_process": "calculate",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Mudah",
      "levelKognitif": "Pengetahuan dan Pemahaman",
      "prosesBerpikirAsal": "calculate",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Dalam sebuah kotak terdapat 5 kelereng merah, 3 kelereng biru, dan 2 kelereng hijau. Satu kelereng diambil secara acak.",
      "ilustrasi": null,
      "soal": "Peluang terambilnya kelereng yang bukan berwarna biru adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Banyak seluruh kelereng = 5 + 3 + 2 = 10. Kelereng bukan biru = 5 + 2 = 7. Peluang = 7/10. Pilihan 3/10 adalah peluang kelereng biru dan 3/7 adalah perbandingan biru terhadap bukan biru.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "3/10"
        },
        {
          "kode": "B",
          "teks": "1/2"
        },
        {
          "kode": "C",
          "teks": "7/10"
        },
        {
          "kode": "D",
          "teks": "3/7"
        }
      ],
      "kunci": [
        "C"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "easy"
    },
    {
      "id": "TKA-MTK-P02-0022",
      "nomor": 22,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q22",
      "sourceItemKind": "single",
      "domain": "Data dan Peluang",
      "subdomain": "Frekuensi relatif kejadian tunggal",
      "blueprint": {
        "element": "Data dan Peluang",
        "sub_element": "Peluang",
        "material": "Frekuensi relatif kejadian tunggal",
        "competency": "Menginterpretasikan diagram batang untuk menentukan frekuensi relatif",
        "cognitive_level": "application",
        "thinking_process": "interpret",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "interpret",
      "tipe": "pilihan_ganda_kategori",
      "stimulusId": null,
      "stimulus": "Siti melempar sebuah dadu sebanyak 60 kali. Hasil percobaannya disajikan pada diagram batang berikut.",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/soal-22-diagram-batang-frekuensi-mata-dadu.svg",
        "alt": "Diagram batang frekuensi mata dadu",
        "jenis": "bar_chart",
        "deskripsi": "Diagram batang dengan sumbu mendatar mata dadu 1 sampai 6 dan sumbu tegak frekuensi. Frekuensi: mata 1 = 8, mata 2 = 12, mata 3 = 9, mata 4 = 11, mata 5 = 10, mata 6 = 10 (total 60)."
      },
      "soal": "Nilailah setiap pernyataan berikut berdasarkan diagram batang.",
      "instruksi": "Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      "pembahasan": "Frekuensi relatif = frekuensi ÷ banyak percobaan. A: 12/60 = 1/5 (Benar). B: mata ganjil muncul 8 + 9 + 10 = 27 kali sehingga frekuensi relatifnya 27/60 = 9/20, bukan 1/2 (Salah). C: mata 6 dan mata 5 sama-sama muncul 10 kali sehingga frekuensi relatifnya sama (Salah).",
      "skorMaksimum": 1,
      "pernyataan": [
        {
          "kode": "A",
          "teks": "Frekuensi relatif munculnya mata dadu 2 adalah 1/5.",
          "kunci": "Benar"
        },
        {
          "kode": "B",
          "teks": "Frekuensi relatif munculnya mata dadu ganjil adalah 1/2.",
          "kunci": "Salah"
        },
        {
          "kode": "C",
          "teks": "Frekuensi relatif munculnya mata dadu 6 lebih besar daripada frekuensi relatif munculnya mata dadu 5.",
          "kunci": "Salah"
        }
      ],
      "skalaRespons": [
        "Benar",
        "Salah"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0023",
      "nomor": 23,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q23",
      "sourceItemKind": "group",
      "domain": "Bilangan",
      "subdomain": "Perbandingan senilai dan berbalik nilai",
      "blueprint": {
        "element": "Bilangan",
        "sub_element": "Bilangan Real",
        "material": "Perbandingan senilai dan berbalik nilai",
        "competency": "Menyelesaikan masalah perbandingan berbalik nilai",
        "cognitive_level": "application",
        "thinking_process": "apply",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Aplikasi",
      "prosesBerpikirAsal": "apply",
      "tipe": "pilihan_tunggal",
      "stimulusId": "SG4",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Jika pekerjaan mengemas dikerjakan oleh 8 siswa, seluruh kotak kue selesai dikemas dalam waktu ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Banyak siswa dan waktu berbanding terbalik, sehingga banyak siswa × waktu = tetap. 6 × 4 = 24 siswa-jam. Dengan 8 siswa, waktu = 24 ÷ 8 = 3 jam.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "2 jam"
        },
        {
          "kode": "B",
          "teks": "5 jam 20 menit"
        },
        {
          "kode": "C",
          "teks": "6 jam"
        },
        {
          "kode": "D",
          "teks": "3 jam"
        }
      ],
      "kunci": [
        "D"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0024",
      "nomor": 24,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q24",
      "sourceItemKind": "group",
      "domain": "Bilangan",
      "subdomain": "Rasio, skala, proporsi, dan laju perubahan",
      "blueprint": {
        "element": "Bilangan",
        "sub_element": "Bilangan Real",
        "material": "Rasio, skala, proporsi, dan laju perubahan",
        "competency": "Menganalisis laju kerja dan hubungan antara banyak pekerja, banyak pekerjaan, dan waktu",
        "cognitive_level": "reasoning",
        "thinking_process": "analyze",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "analyze",
      "tipe": "pilihan_ganda_kategori",
      "stimulusId": "SG4",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Nilailah setiap pernyataan berikut berdasarkan informasi pada stimulus.",
      "instruksi": "Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      "pembahasan": "Laju kerja satu siswa = 360 ÷ (6 × 4) = 15 kotak per jam. A: 90 kotak per jam adalah laju 6 siswa, bukan 1 siswa (Salah). B: 24 siswa-jam ÷ 9 siswa = 2 jam 40 menit, bukan 2 jam 30 menit (Salah). C: laju 6 siswa = 90 kotak per jam sehingga 540 kotak memerlukan 540 ÷ 90 = 6 jam (Benar).",
      "skorMaksimum": 1,
      "pernyataan": [
        {
          "kode": "A",
          "teks": "Dalam satu jam, seorang siswa dapat mengemas 90 kotak kue.",
          "kunci": "Salah"
        },
        {
          "kode": "B",
          "teks": "Jika pekerjaan dikerjakan oleh 9 siswa, seluruh kotak kue selesai dikemas dalam 2 jam 30 menit.",
          "kunci": "Salah"
        },
        {
          "kode": "C",
          "teks": "Jika banyak kotak kue menjadi 540 dan dikerjakan oleh 6 siswa dengan kecepatan yang sama, pekerjaan selesai dalam 6 jam.",
          "kunci": "Benar"
        }
      ],
      "skalaRespons": [
        "Benar",
        "Salah"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0025",
      "nomor": 25,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q25",
      "sourceItemKind": "group",
      "domain": "Bilangan",
      "subdomain": "Operasi aritmetika bilangan dan persentase",
      "blueprint": {
        "element": "Bilangan",
        "sub_element": "Bilangan Real",
        "material": "Operasi aritmetika bilangan dan persentase",
        "competency": "Mengevaluasi keuntungan dan titik impas dari informasi biaya dan harga jual",
        "cognitive_level": "reasoning",
        "thinking_process": "evaluate",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "evaluate",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": "SG4",
      "stimulus": null,
      "ilustrasi": null,
      "soal": "Pernyataan yang benar tentang biaya produksi dan penjualan kotak kue adalah ....",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "Penerimaan jika semua terjual = 360 × 8.000 = Rp2.880.000. A: 200 kotak menghasilkan Rp1.600.000, kurang dari biaya Rp1.800.000 sehingga rugi (salah). B: keuntungan = 2.880.000 − 1.800.000 = Rp1.080.000 (benar). C: titik impas = 1.800.000 ÷ 8.000 = 225 kotak, sehingga untung jika terjual lebih dari 225 (benar). D: persentase keuntungan = 1.080.000 ÷ 1.800.000 × 100% = 60%, bukan 40% (salah). Jawaban: B dan C.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Jika hanya 200 kotak kue terjual, panitia masih memperoleh keuntungan."
        },
        {
          "kode": "B",
          "teks": "Jika seluruh kotak kue terjual, panitia memperoleh keuntungan Rp1.080.000."
        },
        {
          "kode": "C",
          "teks": "Panitia mulai memperoleh keuntungan jika terjual lebih dari 225 kotak kue."
        },
        {
          "kode": "D",
          "teks": "Jika seluruh kotak kue terjual, persentase keuntungan terhadap biaya produksi adalah 40%."
        }
      ],
      "kunci": [
        "B",
        "C"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0026",
      "nomor": 26,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q26",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Kesebangunan",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Objek Geometri",
        "material": "Kesebangunan",
        "competency": "Menggunakan kesebangunan segitiga pada trapesium untuk menentukan panjang ruas garis",
        "cognitive_level": "reasoning",
        "thinking_process": "solve_nonroutine",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "solve_nonroutine",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Pada gambar, ABCD adalah trapesium dengan AB sejajar DC, AB = 12 cm, DC = 20 cm, dan BC tegak lurus DC. Diagonal AC dan BD berpotongan di titik E. Panjang diagonal AC = 20 cm.",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/soal-26-trapesium-siku-siku-abcd-dengan-diagonal-ac-da.svg",
        "alt": "Trapesium siku-siku ABCD dengan diagonal AC dan BD",
        "jenis": "geometry",
        "deskripsi": "Trapesium ABCD: A(kiri atas), B(kanan atas), C(kanan bawah), D(kiri bawah). AB = 12 cm di sisi atas, DC = 20 cm di sisi bawah, BC tegak lurus DC (tanda siku-siku di C). Diagonal AC dan BD berpotongan di titik E."
      },
      "soal": "Panjang AE adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Karena AB ∥ DC, segitiga ABE sebangun dengan segitiga CDE (sudut bertolak belakang dan sudut dalam berseberangan sama besar). Maka AE : EC = AB : DC = 12 : 20 = 3 : 5. Karena AC = AE + EC = 20 cm, AE = 3/8 × 20 = 7,5 cm.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "7,5 cm"
        },
        {
          "kode": "B",
          "teks": "8 cm"
        },
        {
          "kode": "C",
          "teks": "12 cm"
        },
        {
          "kode": "D",
          "teks": "12,5 cm"
        }
      ],
      "kunci": [
        "A"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0027",
      "nomor": 27,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q27",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Jaring-jaring tabung",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Objek Geometri",
        "material": "Jaring-jaring tabung",
        "competency": "Menganalisis ukuran dan luas jaring-jaring tabung",
        "cognitive_level": "reasoning",
        "thinking_process": "analyze",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "analyze",
      "tipe": "pilihan_ganda_kompleks",
      "stimulusId": null,
      "stimulus": "Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Jaring-jaring tabung tersebut terdiri atas dua lingkaran dan satu persegi panjang seperti pada gambar. Gunakan π = 22/7.",
      "ilustrasi": {
        "file": "assets/images/tka/matematika/paket-02/soal-27-jaring-jaring-tabung.svg",
        "alt": "Jaring-jaring tabung",
        "jenis": "geometry",
        "deskripsi": "Satu persegi panjang dengan tinggi 10 cm. Dua lingkaran berjari-jari 7 cm masing-masing menempel pada sisi panjang atas dan sisi panjang bawah persegi panjang. Panjang persegi panjang tidak diberi label."
      },
      "soal": "Pernyataan yang benar tentang jaring-jaring tabung tersebut adalah ....",
      "instruksi": "Pilihlah semua jawaban yang benar!",
      "pembahasan": "Panjang persegi panjang sama dengan keliling lingkaran = 2 × 22/7 × 7 = 44 cm (A benar). Luas persegi panjang = 44 × 10 = 440 cm², bukan 220 cm² (C salah). Luas satu lingkaran = 22/7 × 7 × 7 = 154 cm², bukan 308 cm² (D salah; 308 cm² adalah luas dua lingkaran). Luas seluruh jaring-jaring = 440 + 2 × 154 = 748 cm² (B benar). Jawaban: A dan B.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Panjang persegi panjang pada jaring-jaring adalah 44 cm."
        },
        {
          "kode": "B",
          "teks": "Luas seluruh jaring-jaring tabung adalah 748 cm²."
        },
        {
          "kode": "C",
          "teks": "Luas persegi panjang pada jaring-jaring adalah 220 cm²."
        },
        {
          "kode": "D",
          "teks": "Luas satu lingkaran pada jaring-jaring adalah 308 cm²."
        }
      ],
      "kunci": [
        "A",
        "B"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    },
    {
      "id": "TKA-MTK-P02-0028",
      "nomor": 28,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q28",
      "sourceItemKind": "single",
      "domain": "Aljabar",
      "subdomain": "Operasi bentuk aljabar dan sifat distributif",
      "blueprint": {
        "element": "Aljabar",
        "sub_element": "Bentuk Aljabar",
        "material": "Operasi bentuk aljabar dan sifat distributif",
        "competency": "Memecahkan masalah luas dengan operasi bentuk aljabar dan persamaan linear",
        "cognitive_level": "reasoning",
        "thinking_process": "solve_nonroutine",
        "context": "everyday_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "solve_nonroutine",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Sebuah taman berbentuk persegi panjang dengan panjang (x + 8) m dan lebar (x + 3) m. Pada salah satu sudut taman dibuat kolam berbentuk persegi dengan panjang sisi x m. Luas taman di luar kolam adalah 90 m².",
      "ilustrasi": null,
      "soal": "Ukuran kolam tersebut adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Luas di luar kolam = (x + 8)(x + 3) − x² = x² + 11x + 24 − x² = 11x + 24. Maka 11x + 24 = 90 → 11x = 66 → x = 6. Kolam berukuran 6 m × 6 m. (Cek: 14 × 9 − 36 = 90.)",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "4 m × 4 m"
        },
        {
          "kode": "B",
          "teks": "5 m × 5 m"
        },
        {
          "kode": "C",
          "teks": "6 m × 6 m"
        },
        {
          "kode": "D",
          "teks": "8 m × 8 m"
        }
      ],
      "kunci": [
        "C"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0029",
      "nomor": 29,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q29",
      "sourceItemKind": "single",
      "domain": "Bilangan",
      "subdomain": "Faktorisasi prima bilangan asli",
      "blueprint": {
        "element": "Bilangan",
        "sub_element": "Bilangan Real",
        "material": "Faktorisasi prima bilangan asli",
        "competency": "Menganalisis sifat bilangan berdasarkan faktorisasi primanya",
        "cognitive_level": "reasoning",
        "thinking_process": "analyze",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sulit",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "analyze",
      "tipe": "pilihan_ganda_kategori",
      "stimulusId": null,
      "stimulus": "Diketahui bilangan N = 2³ × 3² × 5.",
      "ilustrasi": null,
      "soal": "Nilailah setiap pernyataan berikut tentang bilangan N.",
      "instruksi": "Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      "pembahasan": "N = 8 × 9 × 5 = 360. A: 18² = 324 dan 19² = 361 sehingga √360 bukan bilangan bulat (Salah). B: 45 = 3² × 5 dan faktor-faktor tersebut terdapat pada N; 360 ÷ 45 = 8 (Benar). C: kuadrat sempurna memerlukan semua pangkat faktor prima genap. Pangkat 2 adalah 3 dan pangkat 5 adalah 1 (keduanya ganjil), sehingga perlu dikalikan 2 × 5 = 10, menghasilkan 3.600 = 60² (Benar).",
      "skorMaksimum": 1,
      "pernyataan": [
        {
          "kode": "A",
          "teks": "√N merupakan bilangan bulat.",
          "kunci": "Salah"
        },
        {
          "kode": "B",
          "teks": "N habis dibagi 45.",
          "kunci": "Benar"
        },
        {
          "kode": "C",
          "teks": "Bilangan asli terkecil yang jika dikalikan dengan N menghasilkan bilangan kuadrat sempurna adalah 10.",
          "kunci": "Benar"
        }
      ],
      "skalaRespons": [
        "Benar",
        "Salah"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "hard"
    },
    {
      "id": "TKA-MTK-P02-0030",
      "nomor": 30,
      "status": "published",
      "paketId": "paket-02",
      "sourceId": "Q30",
      "sourceItemKind": "single",
      "domain": "Geometri dan Pengukuran",
      "subdomain": "Kekongruenan dan Teorema Pythagoras",
      "blueprint": {
        "element": "Geometri dan Pengukuran",
        "sub_element": "Objek Geometri",
        "material": "Kekongruenan dan Teorema Pythagoras",
        "competency": "Menyimpulkan kekongruenan dua segitiga siku-siku dengan bantuan Teorema Pythagoras",
        "cognitive_level": "reasoning",
        "thinking_process": "conclude",
        "context": "mathematical_problem"
      },
      "tingkatKesulitan": "Sedang",
      "levelKognitif": "Penalaran",
      "prosesBerpikirAsal": "conclude",
      "tipe": "pilihan_tunggal",
      "stimulusId": null,
      "stimulus": "Segitiga ABC siku-siku di B dengan AB = 9 cm dan BC = 12 cm. Segitiga PQR siku-siku di Q dengan PQ = 9 cm dan PR = 15 cm.",
      "ilustrasi": null,
      "soal": "Kesimpulan yang paling tepat tentang kedua segitiga tersebut adalah ....",
      "instruksi": "Pilihlah satu jawaban yang benar!",
      "pembahasan": "Pada segitiga ABC: AC² = 9² + 12² = 225 sehingga AC = 15 cm. Pada segitiga PQR (siku-siku di Q, PR sisi miring): QR² = 15² − 9² = 144 sehingga QR = 12 cm. Jadi AB = PQ = 9 cm, BC = QR = 12 cm, dan AC = PR = 15 cm. Ketiga pasang sisi bersesuaian sama panjang sehingga kedua segitiga kongruen.",
      "skorMaksimum": 1,
      "pilihan": [
        {
          "kode": "A",
          "teks": "Kedua segitiga kongruen karena sama-sama siku-siku dan memiliki sisi sepanjang 9 cm."
        },
        {
          "kode": "B",
          "teks": "Kedua segitiga kongruen karena QR = 12 cm sehingga ketiga pasang sisi yang bersesuaian sama panjang."
        },
        {
          "kode": "C",
          "teks": "Kedua segitiga tidak kongruen karena panjang BC dan QR belum tentu sama."
        },
        {
          "kode": "D",
          "teks": "Kedua segitiga tidak kongruen karena panjang sisi miring AC tidak diketahui."
        }
      ],
      "kunci": [
        "B"
      ],
      "aturanSkorAsal": "exact_match",
      "tingkatKesulitanAsal": "medium"
    }
  ],
  "sumberAsli": {
    "title": "Tryout TKA Matematika SMP",
    "subject": "Matematika",
    "level": "SMP/MTs",
    "total_questions": 30,
    "language": "id",
    "durasiMenit": null
  }
};
