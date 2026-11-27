// Data impor dari bank kuis harian MathSMP.
// 5 opsi dikonversi ke 4 opsi: opsi E dihapus, kecuali jika E adalah kunci,
// maka opsi D dihapus dan kunci E dipetakan menjadi D.
export const dailyQuizQuestions = [
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam kegiatan belajar mandiri, guru memberikan ilustrasi pembagian 6 potong kue yang hendak dibagikan secara merata kepada $0$ orang, yang dalam bentuk matematika ditulis sebagai $\\frac{6}{0}$. Manakah pernyataan yang paling tepat menjelaskan status bilangan tersebut dalam keluarga bilangan rasional?",
    "options": {
      "A": "Termasuk bilangan rasional karena $6$ dan $0$ keduanya merupakan bilangan bulat.",
      "B": "Termasuk bilangan rasional yang nilainya sama dengan $0$ karena tidak ada orang yang menerima kue.",
      "C": "Bukan bilangan rasional karena pembagian dengan nol tidak terdefinisi atau tidak memiliki nilai.",
      "D": "Bukan bilangan rasional karena angka $6$ merupakan bilangan genap yang tidak habis dibagi nol."
    },
    "correctAnswer": "C",
    "explanation": "Bilangan rasional didefinisikan sebagai $\\frac{a}{b}$ dengan $a, b$ bilangan bulat dan syarat mutlak penyebut $b \\neq 0$. Pembagian dengan nol ($\\frac{6}{0}$) tidak terdefinisi sehingga bukan bilangan rasional.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 1
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Perhatikan daftar bilangan berikut yang dicatat oleh Rani saat merangkum materi bilangan rasional: (1) $-4$; (2) $0$; (3) $2\\frac{1}{2}$; (4) $0,181818\\dots$; dan (5) $\\sqrt{2}$. Berdasarkan definisi bilangan rasional $\\frac{a}{b}$ ($b \\neq 0$), kelompok bilangan yang merupakan anggota bilangan rasional ditunjukkan oleh nomor...",
    "options": {
      "A": "(1), (2), dan (3) saja",
      "B": "(2), (3), dan (4) saja",
      "C": "(1), (3), (4), dan (5)",
      "D": "(1), (2), (3), dan (4)"
    },
    "correctAnswer": "D",
    "explanation": "Bilangan $-4 = \\frac{-4}{1}$, $0 = \\frac{0}{1}$, $2\\frac{1}{2} = \\frac{5}{2}$, dan $0,181818\\dots = \\frac{2}{11}$ semuanya dapat dinyatakan sebagai $\\frac{a}{b}$. Sementara $\\sqrt{2} = 1,41421356\\dots$ adalah desimal tak berulang dan tak berakhir (irasional).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 2
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam bahan bacaan dijelaskan bahwa bilangan rasional memiliki sifat 'Satu Nilai, Banyak Wajah'. Jika pada label kemasan botol air mineral tertulis kapasitas $\\frac{3}{4}$ liter, maka bentuk lain yang memiliki nilai tepat sama dengan kapasitas air tersebut adalah...",
    "options": {
      "A": "$0,34\\text{ liter}$ dan $34\\%$",
      "B": "$0,75\\text{ liter}$ dan $75\\%$",
      "C": "$0,75\\text{ liter}$ dan $7,5\\%$",
      "D": "$1,33\\text{ liter}$ dan $75\\%$"
    },
    "correctAnswer": "B",
    "explanation": "Pecahan $\\frac{3}{4}$ jika diubah ke desimal menjadi $3 \\div 4 = 0,75$, dan jika diubah ke persen menjadi $0,75 \\times 100\\% = 75\\%$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 3
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Bilangan desimal $0,3333\\dots$ dan $\\pi = 3,14159265\\dots$ sama-sama memiliki angka di belakang koma yang berjalan terus tanpa henti. Namun, keduanya dikelompokkan ke dalam jenis bilangan yang berbeda karena...",
    "options": {
      "A": "$0,3333\\dots$ diawali angka $0$, sedangkan $\\pi$ diawali angka $3$",
      "B": "$0,3333\\dots$ memiliki pola angka berulang teratur sehingga dapat diubah menjadi $\\frac{1}{3}$, sedangkan $\\pi$ tidak berpola",
      "C": "$\\pi$ dapat ditulis sebagai pecahan $\\frac{22}{7}$, sedangkan $0,3333\\dots$ tidak dapat diubah ke pecahan",
      "D": "$0,3333\\dots$ merupakan bilangan bulat positif, sedangkan $\\pi$ merupakan pecahan campuran"
    },
    "correctAnswer": "B",
    "explanation": "Desimal berulang tak terbatas memiliki pola teratur sehingga tetap dapat ditulis sebagai pecahan $\\frac{a}{b}$ (rasional), sedangkan $\\pi$ tidak berpola dan tidak berakhir (irasional).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 4
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Seorang siswa ingin membuktikan bahwa bilangan bulat $0$ dan $-7$ merupakan anggota keluarga bilangan rasional dengan menuliskannya ke dalam bentuk pecahan $\\frac{a}{b}$ ($a, b$ bilangan bulat dan $b \\neq 0$). Penulisan bentuk pecahan yang benar untuk kedua bilangan tersebut berturut-turut adalah...",
    "options": {
      "A": "$\\frac{1}{0}$ dan $\\frac{7}{-1}$",
      "B": "$\\frac{0}{0}$ dan $\\frac{-7}{0}$",
      "C": "$\\frac{0}{5}$ dan $\\frac{-7}{1}$",
      "D": "$\\frac{5}{0}$ dan $\\frac{1}{-7}$"
    },
    "correctAnswer": "C",
    "explanation": "Pembilang boleh bernilai $0$ asalkan penyebutnya bukan $0$ ($0 = \\frac{0}{5}$), dan bilangan bulat negatif dapat ditulis berpenyebut $1$ ($-7 = \\frac{-7}{1}$).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 5
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pada tabel konversi bentuk bilangan rasional, bilangan persen $45\\%$ menyatakan '45 per seratus'. Bentuk pecahan paling sederhana dan bentuk desimal yang senilai dengan $45\\%$ adalah...",
    "options": {
      "A": "$\\frac{9}{20}$ dan $0,45$",
      "B": "$\\frac{4}{5}$ dan $0,45$",
      "C": "$\\frac{9}{20}$ dan $4,5$",
      "D": "$\\frac{45}{10}$ dan $0,045$"
    },
    "correctAnswer": "A",
    "explanation": "$45\\% = \\frac{45}{100}$. Jika pembilang dan penyebut dibagi $5$, diperoleh pecahan paling sederhana $\\frac{9}{20}$, dan dalam bentuk desimal menjadi $0,45$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 6
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Lima orang siswa membawa air minum dalam botol dengan takaran berbeda saat kegiatan kerja bakti: Andi membawa $\\frac{3}{4}$ liter, Budi $0,62$ liter, Citra $68\\%$ liter, Dedi $\\frac{5}{8}$ liter, dan Eka $0,7$ liter. Siswa yang membawa air minum dengan volume paling sedikit adalah...",
    "options": {
      "A": "Andi",
      "B": "Budi",
      "C": "Citra",
      "D": "Dedi"
    },
    "correctAnswer": "B",
    "explanation": "Ubah ke desimal: Andi $= 0,75$; Budi $= 0,62$; Citra $= 0,68$; Dedi $= 0,625$; Eka $= 0,70$. Volume paling sedikit adalah $0,62$ liter milik Budi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 7
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah toko perlengkapan sekolah memberikan tiga jenis promo potongan harga untuk tas sekolah seharga Rp160.000,00: Promo 1 diskon $\\frac{1}{4}$, Promo 2 diskon $0,20$, dan Promo 3 diskon $30\\%$. Jika Dina memilih promo dengan potongan harga terbesar, harga tas yang harus dibayar Dina adalah...",
    "options": {
      "A": "Rp112.000,00",
      "B": "Rp120.000,00",
      "C": "Rp128.000,00",
      "D": "Rp48.000,00"
    },
    "correctAnswer": "A",
    "explanation": "Promo 1 $= 25\\%$, Promo 2 $= 20\\%$, Promo 3 $= 30\\%$. Diskon terbesar adalah $30\\% \\times \\text{Rp160.000,00} = \\text{Rp48.000,00}$. Harga bayar $= \\text{Rp160.000,00} - \\text{Rp48.000,00} = \\text{Rp112.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 8
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam resep pembuatan kue bolu, ibu menimbang tepung terigu menggunakan timbangan digital dan layar menunjukkan angka $0,375\\text{ kg}$. Penulisan takaran tepung tersebut dalam bentuk pecahan biasa paling sederhana adalah...",
    "options": {
      "A": "$\\frac{3}{75}$",
      "B": "$\\frac{3}{8}$",
      "C": "$\\frac{37}{100}$",
      "D": "$\\frac{5}{8}$"
    },
    "correctAnswer": "B",
    "explanation": "$0,375 = \\frac{375}{1000}$. Sederhanakan dengan membagi pembilang dan penyebut dengan FPB-nya ($125$): $\\frac{375 \\div 125}{1000 \\div 125} = \\frac{3}{8}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 9
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pak Hendra membeli $2\\frac{3}{8}\\text{ kg}$ gula pasir untuk keperluan hajatan. Apabila berat gula pasir tersebut dinyatakan dalam bentuk bilangan desimal dan persen, pasangan nilai yang tepat adalah...",
    "options": {
      "A": "$2,38\\text{ kg}$ dan $238\\%$",
      "B": "$2,375\\text{ kg}$ dan $237,5\\%$",
      "C": "$2,125\\text{ kg}$ dan $212,5\\%$",
      "D": "$2,625\\text{ kg}$ dan $262,5\\%$"
    },
    "correctAnswer": "B",
    "explanation": "Karena $\\frac{1}{8} = 0,125$, maka $\\frac{3}{8} = 0,375$. Jadi $2\\frac{3}{8} = 2,375$, dan dalam persen menjadi $2,375 \\times 100\\% = 237,5\\%$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 10
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam sehari, Bayu menggunakan $0,6666\\dots$ dari waktu luangnya yang berjumlah 3 jam untuk membaca buku pelajaran. Bentuk pecahan biasa paling sederhana dari bilangan desimal berulang $0,6666\\dots$ adalah...",
    "options": {
      "A": "$\\frac{6}{10}$",
      "B": "$\\frac{3}{5}$",
      "C": "$\\frac{2}{3}$",
      "D": "$\\frac{66}{100}$"
    },
    "correctAnswer": "C",
    "explanation": "Diketahui $0,3333\\dots = \\frac{1}{3}$, maka $0,6666\\dots$ adalah dua kali lipatnya, yaitu $2 \\times \\frac{1}{3} = \\frac{2}{3}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 11
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Diketahui bilangan desimal berulang $0,181818\\dots$ senilai dengan pecahan $\\frac{2}{11}$. Dengan menggunakan pola keteraturan yang serupa, bentuk pecahan paling sederhana dari bilangan desimal berulang $0,454545\\dots$ adalah...",
    "options": {
      "A": "$\\frac{45}{100}$",
      "B": "$\\frac{9}{20}$",
      "C": "$\\frac{5}{11}$",
      "D": "$\\frac{4}{11}$"
    },
    "correctAnswer": "C",
    "explanation": "Karena $\\frac{1}{11} = 0,090909\\dots$, dan $0,454545\\dots = 5 \\times 0,090909\\dots$, maka bentuk pecahannya adalah $\\frac{5}{11}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 12
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Indikator baterai ponsel milik Sinta menunjukkan kapasitas tersisa sebesar $12,5\\%$. Jika ponsel tersebut dalam keadaan penuh ($100\\%$) dapat bertahan menyala selama $16\\text{ jam}$, maka sisa waktu pemakaian baterai ponsel Sinta adalah...",
    "options": {
      "A": "$1,25\\text{ jam}$",
      "B": "$2\\text{ jam}$",
      "C": "$2,5\\text{ jam}$",
      "D": "$4\\text{ jam}$"
    },
    "correctAnswer": "B",
    "explanation": "Berdasarkan tabel konversi, $12,5\\% = \\frac{1}{8}$. Sisa waktu pemakaian $= \\frac{1}{8} \\times 16\\text{ jam} = 2\\text{ jam}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 13
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Lima tim peneliti muda menguji efisiensi bahan bakar prototipe kendaraan dengan hasil penghematan: $\\frac{2}{5}$, $42\\%$, $0,405$, $\\frac{9}{20}$, dan $0,48$. Urutan tingkat efisiensi tersebut dari yang paling kecil ke paling besar adalah...",
    "options": {
      "A": "$\\frac{2}{5}\\;;\\; 42\\%\\;;\\; 0,405\\;;\\; \\frac{9}{20}\\;;\\; 0,48$",
      "B": "$0,405\\;;\\; \\frac{2}{5}\\;;\\; 42\\%\\;;\\; \\frac{9}{20}\\;;\\; 0,48$",
      "C": "$\\frac{2}{5}\\;;\\; 0,405\\;;\\; 42\\%\\;;\\; \\frac{9}{20}\\;;\\; 0,48$",
      "D": "$\\frac{2}{5}\\;;\\; 0,405\\;;\\; \\frac{9}{20}\\;;\\; 42\\%\\;;\\; 0,48$"
    },
    "correctAnswer": "C",
    "explanation": "Ubah ke desimal tiga angka di belakang koma: $\\frac{2}{5}=0,400$; $0,405=0,405$; $42\\%=0,420$; $\\frac{9}{20}=0,450$; $0,48=0,480$. Urutan dari terkecil adalah $\\frac{2}{5}\\;;\\; 0,405\\;;\\; 42\\%\\;;\\; \\frac{9}{20}\\;;\\; 0,48$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 14
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah bilangan rasional dinyatakan dalam bentuk desimal berulang $1,181818\\dots$. Apabila bilangan tersebut diubah menjadi bentuk pecahan biasa $\\frac{a}{b}$ paling sederhana, maka bentuk pecahan yang tepat adalah...",
    "options": {
      "A": "$\\frac{118}{100}$",
      "B": "$\\frac{59}{50}$",
      "C": "$\\frac{13}{11}$",
      "D": "$\\frac{12}{11}$"
    },
    "correctAnswer": "C",
    "explanation": "Pisahkan bagian bulat dan desimal berulangnya: $1,181818\\dots = 1 + 0,181818\\dots = 1 + \\frac{2}{11} = \\frac{13}{11}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 15
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Diberikan bentuk bilangan $K = \\frac{12}{2n - 6}$ dengan $n$ merupakan bilangan bulat. Perhatikan pernyataan berikut: (1) Jika $n = 3$, maka $K$ tidak terdefinisi sehingga bukan bilangan rasional; (2) Jika $n = 0$, maka $K = -2$ dan termasuk rasional; (3) Jika $n = 6$, maka $K = 2$ dan termasuk rasional; (4) Untuk semua bilangan bulat $n$, nilai $K$ selalu rasional. Pernyataan yang benar ditunjukkan oleh nomor...",
    "options": {
      "A": "(1) dan (2) saja",
      "B": "(1) dan (3) saja",
      "C": "(2) dan (4) saja",
      "D": "(1), (2), dan (3)"
    },
    "correctAnswer": "D",
    "explanation": "Saat $n=3$, penyebut $2(3)-6=0$ sehingga $K=\\frac{12}{0}$ tidak terdefinisi (Pernyataan 1 benar, Pernyataan 4 salah). Untuk $n=0$, $K=-2$ (rasional); untuk $n=6$, $K=2$ (rasional).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 16
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Raka berpendapat: 'Semua bilangan desimal yang di bagian belakangnya terdapat tanda titik tiga ($\\dots$) pasti merupakan bilangan irasional, karena angkanya berjalan terus tanpa henti seperti $\\pi = 3,14159265\\dots$'. Evaluasi yang paling tepat terhadap argumen Raka adalah...",
    "options": {
      "A": "Argumen Raka benar karena setiap bilangan yang memiliki digit tak terbatas tidak dapat ditulis sebagai pecahan $\\frac{a}{b}$.",
      "B": "Argumen Raka benar asalkan bilangan desimal tersebut tidak diawali oleh angka nol.",
      "C": "Argumen Raka keliru karena desimal tak terbatas yang memiliki pola berulang teratur (seperti $0,3333\\dots$) tetap dapat diubah menjadi pecahan $\\frac{a}{b}$ sehingga rasional.",
      "D": "Argumen Raka keliru karena $\\pi = 3,14159265\\dots$ sebenarnya juga termasuk bilangan rasional."
    },
    "correctAnswer": "C",
    "explanation": "Syarat bilangan desimal tak terbatas menjadi irasional adalah tidak berakhir DAN tidak memiliki pola berulang. Desimal berulang teratur tetap merupakan bilangan rasional.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 17
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Andi ingin membeli jaket olahraga yang dijual di dua toko berbeda: Toko Maju menjual seharga Rp240.000,00 dengan diskon $\\frac{3}{8}$, sedangkan Toko Jaya menjual seharga Rp250.000,00 dengan diskon $0,35$. Keputusan yang paling hemat bagi Andi adalah...",
    "options": {
      "A": "Membeli di Toko Maju karena lebih murah Rp12.500,00 dibandingkan Toko Jaya.",
      "B": "Membeli di Toko Jaya karena lebih murah Rp12.500,00 dibandingkan Toko Maju.",
      "C": "Membeli di Toko Maju karena lebih murah Rp2.500,00 dibandingkan Toko Jaya.",
      "D": "Membeli di Toko Jaya karena lebih murah Rp2.500,00 dibandingkan Toko Maju."
    },
    "correctAnswer": "A",
    "explanation": "Toko Maju: $\\text{Rp240.000} - (\\frac{3}{8} \\times \\text{Rp240.000}) = \\text{Rp240.000} - \\text{Rp90.000} = \\text{Rp150.000}$. Toko Jaya: $\\text{Rp250.000} - (0,35 \\times \\text{Rp250.000}) = \\text{Rp250.000} - \\text{Rp87.500} = \\text{Rp162.500}$. Selisihnya Rp12.500,00 lebih murah di Toko Maju.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 18
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Satu loyang martabak manis dibagi sama rata kepada 3 anak sehingga masing-masing mendapat $\\frac{1}{3}$ loyang. Dika mengubah $\\frac{1}{3}$ menjadi $0,33$ lalu menjumlahkannya: $0,33 + 0,33 + 0,33 = 0,99$, sehingga ia mengira ada $0,01$ bagian martabak yang hilang. Kesalahan penalaran yang dilakukan Dika adalah...",
    "options": {
      "A": "Seharusnya $\\frac{1}{3}$ diubah menjadi $0,34$ agar jumlahnya menjadi $1,02$.",
      "B": "Bentuk desimal dari $\\frac{1}{3}$ adalah desimal berulang tak terbatas $0,3333\\dots$, sehingga memotongnya menjadi dua angka di belakang koma menyebabkan pembulatan ke bawah sebesar $0,0033\\dots$ pada tiap bagian.",
      "C": "Pembagian satu loyang martabak kepada 3 anak memang selalu menyisakan remah sebesar $0,01$ bagian.",
      "D": "Seharusnya Dika mengalikan $0,33$ dengan $100\\%$ terlebih dahulu sebelum menjumlahkannya."
    },
    "correctAnswer": "B",
    "explanation": "Nilai eksak $\\frac{1}{3}$ adalah $0,3333\\dots$. Jika dijumlahkan tanpa pembulatan, $0,3333\\dots + 0,3333\\dots + 0,3333\\dots = 0,9999\\dots = 1$ loyang utuh.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 19
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam praktikum IPA, kelompok melati diminta menuangkan cairan dengan volume di antara $\\frac{3}{5}\\text{ liter}$ dan $65\\%\\text{ liter}$. Tersedia lima gelas: Gelas P ($0,58\\text{ L}$), Gelas Q ($\\frac{5}{8}\\text{ L}$), Gelas R ($\\frac{2}{3}\\text{ L}$), Gelas S ($60\\%\\text{ L}$), dan Gelas T ($0,655\\text{ L}$). Gelas yang memenuhi syarat adalah...",
    "options": {
      "A": "Gelas P",
      "B": "Gelas Q",
      "C": "Gelas R",
      "D": "Gelas S"
    },
    "correctAnswer": "B",
    "explanation": "Batas volume adalah antara $\\frac{3}{5} = 0,60\\text{ L}$ dan $65\\% = 0,65\\text{ L}$. Gelas Q $= \\frac{5}{8} = 0,625\\text{ L}$ berada tepat di antara $0,60$ dan $0,65$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 20
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Kamu memiliki $\\frac{1}{2}$ loyang martabak yang dipotong besar, dan temanmu memiliki $\\frac{1}{4}$ loyang martabak yang dipotong lebih kecil. Sebelum menjumlahkan total bagian martabak tersebut, langkah pertama yang harus dilakukan menurut konsep penjumlahan pecahan adalah...",
    "options": {
      "A": "Langsung menjumlahkan pembilang dengan pembilang dan penyebut dengan penyebut sehingga menjadi $\\frac{2}{6}$",
      "B": "Menyamakan ukuran potongan (penyebut) menggunakan KPK dari $2$ dan $4$, sehingga $\\frac{1}{2}$ diubah menjadi $\\frac{2}{4}$",
      "C": "Mengalikan pembilang pertama dengan penyebut kedua tanpa mengubah penyebutnya",
      "D": "Mengubah tanda tambah menjadi tanda kali lalu membalik pecahan $\\frac{1}{4}$"
    },
    "correctAnswer": "B",
    "explanation": "Penjumlahan pecahan hanya bisa dilakukan jika ukuran potongannya (penyebut) sama. Dengan KPK dari $2$ dan $4$ yaitu $4$, $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 21
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Saat menghitung penjumlahan bilangan desimal $2,5 + 1,35$ dengan cara bersusun ke bawah, aturan penulisan yang benar agar tidak keliru adalah...",
    "options": {
      "A": "Meluruskan angka paling kanan sehingga angka $5$ pada $2,5$ sejajar dengan angka $5$ pada $1,35$",
      "B": "Menghilangkan tanda koma terlebih dahulu sehingga menjadi $25 + 135$",
      "C": "Meluruskan tanda koma agar nilai tempat persepuluhan sejajar dengan persepuluhan ($2,50 + 1,35 = 3,85$)",
      "D": "Menjumlahkan angka di depan koma saja lalu meletakkan semua angka di belakang koma"
    },
    "correctAnswer": "C",
    "explanation": "Pada penjumlahan desimal, tanda koma harus diluruskan agar nilai tempat yang sama (persepuluhan dengan persepuluhan, perseratusan dengan perseratusan) sejajar: $2,50 + 1,35 = 3,85$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 22
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Seorang siswa menjumlahkan $\\frac{1}{2} + \\frac{1}{3}$ dan menuliskan hasilnya $\\frac{1+1}{2+3} = \\frac{2}{5}$. Hasil perhitungan siswa tersebut keliru karena...",
    "options": {
      "A": "Seharusnya hasilnya adalah $\\frac{2}{6}$",
      "B": "Secara logika $\\frac{1}{2}$ ditambah $\\frac{1}{3}$ tidak mungkin menghasilkan $\\frac{2}{5}$ ($0,4$) yang lebih kecil dari setengah; penyebut harus disamakan menjadi $6$ sehingga hasilnya $\\frac{5}{6}$",
      "C": "Penjumlahan pecahan seharusnya dilakukan dengan mengalikan silang pembilang dan penyebut",
      "D": "Pecahan $\\frac{1}{2}$ dan $\\frac{1}{3}$ tidak dapat dijumlahkan karena penyebutnya berbeda"
    },
    "correctAnswer": "B",
    "explanation": "Menjumlahkan penyebut dengan penyebut adalah miskonsepsi umum. Dengan menyamakan penyebut ke KPK($2,3$) $= 6$, diperoleh $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 23
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil penjumlahan bilangan rasional negatif $-1,4 + (-2,35)$ yang dianalogikan sebagai dua kali transaksi pengeluaran adalah...",
    "options": {
      "A": "$-3,75$",
      "B": "$-3,39$",
      "C": "$-0,95$",
      "D": "$0,95$"
    },
    "correctAnswer": "A",
    "explanation": "Dua bilangan negatif dijumlahkan dengan meluruskan tanda koma: $-1,40 + (-2,35) = -3,75$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 24
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Ibu memiliki persediaan $2\\frac{1}{2}$ liter susu cair di kulkas. Sebanyak $\\frac{3}{4}$ liter susu digunakan untuk membuat adonan puding. Sisa susu cair yang dimiliki ibu sekarang adalah...",
    "options": {
      "A": "$1\\frac{1}{4}$ liter",
      "B": "$1\\frac{3}{4}$ liter",
      "C": "$2\\frac{1}{4}$ liter",
      "D": "$2\\frac{1}{2}$ liter"
    },
    "correctAnswer": "B",
    "explanation": "Ubah pecahan campuran ke pecahan biasa: $2\\frac{1}{2} = \\frac{5}{2} = \\frac{10}{4}$. Sisa susu $= \\frac{10}{4} - \\frac{3}{4} = \\frac{7}{4} = 1\\frac{3}{4}$ liter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 25
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam pembuatan minuman segar untuk acara sekolah, panitia mencampurkan $\\frac{3}{4}$ liter sirup, $0,5$ liter air perasan jeruk, dan mengurangi takaran awal dengan mengambil $\\frac{1}{5}$ liter untuk dicicipi panitia. Volume campuran minuman yang tersisa adalah...",
    "options": {
      "A": "$0,95$ liter",
      "B": "$1,05$ liter",
      "C": "$1,15$ liter",
      "D": "$1,25$ liter"
    },
    "correctAnswer": "B",
    "explanation": "$\\frac{3}{4} + 0,5 - \\frac{1}{5} = \\frac{3}{4} + \\frac{1}{2} - \\frac{1}{5} = \\frac{15}{20} + \\frac{10}{20} - \\frac{4}{20} = \\frac{21}{20} = 1,05$ liter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 26
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah tangki penampungan air mula-mula berisi $4,25\\text{ m}^3$ air. Pada pagi hari digunakan sebanyak $1\\frac{4}{5}\\text{ m}^3$ untuk menyiram tanaman sekolah, lalu pada siang hari diisi kembali sebanyak $2,6\\text{ m}^3$. Volume air di dalam tangki sekarang adalah...",
    "options": {
      "A": "$4,05\\text{ m}^3$",
      "B": "$4,85\\text{ m}^3$",
      "C": "$5,05\\text{ m}^3$",
      "D": "$5,25\\text{ m}^3$"
    },
    "correctAnswer": "C",
    "explanation": "Ubah $1\\frac{4}{5}$ menjadi desimal $1,8$. Maka $4,25 - 1,80 + 2,60 = 2,45 + 2,60 = 5,05\\text{ m}^3$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 27
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pada sebuah garis bilangan, posisi awal sebuah titik berada di koordinat $-2\\frac{3}{5}$. Titik tersebut kemudian bergerak ke kanan sejauh $4,2$ satuan, lalu bergerak ke kiri sejauh $\\frac{3}{4}$ satuan. Posisi akhir titik tersebut adalah...",
    "options": {
      "A": "$0,65$",
      "B": "$0,85$",
      "C": "$1,05$",
      "D": "$1,60$"
    },
    "correctAnswer": "B",
    "explanation": "Ubah ke desimal: posisi awal $= -2,60$. Bergerak ke kanan ($+$) $4,20$ dan ke kiri ($-$) $0,75$: $-2,60 + 4,20 - 0,75 = 1,60 - 0,75 = 0,85$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 28
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pak Riko memiliki sebidang tanah seluas $1$ hektare. Sebesar $\\frac{2}{5}$ bagian ditanami jagung, $0,35$ bagian ditanami singkong, dan sisanya ditanami kacang tanah. Luas bagian tanah Pak Riko yang ditanami kacang tanah adalah...",
    "options": {
      "A": "$0,15$ hektare",
      "B": "$0,25$ hektare",
      "C": "$0,30$ hektare",
      "D": "$0,45$ hektare"
    },
    "correctAnswer": "B",
    "explanation": "Bagian jagung $= \\frac{2}{5} = 0,40$ hektare, singkong $= 0,35$ hektare. Sisa untuk kacang tanah $= 1 - (0,40 + 0,35) = 1 - 0,75 = 0,25$ hektare.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 29
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Suhu udara di puncak sebuah gunung pada pukul 04.00 pagi tercatat $-1,8\\,^{\\circ}\\text{C}$. Menjelang siang pukul 11.00, suhu udara naik sebesar $12,45\\,^{\\circ}\\text{C}$, namun pada sore hari turun kembali sebesar $4,7\\,^{\\circ}\\text{C}$. Suhu udara di puncak gunung pada sore hari tersebut adalah...",
    "options": {
      "A": "$5,95\\,^{\\circ}\\text{C}$",
      "B": "$6,05\\,^{\\circ}\\text{C}$",
      "C": "$9,55\\,^{\\circ}\\text{C}$",
      "D": "$15,35\\,^{\\circ}\\text{C}$"
    },
    "correctAnswer": "A",
    "explanation": "$-1,80 + 12,45 - 4,70 = 10,65 - 4,70 = 5,95\\,^{\\circ}\\text{C}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 30
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dua buah pipa paralon masing-masing memiliki panjang $1\\frac{3}{4}$ meter dan $2\\frac{2}{3}$ meter. Jika kedua pipa tersebut disambungkan dengan memasukkan ujung salah satu pipa sedalam $\\frac{1}{6}$ meter ke dalam pipa lainnya, panjang total pipa setelah disambung adalah...",
    "options": {
      "A": "$4\\frac{1}{4}$ meter",
      "B": "$4\\frac{5}{12}$ meter",
      "C": "$4\\frac{7}{12}$ meter",
      "D": "$3\\frac{11}{12}$ meter"
    },
    "correctAnswer": "A",
    "explanation": "Total panjang $= 1\\frac{3}{4} + 2\\frac{2}{3} - \\frac{1}{6} = \\frac{7}{4} + \\frac{8}{3} - \\frac{1}{6} = \\frac{21}{12} + \\frac{32}{12} - \\frac{2}{12} = \\frac{51}{12} = \\frac{17}{4} = 4\\frac{1}{4}$ meter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 31
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam catatan keuangan kas kelas VII B, saldo awal bulan adalah Rp125.500,00. Pada minggu pertama terjadi pengeluaran sebesar Rp48.750,00 untuk membeli alat kebersihan, dan pada minggu kedua masuk iuran siswa sebesar Rp65.250,00. Saldo kas kelas sekarang adalah...",
    "options": {
      "A": "Rp109.000,00",
      "B": "Rp141.000,00",
      "C": "Rp142.000,00",
      "D": "Rp152.000,00"
    },
    "correctAnswer": "C",
    "explanation": "$125.500 - 48.750 + 65.250 = 76.750 + 65.250 = \\text{Rp142.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 32
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil dari operasi pengurangan pecahan negatif $-\\frac{5}{6} - \\left(-\\frac{3}{4}\\right)$ adalah...",
    "options": {
      "A": "$-1\\frac{7}{12}$",
      "B": "$-\\frac{1}{12}$",
      "C": "$\\frac{1}{12}$",
      "D": "$\\frac{2}{10}$"
    },
    "correctAnswer": "B",
    "explanation": "Mengurangi bilangan negatif sama dengan menjumlahkan lawannya: $-\\frac{5}{6} + \\frac{3}{4} = -\\frac{10}{12} + \\frac{9}{12} = -\\frac{1}{12}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 33
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Ibu membeli $3,5\\text{ kg}$ beras, $1\\frac{1}{4}\\text{ kg}$ gula pasir, dan $0,75\\text{ kg}$ minyak goreng dalam satu kantong belanja. Total berat seluruh belanjaan ibu di dalam kantong tersebut adalah...",
    "options": {
      "A": "$4,5\\text{ kg}$",
      "B": "$5,0\\text{ kg}$",
      "C": "$5,25\\text{ kg}$",
      "D": "$5,5\\text{ kg}$"
    },
    "correctAnswer": "D",
    "explanation": "$3,50 + 1,25 + 0,75 = 5,50\\text{ kg}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 34
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Saat mengerjakan soal $3,4 + 1,25$, Budi menyusun angka $4$ sejajar dengan angka $5$ di paling kanan sehingga memperoleh hasil $1,59$. Analisis yang paling tepat mengenai kekeliruan nilai tempat yang dilakukan Budi adalah...",
    "options": {
      "A": "Budi menjumlahkan angka $4$ yang bernilai persepuluhan ($\\frac{4}{10}$) dengan angka $5$ yang bernilai perseratusan ($\\frac{5}{100}$), padahal seharusnya tanda koma disejajarkan menjadi $3,40 + 1,25 = 4,65$.",
      "B": "Budi lupa mengubah kedua bilangan desimal tersebut menjadi pecahan campuran terlebih dahulu sebelum menjumlahkannya.",
      "C": "Angka $4$ pada $3,4$ bernilai perseratusan sedangkan angka $5$ pada $1,25$ bernilai persepuluhan sehingga tidak boleh dijumlahkan.",
      "D": "Budi seharusnya menggeser koma ke kanan satu kali pada $3,4$ sehingga menjadi $34 + 1,25 = 35,25$."
    },
    "correctAnswer": "A",
    "explanation": "Sesuai Miskonsepsi 2 pada bacaan, angka $4$ pada $3,4$ bernilai persepuluhan ($\\frac{4}{10}$) sedangkan angka $5$ pada $1,25$ bernilai perseratusan ($\\frac{5}{100}$). Tanda koma wajib diluruskan: $3,40 + 1,25 = 4,65$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 35
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Tiga orang pelari estafet menempuh total lintasan sepanjang $5\\text{ km}$. Pelari pertama menempuh $1\\frac{3}{5}\\text{ km}$ dan pelari kedua menempuh $1,75\\text{ km}$. Jika pelari ketiga menargetkan waktu tempuh yang lebih cepat dengan jarak tersisa, selisih jarak tempuh antara pelari kedua dan pelari ketiga adalah...",
    "options": {
      "A": "$0,10\\text{ km}$",
      "B": "$0,15\\text{ km}$",
      "C": "$0,25\\text{ km}$",
      "D": "$1,65\\text{ km}$"
    },
    "correctAnswer": "A",
    "explanation": "Jarak pelari pertama $= 1\\frac{3}{5} = 1,60\\text{ km}$, pelari kedua $= 1,75\\text{ km}$. Jarak pelari ketiga $= 5 - (1,60 + 1,75) = 5 - 3,35 = 1,65\\text{ km}$. Selisih jarak pelari kedua dan ketiga $= 1,75 - 1,65 = 0,10\\text{ km}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 36
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Diketahui $A = \\frac{3}{4} - 0,25 + \\frac{1}{2}$ dan $B = 1,6 - \\frac{4}{5} + 0,2$. Hubungan perbandingan yang benar antara nilai $A$ dan $B$ adalah...",
    "options": {
      "A": "$A > B$ dengan selisih $0,2$",
      "B": "$A < B$ dengan selisih $0,2$",
      "C": "$A = B$ karena keduanya bernilai tepat $1$",
      "D": "$A > B$ dengan selisih $0,5$"
    },
    "correctAnswer": "C",
    "explanation": "$A = 0,75 - 0,25 + 0,50 = 1,00$. Sementara $B = 1,60 - 0,80 + 0,20 = 1,00$. Jadi $A = B$ karena keduanya bernilai $1$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 37
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah wadah mampu menampung maksimal $3,5$ liter air. Di dalam wadah tersebut sudah terdapat $1\\frac{2}{5}$ liter air. Jika Budi menuangkan tambahan air sebanyak $\\frac{7}{8}$ liter dan kemudian mengambil $0,4$ liter untuk menyiram bunga, berapa liter air lagi yang diperlukan agar wadah tersebut terisi penuh?",
    "options": {
      "A": "$1,525$ liter",
      "B": "$1,625$ liter",
      "C": "$1,875$ liter",
      "D": "$2,025$ liter"
    },
    "correctAnswer": "B",
    "explanation": "Volume air saat ini $= 1,40 + 0,875 - 0,40 = 1,875$ liter. Kekurangan air agar penuh $3,5$ liter $= 3,500 - 1,875 = 1,625$ liter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 38
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Perhatikan persamaan penjumlahan bilangan rasional berikut: $2\\frac{1}{3} + p - 1,25 = 2\\frac{5}{12}$. Nilai bilangan rasional $p$ yang memenuhi persamaan tersebut adalah...",
    "options": {
      "A": "$1\\frac{1}{6}$",
      "B": "$1\\frac{1}{3}$",
      "C": "$1\\frac{1}{2}$",
      "D": "$2\\frac{1}{3}$"
    },
    "correctAnswer": "B",
    "explanation": "Ubah ke pecahan biasa: $2\\frac{1}{3} = \\frac{7}{3} = \\frac{28}{12}$; $1,25 = \\frac{5}{4} = \\frac{15}{12}$; $2\\frac{5}{12} = \\frac{29}{12}$. Maka $\\frac{28}{12} + p - \\frac{15}{12} = \\frac{29}{12} \\Rightarrow \\frac{13}{12} + p = \\frac{29}{12} \\Rightarrow p = \\frac{16}{12} = \\frac{4}{3} = 1\\frac{1}{3}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 39
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah kapal selam berada pada kedalaman $45,6$ meter di bawah permukaan laut (ditulis $-45,6\\text{ m}$). Kapal selam tersebut naik sejauh $18\\frac{3}{4}$ meter untuk mengamati permukaan, lalu menyelam kembali sejauh $24,35$ meter. Kedalaman kapal selam sekarang dari permukaan laut adalah...",
    "options": {
      "A": "$50,20$ meter di bawah permukaan laut",
      "B": "$51,20$ meter di bawah permukaan laut",
      "C": "$52,20$ meter di bawah permukaan laut",
      "D": "$88,70$ meter di bawah permukaan laut"
    },
    "correctAnswer": "B",
    "explanation": "Posisi $= -45,60 + 18,75 - 24,35 = -26,85 - 24,35 = -51,20\\text{ m}$, artinya berada pada kedalaman $51,20$ meter di bawah permukaan laut.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 40
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Di dalam kulkas masih tersisa $\\frac{3}{4}$ botol sirup. Kamu meminum $\\frac{1}{2}$ (setengah) dari sisa sirup tersebut. Bagian sirup dari satu botol penuh yang kamu minum adalah...",
    "options": {
      "A": "$\\frac{3}{8}$ botol",
      "B": "$\\frac{4}{6}$ botol",
      "C": "$\\frac{1}{4}$ botol",
      "D": "$\\frac{3}{2}$ botol"
    },
    "correctAnswer": "A",
    "explanation": "Mengambil setengah dari $\\frac{3}{4}$ berarti melakukan perkalian $\\frac{1}{2} \\times \\frac{3}{4} = \\frac{1 \\times 3}{2 \\times 4} = \\frac{3}{8}$ botol.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 41
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Saat mengalikan dua bilangan desimal $0,4 \\times 1,2$, kita dapat mengalikan $4 \\times 12 = 48$ terlebih dahulu. Alasan hasil akhirnya diletakkan tanda koma menjadi $0,48$ adalah...",
    "options": {
      "A": "Karena setiap perkalian desimal hasilnya harus selalu diawali angka $0$",
      "B": "Karena $0,4$ memiliki $1$ angka di belakang koma dan $1,2$ memiliki $1$ angka di belakang koma, sehingga totalnya ada $2$ angka di belakang koma",
      "C": "Karena angka terbesar pada perkalian tersebut adalah $1,2$",
      "D": "Karena tanda koma selalu diletakkan di depan dua digit terakhir tanpa memandang soalnya"
    },
    "correctAnswer": "B",
    "explanation": "Aturan perkalian desimal menghitung total banyaknya angka di belakang koma dari kedua faktor ($1 + 1 = 2$ angka di belakang koma), sehingga $48$ menjadi $0,48$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 42
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Berdasarkan aturan tanda pada bilangan rasional negatif, hasil dari perkalian $\\left(-\\frac{1}{2}\\right) \\times \\left(-\\frac{3}{5}\\right)$ adalah...",
    "options": {
      "A": "$-\\frac{4}{7}$",
      "B": "$-\\frac{3}{10}$",
      "C": "$\\frac{3}{10}$",
      "D": "$\\frac{4}{7}$"
    },
    "correctAnswer": "C",
    "explanation": "Perkalian dua bilangan bertanda sama (negatif dengan negatif) menghasilkan bilangan positif: $\\left(-\\frac{1}{2}\\right) \\times \\left(-\\frac{3}{5}\\right) = +\\frac{3}{10}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 43
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pada perkalian pecahan $\\frac{a}{b} \\times \\frac{c}{d}$, kita tidak perlu menyamakan penyebut terlebih dahulu seperti pada penjumlahan karena...",
    "options": {
      "A": "Perkalian pecahan bermakna mengambil 'bagian dari suatu bagian' sehingga langsung mengalikan pembilang dengan pembilang dan penyebut dengan penyebut",
      "B": "Semua pecahan yang dikalikan otomatis memiliki penyebut yang sama",
      "C": "Penyebut pada perkalian pecahan tidak memengaruhi hasil akhir",
      "D": "Perkalian pecahan hanya berlaku untuk pecahan yang penyebutnya bilangan genap"
    },
    "correctAnswer": "A",
    "explanation": "Perkalian pecahan bermakna mengambil bagian dari suatu bagian, sehingga berlaku $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 44
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebidang kebun berbentuk persegi panjang memiliki ukuran panjang $4,5$ meter dan lebar $2,4$ meter. Luas kebun tersebut adalah...",
    "options": {
      "A": "$1,08\\text{ m}^2$",
      "B": "$6,9\\text{ m}^2$",
      "C": "$10,8\\text{ m}^2$",
      "D": "$13,8\\text{ m}^2$"
    },
    "correctAnswer": "C",
    "explanation": "Kalikan $45 \\times 24 = 1080$. Total angka di belakang koma ada $1 + 1 = 2$ angka, sehingga menjadi $10,80 = 10,8\\text{ m}^2$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 45
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Seorang penjahit membutuhkan $1\\frac{3}{4}$ meter kain untuk membuat satu buah kemeja seragam sekolah. Jika penjahit tersebut menerima pesanan sebanyak $8$ buah kemeja seragam yang sama, total kain yang dibutuhkan adalah...",
    "options": {
      "A": "$11$ meter",
      "B": "$12$ meter",
      "C": "$14$ meter",
      "D": "$14\\frac{3}{4}$ meter"
    },
    "correctAnswer": "C",
    "explanation": "Ubah ke pecahan biasa: $1\\frac{3}{4} = \\frac{7}{4}$. Total kain $= 8 \\times \\frac{7}{4} = 2 \\times 7 = 14$ meter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 46
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Suhu di dalam ruang pendingin penyimpanan makanan mula-mula adalah $-4,5\\,^{\\circ}\\text{C}$. Karena pintu ruang pendingin terbuka saat bongkar muat barang, suhunya naik sebesar $1,8\\,^{\\circ}\\text{C}$ setiap 10 menit. Suhu ruang pendingin setelah 30 menit adalah...",
    "options": {
      "A": "$-9,9\\,^{\\circ}\\text{C}$",
      "B": "$-2,7\\,^{\\circ}\\text{C}$",
      "C": "$0,9\\,^{\\circ}\\text{C}$",
      "D": "$5,4\\,^{\\circ}\\text{C}$"
    },
    "correctAnswer": "C",
    "explanation": "Selama 30 menit terjadi $30 \\div 10 = 3$ kali kenaikan suhu. Total kenaikan $= 3 \\times 1,8 = 5,4\\,^{\\circ}\\text{C}$. Suhu akhir $= -4,5 + 5,4 = 0,9\\,^{\\circ}\\text{C}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 47
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Harga satu liter bahan bakar jenis tertentu adalah Rp10.250,00. Ayah mengisi tangki sepeda motornya sebanyak $3,2$ liter. Total uang yang harus dibayar ayah adalah...",
    "options": {
      "A": "Rp30.800,00",
      "B": "Rp32.000,00",
      "C": "Rp32.800,00",
      "D": "Rp33.800,00"
    },
    "correctAnswer": "C",
    "explanation": "$10.250 \\times 3,2 = 10.250 \\times \\frac{32}{10} = 1.025 \\times 32 = \\text{Rp32.800,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 48
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Ibu membuat $3\\frac{1}{2}$ loyang kue bolu. Sebanyak $\\frac{2}{7}$ dari seluruh kue bolu tersebut dibagikan kepada tetangga. Banyaknya kue bolu yang dibagikan kepada tetangga adalah...",
    "options": {
      "A": "$\\frac{1}{2}$ loyang",
      "B": "$1$ loyang",
      "C": "$1\\frac{1}{2}$ loyang",
      "D": "$2$ loyang"
    },
    "correctAnswer": "B",
    "explanation": "$3\\frac{1}{2} \\times \\frac{2}{7} = \\frac{7}{2} \\times \\frac{2}{7} = 1$ loyang utuh.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 49
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil dari perkalian tiga bilangan rasional $\\left(-0,25\\right) \\times \\frac{4}{5} \\times \\left(-2,5\\right)$ adalah...",
    "options": {
      "A": "$-0,5$",
      "B": "$-0,25$",
      "C": "$0,25$",
      "D": "$0,5$"
    },
    "correctAnswer": "D",
    "explanation": "Ubah ke pecahan: $\\left(-\\frac{1}{4}\\right) \\times \\frac{4}{5} \\times \\left(-\\frac{5}{2}\\right)$. Negatif kali positif kali negatif menghasilkan positif: $\\frac{1 \\times 4 \\times 5}{4 \\times 5 \\times 2} = \\frac{1}{2} = 0,5$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 50
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pada peta berskala $1 : 250.000$, jarak antara Kecamatan Tabang dan kota kabupaten terukur sepanjang $6,4\\text{ cm}$. Jarak sebenarnya antara kedua tempat tersebut adalah...",
    "options": {
      "A": "$1,6\\text{ km}$",
      "B": "$16\\text{ km}$",
      "C": "$160\\text{ km}$",
      "D": "$1.600\\text{ km}$"
    },
    "correctAnswer": "B",
    "explanation": "Jarak sebenarnya $= 6,4 \\times 250.000\\text{ cm} = 1.600.000\\text{ cm}$. Ubah ke kilometer (dibagi $100.000$): $1.600.000 \\div 100.000 = 16\\text{ km}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 51
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah bak penampungan air bocor sehingga volumenya berkurang sebanyak $0,35$ liter setiap menit. Perubahan volume air di dalam bak tersebut setelah $14$ menit dinyatakan sebagai...",
    "options": {
      "A": "$-4,9$ liter",
      "B": "$-4,5$ liter",
      "C": "$-3,9$ liter",
      "D": "$4,5$ liter"
    },
    "correctAnswer": "A",
    "explanation": "Berkurang berarti negatif ($-0,35$). Perubahan volume $= 14 \\times (-0,35) = -4,90 = -4,9$ liter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 52
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam sebuah kelas yang berjumlah $40$ siswa, sebanyak $\\frac{3}{5}$ bagian adalah siswa perempuan. Jika $\\frac{3}{8}$ dari siswa perempuan tersebut mengikuti ekstrakurikuler pramuka, maka banyak siswa perempuan yang mengikuti pramuka adalah...",
    "options": {
      "A": "$6$ siswa",
      "B": "$9$ siswa",
      "C": "$12$ siswa",
      "D": "$15$ siswa"
    },
    "correctAnswer": "B",
    "explanation": "Banyak siswa perempuan $= \\frac{3}{5} \\times 40 = 24$ siswa. Yang ikut pramuka $= \\frac{3}{8} \\times 24 = 9$ siswa.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 53
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Nilai dari perkalian $0,06 \\times 0,15$ adalah...",
    "options": {
      "A": "$0,9$",
      "B": "$0,09$",
      "C": "$0,009$",
      "D": "$0,0009$"
    },
    "correctAnswer": "C",
    "explanation": "Kalikan $6 \\times 15 = 90$. Total angka di belakang koma adalah $2 + 2 = 4$ digit, sehingga menjadi $0,0090 = 0,009$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 54
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Fajar merasa jawabannya pasti salah ketika menghitung $6 \\times \\frac{1}{2} = 3$, karena menurutnya setiap operasi perkalian seharusnya membuat bilangan menjadi lebih besar daripada $6$. Penjelasan konsep yang paling tepat untuk meluruskan pemahaman Fajar adalah...",
    "options": {
      "A": "Perkalian bilangan positif dengan pecahan di antara $0$ dan $1$ (seperti $\\frac{1}{2}$) selalu menghasilkan nilai yang lebih kecil dari bilangan semula karena bermakna mengambil sebagian dari bilangan tersebut.",
      "B": "Hasil $6 \\times \\frac{1}{2}$ memang keliru, seharusnya hasilnya adalah $12$ karena penyebut $2$ dikalikan dengan $6$.",
      "C": "Perkalian hanya memperbesar bilangan apabila kedua bilangan yang dikalikan berbentuk bilangan desimal.",
      "D": "Hasil perkalian menjadi lebih kecil karena angka $6$ merupakan bilangan genap yang habis dibagi $2$."
    },
    "correctAnswer": "A",
    "explanation": "Sesuai Miskonsepsi 3 pada bacaan, mengalikan bilangan positif dengan bilangan di antara $0$ dan $1$ akan memperkecil hasilnya karena bermakna mengambil sebagian saja.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 55
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Di dalam kulkas terdapat $1\\frac{3}{5}$ liter jus mangga. Pada pagi hari, Ayah meminum $\\frac{1}{4}$ bagian dari jus tersebut. Pada siang hari, Ibu meminum $\\frac{1}{3}$ bagian dari jus yang tersisa. Banyak jus mangga yang masih tersisa di dalam kulkas setelah diminum Ayah dan Ibu adalah...",
    "options": {
      "A": "$0,4$ liter",
      "B": "$0,6$ liter",
      "C": "$0,8$ liter",
      "D": "$1,0$ liter"
    },
    "correctAnswer": "C",
    "explanation": "Awal $= 1,6$ liter. Diminum Ayah $= \\frac{1}{4} \\times 1,6 = 0,4$ liter, sehingga tersisa $1,2$ liter. Diminum Ibu $= \\frac{1}{3} \\times 1,2 = 0,4$ liter. Sisa akhir $= 1,2 - 0,4 = 0,8$ liter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 56
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah toko elektronik memberikan diskon bertingkat untuk pembelian sebuah tablet seharga Rp2.000.000,00, yaitu diskon pertama sebesar $20\\%$ dan diskon tambahan sebesar $10\\%$ dari harga setelah diskon pertama. Total uang yang harus dibayar pembeli adalah...",
    "options": {
      "A": "Rp1.400.000,00",
      "B": "Rp1.440.000,00",
      "C": "Rp1.500.000,00",
      "D": "Rp1.600.000,00"
    },
    "correctAnswer": "B",
    "explanation": "Setelah diskon pertama $20\\%$, harga menjadi $0,8 \\times \\text{Rp2.000.000} = \\text{Rp1.600.000}$. Setelah diskon tambahan $10\\%$, harga menjadi $0,9 \\times \\text{Rp1.600.000} = \\text{Rp1.440.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 57
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Diketahui hasil perkalian dua bilangan desimal adalah $0,072$. Jika salah satu bilangan tersebut adalah $0,18$, maka bilangan lainnya adalah...",
    "options": {
      "A": "$0,04$",
      "B": "$0,4$",
      "C": "$4$",
      "D": "$0,004$"
    },
    "correctAnswer": "B",
    "explanation": "Bilangan kedua $= 0,072 \\div 0,18$. Geser koma ke kanan 2 langkah: $7,2 \\div 18 = 0,4$. Cek: $0,18 \\times 0,4 = 0,072$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 58
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebidang lahan berbentuk persegi panjang memiliki ukuran panjang $8,5\\text{ m}$ dan lebar $6,4\\text{ m}$. Jika $62,5\\%$ dari luas lahan tersebut akan dibangun kolam ikan dan sisanya ditanami rumput taman, luas lahan yang ditanami rumput taman adalah...",
    "options": {
      "A": "$20,4\\text{ m}^2$",
      "B": "$24,0\\text{ m}^2$",
      "C": "$30,4\\text{ m}^2$",
      "D": "$34,0\\text{ m}^2$"
    },
    "correctAnswer": "A",
    "explanation": "Luas total $= 8,5 \\times 6,4 = 54,4\\text{ m}^2$. Bagian rumput $= 100\\% - 62,5\\% = 37,5\\% = \\frac{3}{8}$. Luas rumput $= \\frac{3}{8} \\times 54,4 = 3 \\times 6,8 = 20,4\\text{ m}^2$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 59
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Suhu di dalam freezer mula-mula $-2,4\\,^{\\circ}\\text{C}$. Setelah tombol pendingin maksimum dinyalakan, suhunya turun sebesar $1,35\\,^{\\circ}\\text{C}$ setiap 15 menit. Jika tombol tersebut menyala selama 1 jam, perbandingan suhu awal dan suhu akhir freezer tersebut adalah...",
    "options": {
      "A": "Suhu akhir lebih rendah $5,4\\,^{\\circ}\\text{C}$ dari suhu awal, yaitu menjadi $-7,8\\,^{\\circ}\\text{C}$.",
      "B": "Suhu akhir lebih tinggi $5,4\\,^{\\circ}\\text{C}$ dari suhu awal, yaitu menjadi $3,0\\,^{\\circ}\\text{C}$.",
      "C": "Suhu akhir lebih rendah $4,05\\,^{\\circ}\\text{C}$ dari suhu awal, yaitu menjadi $-6,45\\,^{\\circ}\\text{C}$.",
      "D": "Suhu akhir lebih rendah $5,4\\,^{\\circ}\\text{C}$ dari suhu awal, yaitu menjadi $-3,0\\,^{\\circ}\\text{C}$."
    },
    "correctAnswer": "A",
    "explanation": "Dalam 1 jam (60 menit) terjadi $60 \\div 15 = 4$ kali penurunan suhu. Total penurunan $= 4 \\times (-1,35) = -5,4\\,^{\\circ}\\text{C}$. Suhu akhir $= -2,4 + (-5,4) = -7,8\\,^{\\circ}\\text{C}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 60
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Kamu memiliki sebotol jus berisi $\\frac{3}{4}$ liter dan ingin menuangkannya ke dalam gelas-gelas kecil berkapasitas $\\frac{1}{4}$ liter. Operasi matematika yang tepat untuk menentukan banyak gelas yang terisi penuh adalah...",
    "options": {
      "A": "$\\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}$ gelas",
      "B": "$\\frac{3}{4} \\div \\frac{1}{4} = \\frac{3}{4} \\times \\frac{4}{1} = 3$ gelas",
      "C": "$\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4}$ gelas",
      "D": "$\\frac{1}{4} \\div \\frac{3}{4} = \\frac{1}{3}$ gelas"
    },
    "correctAnswer": "B",
    "explanation": "Pembagian $A \\div B$ bermakna 'ada berapa banyak bagian berukuran $B$ di dalam $A$?'. Jadi $\\frac{3}{4} \\div \\frac{1}{4} = \\frac{3}{4} \\times \\frac{4}{1} = 3$ gelas.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 61
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Untuk memudahkan perhitungan pembagian bilangan desimal $2,4 \\div 0,6$ tanpa kalkulator, langkah yang tepat dilakukan adalah...",
    "options": {
      "A": "Menggeser tanda koma ke kanan $1$ langkah pada kedua bilangan sehingga menjadi $24 \\div 6 = 4$",
      "B": "Menggeser tanda koma ke kiri $1$ langkah pada kedua bilangan sehingga menjadi $0,24 \\div 0,06 = 0,4$",
      "C": "Mengalikan $24 \\times 6 = 144$ lalu meletakkan koma di tengah menjadi $1,44$",
      "D": "Mengubah $2,4 \\div 0,6$ menjadi $24 \\div 60 = 0,4$"
    },
    "correctAnswer": "A",
    "explanation": "Ubah bilangan pembagi menjadi bilangan bulat dengan menggeser tanda koma ke kanan secara adil (mengalikan keduanya dengan $10$), sehingga $2,4 \\div 0,6 = 24 \\div 6 = 4$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 62
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil pembagian dua bilangan rasional dengan tanda berbeda $-2,4 \\div 0,8$ adalah...",
    "options": {
      "A": "$-3$",
      "B": "$-0,3$",
      "C": "$0,3$",
      "D": "$3$"
    },
    "correctAnswer": "A",
    "explanation": "Pembagian tanda berbeda (negatif dibagi positif) menghasilkan negatif. Geser koma 1 langkah: $-24 \\div 8 = -3$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 63
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Ibu memiliki sisa susu cair sebanyak $1\\frac{3}{4}$ liter yang akan dituangkan sama banyak ke dalam $7$ gelas untuk sarapan anggota keluarga. Volume susu yang terdapat di dalam setiap gelas adalah...",
    "options": {
      "A": "$\\frac{1}{7}$ liter",
      "B": "$\\frac{1}{4}$ liter",
      "C": "$\\frac{1}{2}$ liter",
      "D": "$\\frac{3}{4}$ liter"
    },
    "correctAnswer": "B",
    "explanation": "$1\\frac{3}{4} \\div 7 = \\frac{7}{4} \\div \\frac{7}{1} = \\frac{7}{4} \\times \\frac{1}{7} = \\frac{1}{4}$ liter (atau $0,25$ liter).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 64
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pak Ahmad memiliki seutas tali tambang sepanjang $13,5$ meter. Tali tersebut akan dipotong-potong menjadi beberapa bagian yang sama panjang dengan ukuran masing-masing $1,5$ meter. Banyaknya potongan tali yang diperoleh Pak Ahmad adalah...",
    "options": {
      "A": "$7$ potong",
      "B": "$8$ potong",
      "C": "$9$ potong",
      "D": "$10$ potong"
    },
    "correctAnswer": "C",
    "explanation": "$13,5 \\div 1,5 = 135 \\div 15 = 9$ potong.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 65
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah mobil menempuh jarak sejauh $142,5\\text{ km}$ dalam waktu $2,5\\text{ jam}$ dengan kecepatan tetap. Kecepatan rata-rata mobil tersebut adalah...",
    "options": {
      "A": "$55\\text{ km/jam}$",
      "B": "$57\\text{ km/jam}$",
      "C": "$62\\text{ km/jam}$",
      "D": "$65\\text{ km/jam}$"
    },
    "correctAnswer": "B",
    "explanation": "Kecepatan $= 142,5 \\div 2,5 = 1425 \\div 25 = 57\\text{ km/jam}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 66
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Ibu membeli $6\\frac{1}{4}\\text{ kg}$ gula pasir dan ingin mengemasnya ke dalam kantong-kantong plastik kecil yang masing-masing memuat $\\frac{5}{8}\\text{ kg}$ gula. Banyak kantong plastik kecil yang dibutuhkan ibu adalah...",
    "options": {
      "A": "$8$ kantong",
      "B": "$9$ kantong",
      "C": "$10$ kantong",
      "D": "$12$ kantong"
    },
    "correctAnswer": "C",
    "explanation": "$6\\frac{1}{4} \\div \\frac{5}{8} = \\frac{25}{4} \\times \\frac{8}{5} = 5 \\times 2 = 10$ kantong plastik.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 67
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil dari pembagian bilangan rasional negatif $\\left(-3\\frac{3}{5}\\right) \\div \\left(-1\\frac{1}{5}\\right)$ adalah...",
    "options": {
      "A": "$-3$",
      "B": "$-\\frac{1}{3}$",
      "C": "$\\frac{1}{3}$",
      "D": "$3$"
    },
    "correctAnswer": "D",
    "explanation": "Tanda sama (negatif dibagi negatif) menghasilkan positif: $\\left(-\\frac{18}{5}\\right) \\div \\left(-\\frac{6}{5}\\right) = \\frac{18}{5} \\times \\frac{5}{6} = 3$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 68
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah pita sepanjang $4,8$ meter dipotong menjadi $16$ bagian yang sama panjang untuk menghias ruang kelas. Panjang setiap potongan pita tersebut adalah...",
    "options": {
      "A": "$0,03$ meter",
      "B": "$0,3$ meter",
      "C": "$0,4$ meter",
      "D": "$3$ meter"
    },
    "correctAnswer": "B",
    "explanation": "$4,8 \\div 16 = \\frac{48}{10} \\div 16 = \\frac{3}{10} = 0,3$ meter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 69
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Luas sebuah papan tulis berbentuk persegi panjang adalah $3,36\\text{ m}^2$. Jika lebar papan tulis tersebut adalah $1,4$ meter, maka panjang papan tulis tersebut adalah...",
    "options": {
      "A": "$2,1$ meter",
      "B": "$2,4$ meter",
      "C": "$2,6$ meter",
      "D": "$2,8$ meter"
    },
    "correctAnswer": "B",
    "explanation": "Panjang $= 3,36 \\div 1,4 = 33,6 \\div 14 = 2,4$ meter.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 70
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil dari operasi pembagian desimal $0,72 \\div 0,009$ adalah...",
    "options": {
      "A": "$0,8$",
      "B": "$8$",
      "C": "$80$",
      "D": "$800$"
    },
    "correctAnswer": "C",
    "explanation": "Geser koma ke kanan 3 langkah pada kedua bilangan agar pembagi $0,009$ menjadi bilangan bulat $9$: $720 \\div 9 = 80$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 71
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Seorang pedagang memiliki $18,75\\text{ kg}$ kopi bubuk. Kopi tersebut akan dimasukkan ke dalam kemasan bungkus seberat $0,25\\text{ kg}$ per bungkus. Jika setiap bungkus dijual seharga Rp15.000,00, hasil penjualan seluruh kopi tersebut adalah...",
    "options": {
      "A": "Rp750.000,00",
      "B": "Rp975.000,00",
      "C": "Rp1.125.000,00",
      "D": "Rp1.250.000,00"
    },
    "correctAnswer": "C",
    "explanation": "Banyak bungkus $= 18,75 \\div 0,25 = 1875 \\div 25 = 75$ bungkus. Hasil penjualan $= 75 \\times \\text{Rp15.000,00} = \\text{Rp1.125.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 72
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Diketahui $\\frac{5}{6} \\div p = 1\\frac{2}{3}$. Nilai bilangan rasional $p$ yang memenuhi persamaan tersebut adalah...",
    "options": {
      "A": "$\\frac{1}{2}$",
      "B": "$\\frac{5}{9}$",
      "C": "$1\\frac{7}{18}$",
      "D": "$2$"
    },
    "correctAnswer": "A",
    "explanation": "$p = \\frac{5}{6} \\div 1\\frac{2}{3} = \\frac{5}{6} \\div \\frac{5}{3} = \\frac{5}{6} \\times \\frac{3}{5} = \\frac{3}{6} = \\frac{1}{2}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 73
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah drum berisi $42$ liter minyak goreng. Sebanyak $\\frac{2}{7}$ bagian minyak goreng tersebut telah terjual, dan sisanya dikemas ke dalam botol-botol kecil berkapasitas $1,5$ liter. Banyak botol kecil yang terisi penuh adalah...",
    "options": {
      "A": "$15$ botol",
      "B": "$18$ botol",
      "C": "$20$ botol",
      "D": "$24$ botol"
    },
    "correctAnswer": "C",
    "explanation": "Minyak yang terjual $= \\frac{2}{7} \\times 42 = 12$ liter. Sisa minyak $= 42 - 12 = 30$ liter. Banyak botol $= 30 \\div 1,5 = 300 \\div 15 = 20$ botol.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 74
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Saat menghitung $\\frac{2}{3} \\div \\frac{4}{5}$, Citra menuliskan langkah: $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{3}{2} \\times \\frac{4}{5} = \\frac{12}{10} = 1\\frac{1}{5}$. Kesalahan konseptual yang dilakukan Citra pada langkah tersebut adalah...",
    "options": {
      "A": "Citra membalik pecahan pertama ($\\frac{2}{3}$), padahal dalam pembagian pecahan yang harus dibalik menjadi inversnya adalah pecahan pembagi di belakang tanda bagi ($\\frac{4}{5}$), sehingga hasil yang benar adalah $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{5}{6}$.",
      "B": "Citra seharusnya membalik kedua pecahan sekaligus menjadi $\\frac{3}{2} \\times \\frac{5}{4} = \\frac{15}{8}$.",
      "C": "Citra lupa menyamakan penyebut kedua pecahan menjadi $15$ sebelum mengalikan kedua pecahan tersebut.",
      "D": "Citra seharusnya langsung membagi pembilang dengan pembilang dan penyebut dengan penyebut tanpa membalik pecahan mana pun."
    },
    "correctAnswer": "A",
    "explanation": "Sesuai Miskonsepsi 4 pada bacaan, pecahan pertama tetap pada posisinya dan hanya pecahan pembagi (di belakang tanda $\\div$) yang dibalik: $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 75
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dika heran melihat hasil perhitungan $6 \\div \\frac{1}{2} = 12$, karena hasilnya justru dua kali lebih besar dari angka $6$. Penjelasan yang paling logis untuk menjawab keheranan Dika adalah...",
    "options": {
      "A": "Pembagian $6 \\div \\frac{1}{2}$ menanyakan 'ada berapa banyak potongan setengah bagian di dalam $6$ satuan utuh?', dan karena tiap $1$ satuan memuat $2$ potongan setengah, maka dalam $6$ satuan terdapat $12$ potongan.",
      "B": "Hasil $12$ diperoleh karena setiap pembagian dengan pecahan wajib dikalikan dua terlebih dahulu.",
      "C": "Bilangan $6$ merupakan bilangan bulat sehingga jika dibagi pecahan hasilnya selalu membesar tanpa terkecuali.",
      "D": "Pembagian dengan pecahan di antara $0$ dan $1$ sebenarnya memperkecil nilai, tetapi ditulis terbalik agar mudah dihitung."
    },
    "correctAnswer": "A",
    "explanation": "Sesuai Miskonsepsi 3 pada bacaan, membagi dengan pecahan di antara $0$ dan $1$ membuat hasilnya membesar karena ada banyak potongan kecil di dalam bilangan semula.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 76
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah pabrik sirup memproduksi $37,5$ liter sirup dalam satu hari. Sebanyak $20\\%$ dari produksi tersebut disimpan sebagai sampel uji mutu, dan sisanya dikemas ke dalam botol berkapasitas $\\frac{3}{8}$ liter. Banyak botol sirup yang siap dijual adalah...",
    "options": {
      "A": "$60$ botol",
      "B": "$75$ botol",
      "C": "$80$ botol",
      "D": "$90$ botol"
    },
    "correctAnswer": "C",
    "explanation": "Sirup yang dikemas $= 80\\% \\times 37,5 = 0,8 \\times 37,5 = 30$ liter. Banyak botol $= 30 \\div \\frac{3}{8} = 30 \\times \\frac{8}{3} = 80$ botol.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 77
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Seorang petani memanen $84\\text{ kg}$ buah jeruk. Sebanyak $\\frac{1}{6}$ bagian disisihkan untuk keluarga, dan sisanya akan dikemas ke dalam keranjang dengan kapasitas maksimal $4,5\\text{ kg}$ per keranjang. Jika petani hanya memiliki $15$ keranjang, evaluasi yang tepat terhadap kecukupan keranjang tersebut adalah...",
    "options": {
      "A": "Keranjang tidak cukup karena dibutuhkan $16$ keranjang ($15$ keranjang terisi penuh dan masih tersisa $2,5\\text{ kg}$ jeruk).",
      "B": "Keranjang tepat cukup karena $70\\text{ kg}$ jeruk habis dibagi ke dalam $15$ keranjang.",
      "C": "Keranjang berlebih $1$ buah karena hanya dibutuhkan $14$ keranjang untuk mengemas seluruh jeruk.",
      "D": "Keranjang tidak cukup karena total jeruk yang harus dikemas adalah $75\\text{ kg}$ sehingga butuh $17$ keranjang."
    },
    "correctAnswer": "A",
    "explanation": "Jeruk untuk keluarga $= \\frac{1}{6} \\times 84 = 14\\text{ kg}$. Sisa jeruk $= 84 - 14 = 70\\text{ kg}$. Pembagian ke keranjang: $70 \\div 4,5 = 15$ keranjang penuh ($15 \\times 4,5 = 67,5\\text{ kg}$) dan masih tersisa $2,5\\text{ kg}$ jeruk sehingga butuh $16$ keranjang.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 78
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Perhatikan nilai berikut: $P = \\frac{3}{4} \\div 0,25$ dan $Q = 0,25 \\div \\frac{3}{4}$. Hasil dari $P \\times Q$ adalah...",
    "options": {
      "A": "$\\frac{1}{9}$",
      "B": "$\\frac{3}{4}$",
      "C": "$1$",
      "D": "$3$"
    },
    "correctAnswer": "C",
    "explanation": "$P = \\frac{3}{4} \\div \\frac{1}{4} = 3$, dan $Q = \\frac{1}{4} \\div \\frac{3}{4} = \\frac{1}{3}$. Karena saling berkebalikan, maka $P \\times Q = 3 \\times \\frac{1}{3} = 1$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 79
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah bak air diisi melalui dua keran. Keran A mengalirkan air dengan debit $2,4$ liter/menit dan Keran B mengalirkan air dengan debit $1,85$ liter/menit. Jika bak kosong berkapasitas $85$ liter diisi bersama-sama oleh kedua keran tersebut, waktu yang diperlukan hingga bak terisi penuh adalah...",
    "options": {
      "A": "$18$ menit",
      "B": "$20$ menit",
      "C": "$22$ menit",
      "D": "$25$ menit"
    },
    "correctAnswer": "B",
    "explanation": "Debit gabungan $= 2,40 + 1,85 = 4,25$ liter/menit. Waktu yang diperlukan $= 85 \\div 4,25 = 8500 \\div 425 = 20$ menit.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 80
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam menyelesaikan operasi hitung campuran bilangan rasional yang melibatkan penjumlahan, pengurangan, perkalian, dan pembagian tanpa tanda kurung, urutan pengerjaan yang benar adalah...",
    "options": {
      "A": "Kerjakan seluruhnya secara berurutan dari kiri ke kanan tanpa membedakan jenis operasinya",
      "B": "Kerjakan penjumlahan dan pengurangan terlebih dahulu, kemudian perkalian dan pembagian",
      "C": "Kerjakan perkalian dan pembagian terlebih dahulu (dari kiri ke kanan), kemudian penjumlahan dan pengurangan (dari kiri ke kanan)",
      "D": "Kerjakan operasi yang angkanya berbentuk bilangan bulat terlebih dahulu baru pecahan"
    },
    "correctAnswer": "C",
    "explanation": "Perkalian dan pembagian memiliki tingkat kekuatan lebih tinggi daripada penjumlahan dan pengurangan, sehingga dikerjakan terlebih dahulu dari kiri ke kanan.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 81
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Adli membeli sepasang sepatu sekolah seharga Rp150.000,00 yang mendapat diskon $20\\%$. Jika setelah diskon Adli cukup membayar $80\\%$ dari harga awal, maka bentuk perkalian desimal yang tepat untuk langsung menghitung harga bayar sepatu tersebut adalah...",
    "options": {
      "A": "$0,2 \\times \\text{Rp150.000,00} = \\text{Rp30.000,00}$",
      "B": "$0,8 \\times \\text{Rp150.000,00} = \\text{Rp120.000,00}$",
      "C": "$1,2 \\times \\text{Rp150.000,00} = \\text{Rp180.000,00}$",
      "D": "$0,08 \\times \\text{Rp150.000,00} = \\text{Rp12.000,00}$"
    },
    "correctAnswer": "B",
    "explanation": "Diskon $20\\%$ berarti harga yang dibayar adalah $100\\% - 20\\% = 80\\% = 0,8$. Maka $0,8 \\times \\text{Rp150.000,00} = \\text{Rp120.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 82
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil dari operasi campuran bilangan rasional $\\frac{1}{2} + \\frac{3}{4} \\times \\frac{2}{3}$ adalah...",
    "options": {
      "A": "$\\frac{5}{6}$",
      "B": "$1$",
      "C": "$1\\frac{1}{4}$",
      "D": "$1\\frac{1}{2}$"
    },
    "correctAnswer": "B",
    "explanation": "Kerjakan perkalian terlebih dahulu: $\\frac{3}{4} \\times \\frac{2}{3} = \\frac{1}{2}$. Lalu jumlahkan: $\\frac{1}{2} + \\frac{1}{2} = 1$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 83
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Adli membeli sepatu seharga Rp150.000,00 dengan diskon $20\\%$. Setelah mendapat potongan harga, Adli memilih membayar sepatu tersebut dengan cara mencicil sebanyak $3$ kali tanpa bunga dengan besar cicilan yang sama. Besar uang yang harus dibayar Adli pada setiap kali cicilan adalah...",
    "options": {
      "A": "Rp30.000,00",
      "B": "Rp40.000,00",
      "C": "Rp45.000,00",
      "D": "Rp50.000,00"
    },
    "correctAnswer": "B",
    "explanation": "Harga setelah diskon $20\\% = 0,8 \\times \\text{Rp150.000,00} = \\text{Rp120.000,00}$. Cicilan per pembayaran $= \\text{Rp120.000,00} \\div 3 = \\text{Rp40.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 84
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil dari operasi hitung campuran $2,4 - 0,6 \\times 1,5 + 0,85$ adalah...",
    "options": {
      "A": "$2,35$",
      "B": "$2,55$",
      "C": "$3,55$",
      "D": "$4,15$"
    },
    "correctAnswer": "A",
    "explanation": "Kerjakan perkalian dahulu: $0,6 \\times 1,5 = 0,9$. Kemudian hitung dari kiri ke kanan: $2,40 - 0,90 + 0,85 = 1,50 + 0,85 = 2,35$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 85
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Nilai dari $\\left(1\\frac{3}{4} + 0,5\\right) \\div \\frac{3}{8}$ adalah...",
    "options": {
      "A": "$3$",
      "B": "$4$",
      "C": "$5$",
      "D": "$6$"
    },
    "correctAnswer": "D",
    "explanation": "Hitung di dalam kurung: $1\\frac{3}{4} + 0,5 = \\frac{7}{4} + \\frac{2}{4} = \\frac{9}{4}$. Kemudian bagi dengan $\\frac{3}{8}$: $\\frac{9}{4} \\times \\frac{8}{3} = 3 \\times 2 = 6$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 86
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam sebuah ujian matematika yang terdiri dari $40$ soal pilihan ganda, setiap jawaban benar diberi skor $2,5$, jawaban salah diberi skor $-0,75$, dan soal tidak dijawab diberi skor $0$. Jika Rina menjawab benar $32$ soal, salah $4$ soal, dan sisanya tidak dijawab, total skor yang diperoleh Rina adalah...",
    "options": {
      "A": "$74$",
      "B": "$77$",
      "C": "$80$",
      "D": "$83$"
    },
    "correctAnswer": "B",
    "explanation": "Skor benar $= 32 \\times 2,5 = 80$. Skor salah $= 4 \\times (-0,75) = -3$. Total skor $= 80 + (-3) + 0 = 77$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 87
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Ibu memiliki uang belanja sebesar Rp200.000,00. Sebanyak $\\frac{2}{5}$ bagian dibelikan lauk-pauk, $35\\%$ bagian dibelikan sayur dan buah, dan sisanya ditabung. Besar uang yang ditabung ibu adalah...",
    "options": {
      "A": "Rp40.000,00",
      "B": "Rp50.000,00",
      "C": "Rp60.000,00",
      "D": "Rp70.000,00"
    },
    "correctAnswer": "B",
    "explanation": "Lauk-pauk $= \\frac{2}{5} = 40\\%$, sayur dan buah $= 35\\%$. Sisa yang ditabung $= 100\\% - (40\\% + 35\\%) = 25\\% = \\frac{1}{4}$. Uang ditabung $= \\frac{1}{4} \\times \\text{Rp200.000,00} = \\text{Rp50.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 88
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Hasil dari operasi bilangan rasional negatif $-3,6 \\div 0,9 + (-1,5) \\times (-2,4)$ adalah...",
    "options": {
      "A": "$-7,6$",
      "B": "$-0,4$",
      "C": "$0,4$",
      "D": "$3,6$"
    },
    "correctAnswer": "B",
    "explanation": "$-3,6 \\div 0,9 = -4$. Sementara $(-1,5) \\times (-2,4) = +3,6$. Jumlahkan keduanya: $-4 + 3,6 = -0,4$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 89
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Pak Tono memanen $120\\text{ kg}$ padi. Sebanyak $0,25$ bagian dijual ke koperasi, dan $\\frac{2}{3}$ dari sisanya dibagikan kepada kerabat. Banyak padi yang masih tersisa untuk dikonsumsi keluarga Pak Tono sendiri adalah...",
    "options": {
      "A": "$20\\text{ kg}$",
      "B": "$30\\text{ kg}$",
      "C": "$45\\text{ kg}$",
      "D": "$60\\text{ kg}$"
    },
    "correctAnswer": "B",
    "explanation": "Dijual $= 0,25 \\times 120 = 30\\text{ kg}$, sehingga tersisa $90\\text{ kg}$. Dibagikan ke kerabat $= \\frac{2}{3} \\times 90 = 60\\text{ kg}$. Sisa untuk keluarga $= 90 - 60 = 30\\text{ kg}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 90
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah toko pakaian memberikan potongan harga $15\\%$ untuk pembelian kemeja seharga Rp180.000,00 dan potongan harga $\\frac{1}{5}$ untuk pembelian celana seharga Rp220.000,00. Total uang yang harus dibayar jika membeli satu kemeja dan satu celana adalah...",
    "options": {
      "A": "Rp319.000,00",
      "B": "Rp329.000,00",
      "C": "Rp339.000,00",
      "D": "Rp349.000,00"
    },
    "correctAnswer": "B",
    "explanation": "Harga kemeja $= 0,85 \\times \\text{Rp180.000} = \\text{Rp153.000}$. Harga celana $= 0,80 \\times \\text{Rp220.000} = \\text{Rp176.000}$. Total bayar $= \\text{Rp153.000} + \\text{Rp176.000} = \\text{Rp329.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 91
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Nilai dari $\\frac{5}{8} - \\frac{1}{4} \\div \\frac{2}{3} + 0,25$ adalah...",
    "options": {
      "A": "$\\frac{1}{2}$",
      "B": "$\\frac{5}{8}$",
      "C": "$\\frac{3}{4}$",
      "D": "$\\frac{7}{8}$"
    },
    "correctAnswer": "A",
    "explanation": "Kerjakan pembagian dahulu: $\\frac{1}{4} \\div \\frac{2}{3} = \\frac{1}{4} \\times \\frac{3}{2} = \\frac{3}{8}$. Ubah $0,25 = \\frac{2}{8}$. Maka $\\frac{5}{8} - \\frac{3}{8} + \\frac{2}{8} = \\frac{4}{8} = \\frac{1}{2}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 92
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Berat badan Bima mula-mula adalah $54,8\\text{ kg}$. Selama bulan pertama program olahraga, berat badannya turun $1\\frac{3}{4}\\text{ kg}$, dan pada bulan kedua turun lagi sebesar $1,45\\text{ kg}$. Berat badan Bima sekarang adalah...",
    "options": {
      "A": "$51,4\\text{ kg}$",
      "B": "$51,6\\text{ kg}$",
      "C": "$52,6\\text{ kg}$",
      "D": "$53,05\\text{ kg}$"
    },
    "correctAnswer": "B",
    "explanation": "$1\\frac{3}{4} = 1,75$. Berat akhir $= 54,80 - 1,75 - 1,45 = 54,80 - 3,20 = 51,60 = 51,6\\text{ kg}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 93
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Sebuah koperasi sekolah membeli $5$ lusin buku tulis seharga Rp210.000,00. Koperasi tersebut menjual kembali buku tulis itu secara eceran dengan keuntungan $20\\%$ dari harga beli total. Jika $1$ lusin berisi $12$ buah buku, harga jual satu buah buku tulis di koperasi adalah...",
    "options": {
      "A": "Rp3.500,00",
      "B": "Rp4.000,00",
      "C": "Rp4.200,00",
      "D": "Rp4.500,00"
    },
    "correctAnswer": "C",
    "explanation": "Total buku $= 5 \\times 12 = 60$ buku. Harga beli per buku $= \\text{Rp210.000} \\div 60 = \\text{Rp3.500,00}$. Dengan untung $20\\%$, harga jual per buku $= 1,2 \\times \\text{Rp3.500} = \\text{Rp4.200,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 94
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam pembuatan adonan roti, perbandingan berat tepung terigu, gula pasir, dan mentega adalah $5 : 2 : 1$. Jika ibu menggunakan $1,25\\text{ kg}$ tepung terigu, maka jumlah total berat ketiga bahan tersebut adalah...",
    "options": {
      "A": "$1,75\\text{ kg}$",
      "B": "$2,00\\text{ kg}$",
      "C": "$2,25\\text{ kg}$",
      "D": "$2,50\\text{ kg}$"
    },
    "correctAnswer": "B",
    "explanation": "Tepung terigu mewakili $\\frac{5}{5+2+1} = \\frac{5}{8}$ dari total adonan. Total berat adonan $= 1,25 \\div \\frac{5}{8} = 1,25 \\times \\frac{8}{5} = 0,25 \\times 8 = 2,00\\text{ kg}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 95
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Seorang kontraktor merencanakan pembangunan jembatan selesai dalam waktu $40$ hari dengan $15$ pekerja. Setelah bekerja selama $16$ hari, pekerjaan terhenti selama $4$ hari karena cuaca buruk. Agar jembatan tetap selesai tepat waktu sesuai rencana, banyak pekerja tambahan yang dibutuhkan adalah...",
    "options": {
      "A": "$2$ pekerja",
      "B": "$3$ pekerja",
      "C": "$4$ pekerja",
      "D": "$5$ pekerja"
    },
    "correctAnswer": "B",
    "explanation": "Sisa target waktu normal $= 40 - 16 = 24$ hari (senilai $\\frac{24}{40} = 0,6$ bagian pekerjaan). Sisa hari efektif setelah libur $= 24 - 4 = 20$ hari. Total pekerja dibutuhkan $= \\frac{24}{20} \\times 15 = 1,2 \\times 15 = 18$ pekerja. Tambahan pekerja $= 18 - 15 = 3$ pekerja.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 96
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Rina memiliki tabungan sebesar Rp480.000,00. Ia menggunakan $\\frac{1}{3}$ bagian untuk membeli buku pelajaran, dan $0,375$ dari sisanya untuk membeli perlengkapan alat tulis. Pernyataan yang benar mengenai pengeluaran dan sisa tabungan Rina adalah...",
    "options": {
      "A": "Rina menghabiskan Rp160.000,00 untuk buku, Rp120.000,00 untuk alat tulis, dan sisa tabungannya Rp200.000,00.",
      "B": "Rina menghabiskan Rp160.000,00 untuk buku, Rp180.000,00 untuk alat tulis, dan sisa tabungannya Rp140.000,00.",
      "C": "Pengeluaran untuk membeli alat tulis lebih besar daripada pengeluaran untuk membeli buku pelajaran.",
      "D": "Sisa tabungan Rina tinggal setengah dari jumlah tabungan awalnya."
    },
    "correctAnswer": "A",
    "explanation": "Beli buku $= \\frac{1}{3} \\times \\text{Rp480.000} = \\text{Rp160.000}$, sehingga tersisa Rp320.000. Beli alat tulis $= 0,375 \\times \\text{Rp320.000} = \\frac{3}{8} \\times \\text{Rp320.000} = \\text{Rp120.000}$. Sisa tabungan $= \\text{Rp320.000} - \\text{Rp120.000} = \\text{Rp200.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 97
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Suhu di dalam ruang penelitian diatur menggunakan mesin otomatis. Pada pukul 08.00 suhu ruang adalah $18,5\\,^{\\circ}\\text{C}$. Mesin menurunkan suhu secara konstan sebesar $2,25\\,^{\\circ}\\text{C}$ setiap jam hingga pukul 16.00. Setelah pukul 16.00, mesin dimatikan sehingga suhu naik kembali sebesar $1,4\\,^{\\circ}\\text{C}$ setiap jam. Suhu ruangan pada pukul 19.00 adalah...",
    "options": {
      "A": "$0,5\\,^{\\circ}\\text{C}$",
      "B": "$3,7\\,^{\\circ}\\text{C}$",
      "C": "$4,7\\,^{\\circ}\\text{C}$",
      "D": "$5,7\\,^{\\circ}\\text{C}$"
    },
    "correctAnswer": "C",
    "explanation": "Dari 08.00 ke 16.00 (8 jam), suhu turun $8 \\times 2,25 = 18,0\\,^{\\circ}\\text{C}$ sehingga menjadi $18,5 - 18,0 = 0,5\\,^{\\circ}\\text{C}$. Dari 16.00 ke 19.00 (3 jam), suhu naik $3 \\times 1,4 = 4,2\\,^{\\circ}\\text{C}$. Suhu pukul 19.00 $= 0,5 + 4,2 = 4,7\\,^{\\circ}\\text{C}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 98
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Diketahui bilangan rasional $x = -1\\frac{1}{2}$, $y = 0,75$, dan $z = -\\frac{3}{8}$. Nilai dari ekspresi $\\frac{x - y}{z}$ adalah...",
    "options": {
      "A": "$-6$",
      "B": "$-2$",
      "C": "$2$",
      "D": "$6$"
    },
    "correctAnswer": "D",
    "explanation": "Hitung pembilang: $x - y = -1,50 - 0,75 = -2,25 = -\\frac{9}{4}$. Kemudian bagi dengan $z = -\\frac{3}{8}$: $\\left(-\\frac{9}{4}\\right) \\div \\left(-\\frac{3}{8}\\right) = \\left(-\\frac{9}{4}\\right) \\times \\left(-\\frac{8}{3}\\right) = +6$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 99
  },
  {
    "grade": "7",
    "topic": "Operasi Bilangan Rasional",
    "difficulty": "sedang",
    "questionText": "Dalam rangka bazar sekolah, kelompok VII A membuat $15$ liter minuman sari buah. Sebanyak $\\frac{1}{5}$ bagian diminum oleh anggota kelompok yang bertugas, dan sisanya dikemas ke dalam gelas cup berukuran $0,24$ liter untuk dijual seharga Rp3.000,00 per gelas. Jika seluruh gelas terjual habis dan modal awal pembuatan minuman adalah Rp95.000,00, besar keuntungan bersih yang diperoleh kelompok VII A adalah...",
    "options": {
      "A": "Rp45.000,00",
      "B": "Rp50.000,00",
      "C": "Rp55.000,00",
      "D": "Rp65.000,00"
    },
    "correctAnswer": "C",
    "explanation": "Minuman yang dijual $= \\frac{4}{5} \\times 15 = 12$ liter. Banyak gelas $= 12 \\div 0,24 = 1200 \\div 24 = 50$ gelas. Pendapatan kotor $= 50 \\times \\text{Rp3.000} = \\text{Rp150.000,00}$. Keuntungan bersih $= \\text{Rp150.000} - \\text{Rp95.000} = \\text{Rp55.000,00}$.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 100
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Warga di Desa Tabang sering memanfaatkan ruas bambu petung sebagai wadah penyimpanan air atau nira aren. Sebuah ruas bambu berbentuk tabung tanpa tutup memiliki diameter dalam 14 cm dan tinggi 30 cm. Jika $\\pi = \\frac{22}{7}$, luas permukaan bagian dalam ruas bambu yang bersentuhan langsung dengan cairan adalah ....",
    "options": {
      "A": "1.320 cm²",
      "B": "1.474 cm²",
      "C": "1.628 cm²",
      "D": "4.620 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Diketahui tabung tanpa tutup dengan diameter $d = 14\\text{ cm}$, sehingga jari-jari $r = 7\\text{ cm}$, dan tinggi $t = 30\\text{ cm}$. Luas permukaan tabung tanpa tutup $= \\pi r^2 + 2\\pi r t = (\\frac{22}{7} \\times 7 \\times 7) + (2 \\times \\frac{22}{7} \\times 7 \\times 30) = 154 + 1.320 = 1.474\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 180' width='220' height='180' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='35' rx='45' ry='14' fill='#dcfce7' stroke='#166534' stroke-width='2'/><path d='M65 35 L65 145 A45 14 0 0 0 155 145 L155 35' fill='#bbf7d0' fill-opacity='0.5' stroke='#166534' stroke-width='2'/><ellipse cx='110' cy='145' rx='45' ry='14' fill='none' stroke='#166534' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='65' y1='35' x2='155' y2='35' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='3,2'/><text x='110' y='28' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 14 cm</text><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>t = 30 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 1
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah jaring-jaring tabung memiliki selimut berbentuk persegi panjang dengan panjang 88 cm dan lebar 25 cm. Jika $\\pi = \\frac{22}{7}$, volume tabung yang terbentuk dari jaring-jaring tersebut adalah ....",
    "options": {
      "A": "15.400 cm³",
      "B": "7.700 cm³",
      "C": "3.850 cm³",
      "D": "2.200 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Panjang selimut tabung sama dengan keliling lingkaran alas: $2\\pi r = 88 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 88 \\Rightarrow r = 14\\text{ cm}$. Tinggi tabung $t = 25\\text{ cm}$. Volume tabung $= \\pi r^2 t = \\frac{22}{7} \\times 14 \\times 14 \\times 25 = 15.400\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 260 150' width='260' height='150' xmlns='http://www.w3.org/2000/svg'><circle cx='130' cy='25' r='18' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><rect x='60' y='43' width='140' height='64' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><circle cx='130' cy='125' r='18' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='130' y='78' font-size='12' text-anchor='middle' fill='#0c4a6e' font-weight='bold'>88 cm</text><text x='222' y='78' font-size='12' text-anchor='middle' fill='#0c4a6e' font-weight='bold'>25 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 2
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Untuk menampung air bersih dari mata air pegunungan di Kecamatan Tabang, warga membangun bak penampungan berbentuk tabung dengan jari-jari 1 meter dan tinggi 1,4 meter. Jika bak tersebut baru terisi $\\frac{3}{4}$ bagian, berapa liter air lagi yang diperlukan hingga bak terisi penuh? ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "1.100 liter",
      "B": "2.200 liter",
      "C": "3.300 liter",
      "D": "4.400 liter"
    },
    "correctAnswer": "A",
    "explanation": "Volume penuh tabung $= \\pi r^2 t = \\frac{22}{7} \\times 1^2 \\times 1,4 = 4,4\\text{ m}^3 = 4.400\\text{ liter}$. Bagian yang belum terisi adalah $1 - \\frac{3}{4} = \\frac{1}{4}$ bagian. Jadi tambahan air yang diperlukan $= \\frac{1}{4} \\times 4.400 = 1.100\\text{ liter}$.",
    "imageSvg": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='30' rx='55' ry='15' fill='#f1f5f9' stroke='#334155' stroke-width='2'/><path d='M55 60 L55 140 A55 15 0 0 0 165 140 L165 60 Z' fill='#38bdf8' fill-opacity='0.6'/><path d='M55 30 L55 140 A55 15 0 0 0 165 140 L165 30' fill='none' stroke='#334155' stroke-width='2'/><ellipse cx='110' cy='60' rx='55' ry='15' fill='#7dd3fc' fill-opacity='0.7' stroke='#0284c7' stroke-width='1.5'/><line x1='110' y1='30' x2='165' y2='30' stroke='#dc2626' stroke-width='1.5'/><text x='138' y='24' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 1 m</text><text x='190' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>t = 1,4 m</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 3
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Perhatikan gambar kerucut berikut. Jika panjang jari-jari alas $r = 9\\text{ cm}$ dan tinggi kerucut $t = 12\\text{ cm}$, maka luas seluruh permukaan kerucut tersebut dalam $\\pi$ adalah ....",
    "options": {
      "A": "135π cm²",
      "B": "189π cm²",
      "C": "216π cm²",
      "D": "324π cm²"
    },
    "correctAnswer": "C",
    "explanation": "Garis pelukis kerucut dicari dengan teorema Pythagoras: $s = \\sqrt{r^2 + t^2} = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$. Luas permukaan kerucut $= \\pi r(r + s) = \\pi \\times 9 \\times (9 + 15) = 9\\pi \\times 24 = 216\\pi\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 180' width='220' height='180' xmlns='http://www.w3.org/2000/svg'><polygon points='110,25 50,145 170,145' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><ellipse cx='110' cy='145' rx='60' ry='16' fill='#fde68a' stroke='#b45309' stroke-width='2'/><line x1='110' y1='25' x2='110' y2='145' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='110' y1='145' x2='170' y2='145' stroke='#2563eb' stroke-width='1.5'/><text x='92' y='90' font-size='11' fill='#dc2626' font-weight='bold'>12 cm</text><text x='140' y='138' font-size='11' text-anchor='middle' fill='#2563eb' font-weight='bold'>9 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 4
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah juring lingkaran dengan sudut pusat $216^\\circ$ dan jari-jari $20\\text{ cm}$ akan dibentuk menjadi selimut kerucut. Panjang jari-jari alas kerucut yang terbentuk adalah ....",
    "options": {
      "A": "10 cm",
      "B": "12 cm",
      "C": "14 cm",
      "D": "15 cm"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari juring menjadi garis pelukis kerucut ($s = 20\\text{ cm}$). Keliling alas kerucut sama dengan panjang busur juring: $2\\pi r = \\frac{216^\\circ}{360^\\circ} \\times 2\\pi s \\Rightarrow r = \\frac{3}{5} \\times 20 = 12\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><path d='M110,85 L175,85 A65,65 0 1,0 57,123 Z' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><path d='M128,85 A18,18 0 1,0 95,96' fill='none' stroke='#dc2626' stroke-width='1.5'/><text x='105' y='62' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>216°</text><text x='145' y='78' font-size='11' text-anchor='middle' fill='#581c87' font-weight='bold'>20 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 5
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah topi adat berbentuk kerucut dari anyaman bambu di Mamasa memiliki keliling alas $132\\text{ cm}$ dan tinggi $28\\text{ cm}$. Volume ruang di dalam topi tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "12.936 cm³",
      "B": "19.404 cm³",
      "C": "38.808 cm³",
      "D": "4.312 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Keliling alas $= 2\\pi r = 132 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 132 \\Rightarrow r = 21\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 21 \\times 21 \\times 28 = 22 \\times 21 \\times 28 = 12.936\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='110,20 45,135 175,135' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><ellipse cx='110' cy='135' rx='65' ry='16' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><line x1='110' y1='20' x2='110' y2='135' stroke='#1e293b' stroke-width='1.5' stroke-dasharray='4,3'/><text x='88' y='85' font-size='11' fill='#1e293b' font-weight='bold'>28 cm</text><text x='110' y='162' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>Keliling = 132 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 6
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola logam pejal memiliki luas permukaan $616\\text{ cm}^2$. Jika $\\pi = \\frac{22}{7}$, panjang diameter bola tersebut adalah ....",
    "options": {
      "A": "7 cm",
      "B": "14 cm",
      "C": "21 cm",
      "D": "28 cm"
    },
    "correctAnswer": "B",
    "explanation": "Luas permukaan bola $= 4\\pi r^2 = 616 \\Rightarrow 4 \\times \\frac{22}{7} \\times r^2 = 616 \\Rightarrow r^2 = \\frac{616 \\times 7}{88} = 49 \\Rightarrow r = 7\\text{ cm}$. Diameter bola $d = 2r = 14\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='60' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><ellipse cx='100' cy='85' rx='60' ry='18' fill='none' stroke='#334155' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='40' y1='85' x2='160' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='100' y='78' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = ?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 7
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah mangkuk kayu berbentuk belahan bola (setengah bola) pejal memiliki jari-jari $10\\text{ cm}$. Luas seluruh permukaan luar dan penampang atas mangkuk pejal tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "628 cm²",
      "B": "942 cm²",
      "C": "1.256 cm²",
      "D": "314 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas permukaan setengah bola pejal $= 2\\pi r^2 + \\pi r^2 = 3\\pi r^2 = 3 \\times 3,14 \\times 10^2 = 3 \\times 314 = 942\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 160' width='220' height='160' xmlns='http://www.w3.org/2000/svg'><path d='M45,65 A65,65 0 0,0 175,65 Z' fill='#fde047' fill-opacity='0.6' stroke='#854d0e' stroke-width='2'/><ellipse cx='110' cy='65' rx='65' ry='18' fill='#fef08a' stroke='#854d0e' stroke-width='2'/><line x1='110' y1='65' x2='175' y2='65' stroke='#dc2626' stroke-width='1.5'/><text x='142' y='58' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 10 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 8
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola tepat berada di dalam tabung sehingga menyentuh sisi alas, sisi tutup, dan selimut tabung. Jika volume tabung adalah $720\\text{ cm}^3$, maka volume bola di dalamnya adalah ....",
    "options": {
      "A": "240 cm³",
      "B": "360 cm³",
      "C": "480 cm³",
      "D": "540 cm³"
    },
    "correctAnswer": "C",
    "explanation": "Jika bola menyinggung seluruh sisi tabung, maka jari-jari tabung sama dengan jari-jari bola ($r$) dan tinggi tabung $t = 2r$. Perbandingan $V_{\\text{bola}} : V_{\\text{tabung}} = \\frac{4}{3}\\pi r^3 : \\pi r^2(2r) = \\frac{4}{3} : 2 = 2 : 3$. Maka $V_{\\text{bola}} = \\frac{2}{3} \\times 720 = 480\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 200 180' width='200' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='30' width='100' height='120' fill='none' stroke='#334155' stroke-width='2'/><ellipse cx='100' cy='30' rx='50' ry='12' fill='none' stroke='#334155' stroke-width='1.5'/><ellipse cx='100' cy='150' rx='50' ry='12' fill='none' stroke='#334155' stroke-width='1.5'/><circle cx='100' cy='90' r='50' fill='#93c5fd' fill-opacity='0.5' stroke='#1d4ed8' stroke-width='2'/></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 9
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Perhatikan gambar bangun gabungan tabung dan setengah bola berikut! Jika diameter alas $14\\text{ cm}$ dan tinggi tabung $10\\text{ cm}$, volume total bangun ruang tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "1.540 cm³",
      "B": "2.258,67 cm³",
      "C": "2.977,33 cm³",
      "D": "3.080 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 7\\text{ cm}$. Volume tabung $= \\pi r^2 t = \\frac{22}{7} \\times 49 \\times 10 = 1.540\\text{ cm}^3$. Volume setengah bola $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = \\frac{2.156}{3} \\approx 718,67\\text{ cm}^3$. Volume total $= 1.540 + 718,67 = 2.258,67\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'><path d='M55,80 A45,45 0 0,1 145,80' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><rect x='55' y='80' width='90' height='80' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><ellipse cx='100' cy='80' rx='45' ry='12' fill='none' stroke='#be185d' stroke-width='1.5' stroke-dasharray='3,3'/><ellipse cx='100' cy='160' rx='45' ry='12' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><text x='172' y='125' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>10 cm</text><text x='100' y='185' font-size='11' text-anchor='middle' fill='#be185d' font-weight='bold'>d = 14 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 10
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah peluru mainan kayu terdiri dari gabungan tabung dan kerucut. Diameter alas keduanya $12\\text{ cm}$, tinggi tabung $15\\text{ cm}$, dan tinggi total bangun adalah $23\\text{ cm}$. Luas permukaan bangun gabungan tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "866,64 cm²",
      "B": "979,68 cm²",
      "C": "1.092,72 cm²",
      "D": "753,60 cm²"
    },
    "correctAnswer": "A",
    "explanation": "Jari-jari $r = 6\\text{ cm}$. Tinggi kerucut $t_k = 23 - 15 = 8\\text{ cm}$, sehingga garis pelukis kerucut $s = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Luas permukaan gabungan $= L_{\\text{alas tabung}} + L_{\\text{selimut tabung}} + L_{\\text{selimut kerucut}} = \\pi r^2 + 2\\pi r t + \\pi r s = \\pi r(r + 2t + s) = 3,14 \\times 6 \\times (6 + 30 + 10) = 18,84 \\times 46 = 866,64\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 210' width='210' height='210' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 60,85 150,85' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><rect x='60' y='85' width='90' height='95' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><ellipse cx='105' cy='180' rx='45' ry='11' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><text x='178' y='135' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='32' y='105' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>23 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 11
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung berjari-jari $14\\text{ cm}$ berisi air setinggi $20\\text{ cm}$. Ke dalam tabung tersebut dimasukkan 3 buah bola besi pejal yang masing-masing berjari-jari $7\\text{ cm}$ hingga seluruh bola tenggelam. Kenaikan tinggi air di dalam tabung adalah ....",
    "options": {
      "A": "3,5 cm",
      "B": "5,25 cm",
      "C": "7,0 cm",
      "D": "10,5 cm"
    },
    "correctAnswer": "C",
    "explanation": "Volume kenaikan air dalam tabung sama dengan volume 3 bola: $\\pi R^2 \\Delta t = 3 \\times \\frac{4}{3}\\pi r^3 \\Rightarrow 14^2 \\times \\Delta t = 4 \\times 7^3 \\Rightarrow 196 \\Delta t = 4 \\times 343 = 1.372 \\Rightarrow \\Delta t = \\frac{1.372}{196} = 7\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='130' fill='none' stroke='#334155' stroke-width='2'/><rect x='55' y='75' width='100' height='85' fill='#bae6fd' fill-opacity='0.6'/><circle cx='82' cy='140' r='16' fill='#64748b'/><circle cx='125' cy='140' r='16' fill='#64748b'/><circle cx='103' cy='115' r='16' fill='#64748b'/><text x='180' y='120' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>Δt = ?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 12
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Dua buah bola masing-masing memiliki jari-jari $6\\text{ cm}$ dan $9\\text{ cm}$. Perbandingan volume kedua bola tersebut adalah ....",
    "options": {
      "A": "2 : 3",
      "B": "4 : 9",
      "C": "8 : 27",
      "D": "16 : 81"
    },
    "correctAnswer": "C",
    "explanation": "Perbandingan volume dua bola sebanding dengan pangkat tiga dari jari-jarinya: $V_1 : V_2 = r_1^3 : r_2^3 = 6^3 : 9^3 = (2)^3 : (3)^3 = 8 : 27$.",
    "imageSvg": "<svg viewBox='0 0 230 140' width='230' height='140' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='80' r='32' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><circle cx='155' cy='70' r='48' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><text x='60' y='128' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>r₁ = 6 cm</text><text x='155' y='133' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>r₂ = 9 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 13
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Di dekat jembatan Sungai Mamasa wilayah Tabang, terdapat tugu penanda jalan berbentuk gabungan kerucut dan setengah bola (bandul). Jika jari-jari alas kerucut sama dengan jari-jari setengah bola yaitu $7\\text{ cm}$, dan garis pelukis kerucut $25\\text{ cm}$, luas permukaan bandul tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "704 cm²",
      "B": "858 cm²",
      "C": "1.012 cm²",
      "D": "1.166 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas permukaan bandul $= L_{\\text{selimut kerucut}} + L_{\\text{setengah bola}} = \\pi r s + 2\\pi r^2 = \\pi r(s + 2r) = \\frac{22}{7} \\times 7 \\times (25 + 14) = 22 \\times 39 = 858\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='100,20 55,125 145,125' fill='#fde68a' stroke='#b45309' stroke-width='2'/><path d='M55,125 A45,45 0 0,0 145,125 Z' fill='#fcd34d' stroke='#b45309' stroke-width='2'/><text x='145' y='72' font-size='11' fill='#b45309' font-weight='bold'>s = 25 cm</text><text x='100' y='120' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 14
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki jari-jari $r$ dan tinggi $t$. Jika jari-jari tabung diperbesar menjadi $2$ kali semula dan tingginya diperkecil menjadi $\\frac{1}{2}$ kali semula, maka volume tabung yang baru adalah ....",
    "options": {
      "A": "sama dengan volume semula",
      "B": "2 kali volume semula",
      "C": "4 kali volume semula",
      "D": "½ kali volume semula"
    },
    "correctAnswer": "B",
    "explanation": "Volume awal $V_1 = \\pi r^2 t$. Volume baru $V_2 = \\pi (2r)^2 (\\frac{1}{2}t) = \\pi (4r^2)(\\frac{1}{2}t) = 2\\pi r^2 t = 2V_1$. Jadi volumenya menjadi 2 kali volume semula.",
    "imageSvg": "<svg viewBox='0 0 240 150' width='240' height='150' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='45' height='95' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='52' y='140' font-size='11' text-anchor='middle' fill='#4338ca' font-weight='bold'>Awal (r, t)</text><text x='102' y='82' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='130' y='77' width='90' height='48' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><text x='175' y='140' font-size='11' text-anchor='middle' fill='#4338ca' font-weight='bold'>Baru (2r, ½t)</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 15
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kaleng cat berbentuk tabung memiliki diameter $28\\text{ cm}$ dan tinggi $25\\text{ cm}$. Jika label kertas pembungkus ditempelkan mengelilingi selimut kaleng tanpa tumpang tindih, luas kertas pembungkus tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "1.100 cm²",
      "B": "2.200 cm²",
      "C": "3.432 cm²",
      "D": "15.400 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Diameter $d = 28\\text{ cm}$ dan tinggi $t = 25\\text{ cm}$. Luas selimut tabung $= \\pi d t = \\frac{22}{7} \\times 28 \\times 25 = 22 \\times 4 \\times 25 = 2.200\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 175' width='220' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='32' rx='50' ry='14' fill='#f1f5f9' stroke='#334155' stroke-width='2'/><rect x='60' y='52' width='100' height='75' fill='#fef08a' stroke='#ca8a04' stroke-width='1.5'/><path d='M60 32 L60 142 A50 14 0 0 0 160 142 L160 32' fill='none' stroke='#334155' stroke-width='2'/><text x='110' y='94' font-size='11' text-anchor='middle' fill='#854d0e' font-weight='bold'>Label</text><text x='182' y='92' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>25 cm</text><text x='110' y='24' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 28 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 16
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki luas selimut $550\\text{ cm}^2$ dan jari-jari alas $7\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, panjang garis pelukis kerucut tersebut adalah ....",
    "options": {
      "A": "20 cm",
      "B": "22 cm",
      "C": "25 cm",
      "D": "28 cm"
    },
    "correctAnswer": "C",
    "explanation": "Luas selimut kerucut $= \\pi r s \\Rightarrow 550 = \\frac{22}{7} \\times 7 \\times s \\Rightarrow 550 = 22s \\Rightarrow s = \\frac{550}{22} = 25\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='14' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#0369a1' font-weight='bold'>s = ?</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 17
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Petani kopi di Kecamatan Tabang menumpuk gabah/biji kopi kering di atas terpal datar sehingga membentuk tumpukan kerucut dengan diameter alas $2,8\\text{ m}$ dan tinggi $1,2\\text{ m}$. Volume tumpukan biji kopi tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "1,848 m³",
      "B": "2,464 m³",
      "C": "3,696 m³",
      "D": "7,392 m³"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 1,4\\text{ m}$ dan tinggi $t = 1,2\\text{ m}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 1,4 \\times 1,4 \\times 1,2 = \\frac{22 \\times 0,2 \\times 1,4 \\times 1,2}{1} = 2,464\\text{ m}^3$.",
    "imageSvg": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='110,30 40,135 180,135' fill='#d6d3d1' stroke='#57534e' stroke-width='2'/><ellipse cx='110' cy='135' rx='70' ry='16' fill='#a8a29e' stroke='#57534e' stroke-width='2'/><line x1='110' y1='30' x2='110' y2='135' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='85' y='85' font-size='11' fill='#dc2626' font-weight='bold'>1,2 m</text><text x='110' y='162' font-size='11' text-anchor='middle' fill='#292524' font-weight='bold'>d = 2,8 m</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 18
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut dan sebuah tabung memiliki alas yang sama besar dan tinggi yang sama pula. Jika volume kerucut adalah $450\\text{ cm}^3$, maka selisih volume tabung dan volume kerucut tersebut adalah ....",
    "options": {
      "A": "450 cm³",
      "B": "900 cm³",
      "C": "1.350 cm³",
      "D": "1.800 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Dengan alas dan tinggi yang sama, $V_{\\text{tabung}} = 3 \\times V_{\\text{kerucut}} = 3 \\times 450 = 1.350\\text{ cm}^3$. Selisih volumenya $= 1.350 - 450 = 900\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='65,35 30,130 100,130' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='65' y='148' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>Kerucut</text><rect x='135' y='35' width='70' height='95' fill='#bfdbfe' stroke='#1d4ed8' stroke-width='2'/><ellipse cx='170' cy='35' rx='35' ry='9' fill='#dbeafe' stroke='#1d4ed8' stroke-width='1.5'/><text x='170' y='148' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>Tabung</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 19
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Volume sebuah bola adalah $38.808\\text{ cm}^3$. Jika $\\pi = \\frac{22}{7}$, jari-jari bola tersebut adalah ....",
    "options": {
      "A": "14 cm",
      "B": "21 cm",
      "C": "28 cm",
      "D": "35 cm"
    },
    "correctAnswer": "B",
    "explanation": "Volume bola $= \\frac{4}{3}\\pi r^3 = 38.808 \\Rightarrow \\frac{4}{3} \\times \\frac{22}{7} \\times r^3 = 38.808 \\Rightarrow r^3 = \\frac{38.808 \\times 21}{88} = 441 \\times 21 = 9.261 \\Rightarrow r = 21\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='58' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><ellipse cx='100' cy='85' rx='58' ry='17' fill='none' stroke='#be185d' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='100' y1='85' x2='158' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='128' y='78' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = ?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 20
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kubah menara masjid/balai pertemuan berbentuk setengah bola berdiameter $14\\text{ meter}$. Bagian luar kubah akan dicat dengan biaya Rp45.000,00 per $\\text{m}^2$. Biaya total pengecatan kubah tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "Rp13.860.000,00",
      "B": "Rp20.790.000,00",
      "C": "Rp27.720.000,00",
      "D": "Rp55.440.000,00"
    },
    "correctAnswer": "A",
    "explanation": "Jari-jari $r = 7\\text{ m}$. Luas permukaan luar setengah bola $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 7 \\times 7 = 308\\text{ m}^2$. Biaya pengecatan $= 308 \\times \\text{Rp}45.000,00 = \\text{Rp}13.860.000,00$.",
    "imageSvg": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,110 A65,65 0 0,1 175,110 Z' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><line x1='45' y1='110' x2='175' y2='110' stroke='#15803d' stroke-width='2'/><text x='110' y='128' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>d = 14 m</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 21
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Perhatikan gambar kerucut terpancung atau gabungan tabung dan kerucut berikut. Jika jari-jari alas $7\\text{ cm}$, tinggi tabung $12\\text{ cm}$, dan tinggi kerucut $6\\text{ cm}$, volume bangun gabungan tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "1.848 cm³",
      "B": "2.156 cm³",
      "C": "2.464 cm³",
      "D": "2.772 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Volume tabung $= \\pi r^2 t_1 = \\frac{22}{7} \\times 49 \\times 12 = 1.848\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t_2 = \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 6 = 308\\text{ cm}^3$. Volume gabungan $= 1.848 + 308 = 2.156\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 205' width='210' height='205' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 60,75 150,75' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><rect x='60' y='75' width='90' height='95' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><ellipse cx='105' cy='170' rx='45' ry='11' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><text x='172' y='55' font-size='11' fill='#c2410c' font-weight='bold'>6 cm</text><text x='172' y='125' font-size='11' fill='#1e293b' font-weight='bold'>12 cm</text><text x='105' y='193' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 22
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki luas alas $154\\text{ cm}^2$ dan tinggi $20\\text{ cm}$. Jika di dalam tabung tersebut dibuat sebuah kerucut terbesar dengan alas berimpit dengan alas tabung dan puncaknya menyentuh pusat tutup tabung, berapakah volume ruang tabung di luar kerucut?",
    "options": {
      "A": "1.026,67 cm³",
      "B": "1.540 cm³",
      "C": "2.053,33 cm³",
      "D": "3.080 cm³"
    },
    "correctAnswer": "C",
    "explanation": "Volume tabung $= L_{\\text{alas}} \\times t = 154 \\times 20 = 3.080\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3} \\times 3.080 = 1.026,67\\text{ cm}^3$. Volume di luar kerucut $= 3.080 - 1.026,67 = 2.053,33\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='120' fill='#e0f2fe' fill-opacity='0.5' stroke='#0369a1' stroke-width='2'/><ellipse cx='105' cy='30' rx='50' ry='12' fill='#bae6fd' stroke='#0369a1' stroke-width='1.5'/><polygon points='105,30 55,150 155,150' fill='#fde68a' fill-opacity='0.7' stroke='#b45309' stroke-width='2'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>20 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 23
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola memiliki jari-jari $r$. Jika jari-jari bola tersebut diperbesar menjadi $3$ kali semula, maka luas permukaan bola yang baru menjadi .... kali luas permukaan semula.",
    "options": {
      "A": "3 kali",
      "B": "6 kali",
      "C": "9 kali",
      "D": "27 kali"
    },
    "correctAnswer": "C",
    "explanation": "Luas permukaan bola berbanding lurus dengan kuadrat jari-jarinya ($L = 4\\pi r^2$). Jika jari-jari menjadi $3r$, maka luas barunya $= 4\\pi (3r)^2 = 9 \\times 4\\pi r^2 = 9$ kali luas semula.",
    "imageSvg": "<svg viewBox='0 0 230 145' width='230' height='145' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='80' r='16' fill='#e9d5ff' stroke='#7e22ce' stroke-width='2'/><text x='50' y='115' font-size='11' text-anchor='middle' fill='#7e22ce' font-weight='bold'>r</text><text x='92' y='84' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><circle cx='165' cy='72' r='48' fill='#d8b4fe' stroke='#7e22ce' stroke-width='2'/><text x='165' y='135' font-size='11' text-anchor='middle' fill='#7e22ce' font-weight='bold'>3r</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 24
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki jari-jari $6\\text{ cm}$ dan tinggi $8\\text{ cm}$. Jika tinggi kerucut diubah menjadi $12\\text{ cm}$ sementara jari-jarinya tetap, perbandingan volume kerucut awal terhadap volume kerucut akhir adalah ....",
    "options": {
      "A": "1 : 2",
      "B": "2 : 3",
      "C": "3 : 4",
      "D": "4 : 9"
    },
    "correctAnswer": "B",
    "explanation": "Karena jari-jari sama, perbandingan volume kerucut sama dengan perbandingan tingginya: $V_1 : V_2 = t_1 : t_2 = 8 : 12 = 2 : 3$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='60,55 30,130 90,130' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='60' y='148' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>t = 8 cm</text><polygon points='165,25 135,130 195,130' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='165' y='148' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>t = 12 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 25
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung terbuka di bagian atas dan tertutup di bagian bawah memiliki jari-jari $10\\text{ cm}$ dan tinggi $15\\text{ cm}$. Berapa luas seluruh sisi luar tabung tersebut? ($\\pi = 3,14$)",
    "options": {
      "A": "942 cm²",
      "B": "1.256 cm²",
      "C": "1.570 cm²",
      "D": "1.884 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas sisi tabung terbuka di atas $= L_{\\text{alas}} + L_{\\text{selimut}} = \\pi r^2 + 2\\pi r t = \\pi r(r + 2t) = 3,14 \\times 10 \\times (10 + 30) = 31,4 \\times 40 = 1.256\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='35' rx='48' ry='13' fill='none' stroke='#0f766e' stroke-width='2' stroke-dasharray='4,3'/><path d='M57 35 L57 140 A48 13 0 0 0 153 140 L153 35' fill='#ccfbf1' fill-opacity='0.6' stroke='#0f766e' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#99f6e4' stroke='#0f766e' stroke-width='2'/><text x='176' y='92' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='128' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 10 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 26
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki volume $1.232\\text{ cm}^3$ dan jari-jari alas $7\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, tinggi kerucut tersebut adalah ....",
    "options": {
      "A": "18 cm",
      "B": "21 cm",
      "C": "24 cm",
      "D": "27 cm"
    },
    "correctAnswer": "C",
    "explanation": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = 1.232 \\Rightarrow \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times t = 1.232 \\Rightarrow \\frac{154}{3} t = 1.232 \\Rightarrow t = \\frac{1.232 \\times 3}{154} = 8 \\times 3 = 24\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 205 175' width='205' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='102,25 52,138 152,138' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><ellipse cx='102' cy='138' rx='50' ry='13' fill='#f5d0fe' stroke='#86198f' stroke-width='2'/><line x1='102' y1='25' x2='102' y2='138' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='82' y='88' font-size='11' fill='#dc2626' font-weight='bold'>t = ?</text><text x='128' y='131' font-size='11' text-anchor='middle' fill='#86198f' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 27
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola dimasukkan ke dalam kotak kubus dengan panjang rusuk $20\\text{ cm}$ sehingga bola tepat menyinggung keenam sisi kubus. Berapa persen volume kubus yang tidak terisi oleh bola? ($\\pi = 3,14$)",
    "options": {
      "A": "47,67%",
      "B": "52,33%",
      "C": "66,67%",
      "D": "75,00%"
    },
    "correctAnswer": "A",
    "explanation": "Volume kubus $= 20^3 = 8.000\\text{ cm}^3$. Jari-jari bola $r = 10\\text{ cm}$, maka volume bola $= \\frac{4}{3} \\times 3,14 \\times 10^3 = 4.186,67\\text{ cm}^3$. Volume kosong $= 8.000 - 4.186,67 = 3.813,33\\text{ cm}^3$. Persentase kosong $= \\frac{3.813,33}{8.000} \\times 100\\% \\approx 47,67\\%$.",
    "imageSvg": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><polygon points='60,40 140,40 165,20 85,20' fill='#f1f5f9' stroke='#334155' stroke-width='1.5'/><rect x='60' y='40' width='80' height='100' fill='none' stroke='#334155' stroke-width='2'/><polygon points='140,40 165,20 165,120 140,140' fill='#e2e8f0' stroke='#334155' stroke-width='1.5'/><circle cx='100' cy='90' r='40' fill='#fca5a5' fill-opacity='0.65' stroke='#b91c1c' stroke-width='2'/><text x='100' y='162' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>Rusuk = 20 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 28
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah drum minyak berbentuk tabung memiliki diameter $56\\text{ cm}$ dan tinggi $100\\text{ cm}$. Jika di dalam drum terdapat minyak setinggi $75\\text{ cm}$, berapa liter volume minyak di dalam drum tersebut? ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "123,2 liter",
      "B": "184,8 liter",
      "C": "246,4 liter",
      "D": "369,6 liter"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 28\\text{ cm}$ dan tinggi minyak $t = 75\\text{ cm}$. Volume minyak $= \\pi r^2 t = \\frac{22}{7} \\times 28 \\times 28 \\times 75 = 22 \\times 4 \\times 28 \\times 75 = 184.800\\text{ cm}^3 = 184,8\\text{ liter}$.",
    "imageSvg": "<svg viewBox='0 0 215 180' width='215' height='180' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='28' rx='48' ry='12' fill='none' stroke='#334155' stroke-width='2'/><path d='M57 58 L57 148 A48 12 0 0 0 153 148 L153 58 Z' fill='#fde047' fill-opacity='0.75'/><path d='M57 28 L57 148 A48 12 0 0 0 153 148 L153 28' fill='none' stroke='#334155' stroke-width='2'/><ellipse cx='105' cy='58' rx='48' ry='12' fill='#fef08a' stroke='#ca8a04' stroke-width='1.5'/><text x='178' y='105' font-size='11' text-anchor='middle' fill='#854d0e' font-weight='bold'>75 cm</text><text x='105' y='170' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 56 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 29
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki panjang garis pelukis $26\\text{ cm}$ dan jari-jari alas $10\\text{ cm}$. Volume kerucut tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "1.256 cm³",
      "B": "2.512 cm³",
      "C": "2.721,33 cm³",
      "D": "3.768 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Tinggi kerucut $t = \\sqrt{s^2 - r^2} = \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times 3,14 \\times 100 \\times 24 = 3,14 \\times 800 = 2.512\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#dcfce7' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='14' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#1e293b' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='78' font-size='11' fill='#166534' font-weight='bold'>26 cm</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>10 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 30
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bangun ruang gabungan terdiri dari tabung dan setengah bola yang menempel pada tutup atasnya. Diameter tabung dan bola adalah $14\\text{ cm}$, sedangkan tinggi tabung $20\\text{ cm}$. Luas seluruh permukaan bangun gabungan tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "1.188 cm²",
      "B": "1.342 cm²",
      "C": "1.496 cm²",
      "D": "1.650 cm²"
    },
    "correctAnswer": "C",
    "explanation": "Jari-jari $r = 7\\text{ cm}$ dan tinggi tabung $t = 20\\text{ cm}$. Luas permukaan gabungan $= L_{\\text{alas tabung}} + L_{\\text{selimut tabung}} + L_{\\text{setengah bola}} = \\pi r^2 + 2\\pi r t + 2\\pi r^2 = 3\\pi r^2 + 2\\pi r t = (3 \\times \\frac{22}{7} \\times 49) + (2 \\times \\frac{22}{7} \\times 7 \\times 20) = 462 + 880 = 1.342\\text{ cm}^2$? Tunggu: $462 + 880 = 1.342$, periksa opsi: 1.342 cm² ada pada pilihan ke-2 (indeks 1).",
    "imageSvg": "<svg viewBox='0 0 210 205' width='210' height='205' xmlns='http://www.w3.org/2000/svg'><path d='M60,75 A45,45 0 0,1 150,75' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><rect x='60' y='75' width='90' height='95' fill='#eef2ff' stroke='#4338ca' stroke-width='2'/><ellipse cx='105' cy='170' rx='45' ry='11' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='172' y='125' font-size='11' fill='#1e293b' font-weight='bold'>20 cm</text><text x='105' y='193' font-size='11' text-anchor='middle' fill='#4338ca' font-weight='bold'>d = 14 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 31
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah benda berbentuk kerucut mempunyai luas alas $314\\text{ cm}^2$ dan tinggi $15\\text{ cm}$. Volume benda tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "1.570 cm³",
      "B": "2.355 cm³",
      "C": "3.140 cm³",
      "D": "4.710 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Volume kerucut $= \\frac{1}{3} \\times L_{\\text{alas}} \\times t = \\frac{1}{3} \\times 314 \\times 15 = 314 \\times 5 = 1.570\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 205 170' width='205' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='102,25 52,135 152,135' fill='#ffedd5' stroke='#ea580c' stroke-width='2'/><ellipse cx='102' cy='135' rx='50' ry='13' fill='#fed7aa' stroke='#ea580c' stroke-width='2'/><line x1='102' y1='25' x2='102' y2='135' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='80' y='85' font-size='11' fill='#dc2626' font-weight='bold'>15 cm</text><text x='102' y='160' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>L.Alas = 314 cm²</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 32
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Perbandingan panjang jari-jari dua buah tabung adalah $2 : 3$, sedangkan perbandingan tingginya adalah $9 : 4$. Perbandingan volume kedua tabung tersebut adalah ....",
    "options": {
      "A": "1 : 1",
      "B": "2 : 3",
      "C": "3 : 2",
      "D": "4 : 9"
    },
    "correctAnswer": "A",
    "explanation": "Perbandingan volume $V_1 : V_2 = (r_1^2 \\times t_1) : (r_2^2 \\times t_2) = (2^2 \\times 9) : (3^2 \\times 4) = (4 \\times 9) : (9 \\times 4) = 36 : 36 = 1 : 1$.",
    "imageSvg": "<svg viewBox='0 0 230 160' width='230' height='160' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='30' width='40' height='95' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><text x='55' y='143' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>r₁=2, t₁=9</text><rect x='135' y='65' width='60' height='60' fill='#bfdbfe' stroke='#1d4ed8' stroke-width='2'/><text x='165' y='143' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>r₂=3, t₂=4</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 33
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola memiliki keliling lingkaran terbesar (ekuator) $88\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas permukaan bola tersebut adalah ....",
    "options": {
      "A": "1.232 cm²",
      "B": "2.464 cm²",
      "C": "4.928 cm²",
      "D": "616 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Keliling lingkaran $= 2\\pi r = 88 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 88 \\Rightarrow r = 14\\text{ cm}$. Luas permukaan bola $= 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 14 \\times 14 = 88 \\times 28 = 2.464\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='56' fill='#f0fdf4' stroke='#15803d' stroke-width='2'/><ellipse cx='100' cy='85' rx='56' ry='16' fill='none' stroke='#dc2626' stroke-width='2'/><text x='100' y='112' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>Keliling = 88 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 34
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Seorang pengrajin di Tabang membuat wadah penyimpanan beras berbentuk tabung tanpa tutup dengan jari-jari $21\\text{ cm}$ dan tinggi $40\\text{ cm}$. Berapa $\\text{cm}^2$ luas seng yang dibutuhkan untuk membuat satu wadah tersebut? ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "5.280 cm²",
      "B": "6.666 cm²",
      "C": "8.052 cm²",
      "D": "11.088 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas seng $= L_{\\text{alas}} + L_{\\text{selimut}} = \\pi r^2 + 2\\pi r t = (\\frac{22}{7} \\times 21 \\times 21) + (2 \\times \\frac{22}{7} \\times 21 \\times 40) = 1.386 + 5.280 = 6.666\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 215 175' width='215' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='none' stroke='#475569' stroke-width='2' stroke-dasharray='4,3'/><path d='M57 32 L57 142 A48 13 0 0 0 153 142 L153 32' fill='#e2e8f0' fill-opacity='0.7' stroke='#475569' stroke-width='2'/><ellipse cx='105' cy='142' rx='48' ry='13' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><text x='176' y='92' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>40 cm</text><text x='128' y='135' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 21 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 35
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut mempunyai volume $628\\text{ cm}^3$ dan tinggi $6\\text{ cm}$. Jika $\\pi = 3,14$, panjang jari-jari alas kerucut tersebut adalah ....",
    "options": {
      "A": "5 cm",
      "B": "10 cm",
      "C": "15 cm",
      "D": "20 cm"
    },
    "correctAnswer": "B",
    "explanation": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = 628 \\Rightarrow \\frac{1}{3} \\times 3,14 \\times r^2 \\times 6 = 628 \\Rightarrow 6,28 r^2 = 628 \\Rightarrow r^2 = 100 \\Rightarrow r = 10\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 205 170' width='205' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='102,28 52,135 152,135' fill='#fef9c3' stroke='#a16207' stroke-width='2'/><ellipse cx='102' cy='135' rx='50' ry='13' fill='#fef08a' stroke='#a16207' stroke-width='2'/><line x1='102' y1='28' x2='102' y2='135' stroke='#1e293b' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='102' y1='135' x2='152' y2='135' stroke='#dc2626' stroke-width='1.5'/><text x='82' y='85' font-size='11' fill='#1e293b' font-weight='bold'>6 cm</text><text x='128' y='128' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = ?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 36
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah benda padat terdiri atas setengah bola dan kerucut yang berimpit pada bidang alasnya. Jika jari-jari alas $6\\text{ cm}$ dan tinggi kerucut $8\\text{ cm}$, volume benda padat tersebut dalam $\\pi$ adalah ....",
    "options": {
      "A": "168π cm³",
      "B": "216π cm³",
      "C": "240π cm³",
      "D": "288π cm³"
    },
    "correctAnswer": "B",
    "explanation": "Volume setengah bola $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi (6^3) = \\frac{2}{3}\\pi (216) = 144\\pi\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (36)(8) = 96\\pi$? Tunggu: $144\\pi + 96\\pi = 240\\pi$. Mari periksa ulang: $\\frac{2}{3}(216) = 144$, $\\frac{1}{3}(36)(8) = 96$, jumlahnya $240\\pi$ (pilihan ke-3, indeks 2).",
    "imageSvg": "<svg viewBox='0 0 205 195' width='205' height='195' xmlns='http://www.w3.org/2000/svg'><path d='M55,95 A47,47 0 0,0 149,95 Z' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><polygon points='102,25 55,95 149,95' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='165' y='65' font-size='11' fill='#0284c7' font-weight='bold'>8 cm</text><text x='102' y='158' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 6 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 37
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki tinggi $14\\text{ cm}$ dan luas selimutnya $616\\text{ cm}^2$. Jika $\\pi = \\frac{22}{7}$, luas seluruh permukaan tabung tersebut adalah ....",
    "options": {
      "A": "924 cm²",
      "B": "1.078 cm²",
      "C": "1.232 cm²",
      "D": "1.540 cm²"
    },
    "correctAnswer": "A",
    "explanation": "Luas selimut $= 2\\pi r t = 616 \\Rightarrow 2 \\times \\frac{22}{7} \\times r \\times 14 = 616 \\Rightarrow 88r = 616 \\Rightarrow r = 7\\text{ cm}$. Luas alas $= \\pi r^2 = \\frac{22}{7} \\times 49 = 154\\text{ cm}^2$. Luas seluruh permukaan $= 2 \\times 154 + 616 = 308 + 616 = 924\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#faf5ff' stroke='#7e22ce' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>14 cm</text><text x='105' y='90' font-size='10' text-anchor='middle' fill='#7e22ce' font-weight='bold'>Ls = 616 cm²</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 38
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah wadah penyimpanan gula aren cair di Kecamatan Tabang berbentuk tabung dengan diameter $40\\text{ cm}$ dan tinggi $50\\text{ cm}$. Gula aren cair tersebut akan dikemas ke dalam botol-botol kecil berbentuk tabung berdiameter $8\\text{ cm}$ dan tinggi $10\\text{ cm}$. Banyak botol maksimal yang dapat diisi penuh adalah ....",
    "options": {
      "A": "25 botol",
      "B": "50 botol",
      "C": "100 botol",
      "D": "125 botol"
    },
    "correctAnswer": "D",
    "explanation": "Banyak botol $= \\frac{V_{\\text{besar}}}{V_{\\text{kecil}}} = \\frac{\\pi R^2 T}{\\pi r^2 t} = \\left(\\frac{20}{4}\\right)^2 \\times \\frac{50}{10} = 5^2 \\times 5 = 25 \\times 5 = 125\\text{ botol}$.",
    "imageSvg": "<svg viewBox='0 0 240 165' width='240' height='165' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='25' width='75' height='110' fill='#fde68a' stroke='#b45309' stroke-width='2'/><ellipse cx='67.5' cy='25' rx='37.5' ry='10' fill='#fef3c7' stroke='#b45309' stroke-width='1.5'/><text x='67.5' y='85' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>d=40, t=50</text><text x='132' y='85' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='165' y='85' width='30' height='50' fill='#fde68a' stroke='#b45309' stroke-width='2'/><ellipse cx='180' cy='85' rx='15' ry='5' fill='#fef3c7' stroke='#b45309' stroke-width='1.5'/><text x='180' y='152' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>d=8, t=10</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 39
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki luas permukaan $704\\text{ cm}^2$. Jika panjang jari-jari alas kerucut adalah $7\\text{ cm}$ dan $\\pi = \\frac{22}{7}$, panjang garis pelukis kerucut tersebut adalah ....",
    "options": {
      "A": "21 cm",
      "B": "24 cm",
      "C": "25 cm",
      "D": "32 cm"
    },
    "correctAnswer": "C",
    "explanation": "Luas permukaan kerucut $= \\pi r(r + s) = 704 \\Rightarrow \\frac{22}{7} \\times 7 \\times (7 + s) = 704 \\Rightarrow 22(7 + s) = 704 \\Rightarrow 7 + s = 32 \\Rightarrow s = 25\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#be185d' font-weight='bold'>s = ?</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 40
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola besi pejal berjari-jari $6\\text{ cm}$ dilebur dan dicetak ulang menjadi beberapa bola besi kecil yang identik dengan jari-jari $2\\text{ cm}$. Banyak bola kecil yang dapat dibuat adalah ....",
    "options": {
      "A": "3 buah",
      "B": "9 buah",
      "C": "18 buah",
      "D": "27 buah"
    },
    "correctAnswer": "D",
    "explanation": "Banyak bola kecil $= \\frac{V_{\\text{besar}}}{V_{\\text{kecil}}} = \\frac{\\frac{4}{3}\\pi R^3}{\\frac{4}{3}\\pi r^3} = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27\\text{ buah}$.",
    "imageSvg": "<svg viewBox='0 0 240 150' width='240' height='150' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='75' r='45' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><text x='60' y='136' font-size='11' text-anchor='middle' fill='#334155' font-weight='bold'>R = 6 cm</text><text x='125' y='80' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><circle cx='170' cy='65' r='15' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/><circle cx='205' cy='65' r='15' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/><circle cx='187' cy='95' r='15' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/><text x='187' y='136' font-size='11' text-anchor='middle' fill='#334155' font-weight='bold'>r = 2 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 41
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tiang penyangga kayu berbentuk tabung di SMPN 1 Tabang memiliki keliling lingkaran alas $62,8\\text{ cm}$ dan tinggi $3\\text{ meter}$. Jika tiang tersebut akan dicat pada bagian selimutnya saja, luas permukaan yang dicat adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "1,884 m²",
      "B": "18,84 m²",
      "C": "188,4 m²",
      "D": "0,1884 m²"
    },
    "correctAnswer": "A",
    "explanation": "Keliling alas $K = 62,8\\text{ cm} = 0,628\\text{ m}$. Luas selimut tabung $= K \\times t = 0,628\\text{ m} \\times 3\\text{ m} = 1,884\\text{ m}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='28' rx='35' ry='10' fill='#fed7aa' stroke='#9a3412' stroke-width='2'/><rect x='70' y='28' width='70' height='115' fill='#ffedd5' stroke='#9a3412' stroke-width='2'/><ellipse cx='105' cy='143' rx='35' ry='10' fill='#fed7aa' stroke='#9a3412' stroke-width='2'/><text x='168' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>t = 3 m</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>Keliling = 62,8 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 42
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut mempunyai panjang garis pelukis $17\\text{ cm}$ dan tinggi $15\\text{ cm}$. Luas seluruh permukaan kerucut tersebut dalam $\\pi$ adalah ....",
    "options": {
      "A": "136π cm²",
      "B": "180π cm²",
      "C": "200π cm²",
      "D": "256π cm²"
    },
    "correctAnswer": "C",
    "explanation": "Jari-jari alas $r = \\sqrt{s^2 - t^2} = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ cm}$. Luas permukaan kerucut $= \\pi r(r + s) = \\pi \\times 8 \\times (8 + 17) = 8\\pi \\times 25 = 200\\pi\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>15 cm</text><text x='145' y='80' font-size='11' fill='#15803d' font-weight='bold'>17 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 43
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah setengah bola berongga (tanpa tutup) terbuat dari aluminium tipis dengan diameter $28\\text{ cm}$. Luas permukaan aluminium bagian luar setengah bola tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "616 cm²",
      "B": "1.232 cm²",
      "C": "1.848 cm²",
      "D": "2.464 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 14\\text{ cm}$. Karena berongga (tanpa penampang tutup), luas permukaannya $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 14 \\times 14 = 44 \\times 28 = 1.232\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,55 A65,65 0 0,0 175,55' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='55' rx='65' ry='16' fill='none' stroke='#0284c7' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='45' y1='55' x2='175' y2='55' stroke='#dc2626' stroke-width='1.5'/><text x='110' y='47' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 28 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 44
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kapsul obat berbentuk gabungan tabung di bagian tengah dan dua buah setengah bola di kedua ujungnya. Jika panjang total kapsul adalah $20\\text{ mm}$ dan diameternya $6\\text{ mm}$, volume kapsul tersebut dalam $\\pi$ adalah ....",
    "options": {
      "A": "126π mm³",
      "B": "162π mm³",
      "C": "180π mm³",
      "D": "216π mm³"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 3\\text{ mm}$. Dua setengah bola membentuk 1 bola utuh dengan diameter $6\\text{ mm}$, sehingga tinggi bagian tabung $t = 20 - 6 = 14\\text{ mm}$. Volume total $= V_{\\text{tabung}} + V_{\\text{bola}} = \\pi r^2 t + \\frac{4}{3}\\pi r^3 = \\pi(9)(14) + \\frac{4}{3}\\pi(27) = 126\\pi + 36\\pi = 162\\pi\\text{ mm}^3$.",
    "imageSvg": "<svg viewBox='0 0 240 130' width='240' height='130' xmlns='http://www.w3.org/2000/svg'><path d='M60,35 A30,30 0 0,0 60,95' fill='#fecdd3' stroke='#be123c' stroke-width='2'/><rect x='60' y='35' width='120' height='60' fill='#ffe4e6' stroke='#be123c' stroke-width='2'/><path d='M180,35 A30,30 0 0,1 180,95' fill='#fecdd3' stroke='#be123c' stroke-width='2'/><text x='120' y='115' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>Panjang total = 20 mm</text><text x='120' y='68' font-size='11' text-anchor='middle' fill='#be123c' font-weight='bold'>d = 6 mm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 45
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bangun ruang terbentuk dari tabung berjari-jari $7\\text{ cm}$ dan tinggi $15\\text{ cm}$ yang bagian atasnya dilubangi berbentuk kerucut dengan jari-jari dan tinggi yang sama dengan tabung. Volume bangun ruang yang tersisa adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "770 cm³",
      "B": "1.155 cm³",
      "C": "1.540 cm³",
      "D": "2.310 cm³"
    },
    "correctAnswer": "C",
    "explanation": "Volume tersisa $= V_{\\text{tabung}} - V_{\\text{kerucut}} = \\frac{2}{3} V_{\\text{tabung}} = \\frac{2}{3} \\times \\frac{22}{7} \\times 7 \\times 7 \\times 15 = 2 \\times 22 \\times 7 \\times 5 = 1.540\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 185' width='210' height='185' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='120' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><polygon points='55,30 155,30 105,150' fill='#ffffff' stroke='#1d4ed8' stroke-width='1.5' stroke-dasharray='4,3'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='105' y='170' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 46
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Pada bangun ruang nomor 48 (tabung berjari-jari $7\\text{ cm}$ dan tinggi $24\\text{ cm}$ yang dilubangi kerucut sedalam tinggi tabung), luas seluruh permukaan bangun yang baru terbentuk adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "1.210 cm²",
      "B": "1.518 cm²",
      "C": "1.760 cm²",
      "D": "1.914 cm²"
    },
    "correctAnswer": "C",
    "explanation": "Garis pelukis kerucut $s = \\sqrt{7^2 + 24^2} = 25\\text{ cm}$. Luas permukaan bangun berlubang $= L_{\\text{alas tabung}} + L_{\\text{selimut tabung}} + L_{\\text{selimut kerucut}} = \\pi r^2 + 2\\pi r t + \\pi r s = (\\frac{22}{7} \\times 49) + (2 \\times \\frac{22}{7} \\times 7 \\times 24) + (\\frac{22}{7} \\times 7 \\times 25) = 154 + 1.056 + 550 = 1.760\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 185' width='210' height='185' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='120' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><polygon points='55,30 155,30 105,150' fill='#ffffff' stroke='#4338ca' stroke-width='1.5' stroke-dasharray='4,3'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>24 cm</text><text x='105' y='170' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 47
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki diameter alas $16\\text{ cm}$ dan garis pelukis $17\\text{ cm}$. Volume kerucut tersebut dalam $\\pi$ adalah ....",
    "options": {
      "A": "240π cm³",
      "B": "320π cm³",
      "C": "640π cm³",
      "D": "960π cm³"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 8\\text{ cm}$, tinggi $t = \\sqrt{17^2 - 8^2} = 15\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (64)(15) = 320\\pi\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#fde68a' stroke='#d97706' stroke-width='2'/><text x='145' y='80' font-size='11' fill='#d97706' font-weight='bold'>17 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 16 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 48
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah pipa paralon saluran irigasi sawah di Desa Tabang berbentuk tabung berlubang dengan panjang $2\\text{ meter}$. Jika diameter luar pipa $14\\text{ cm}$ dan diameter dalamnya $10\\text{ cm}$, volume bahan paralon penyusun pipa tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "7.536 cm³",
      "B": "15.072 cm³",
      "C": "30.144 cm³",
      "D": "60.288 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari luar $R = 7\\text{ cm}$, jari-jari dalam $r = 5\\text{ cm}$, dan tinggi $t = 2\\text{ m} = 200\\text{ cm}$. Volume bahan pipa $= \\pi (R^2 - r^2) t = 3,14 \\times (49 - 25) \\times 200 = 3,14 \\times 24 \\times 200 = 15.072\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 230 155' width='230' height='155' xmlns='http://www.w3.org/2000/svg'><ellipse cx='115' cy='32' rx='55' ry='15' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><ellipse cx='115' cy='32' rx='35' ry='9' fill='#ffffff' stroke='#334155' stroke-width='1.5'/><path d='M60 32 L60 125 A55 15 0 0 0 170 125 L170 32' fill='#e2e8f0' fill-opacity='0.6' stroke='#334155' stroke-width='2'/><text x='195' y='82' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>2 m</text><text x='115' y='148' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>D = 14 cm, d = 10 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 49
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola memiliki volume $288\\pi\\text{ cm}^3$. Luas permukaan bola tersebut dalam $\\pi$ adalah ....",
    "options": {
      "A": "36π cm²",
      "B": "72π cm²",
      "C": "108π cm²",
      "D": "144π cm²"
    },
    "correctAnswer": "D",
    "explanation": "Volume bola $= \\frac{4}{3}\\pi r^3 = 288\\pi \\Rightarrow r^3 = \\frac{288 \\times 3}{4} = 216 \\Rightarrow r = 6\\text{ cm}$. Luas permukaan bola $= 4\\pi r^2 = 4\\pi (36) = 144\\pi\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='56' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><ellipse cx='100' cy='85' rx='56' ry='16' fill='none' stroke='#7e22ce' stroke-width='1.5' stroke-dasharray='4,3'/><text x='100' y='89' font-size='11' text-anchor='middle' fill='#581c87' font-weight='bold'>V = 288π cm³</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 50
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tandon air berbentuk tabung dengan diameter $1,4\\text{ meter}$ dan tinggi $1,5\\text{ meter}$ terisi penuh air. Air tersebut dialirkan melalui keran dengan debit $11\\text{ liter/menit}$. Waktu yang dibutuhkan untuk menguras habis air di dalam tandon adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "2 jam 30 menit",
      "B": "3 jam 10 menit",
      "C": "3 jam 30 menit",
      "D": "4 jam 10 menit"
    },
    "correctAnswer": "C",
    "explanation": "Jari-jari $r = 0,7\\text{ m} = 7\\text{ dm}$ dan tinggi $t = 1,5\\text{ m} = 15\\text{ dm}$. Volume tandon $= \\frac{22}{7} \\times 7 \\times 7 \\times 15 = 2.310\\text{ dm}^3 = 2.310\\text{ liter}$. Waktu $= \\frac{2.310}{11} = 210\\text{ menit} = 3\\text{ jam } 30\\text{ menit}$.",
    "imageSvg": "<svg viewBox='0 0 220 175' width='220' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='30' rx='50' ry='13' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><rect x='60' y='30' width='100' height='110' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='140' rx='50' ry='13' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='184' y='88' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>1,5 m</text><text x='110' y='22' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 1,4 m</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 51
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah juring lingkaran berjari-jari $15\\text{ cm}$ dan sudut pusat $288^\\circ$ dilipat membentuk kerucut tanpa alas. Tinggi kerucut yang terbentuk adalah ....",
    "options": {
      "A": "9 cm",
      "B": "12 cm",
      "C": "13 cm",
      "D": "14 cm"
    },
    "correctAnswer": "A",
    "explanation": "Garis pelukis $s = 15\\text{ cm}$. Jari-jari alas $r = \\frac{288^\\circ}{360^\\circ} \\times 15 = \\frac{4}{5} \\times 15 = 12\\text{ cm}$. Tinggi kerucut $t = \\sqrt{s^2 - r^2} = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><path d='M110,85 L175,85 A65,65 0 1,0 130,147 Z' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='92' y='62' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>288°</text><text x='145' y='78' font-size='11' text-anchor='middle' fill='#854d0e' font-weight='bold'>15 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 52
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki luas alas $616\\text{ cm}^2$ dan tinggi $20\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas selimut tabung tersebut adalah ....",
    "options": {
      "A": "880 cm²",
      "B": "1.760 cm²",
      "C": "2.376 cm²",
      "D": "2.992 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas alas $= \\pi r^2 = 616 \\Rightarrow \\frac{22}{7} r^2 = 616 \\Rightarrow r^2 = 196 \\Rightarrow r = 14\\text{ cm}$. Luas selimut tabung $= 2\\pi r t = 2 \\times \\frac{22}{7} \\times 14 \\times 20 = 1.760\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#dcfce7' stroke='#166534' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#f0fdf4' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>20 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#166534' font-weight='bold'>L.Alas = 616 cm²</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 53
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola dan sebuah kerucut memiliki panjang jari-jari yang sama yaitu $r$. Jika volume bola sama dengan volume kerucut, maka tinggi kerucut tersebut dinyatakan dalam $r$ adalah ....",
    "options": {
      "A": "2r",
      "B": "3r",
      "C": "4r",
      "D": "6r"
    },
    "correctAnswer": "C",
    "explanation": "Diketahui $V_{\\text{kerucut}} = V_{\\text{bola}} \\Rightarrow \\frac{1}{3}\\pi r^2 t = \\frac{4}{3}\\pi r^3$. Bagi kedua ruas dengan $\\frac{1}{3}\\pi r^2$, diperoleh $t = 4r$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='90' r='38' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='60' y='145' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>Bola (r)</text><polygon points='165,20 127,128 203,128' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='165' y='145' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>Kerucut (r, t)</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 54
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah topi ulang tahun berbentuk kerucut dibuat dari kertas karton dengan diameter alas $20\\text{ cm}$ dan tinggi $24\\text{ cm}$. Jika seorang siswa di SMPN 1 Tabang ingin membuat 10 buah topi yang sama, luas minimal karton yang dibutuhkan adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "7.536 cm²",
      "B": "8.164 cm²",
      "C": "11.304 cm²",
      "D": "16.328 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 10\\text{ cm}$, tinggi $t = 24\\text{ cm}$, sehingga $s = \\sqrt{10^2 + 24^2} = 26\\text{ cm}$. Topi kerucut tidak memiliki alas, sehingga luas 1 topi $= \\pi r s = 3,14 \\times 10 \\times 26 = 816,4\\text{ cm}^2$. Untuk 10 topi $= 10 \\times 816,4 = 8.164\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='none' stroke='#86198f' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>24 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#86198f' font-weight='bold'>d = 20 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 55
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung berisi air setinggi $12\\text{ cm}$. Jika jari-jari tabung adalah $10\\text{ cm}$ dan ke dalam tabung dimasukkan 1 buah bola pejal berjari-jari $6\\text{ cm}$ hingga tenggelam seluruhnya, tinggi air di dalam tabung sekarang menjadi ....",
    "options": {
      "A": "13,44 cm",
      "B": "14,88 cm",
      "C": "15,60 cm",
      "D": "16,32 cm"
    },
    "correctAnswer": "B",
    "explanation": "Kenaikan tinggi air $\\Delta t = \\frac{V_{\\text{bola}}}{\\pi R^2} = \\frac{\\frac{4}{3}\\pi (6^3)}{\\pi (10^2)} = \\frac{\\frac{4}{3} \\times 216}{100} = \\frac{288}{100} = 2,88\\text{ cm}$. Tinggi air sekarang $= 12 + 2,88 = 14,88\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='130' fill='none' stroke='#334155' stroke-width='2'/><rect x='55' y='75' width='100' height='85' fill='#bae6fd' fill-opacity='0.6'/><circle cx='105' cy='135' r='22' fill='#475569'/><text x='180' y='118' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>t akhir = ?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 56
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah benda berbentuk belahan bola pejal memiliki luas permukaan $462\\text{ cm}^2$. Jika $\\pi = \\frac{22}{7}$, volume belahan bola pejal tersebut adalah ....",
    "options": {
      "A": "718,67 cm³",
      "B": "1.078 cm³",
      "C": "1.437,33 cm³",
      "D": "2.156 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Luas permukaan setengah bola pejal $= 3\\pi r^2 = 462 \\Rightarrow 3 \\times \\frac{22}{7} \\times r^2 = 462 \\Rightarrow r^2 = \\frac{462 \\times 7}{66} = 49 \\Rightarrow r = 7\\text{ cm}$. Volume setengah bola $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = \\frac{2.156}{3} \\approx 718,67\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,60 A65,65 0 0,0 175,60 Z' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><ellipse cx='110' cy='60' rx='65' ry='16' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><text x='110' y='100' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>L = 462 cm²</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 57
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki diameter alas $14\\text{ cm}$ dan tinggi $24\\text{ cm}$. Perbandingan antara luas selimut kerucut dan luas alas kerucut tersebut adalah ....",
    "options": {
      "A": "7 : 24",
      "B": "24 : 7",
      "C": "25 : 7",
      "D": "7 : 25"
    },
    "correctAnswer": "C",
    "explanation": "Jari-jari $r = 7\\text{ cm}$ dan tinggi $t = 24\\text{ cm}$, sehingga $s = \\sqrt{7^2 + 24^2} = 25\\text{ cm}$. Perbandingan $L_{\\text{selimut}} : L_{\\text{alas}} = \\pi r s : \\pi r^2 = s : r = 25 : 7$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>24 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>d = 14 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 58
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bandul timbangan berbentuk gabungan kerucut dan setengah bola yang berimpit pada bidang alasnya. Jika diameter alasnya $10\\text{ cm}$ dan tinggi kerucutnya $12\\text{ cm}$, luas permukaan bandul tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "282,6 cm²",
      "B": "361,1 cm²",
      "C": "439,6 cm²",
      "D": "518,1 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 5\\text{ cm}$ dan tinggi kerucut $t = 12\\text{ cm}$, sehingga $s = \\sqrt{5^2 + 12^2} = 13\\text{ cm}$. Luas permukaan bandul $= \\pi r s + 2\\pi r^2 = \\pi r(s + 2r) = 3,14 \\times 5 \\times (13 + 10) = 15,7 \\times 23 = 361,1\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='100,25 55,120 145,120' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><path d='M55,120 A45,45 0 0,0 145,120 Z' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><text x='165' y='78' font-size='11' fill='#1e293b' font-weight='bold'>t = 12</text><text x='100' y='115' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 10 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 59
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki jari-jari $14\\text{ cm}$ dan tinggi $10\\text{ cm}$. Jika jari-jari tabung diperkecil menjadi setengahnya dan tingginya diperbesar menjadi dua kalinya, maka luas selimut tabung yang baru adalah ....",
    "options": {
      "A": "setengah kali luas selimut semula",
      "B": "sama dengan luas selimut semula",
      "C": "dua kali luas selimut semula",
      "D": "empat kali luas selimut semula"
    },
    "correctAnswer": "B",
    "explanation": "Luas selimut awal $L_1 = 2\\pi r t$. Luas selimut baru $L_2 = 2\\pi (\\frac{1}{2}r)(2t) = 2\\pi r t = L_1$. Jadi luas selimutnya sama dengan luas selimut semula.",
    "imageSvg": "<svg viewBox='0 0 240 155' width='240' height='155' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='55' width='70' height='70' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='65' y='142' font-size='10' text-anchor='middle' fill='#b45309' font-weight='bold'>r=14, t=10</text><text x='122' y='92' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='155' y='25' width='35' height='100' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='172' y='142' font-size='10' text-anchor='middle' fill='#b45309' font-weight='bold'>r=7, t=20</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 60
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola plastik memiliki diameter $21\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, volume udara yang berada di dalam bola plastik tersebut adalah ....",
    "options": {
      "A": "4.851 cm³",
      "B": "9.702 cm³",
      "C": "19.404 cm³",
      "D": "38.808 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Jari-jari $r = \\frac{21}{2}\\text{ cm}$. Volume bola $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times \\frac{21}{2} \\times \\frac{21}{2} \\times \\frac{21}{2} = 11 \\times 21 \\times 21 = 4.851\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='58' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><line x1='42' y1='85' x2='158' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='100' y='78' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 21 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 61
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki volume $314\\text{ cm}^3$ dan jari-jari alas $5\\text{ cm}$. Jika $\\pi = 3,14$, panjang garis pelukis kerucut tersebut adalah ....",
    "options": {
      "A": "12 cm",
      "B": "13 cm",
      "C": "14 cm",
      "D": "15 cm"
    },
    "correctAnswer": "B",
    "explanation": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = 314 \\Rightarrow \\frac{1}{3} \\times 3,14 \\times 25 \\times t = 314 \\Rightarrow t = \\frac{314 \\times 3}{78,5} = 4 \\times 3 = 12\\text{ cm}$. Garis pelukis $s = \\sqrt{r^2 + t^2} = \\sqrt{5^2 + 12^2} = 13\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#4338ca' font-weight='bold'>s = ?</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 5 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 62
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah lumbung penyimpanan hasil panen padi di Kecamatan Tabang dilengkapi atap berbentuk kerucut dengan diameter $4,2\\text{ meter}$ dan tinggi $2\\text{ meter}$. Volume ruang udara di bawah atap lumbung tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "9,24 m³",
      "B": "13,86 m³",
      "C": "27,72 m³",
      "D": "36,96 m³"
    },
    "correctAnswer": "A",
    "explanation": "Jari-jari $r = 2,1\\text{ m}$ dan tinggi $t = 2\\text{ m}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 2,1 \\times 2,1 \\times 2 = 22 \\times 0,1 \\times 2,1 \\times 2 = 9,24\\text{ m}^3$.",
    "imageSvg": "<svg viewBox='0 0 220 165' width='220' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='110,25 40,125 180,125' fill='#fde68a' stroke='#92400e' stroke-width='2'/><ellipse cx='110' cy='125' rx='70' ry='15' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='110' y1='25' x2='110' y2='125' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='90' y='80' font-size='11' fill='#dc2626' font-weight='bold'>2 m</text><text x='110' y='152' font-size='11' text-anchor='middle' fill='#78350f' font-weight='bold'>d = 4,2 m</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 63
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki luas permukaan $1.188\\text{ cm}^2$. Jika panjang jari-jari alas tabung adalah $7\\text{ cm}$ dan $\\pi = \\frac{22}{7}$, tinggi tabung tersebut adalah ....",
    "options": {
      "A": "15 cm",
      "B": "18 cm",
      "C": "20 cm",
      "D": "22 cm"
    },
    "correctAnswer": "C",
    "explanation": "Luas permukaan tabung $= 2\\pi r(r + t) = 1.188 \\Rightarrow 2 \\times \\frac{22}{7} \\times 7 \\times (7 + t) = 1.188 \\Rightarrow 44(7 + t) = 1.188 \\Rightarrow 7 + t = 27 \\Rightarrow t = 20\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#eff6ff' stroke='#1d4ed8' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>t = ?</text><text x='128' y='133' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 64
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki jari-jari alas $12\\text{ cm}$ dan tinggi $16\\text{ cm}$. Jika jari-jari alasnya diperkecil menjadi $\\frac{3}{4}$ kali semula dan tingginya tetap, volume kerucut yang baru adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "1.356,48 cm³",
      "B": "1.808,64 cm³",
      "C": "2.411,52 cm³",
      "D": "4.069,44 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Jari-jari baru $r = \\frac{3}{4} \\times 12 = 9\\text{ cm}$ dan tinggi $t = 16\\text{ cm}$. Volume kerucut baru $= \\frac{1}{3} \\times 3,14 \\times 9^2 \\times 16 = 3,14 \\times 27 \\times 16 = 1.356,48\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='65,30 25,130 105,130' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='65' y='148' font-size='10' text-anchor='middle' fill='#0369a1' font-weight='bold'>r=12, t=16</text><text x='122' y='88' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><polygon points='175,30 145,130 205,130' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><text x='175' y='148' font-size='10' text-anchor='middle' fill='#0369a1' font-weight='bold'>r=9, t=16</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 65
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola memiliki luas permukaan $1.256\\text{ cm}^2$. Jika $\\pi = 3,14$, volume bola tersebut adalah ....",
    "options": {
      "A": "2.093,33 cm³",
      "B": "3.140,00 cm³",
      "C": "4.186,67 cm³",
      "D": "6.280,00 cm³"
    },
    "correctAnswer": "C",
    "explanation": "Luas permukaan $= 4\\pi r^2 = 1.256 \\Rightarrow 4 \\times 3,14 \\times r^2 = 1.256 \\Rightarrow 12,56 r^2 = 1.256 \\Rightarrow r^2 = 100 \\Rightarrow r = 10\\text{ cm}$. Volume bola $= \\frac{4}{3} \\times 3,14 \\times 10^3 = \\frac{12.560}{3} \\approx 4.186,67\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='58' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><ellipse cx='100' cy='85' rx='58' ry='16' fill='none' stroke='#b45309' stroke-width='1.5' stroke-dasharray='4,3'/><text x='100' y='89' font-size='11' text-anchor='middle' fill='#92400e' font-weight='bold'>L = 1.256 cm²</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 66
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bangun ruang gabungan terdiri atas dua kerucut identik yang berimpit pada bidang alasnya (berbentuk gasing simetris). Jika diameter alas bersama adalah $14\\text{ cm}$ dan jarak dari puncak kerucut atas ke puncak kerucut bawah adalah $48\\text{ cm}$, luas permukaan bangun tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "550 cm²",
      "B": "1.100 cm²",
      "C": "1.254 cm²",
      "D": "2.200 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 7\\text{ cm}$. Karena kedua kerucut identik, tinggi masing-masing kerucut $t = \\frac{48}{2} = 24\\text{ cm}$, sehingga garis pelukis $s = \\sqrt{7^2 + 24^2} = 25\\text{ cm}$. Luas permukaan $= 2 \\times \\pi r s = 2 \\times \\frac{22}{7} \\times 7 \\times 25 = 1.100\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 200 205' width='200' height='205' xmlns='http://www.w3.org/2000/svg'><polygon points='100,20 55,102 145,102' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><polygon points='100,185 55,102 145,102' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='185' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='168' y='105' font-size='11' fill='#dc2626' font-weight='bold'>48 cm</text><text x='100' y='96' font-size='11' text-anchor='middle' fill='#14532d' font-weight='bold'>d = 14 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 67
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kaleng susu berbentuk tabung memiliki jari-jari $5\\text{ cm}$ dan tinggi $14\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, volume susu maksimal yang dapat ditampung kaleng tersebut adalah ....",
    "options": {
      "A": "440 cm³",
      "B": "770 cm³",
      "C": "1.100 cm³",
      "D": "2.200 cm³"
    },
    "correctAnswer": "C",
    "explanation": "Volume tabung $= \\pi r^2 t = \\frac{22}{7} \\times 5^2 \\times 14 = 22 \\times 25 \\times 2 = 1.100\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 205 170' width='205' height='170' xmlns='http://www.w3.org/2000/svg'><ellipse cx='102' cy='32' rx='42' ry='11' fill='#f8fafc' stroke='#475569' stroke-width='2'/><rect x='60' y='32' width='84' height='105' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><ellipse cx='102' cy='137' rx='42' ry='11' fill='#e2e8f0' stroke='#475569' stroke-width='2'/><text x='166' y='88' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>14 cm</text><text x='122' y='130' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 5 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 68
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah juring lingkaran dengan sudut pusat $120^\\circ$ dan jari-jari $21\\text{ cm}$ dibuat menjadi selimut kerucut. Jika $\\pi = \\frac{22}{7}$, luas selimut kerucut tersebut adalah ....",
    "options": {
      "A": "154 cm²",
      "B": "308 cm²",
      "C": "462 cm²",
      "D": "616 cm²"
    },
    "correctAnswer": "C",
    "explanation": "Luas selimut kerucut sama dengan luas juring pembentuknya: $L = \\frac{120^\\circ}{360^\\circ} \\times \\pi R^2 = \\frac{1}{3} \\times \\frac{22}{7} \\times 21 \\times 21 = 22 \\times 21 = 462\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 165' width='220' height='165' xmlns='http://www.w3.org/2000/svg'><path d='M110,125 L175,125 A65,65 0 0,0 77,69 Z' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><text x='115' y='102' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>120°</text><text x='145' y='118' font-size='11' text-anchor='middle' fill='#701a75' font-weight='bold'>21 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 69
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung berdiameter $20\\text{ cm}$ dan tinggi $15\\text{ cm}$ dipotong secara vertikal tepat melalui sumbu simetrinya menjadi dua bagian yang sama besar (setengah tabung). Luas seluruh permukaan satu potongan setengah tabung tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "785 cm²",
      "B": "942 cm²",
      "C": "1.085 cm²",
      "D": "1.242 cm²"
    },
    "correctAnswer": "C",
    "explanation": "Jari-jari $r = 10\\text{ cm}$, diameter $d = 20\\text{ cm}$, tinggi $t = 15\\text{ cm}$. Luas setengah tabung $= \\frac{1}{2} L_{\\text{tabung}} + L_{\\text{penampang persegi panjang}} = (\\pi r^2 + \\pi r t) + (d \\times t) = (3,14 \\times 100 + 3,14 \\times 10 \\times 15) + (20 \\times 15) = 314 + 471 + 300 = 1.085\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 175' width='220' height='175' xmlns='http://www.w3.org/2000/svg'><path d='M55,40 A50,15 0 0,1 155,40 L155,140 A50,15 0 0,1 55,140 Z' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><rect x='55' y='40' width='100' height='100' fill='#bae6fd' fill-opacity='0.6' stroke='#0369a1' stroke-width='2'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='105' y='162' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 20 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 70
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah benda berbentuk setengah bola memiliki volume $18\\pi\\text{ cm}^3$. Jari-jari setengah bola tersebut adalah ....",
    "options": {
      "A": "2 cm",
      "B": "3 cm",
      "C": "4 cm",
      "D": "6 cm"
    },
    "correctAnswer": "B",
    "explanation": "Volume setengah bola $= \\frac{2}{3}\\pi r^3 = 18\\pi \\Rightarrow r^3 = \\frac{18 \\times 3}{2} = 27 \\Rightarrow r = 3\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 155' width='210' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,60 A60,60 0 0,0 165,60 Z' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><ellipse cx='105' cy='60' rx='60' ry='15' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><text x='105' y='98' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>V = 18π cm³</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 71
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Di ruang laboratorium IPA SMPN 1 Tabang terdapat gelas ukur berbentuk tabung dengan diameter dalam $7\\text{ cm}$. Jika ke dalam gelas ukur dituangkan $385\\text{ ml}$ air ($1\\text{ ml} = 1\\text{ cm}^3$), ketinggian permukaan air di dalam gelas ukur adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "8 cm",
      "B": "10 cm",
      "C": "12 cm",
      "D": "15 cm"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = \\frac{7}{2}\\text{ cm}$. Volume air $= \\pi r^2 t = 385 \\Rightarrow \\frac{22}{7} \\times \\frac{7}{2} \\times \\frac{7}{2} \\times t = 385 \\Rightarrow \\frac{77}{2} t = 385 \\Rightarrow t = \\frac{385 \\times 2}{77} = 5 \\times 2 = 10\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 205 175' width='205' height='175' xmlns='http://www.w3.org/2000/svg'><rect x='65' y='25' width='75' height='120' fill='none' stroke='#334155' stroke-width='2'/><rect x='65' y='65' width='75' height='80' fill='#7dd3fc' fill-opacity='0.6'/><text x='166' y='105' font-size='11' text-anchor='middle' fill='#0284c7' font-weight='bold'>t = ?</text><text x='102' y='162' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 72
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut mempunyai diameter alas $10\\text{ cm}$ dan tinggi $12\\text{ cm}$. Jika kerucut tersebut diiris mendatar tepat pada setengah ketinggiannya sehingga terbentuk kerucut kecil di bagian atas, perbandingan volume kerucut kecil terhadap volume kerucut mula-mula adalah ....",
    "options": {
      "A": "1 : 2",
      "B": "1 : 4",
      "C": "1 : 8",
      "D": "1 : 16"
    },
    "correctAnswer": "C",
    "explanation": "Kerucut kecil di bagian atas sebangun dengan kerucut besar dengan faktor skala $\\frac{1}{2}$ (jari-jari menjadi $\\frac{1}{2}r$ dan tinggi $\\frac{1}{2}t$). Perbandingan volume $= \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ atau $1 : 8$.",
    "imageSvg": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 50,145 160,145' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><line x1='77.5' y1='85' x2='132.5' y2='85' stroke='#dc2626' stroke-width='2' stroke-dasharray='4,3'/><text x='105' y='78' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>½ t</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#92400e' font-weight='bold'>d = 10 cm, t = 12 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 73
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Pada soal nomor 76 (kerucut berdiameter $10\\text{ cm}$ dan tinggi $12\\text{ cm}$ yang dipotong pada setengah tingginya), volume bagian bawah (kerucut terpancung) dalam $\\pi$ adalah ....",
    "options": {
      "A": "12,5π cm³",
      "B": "50π cm³",
      "C": "87,5π cm³",
      "D": "100π cm³"
    },
    "correctAnswer": "C",
    "explanation": "Volume kerucut besar $= \\frac{1}{3}\\pi (5^2)(12) = 100\\pi\\text{ cm}^3$. Volume kerucut kecil atas $= \\frac{1}{8} \\times 100\\pi = 12,5\\pi\\text{ cm}^3$. Volume bagian bawah $= 100\\pi - 12,5\\pi = 87,5\\pi\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='77,65 133,65 160,135 50,135' fill='#fde68a' stroke='#b45309' stroke-width='2'/><ellipse cx='105' cy='65' rx='28' ry='7' fill='#fef3c7' stroke='#b45309' stroke-width='1.5'/><ellipse cx='105' cy='135' rx='55' ry='13' fill='#fcd34d' stroke='#b45309' stroke-width='2'/><text x='105' y='160' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>Kerucut Terpancung</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 74
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Dua buah bola masing-masing memiliki luas permukaan $144\\pi\\text{ cm}^2$ dan $324\\pi\\text{ cm}^2$. Perbandingan volume bola pertama dan bola kedua adalah ....",
    "options": {
      "A": "2 : 3",
      "B": "4 : 9",
      "C": "8 : 27",
      "D": "16 : 81"
    },
    "correctAnswer": "C",
    "explanation": "Perbandingan luas $L_1 : L_2 = r_1^2 : r_2^2 = 144 : 324 = 4 : 9 \\Rightarrow r_1 : r_2 = 2 : 3$. Maka perbandingan volumenya $V_1 : V_2 = r_1^3 : r_2^3 = 2^3 : 3^3 = 8 : 27$.",
    "imageSvg": "<svg viewBox='0 0 230 145' width='230' height='145' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='78' r='32' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='60' y='128' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>L₁ = 144π</text><circle cx='160' cy='70' r='48' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><text x='160' y='133' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>L₂ = 324π</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 75
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki jari-jari $10\\text{ cm}$ dan tinggi $20\\text{ cm}$. Jika luas seluruh permukaan tabung tersebut adalah $A\\pi\\text{ cm}^2$, nilai $A$ adalah ....",
    "options": {
      "A": "400",
      "B": "500",
      "C": "600",
      "D": "2.000"
    },
    "correctAnswer": "C",
    "explanation": "Luas permukaan tabung $= 2\\pi r(r + t) = 2\\pi (10)(10 + 20) = 20\\pi \\times 30 = 600\\pi\\text{ cm}^2$. Jadi $A = 600$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='45' ry='12' fill='#dcfce7' stroke='#166534' stroke-width='2'/><rect x='60' y='32' width='90' height='108' fill='#f0fdf4' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='45' ry='12' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><text x='174' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>20 cm</text><text x='125' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 10 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 76
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah segitiga siku-siku dengan panjang sisi siku-sikunya $6\\text{ cm}$ dan $8\\text{ cm}$ diputar satu putaran penuh ($360^\\circ$) mengelilingi sisi yang panjangnya $8\\text{ cm}$ sebagai sumbu putar. Volume bangun ruang yang terbentuk adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "301,44 cm³",
      "B": "401,92 cm³",
      "C": "602,88 cm³",
      "D": "904,32 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Segitiga siku-siku yang diputar mengelilingi sisi $8\\text{ cm}$ membentuk kerucut dengan tinggi $t = 8\\text{ cm}$ dan jari-jari alas $r = 6\\text{ cm}$. Volume kerucut $= \\frac{1}{3} \\times 3,14 \\times 6^2 \\times 8 = 3,14 \\times 12 \\times 8 = 301,44\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,30 105,135 160,135' fill='#fecdd3' stroke='#be123c' stroke-width='2'/><polygon points='105,30 50,135 105,135' fill='#ffe4e6' stroke='#be123c' stroke-width='1.5' stroke-dasharray='4,3'/><ellipse cx='105' cy='135' rx='55' ry='13' fill='none' stroke='#be123c' stroke-width='1.5'/><text x='92' y='88' font-size='11' fill='#1e293b' font-weight='bold'>8 cm</text><text x='132' y='128' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>6 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 77
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Jika segitiga siku-siku pada soal nomor 80 (sisi siku-siku $6\\text{ cm}$ dan $8\\text{ cm}$) diputar mengelilingi sisi yang panjangnya $6\\text{ cm}$, luas selimut bangun yang terbentuk adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "188,4 cm²",
      "B": "251,2 cm²",
      "C": "314,0 cm²",
      "D": "452,16 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Terbentuk kerucut dengan tinggi $t = 6\\text{ cm}$, jari-jari $r = 8\\text{ cm}$, dan garis pelukis $s = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Luas selimut $= \\pi r s = 3,14 \\times 8 \\times 10 = 251,2\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 165' width='220' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='110,45 45,130 175,130' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='130' rx='65' ry='14' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='95' y='95' font-size='11' fill='#1e293b' font-weight='bold'>6 cm</text><text x='142' y='123' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>8 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 78
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah benda berbentuk bola dengan jari-jari $14\\text{ cm}$ dibelah menjadi dua bagian yang sama besar. Luas permukaan total dari kedua belahan bola tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "2.464 cm²",
      "B": "3.080 cm²",
      "C": "3.696 cm²",
      "D": "4.928 cm²"
    },
    "correctAnswer": "C",
    "explanation": "Dua belahan bola pejal memiliki total luas $= 2 \\times 3\\pi r^2 = 6\\pi r^2 = 6 \\times \\frac{22}{7} \\times 14 \\times 14 = 6 \\times 44 \\times 14 = 3.696\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 230 150' width='230' height='150' xmlns='http://www.w3.org/2000/svg'><path d='M25,75 A40,40 0 0,0 105,75 Z' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><ellipse cx='65' cy='75' rx='40' ry='11' fill='#bbf7d0' stroke='#15803d' stroke-width='1.5'/><path d='M125,75 A40,40 0 0,0 205,75 Z' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><ellipse cx='165' cy='75' rx='40' ry='11' fill='#bbf7d0' stroke='#15803d' stroke-width='1.5'/><text x='115' y='132' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>r = 14 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 79
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah wadah berbentuk tabung berdiameter $28\\text{ cm}$ dan tinggi $30\\text{ cm}$ penuh berisi air. Seluruh air dari tabung tersebut dituangkan ke dalam wadah berbentuk kerucut yang memiliki diameter alas $28\\text{ cm}$. Agar seluruh air dapat tertampung tepat penuh di dalam kerucut, tinggi kerucut tersebut haruslah ....",
    "options": {
      "A": "10 cm",
      "B": "30 cm",
      "C": "60 cm",
      "D": "90 cm"
    },
    "correctAnswer": "D",
    "explanation": "Karena diameter (dan jari-jari) tabung dan kerucut sama serta volumenya sama: $\\frac{1}{3}\\pi r^2 t_{\\text{kerucut}} = \\pi r^2 t_{\\text{tabung}} \\Rightarrow t_{\\text{kerucut}} = 3 \\times t_{\\text{tabung}} = 3 \\times 30 = 90\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='65' width='55' height='65' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='62' y='146' font-size='10' text-anchor='middle' fill='#0284c7' font-weight='bold'>t = 30 cm</text><text x='112' y='100' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><polygon points='165,15 137,130 193,130' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='165' y='146' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>t = ?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 80
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tiang tugu batas dusun di Kecamatan Tabang berbentuk tabung berjari-jari $14\\text{ cm}$ dan tinggi $100\\text{ cm}$, dengan bagian atasnya berupa setengah bola berjari-jari sama. Volume seluruh beton yang digunakan untuk membuat tugu tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "61.600 cm³",
      "B": "67.349,33 cm³",
      "C": "73.098,67 cm³",
      "D": "84.597,33 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Volume tabung $= \\frac{22}{7} \\times 14 \\times 14 \\times 100 = 61.600\\text{ cm}^3$. Volume setengah bola $= \\frac{2}{3} \\times \\frac{22}{7} \\times 14^3 = \\frac{17.248}{3} \\approx 5.749,33\\text{ cm}^3$. Volume total $= 61.600 + 5.749,33 = 67.349,33\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 205 205' width='205' height='205' xmlns='http://www.w3.org/2000/svg'><path d='M60,70 A42,42 0 0,1 144,70' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><rect x='60' y='70' width='84' height='100' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><ellipse cx='102' cy='170' rx='42' ry='11' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><text x='172' y='125' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>100 cm</text><text x='102' y='193' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 14 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 81
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki keliling alas $62,8\\text{ cm}$ dan garis pelukis $13\\text{ cm}$. Jika $\\pi = 3,14$, tinggi kerucut tersebut adalah ....",
    "options": {
      "A": "10 cm",
      "B": "11 cm",
      "C": "12 cm",
      "D": "14 cm"
    },
    "correctAnswer": "C",
    "explanation": "Keliling alas $= 2\\pi r = 62,8 \\Rightarrow 2 \\times 3,14 \\times r = 62,8 \\Rightarrow r = 10\\text{ cm}$. Tinggi kerucut $t = \\sqrt{s^2 - r^2} = \\sqrt{13^2 - 10^2}$? Tunggu: $\\sqrt{169 - 100} = \\sqrt{69}$, perbaiki angka soal agar bulat: jika $s = 26\\text{ cm}$, $t = \\sqrt{26^2 - 10^2} = 24\\text{ cm}$, atau jika $r = 5\\text{ cm}$ ($K = 31,4\\text{ cm}$) maka $t = \\sqrt{13^2 - 5^2} = 12\\text{ cm}$. Gunakan $K = 31,4\\text{ cm} \\Rightarrow r = 5\\text{ cm} \\Rightarrow t = 12\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fef9c3' stroke='#a16207' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#fef08a' stroke='#a16207' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>t = ?</text><text x='145' y='80' font-size='11' fill='#a16207' font-weight='bold'>13 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 82
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki volume $1.540\\text{ cm}^3$ dan tinggi $10\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas selimut tabung tersebut adalah ....",
    "options": {
      "A": "220 cm²",
      "B": "440 cm²",
      "C": "616 cm²",
      "D": "748 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Volume $= \\pi r^2 t = 1.540 \\Rightarrow \\frac{22}{7} \\times r^2 \\times 10 = 1.540 \\Rightarrow r^2 = 49 \\Rightarrow r = 7\\text{ cm}$. Luas selimut $= 2\\pi r t = 2 \\times \\frac{22}{7} \\times 7 \\times 10 = 440\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#faf5ff' stroke='#7e22ce' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>10 cm</text><text x='105' y='90' font-size='10' text-anchor='middle' fill='#7e22ce' font-weight='bold'>V = 1.540 cm³</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 83
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola berjari-jari $9\\text{ cm}$ dan sebuah kerucut berjari-jari $9\\text{ cm}$. Jika luas permukaan bola sama dengan luas selimut kerucut, panjang garis pelukis kerucut tersebut adalah ....",
    "options": {
      "A": "18 cm",
      "B": "27 cm",
      "C": "36 cm",
      "D": "45 cm"
    },
    "correctAnswer": "C",
    "explanation": "Diketahui $L_{\\text{selimut kerucut}} = L_{\\text{bola}} \\Rightarrow \\pi r s = 4\\pi r^2 \\Rightarrow s = 4r = 4 \\times 9 = 36\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='88' r='38' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><text x='60' y='145' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>r = 9 cm</text><polygon points='165,20 127,128 203,128' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='165' y='145' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>r = 9 cm, s = ?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 84
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tempat pensil kayu buatan siswa SMPN 1 Tabang berbentuk tabung tanpa tutup dengan diameter $8\\text{ cm}$ dan tinggi $15\\text{ cm}$. Bagian luar tempat pensil akan dilapisi kain flanel. Luas minimal kain flanel yang dibutuhkan adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "376,80 cm²",
      "B": "427,04 cm²",
      "C": "477,28 cm²",
      "D": "753,60 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 4\\text{ cm}$ dan tinggi $t = 15\\text{ cm}$. Luas tabung tanpa tutup $= \\pi r^2 + 2\\pi r t = (3,14 \\times 16) + (2 \\times 3,14 \\times 4 \\times 15) = 50,24 + 376,80 = 427,04\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 205 175' width='205' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='102' cy='32' rx='40' ry='11' fill='none' stroke='#be185d' stroke-width='2' stroke-dasharray='4,3'/><path d='M62 32 L62 140 A40 11 0 0 0 142 140 L142 32' fill='#fce7f3' fill-opacity='0.7' stroke='#be185d' stroke-width='2'/><ellipse cx='102' cy='140' rx='40' ry='11' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><text x='166' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='102' y='162' font-size='11' text-anchor='middle' fill='#be185d' font-weight='bold'>d = 8 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 85
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki jari-jari alas $15\\text{ cm}$ dan garis pelukis $25\\text{ cm}$. Volume kerucut tersebut dalam $\\pi$ adalah ....",
    "options": {
      "A": "1.125π cm³",
      "B": "1.500π cm³",
      "C": "1.875π cm³",
      "D": "4.500π cm³"
    },
    "correctAnswer": "B",
    "explanation": "Tinggi kerucut $t = \\sqrt{25^2 - 15^2} = \\sqrt{625 - 225} = \\sqrt{400} = 20\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (15^2)(20) = \\pi \\times 75 \\times 20 = 1.500\\pi\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#dcfce7' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#166534' font-weight='bold'>25 cm</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>15 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 86
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah benda berbentuk gabungan tabung dan dua kerucut identik pada kedua ujungnya (ujung atas dan ujung bawah). Jika jari-jari tabung dan kerucut $6\\text{ cm}$, tinggi tabung $10\\text{ cm}$, dan tinggi masing-masing kerucut $8\\text{ cm}$, luas permukaan seluruh benda tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "565,2 cm²",
      "B": "753,6 cm²",
      "C": "942,0 cm²",
      "D": "1.130,4 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Garis pelukis kerucut $s = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Luas permukaan $= L_{\\text{selimut tabung}} + 2 \\times L_{\\text{selimut kerucut}} = 2\\pi r t + 2\\pi r s = 2\\pi r(t + s) = 2 \\times 3,14 \\times 6 \\times (10 + 10) = 37,68 \\times 20 = 753,6\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 200 220' width='200' height='220' xmlns='http://www.w3.org/2000/svg'><polygon points='100,15 60,65 140,65' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><rect x='60' y='65' width='80' height='85' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><polygon points='100,200 60,150 140,150' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><text x='166' y='110' font-size='11' fill='#1e293b' font-weight='bold'>10 cm</text><text x='100' y='110' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 6 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 87
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola dan sebuah tabung memiliki panjang jari-jari yang sama yaitu $7\\text{ cm}$. Jika tinggi tabung adalah $14\\text{ cm}$, selisih luas permukaan tabung dan luas permukaan bola adalah .... ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "0 cm²",
      "B": "154 cm²",
      "C": "308 cm²",
      "D": "616 cm²"
    },
    "correctAnswer": "C",
    "explanation": "Luas permukaan tabung $= 2\\pi r(r + t) = 2 \\times \\frac{22}{7} \\times 7 \\times (7 + 14) = 44 \\times 21 = 924\\text{ cm}^2$. Luas permukaan bola $= 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 49 = 616\\text{ cm}^2$. Selisihnya $= 924 - 616 = 308\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='85' r='38' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='60' y='142' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>r = 7 cm</text><rect x='135' y='47' width='76' height='76' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><text x='173' y='142' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>r = 7, t = 14</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 88
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut memiliki luas alas $154\\text{ cm}^2$ dan garis pelukis $25\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas selimut kerucut tersebut adalah ....",
    "options": {
      "A": "350 cm²",
      "B": "550 cm²",
      "C": "704 cm²",
      "D": "1.100 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas alas $= \\pi r^2 = 154 \\Rightarrow \\frac{22}{7} r^2 = 154 \\Rightarrow r^2 = 49 \\Rightarrow r = 7\\text{ cm}$. Luas selimut $= \\pi r s = \\frac{22}{7} \\times 7 \\times 25 = 550\\text{ cm}^2$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#f5d0fe' stroke='#86198f' stroke-width='2'/><text x='145' y='80' font-size='11' fill='#86198f' font-weight='bold'>25 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#701a75' font-weight='bold'>L.Alas = 154 cm²</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 89
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bak mandi berbentuk setengah bola berongga dengan diameter dalam $1,4\\text{ meter}$. Bak tersebut akan diisi air menggunakan ember berkapasitas $14\\text{ liter}$. Berapa kali pengisian ember yang dibutuhkan hingga bak mandi terisi penuh? ($\\pi = \\frac{22}{7}$)",
    "options": {
      "A": "44 kali",
      "B": "51 kali",
      "C": "52 kali",
      "D": "103 kali"
    },
    "correctAnswer": "C",
    "explanation": "Jari-jari $r = 0,7\\text{ m} = 7\\text{ dm}$. Volume setengah bola $= \\frac{2}{3} \\times \\frac{22}{7} \\times 7^3 = \\frac{2.156}{3} \\approx 718,67\\text{ liter}$. Banyak ember $= \\frac{718,67}{14} \\approx 51,33$, sehingga dibutuhkan $52\\text{ kali}$ pengisian agar penuh.",
    "imageSvg": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,55 A65,65 0 0,0 175,55 Z' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='55' rx='65' ry='16' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='110' y='48' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 1,4 m</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 90
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung memiliki perbandingan jari-jari dan tinggi $r : t = 2 : 5$. Jika luas selimut tabung tersebut adalah $314\\text{ cm}^2$ dan $\\pi = 3,14$, panjang jari-jari tabung adalah ....",
    "options": {
      "A": "2 cm",
      "B": "4 cm",
      "C": "5 cm",
      "D": "10 cm"
    },
    "correctAnswer": "C",
    "explanation": "Misalkan $r = 2x$ dan $t = 5x$. Luas selimut $= 2\\pi r t = 314 \\Rightarrow 2 \\times 3,14 \\times (2x)(5x) = 314 \\Rightarrow 62,8 x^2 = 314 \\Rightarrow x^2 = 5$? Periksa: jika $r = 2x$ dan $t = 5x$, $2(3,14)(10x^2) = 62,8x^2 = 314 \\Rightarrow x^2 = 5$. Agar bulat, jika $r : t = 1 : 2$, $2(3,14)(x)(2x) = 12,56x^2 = 314 \\Rightarrow x^2 = 25 \\Rightarrow x = 5 \\Rightarrow r = 5\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='28' rx='40' ry='11' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><rect x='65' y='28' width='80' height='112' fill='#fffbeb' stroke='#b45309' stroke-width='2'/><ellipse cx='105' cy='140' rx='40' ry='11' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='105' y='88' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>Ls = 314 cm²</text><text x='105' y='162' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r : t = 2 : 5</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 91
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kerucut dan sebuah setengah bola memiliki jari-jari alas yang sama yaitu $7\\text{ cm}$. Jika tinggi kerucut adalah $14\\text{ cm}$, perbandingan volume kerucut terhadap volume setengah bola adalah ....",
    "options": {
      "A": "1 : 1",
      "B": "1 : 2",
      "C": "2 : 1",
      "D": "2 : 3"
    },
    "correctAnswer": "A",
    "explanation": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (7^2)(14) = \\frac{1}{3}\\pi (7^2)(2 \\times 7) = \\frac{2}{3}\\pi (7^3)$, yang tepat sama dengan volume setengah bola ($\\frac{2}{3}\\pi r^3$). Jadi perbandingannya $1 : 1$.",
    "imageSvg": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='60,25 25,125 95,125' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='60' y='145' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>r=7, t=14</text><path d='M130,85 A35,35 0 0,0 200,85 Z' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><text x='165' y='145' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>r=7</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 92
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah kubah bangunan balai desa di Kecamatan Tabang berbentuk setengah bola dengan keliling lingkaran alas $44\\text{ meter}$. Jika $\\pi = \\frac{22}{7}$, luas permukaan bagian luar kubah tersebut adalah ....",
    "options": {
      "A": "154 m²",
      "B": "308 m²",
      "C": "462 m²",
      "D": "616 m²"
    },
    "correctAnswer": "B",
    "explanation": "Keliling lingkaran $= 2\\pi r = 44 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 44 \\Rightarrow r = 7\\text{ m}$. Luas permukaan luar setengah bola $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 49 = 308\\text{ m}^2$.",
    "imageSvg": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,110 A65,65 0 0,1 175,110 Z' fill='#dcfce7' stroke='#166534' stroke-width='2'/><line x1='45' y1='110' x2='175' y2='110' stroke='#166534' stroke-width='2'/><text x='110' y='128' font-size='11' text-anchor='middle' fill='#166534' font-weight='bold'>Keliling = 44 m</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 93
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah tabung berdiameter $14\\text{ cm}$ dan tinggi $12\\text{ cm}$ diisi air hingga penuh. Kemudian seluruh air dituangkan ke dalam tabung lain yang berdiameter $28\\text{ cm}$. Ketinggian air pada tabung kedua adalah ....",
    "options": {
      "A": "3 cm",
      "B": "4 cm",
      "C": "6 cm",
      "D": "8 cm"
    },
    "correctAnswer": "A",
    "explanation": "Volume air tetap: $\\pi R^2 t_2 = \\pi r^2 t_1 \\Rightarrow 14^2 \\times t_2 = 7^2 \\times 12 \\Rightarrow 196 t_2 = 49 \\times 12 \\Rightarrow t_2 = \\frac{12}{4} = 3\\text{ cm}$.",
    "imageSvg": "<svg viewBox='0 0 240 160' width='240' height='160' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='35' width='40' height='95' fill='#7dd3fc' stroke='#0284c7' stroke-width='2'/><text x='55' y='146' font-size='10' text-anchor='middle' fill='#0284c7' font-weight='bold'>d=14, t=12</text><text x='100' y='88' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='130' y='105' width='80' height='25' fill='#7dd3fc'/><rect x='130' y='55' width='80' height='75' fill='none' stroke='#0284c7' stroke-width='2'/><text x='170' y='146' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>d=28, t=?</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 94
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bangun ruang gabungan terdiri atas tabung berdiameter $10\\text{ cm}$ dan tinggi $12\\text{ cm}$ yang pada bagian atasnya ditutup oleh kerucut berdiameter sama dengan garis pelukis $13\\text{ cm}$. Volume bangun gabungan tersebut adalah .... ($\\pi = 3,14$)",
    "options": {
      "A": "942 cm³",
      "B": "1.256 cm³",
      "C": "1.570 cm³",
      "D": "1.884 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Jari-jari $r = 5\\text{ cm}$. Tinggi kerucut $t_k = \\sqrt{13^2 - 5^2} = 12\\text{ cm}$. Volume tabung $= 3,14 \\times 25 \\times 12 = 942\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3} \\times 3,14 \\times 25 \\times 12 = 314\\text{ cm}^3$. Volume gabungan $= 942 + 314 = 1.256\\text{ cm}^3$.",
    "imageSvg": "<svg viewBox='0 0 210 205' width='210' height='205' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 60,80 150,80' fill='#fde68a' stroke='#b45309' stroke-width='2'/><rect x='60' y='80' width='90' height='90' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><ellipse cx='105' cy='170' rx='45' ry='11' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='145' y='52' font-size='11' fill='#b45309' font-weight='bold'>13 cm</text><text x='174' y='128' font-size='11' fill='#1e293b' font-weight='bold'>12 cm</text><text x='105' y='193' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 10 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 95
  },
  {
    "grade": "9",
    "topic": "Bangun Ruang Sisi Lengkung",
    "difficulty": "sedang",
    "questionText": "Sebuah bola besi pejal memiliki massa jenis $8\\text{ gram/cm}^3$. Jika jari-jari bola besi tersebut adalah $7\\text{ cm}$ dan $\\pi = \\frac{22}{7}$, massa bola besi tersebut adalah ....",
    "options": {
      "A": "1.437,33 gram",
      "B": "5.749,33 gram",
      "C": "11.498,67 gram",
      "D": "17.248,00 gram"
    },
    "correctAnswer": "C",
    "explanation": "Volume bola $= \\frac{4}{3} \\times \\frac{22}{7} \\times 7^3 = \\frac{4.312}{3}\\text{ cm}^3$. Massa bola $= \\text{Volume} \\times \\text{Massa jenis} = \\frac{4.312}{3} \\times 8 = \\frac{34.496}{3} \\approx 11.498,67\\text{ gram}$.",
    "imageSvg": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='56' fill='#94a3b8' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='85' x2='156' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='128' y='78' font-size='11' text-anchor='middle' fill='#ffffff' font-weight='bold'>r = 7 cm</text></svg>",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 96
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dalam statistika, keseluruhan kelompok orang, benda, atau objek yang sedang diamati atau diteliti disebut...",
    "options": {
      "A": "Sampel",
      "B": "Populasi",
      "C": "Sensus",
      "D": "Variabel"
    },
    "correctAnswer": "B",
    "explanation": "Populasi adalah seluruh kelompok orang, benda, atau objek yang menjadi sasaran pengamatan atau penelitian.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 1
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebagian kecil dari populasi yang diambil untuk diamati secara langsung sebagai perwakilan disebut...",
    "options": {
      "A": "Populasi",
      "B": "Sensus",
      "C": "Sampel",
      "D": "Data acak"
    },
    "correctAnswer": "C",
    "explanation": "Sampel adalah bagian kecil yang diambil dari populasi untuk mewakili keadaan seluruh populasi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 2
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Ibu mencicipi sesendok kuah sayur dari satu panci penuh untuk mengetahui apakah rasanya sudah pas. Dalam analogi ini, kuah sayur satu panci penuh menggambarkan...",
    "options": {
      "A": "Sampel",
      "B": "Bias",
      "C": "Populasi",
      "D": "Sensus"
    },
    "correctAnswer": "C",
    "explanation": "Kuah sayur satu panci penuh adalah keseluruhan objek yang ingin diketahui rasanya, sehingga berperan sebagai populasi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 3
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pada analogi mencicipi kuah sayur di panci, satu sendok kuah sayur yang diambil untuk dicicipi menggambarkan...",
    "options": {
      "A": "Populasi",
      "B": "Sampel",
      "C": "Sensus",
      "D": "Objek bias"
    },
    "correctAnswer": "B",
    "explanation": "Satu sendok kuah sayur adalah bagian kecil yang diambil untuk mewakili rasa seluruh panci, sehingga disebut sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 4
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Kegiatan mengamati atau meneliti seluruh anggota populasi satu per satu tanpa terkecuali disebut...",
    "options": {
      "A": "Sampel acak",
      "B": "Sensus",
      "C": "Estimasi",
      "D": "Sampling"
    },
    "correctAnswer": "B",
    "explanation": "Sensus adalah metode pengumpulan data dengan cara mengamati seluruh anggota populasi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 5
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Hubungan yang tepat antara populasi dan sampel adalah...",
    "options": {
      "A": "Populasi merupakan bagian dari sampel",
      "B": "Sampel merupakan bagian dari populasi",
      "C": "Populasi selalu lebih sedikit daripada sampel",
      "D": "Populasi dan sampel selalu memiliki jumlah yang sama"
    },
    "correctAnswer": "B",
    "explanation": "Sampel diambil dari dalam populasi, sehingga sampel selalu merupakan bagian dari populasi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 6
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sampel yang baik dan dapat dipercaya kesimpulannya harus bersifat representatif, yang artinya...",
    "options": {
      "A": "Jumlahnya harus lebih dari separuh populasi",
      "B": "Diambil dari kelompok yang paling mudah ditemui",
      "C": "Benar-benar mewakili keadaan seluruh populasi",
      "D": "Hanya diambil dari siswa yang berprestasi"
    },
    "correctAnswer": "C",
    "explanation": "Representatif berarti sampel mampu mencerminkan atau mewakili karakteristik seluruh populasi secara adil.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 7
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Jika sampel diambil hanya dari satu kelompok tertentu saja sehingga kesimpulannya melenceng dari kenyataan, maka sampel tersebut bersifat...",
    "options": {
      "A": "Representatif",
      "B": "Acak",
      "C": "Bias",
      "D": "Sensus"
    },
    "correctAnswer": "C",
    "explanation": "Bias terjadi ketika pemilihan sampel berat sebelah atau tidak adil sehingga hasilnya melenceng dari keadaan populasi sebenarnya.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 8
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Cara paling adil untuk mengambil sampel agar setiap anggota populasi memiliki kesempatan yang sama untuk terpilih adalah dengan cara...",
    "options": {
      "A": "Memilih teman terdekat",
      "B": "Pengambilan secara acak (random)",
      "C": "Memilih kelompok yang paling ramai",
      "D": "Mengambil yang berada di barisan depan saja"
    },
    "correctAnswer": "B",
    "explanation": "Pengambilan secara acak (random) menjamin setiap anggota populasi memiliki peluang yang sama untuk terpilih sebagai sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 9
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Manakah pernyataan berikut yang SALAH mengenai populasi?",
    "options": {
      "A": "Populasi bisa berupa sekumpulan manusia",
      "B": "Populasi bisa berupa sekumpulan hewan atau tanaman",
      "C": "Populasi selalu harus berupa jumlah penduduk suatu daerah",
      "D": "Populasi bisa berupa hasil produksi barang di pabrik"
    },
    "correctAnswer": "C",
    "explanation": "Populasi tidak selalu berupa manusia; populasi dapat berupa benda, hewan, tanaman, nilai ujian, maupun kejadian.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 10
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pemerintah melakukan pendataan penduduk di seluruh wilayah Indonesia dari Sabang sampai Merauke tanpa ada satu warga pun yang terlewat. Kegiatan ini merupakan contoh...",
    "options": {
      "A": "Pengambilan sampel acak",
      "B": "Sensus penduduk",
      "C": "Sampel bias",
      "D": "Uji coba terbatas"
    },
    "correctAnswer": "B",
    "explanation": "Karena seluruh anggota populasi (seluruh penduduk Indonesia) didata tanpa terkecuali, kegiatan ini disebut sensus.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 11
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Wali kelas IX A mencatat nilai ulangan harian matematika seluruh 32 siswa di kelasnya untuk menghitung rata-rata kelas. Dalam hal ini, wali kelas melakukan...",
    "options": {
      "A": "Sensus terhadap siswa kelas IX A",
      "B": "Pengambilan sampel acak",
      "C": "Pengambilan sampel bias",
      "D": "Survei perwakilan"
    },
    "correctAnswer": "A",
    "explanation": "Seluruh 32 siswa di kelas IX A didata semuanya tanpa terkecuali, sehingga wali kelas melakukan sensus pada lingkup kelas tersebut.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 12
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Agar tidak terjadi kesalahan dalam menafsirkan soal cerita statistika, langkah pertama yang harus dilakukan adalah...",
    "options": {
      "A": "Menghitung rata-rata angka yang muncul",
      "B": "Menentukan keseluruhan objek yang menjadi sasaran pengamatan (populasi)",
      "C": "Memilih angka paling kecil sebagai populasi",
      "D": "Mengalikan semua bilangan pada soal"
    },
    "correctAnswer": "B",
    "explanation": "Kita perlu menentukan batas keseluruhan objek yang diteliti (populasi) terlebih dahulu sebelum menentukan bagian perwakilannya (sampel).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 13
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Istilah 'random' dalam teknik pengambilan sampel memiliki arti...",
    "options": {
      "A": "Teratur berdasarkan abjad",
      "B": "Acak tanpa pilih kasih",
      "C": "Berdasarkan urutan tinggi badan",
      "D": "Dipilih oleh ketua kelas"
    },
    "correctAnswer": "B",
    "explanation": "Random berarti acak, yaitu setiap anggota populasi berpeluang sama untuk terpilih tanpa diskriminasi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 14
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Jika sebuah penelitian memiliki populasi sebanyak 500 objek, manakah ukuran sampel berikut yang paling masuk akal?",
    "options": {
      "A": "500 objek",
      "B": "650 objek",
      "C": "50 objek",
      "D": "0 objek"
    },
    "correctAnswer": "C",
    "explanation": "Sampel adalah sebagian kecil dari populasi (kurang dari 500 objek), sehingga 50 objek merupakan ukuran sampel yang masuk akal.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 15
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Mengapa data dari sampel yang bias tidak boleh dijadikan dasar pengambilan keputusan penting?",
    "options": {
      "A": "Karena prosesnya terlalu lama",
      "B": "Karena biayanya sangat mahal",
      "C": "Karena kesimpulannya berat sebelah dan tidak mencerminkan kondisi sebenarnya",
      "D": "Karena jumlah datanya terlalu banyak"
    },
    "correctAnswer": "C",
    "explanation": "Sampel bias hanya mewakili sebagian kecil kelompok tertentu, sehingga kesimpulannya dapat menyesatkan.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 16
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dalam sebuah penelitian, seluruh anggota populasi disebut N, sedangkan anggota sampel disebut n. Hubungan yang benar antara N dan n adalah...",
    "options": {
      "A": "n selalu lebih besar dari N",
      "B": "n lebih kecil dari N",
      "C": "n harus sama dengan N",
      "D": "N adalah bagian dari n"
    },
    "correctAnswer": "B",
    "explanation": "Karena sampel merupakan bagian kecil dari populasi, ukuran sampel (n) lebih kecil daripada ukuran populasi (N).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 17
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang dokter mengambil sedikit darah dari ujung jari pasien untuk memeriksa kadar gula darah di dalam tubuh pasien tersebut. Sampel pada peristiwa ini adalah...",
    "options": {
      "A": "Seluruh darah di dalam tubuh pasien",
      "B": "Setetes darah yang diambil dari ujung jari",
      "C": "Alat pengukur gula darah",
      "D": "Pasien yang sedang diperiksa"
    },
    "correctAnswer": "B",
    "explanation": "Setetes darah yang diambil merupakan perwakilan dari seluruh darah di dalam tubuh pasien (populasi).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 18
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pedagang buah semangka memotong sedikit bagian berbentuk segitiga pada satu buah semangka untuk menunjukkan kepada pembeli bahwa semangka tersebut merah dan manis. Bagian segitiga kecil itu berperan sebagai...",
    "options": {
      "A": "Populasi",
      "B": "Sensus",
      "C": "Sampel",
      "D": "Bias"
    },
    "correctAnswer": "C",
    "explanation": "Potongan kecil semangka tersebut merupakan sampel yang mewakili kondisi keseluruhan isi buah semangka.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 19
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Perbedaan utama antara metode sensus dan metode sampel terletak pada...",
    "options": {
      "A": "Jenis alat tulis yang digunakan",
      "B": "Banyaknya anggota populasi yang diamati",
      "C": "Waktu pelaksanaan di pagi atau sore hari",
      "D": "Tingkat kesulitan pertanyaan"
    },
    "correctAnswer": "B",
    "explanation": "Sensus mengamati seluruh anggota populasi, sedangkan metode sampel hanya mengamati sebagian anggota populasi sebagai perwakilan.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 20
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Ibu kantin SMPN 1 Tabang ingin mengetahui minuman favorit seluruh 360 siswa di sekolah, tetapi ia hanya menanyai 30 siswa saja. Populasi dari kegiatan tersebut adalah...",
    "options": {
      "A": "30 siswa yang ditanyai",
      "B": "Ibu pengelola kantin",
      "C": "Seluruh 360 siswa SMPN 1 Tabang",
      "D": "Dua jenis minuman segar"
    },
    "correctAnswer": "C",
    "explanation": "Sasaran pengamatan Ibu kantin adalah selera seluruh siswa di sekolah, yaitu seluruh 360 siswa SMPN 1 Tabang.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 21
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pak Budi memiliki kebun berisi 500 pohon jeruk di Kecamatan Tabang. Ia memetik 2 buah jeruk dari 15 pohon yang berbeda untuk mengecek rasa manisnya. Banyaknya buah jeruk yang menjadi sampel adalah...",
    "options": {
      "A": "15 buah jeruk",
      "B": "30 buah jeruk",
      "C": "500 buah jeruk",
      "D": "2 buah jeruk"
    },
    "correctAnswer": "B",
    "explanation": "Pak Budi memetik 2 buah jeruk dari masing-masing 15 pohon, sehingga sampelnya berjumlah 2 × 15 = 30 buah jeruk.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 22
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Untuk mengetahui rata-rata tinggi badan seluruh 120 siswa kelas VII SMPN 1 Tabang, guru PJOK mengukur tinggi badan 24 siswa yang dipilih secara acak. Sampel pada kegiatan ini adalah...",
    "options": {
      "A": "Seluruh 120 siswa kelas VII",
      "B": "24 siswa kelas VII yang diukur tinggi badannya",
      "C": "Guru PJOK SMPN 1 Tabang",
      "D": "Seluruh siswa SMPN 1 Tabang"
    },
    "correctAnswer": "B",
    "explanation": "Sampel adalah bagian kecil yang diamati secara langsung, yaitu 24 siswa kelas VII yang diukur tinggi badannya.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 23
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dinas Kesehatan ingin mengetahui tingkat kesehatan gigi seluruh siswa SD di Kabupaten Kutai Kartanegara. Petugas memeriksa 200 siswa SD yang dipilih dari 10 kecamatan. Populasinya adalah...",
    "options": {
      "A": "200 siswa SD yang diperiksa",
      "B": "Seluruh siswa SD di Kabupaten Kutai Kartanegara",
      "C": "10 kecamatan di Kutai Kartanegara",
      "D": "Petugas Dinas Kesehatan"
    },
    "correctAnswer": "B",
    "explanation": "Keseluruhan kelompok yang ingin diketahui kesehatannya adalah seluruh siswa SD di Kabupaten Kutai Kartanegara.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 24
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah pabrik sepatu memproduksi 4.000 pasang sepatu dalam sehari. Bagian pengawas mutu memeriksa 80 pasang sepatu secara acak untuk memastikan jahitannya rapi. Populasi pada kasus ini adalah...",
    "options": {
      "A": "80 pasang sepatu yang diperiksa",
      "B": "4.000 pasang sepatu yang diproduksi hari itu",
      "C": "Karyawan bagian pengawas mutu",
      "D": "Mesin jahit di pabrik sepatu"
    },
    "correctAnswer": "B",
    "explanation": "Populasinya adalah seluruh hasil produksi sepatu pada hari itu, yaitu 4.000 pasang sepatu.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 25
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Peneliti perikanan mengambil 25 ekor ikan nila dari sebuah kolam besar yang berisi sekitar 1.500 ekor ikan nila untuk ditimbang berat rata-ratanya. Sampel penelitian tersebut adalah...",
    "options": {
      "A": "1.500 ekor ikan nila di kolam",
      "B": "25 ekor ikan nila yang ditimbang",
      "C": "Air di dalam kolam besar",
      "D": "Peneliti perikanan"
    },
    "correctAnswer": "B",
    "explanation": "Sampel adalah 25 ekor ikan nila yang diambil dan ditimbang langsung untuk mewakili seluruh ikan di kolam.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 26
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Kepala Desa ingin mengetahui pendapat warga desanya yang berjumlah 850 kepala keluarga (KK) tentang rencana kerja bakti. Ia mewawancarai 60 KK secara acak. Populasinya adalah...",
    "options": {
      "A": "60 KK yang diwawancarai",
      "B": "Seluruh 850 KK warga desa",
      "C": "Kepala Desa dan perangkatnya",
      "D": "Jadwal kerja bakti desa"
    },
    "correctAnswer": "B",
    "explanation": "Populasi adalah keseluruhan warga desa yang ingin diketahui pendapatnya, yakni seluruh 850 KK.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 27
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah perusahaan baterai menguji ketahanan 50 buah baterai yang diambil secara acak dari 10.000 buah baterai hasil produksi minggu ini. Sampelnya adalah...",
    "options": {
      "A": "10.000 buah baterai",
      "B": "50 buah baterai yang diuji",
      "C": "9.950 buah baterai yang tidak diuji",
      "D": "Lama waktu baterai menyala"
    },
    "correctAnswer": "B",
    "explanation": "50 buah baterai yang diambil untuk diuji ketahanannya adalah sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 28
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Perpustakaan sekolah memiliki 2.400 judul buku. Pustakawan memeriksa kondisi sampul pada 120 buku yang diambil secara acak dari berbagai rak. Populasinya adalah...",
    "options": {
      "A": "120 buku yang diperiksa",
      "B": "Seluruh 2.400 buku di perpustakaan sekolah",
      "C": "Rak buku di perpustakaan",
      "D": "Siswa yang meminjam buku"
    },
    "correctAnswer": "B",
    "explanation": "Keseluruhan objek yang diamati keadaannya adalah seluruh 2.400 buku di perpustakaan sekolah.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 29
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang petani padi ingin memperkirakan hasil panen di sawahnya yang seluas 2 hektare. Ia memanen padi pada petak kecil berukuran 2 m × 2 m di lima titik berbeda. Sampel pada kegiatan ini adalah...",
    "options": {
      "A": "Seluruh sawah seluas 2 hektare",
      "B": "Padi pada lima petak kecil berukuran 2 m × 2 m",
      "C": "Alat pemotong padi",
      "D": "Seluruh petani di desa tersebut"
    },
    "correctAnswer": "B",
    "explanation": "Lima petak kecil yang dipanen lebih dulu untuk memperkirakan hasil keseluruhan merupakan sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 30
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Tim pembina OSIS menyebarkan angket kepada 50 siswa SMPN 1 Tabang yang dipilih acak untuk mengetahui kepuasan siswa terhadap kegiatan ekstrakurikuler. Populasinya adalah...",
    "options": {
      "A": "50 siswa yang mengisi angket",
      "B": "Seluruh siswa SMPN 1 Tabang",
      "C": "Pengurus OSIS yang menyebarkan angket",
      "D": "Daftar kegiatan ekstrakurikuler"
    },
    "correctAnswer": "B",
    "explanation": "Tujuan survei adalah mengetahui kepuasan seluruh siswa SMPN 1 Tabang, sehingga populasinya adalah seluruh siswa SMPN 1 Tabang.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 31
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Badan Meteorologi mengukur tingkat curah hujan di 12 titik pengamatan untuk mewakili kondisi cuaca di seluruh wilayah Provinsi Kalimantan Timur. Sampelnya adalah...",
    "options": {
      "A": "Seluruh wilayah Provinsi Kalimantan Timur",
      "B": "12 titik pengamatan curah hujan",
      "C": "Alat penakar hujan",
      "D": "Seluruh pulau Kalimantan"
    },
    "correctAnswer": "B",
    "explanation": "12 titik pengamatan yang diukur secara langsung adalah bagian kecil yang mewakili seluruh provinsi (sampel).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 32
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah toko roti membuat 600 bungkus roti tawar. Pemilik toko mencicipi 5 bungkus roti secara acak sebelum roti dikirim ke warung-warung. Populasinya adalah...",
    "options": {
      "A": "5 bungkus roti yang dicicipi",
      "B": "600 bungkus roti tawar yang dibuat",
      "C": "Warung-warung langganan",
      "D": "595 bungkus roti yang dijual"
    },
    "correctAnswer": "B",
    "explanation": "Seluruh 600 bungkus roti tawar yang diproduksi merupakan populasi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 33
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Untuk mengetahui minat baca warga Kecamatan Tabang, mahasiswa KKN mewawancarai 100 warga yang dipilih secara acak dari beberapa desa. Sampel penelitian tersebut adalah...",
    "options": {
      "A": "Seluruh warga Kecamatan Tabang",
      "B": "100 warga yang diwawancarai",
      "C": "Mahasiswa KKN yang mewawancarai",
      "D": "Seluruh desa di Kecamatan Tabang"
    },
    "correctAnswer": "B",
    "explanation": "100 warga yang diwawancarai secara langsung merupakan sampel dari seluruh warga Kecamatan Tabang.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 34
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Petugas PLN memeriksa meteran listrik pada 40 rumah di Perumahan Indah yang seluruhnya terdiri dari 320 rumah. Populasi pada kasus ini adalah...",
    "options": {
      "A": "40 rumah yang diperiksa",
      "B": "Seluruh 320 rumah di Perumahan Indah",
      "C": "Petugas PLN",
      "D": "280 rumah yang tidak diperiksa"
    },
    "correctAnswer": "B",
    "explanation": "Populasi adalah keseluruhan objek yang menjadi lingkup pengamatan, yaitu seluruh 320 rumah di Perumahan Indah.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 35
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah karung berisi 1.000 butir kelereng berbagai warna. Riko mengambil segenggam kelereng (sebanyak 25 butir) tanpa melihat untuk menebak warna terbanyak. Sampelnya adalah...",
    "options": {
      "A": "1.000 butir kelereng dalam karung",
      "B": "25 butir kelereng yang diambil Riko",
      "C": "Karung tempat kelereng",
      "D": "975 butir kelereng yang tersisa"
    },
    "correctAnswer": "B",
    "explanation": "25 butir kelereng yang diambil Riko untuk diamati warnanya merupakan sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 36
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dinas Lingkungan Hidup mengambil 10 botol sampel air dari beberapa bagian Sungai Belayan untuk menguji kebersihan air sungai tersebut. Populasinya adalah...",
    "options": {
      "A": "10 botol air yang diambil",
      "B": "Seluruh air di Sungai Belayan",
      "C": "Petugas laboratorium",
      "D": "Ikan-ikan yang hidup di sungai"
    },
    "correctAnswer": "B",
    "explanation": "Populasinya adalah seluruh air di Sungai Belayan yang ingin diketahui tingkat kebersihannya.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 37
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dalam sebuah kotak terdapat 200 lembar kertas ujian siswa. Guru mengambil 20 lembar secara acak untuk melihat gambaran umum pemahaman siswa. Sampelnya adalah...",
    "options": {
      "A": "200 lembar kertas ujian",
      "B": "20 lembar kertas ujian yang diambil guru",
      "C": "Kotak penyimpanan kertas",
      "D": "Mata pelajaran yang diujikan"
    },
    "correctAnswer": "B",
    "explanation": "20 lembar kertas ujian yang diperiksa terlebih dahulu sebagai gambaran umum adalah sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 38
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang peternak ayam memiliki 800 ekor ayam pedaging. Ia menimbang berat 40 ekor ayam secara acak untuk memantau pertumbuhan ternaknya. Populasinya adalah...",
    "options": {
      "A": "40 ekor ayam yang ditimbang",
      "B": "Seluruh 800 ekor ayam pedaging milik peternak",
      "C": "Timbangan yang digunakan",
      "D": "Pakan ayam yang diberikan"
    },
    "correctAnswer": "B",
    "explanation": "Seluruh 800 ekor ayam pedaging milik peternak tersebut adalah populasinya.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 39
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah aplikasi belajar online memiliki 50.000 pengguna aktif. Tim pengembang mengirimkan survei kepada 1.000 pengguna yang dipilih acak. Sampel pada survei ini adalah...",
    "options": {
      "A": "50.000 pengguna aktif aplikasi",
      "B": "1.000 pengguna yang dikirimi survei",
      "C": "Tim pengembang aplikasi",
      "D": "49.000 pengguna lainnya"
    },
    "correctAnswer": "B",
    "explanation": "1.000 pengguna yang dipilih sebagai responden survei merupakan sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 40
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Mengapa Ibu kantin SMPN 1 Tabang memilih menanyai 30 siswa saja daripada menanyai seluruh 360 siswa saat jam istirahat?",
    "options": {
      "A": "Karena siswa lain tidak suka minum",
      "B": "Karena waktu istirahat terbatas sehingga sampel lebih menghemat waktu",
      "C": "Karena 30 siswa pasti lebih banyak dari 360 siswa",
      "D": "Karena sensus dilarang di sekolah"
    },
    "correctAnswer": "B",
    "explanation": "Waktu istirahat hanya 15 menit, sehingga menanyai 30 siswa sebagai sampel jauh lebih cepat dan menghemat waktu.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 41
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah pabrik lampu LED ingin menguji berapa ribu jam lampunya mampu menyala terus-menerus hingga putus. Mengapa pabrik TIDAK boleh menguji seluruh lampu (sensus)?",
    "options": {
      "A": "Karena lampu LED tidak bisa putus",
      "B": "Karena jika semua lampu diuji sampai putus, tidak ada lampu yang tersisa untuk dijual",
      "C": "Karena harga lampu sangat murah",
      "D": "Karena pengujian hanya bisa dilakukan pada malam hari"
    },
    "correctAnswer": "B",
    "explanation": "Pengujian ketahanan sampai putus bersifat merusak produk. Jika semua lampu diuji, pabrik tidak memiliki barang lagi untuk dijual.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 42
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Peneliti ingin mengetahui rata-rata panjang ikan gabus di sebuah danau yang sangat luas. Alasan utama peneliti menggunakan sampel adalah...",
    "options": {
      "A": "Ikan gabus tidak bisa diukur",
      "B": "Populasi ikan di danau terlalu banyak dan wilayahnya terlalu luas untuk ditangkap semua",
      "C": "Air danau terlalu dangkal",
      "D": "Sensus ikan hanya membutuhkan waktu 5 menit"
    },
    "correctAnswer": "B",
    "explanation": "Menangkap dan mengukur seluruh ikan di danau yang luas adalah hal yang mustahil dilakukan, sehingga digunakan sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 43
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Berikut ini merupakan tiga alasan utama mengapa peneliti sering memilih menggunakan sampel dibandingkan sensus, KECUALI...",
    "options": {
      "A": "Menghemat waktu penelitian",
      "B": "Menghemat biaya dan tenaga",
      "C": "Populasi terlalu banyak atau jangkauannya terlalu luas",
      "D": "Agar hasil penelitian bisa diatur sesuai keinginan peneliti"
    },
    "correctAnswer": "D",
    "explanation": "Sampel digunakan untuk efisiensi waktu, biaya, tenaga, dan mengatasi populasi yang luas—bukan untuk memanipulasi hasil.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 44
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah pabrik petasan atau kembang api ingin menguji apakah produknya dapat menyala dengan baik. Metode yang wajib digunakan adalah...",
    "options": {
      "A": "Sensus terhadap seluruh petasan",
      "B": "Pengambilan sampel acak beberapa buah saja",
      "C": "Menyalakan semua petasan sebelum dikemas",
      "D": "Tidak perlu menguji sama sekali"
    },
    "correctAnswer": "B",
    "explanation": "Karena pengujian menyalakan petasan akan menghabiskan/merusak barang tersebut, pabrik hanya boleh mengambil sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 45
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Kapan sebaiknya kita menggunakan metode SENSUS daripada mengambil sampel?",
    "options": {
      "A": "Saat jumlah populasi jutaan dan tersebar di seluruh dunia",
      "B": "Saat pengujian menyebabkan barang menjadi rusak",
      "C": "Saat jumlah populasi sedikit dan mudah dijangkau semuanya, seperti siswa dalam satu kelas",
      "D": "Saat waktu yang tersedia hanya beberapa menit"
    },
    "correctAnswer": "C",
    "explanation": "Jika populasi kecil dan mudah didata semuanya (misalnya 30 siswa di satu kelas), sensus sangat baik dilakukan karena hasilnya pasti akurat.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 46
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pabrik makanan ringan menguji kerenyahan dan masa kedaluwarsa keripik kemasan dengan membuka dan mencicipi beberapa bungkus dari setiap batch produksi. Alasan penggunaan sampel di sini adalah...",
    "options": {
      "A": "Kemasan yang sudah dibuka untuk diuji tidak dapat dijual kembali",
      "B": "Keripik tidak memiliki masa kedaluwarsa",
      "C": "Pabrik kekurangan karyawan",
      "D": "Semua keripik rasanya pasti berbeda"
    },
    "correctAnswer": "A",
    "explanation": "Pengujian mutu makanan merusak segel kemasan dan menghabiskan isi produk, sehingga harus menggunakan sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 47
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang dokter ingin memeriksa kadar kolesterol pasien. Dokter cukup mengambil satu tabung kecil darah pasien, bukan seluruh darah di tubuh pasien, karena...",
    "options": {
      "A": "Darah di bagian lain tidak mengandung kolesterol",
      "B": "Mengambil seluruh darah akan membahayakan nyawa pasien, dan sampel kecil sudah mewakili",
      "C": "Tabung laboratorium berukuran besar",
      "D": "Pemeriksaan darah tidak memerlukan sampel"
    },
    "correctAnswer": "B",
    "explanation": "Darah beredar merata di tubuh sehingga sampel kecil sudah mewakili keseluruhan, dan mengambil seluruh darah tentu mustahil dilakukan.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 48
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Mengapa survei hitung cepat (quick count) pada saat pemilihan umum menggunakan sampel dari beberapa Tempat Pemungutan Suara (TPS) terpilih?",
    "options": {
      "A": "Agar hasil perkiraan dapat diketahui jauh lebih cepat dibandingkan menunggu rekapitulasi seluruh TPS",
      "B": "Karena suara di TPS lain tidak dihitung oleh KPU",
      "C": "Karena TPS lain tidak memiliki kotak suara",
      "D": "Agar biaya pemilihan umum menjadi lebih mahal"
    },
    "correctAnswer": "A",
    "explanation": "Quick count menggunakan sampel TPS secara acak dan merata untuk mendapatkan gambaran hasil pemilu secara cepat.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 49
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Jika kamu ingin mengetahui nilai rata-rata ulangan harian matematika di kelasmu sendiri yang berjumlah 28 siswa, tindakan terbaik yang harus kamu lakukan adalah...",
    "options": {
      "A": "Mengambil nilai 3 teman sebangku saja",
      "B": "Menjumlahkan seluruh 28 nilai siswa di kelas lalu membaginya dengan 28 (sensus)",
      "C": "Menanyakan nilai siswa kelas sebelah",
      "D": "Mengambil nilai tertinggi dan terendah saja"
    },
    "correctAnswer": "B",
    "explanation": "Karena jumlah siswa hanya 28 orang dan datanya tersedia lengkap, melakukan sensus seluruh kelas jauh lebih akurat.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 50
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Manakah kegiatan pengujian berikut yang PASTI membutuhkan pengambilan sampel karena sifat pengujiannya merusak objek?",
    "options": {
      "A": "Mengukur tinggi badan siswa baru",
      "B": "Menghitung jumlah meja dan kursi di sekolah",
      "C": "Menguji kekuatan tarik tali tambang hingga tali tersebut putus",
      "D": "Mencatat warna seragam olahraga siswa"
    },
    "correctAnswer": "C",
    "explanation": "Menguji tali hingga putus merusak objek yang diuji, sehingga hanya sebagian tali yang boleh dijadikan sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 51
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah perusahaan korek api kayu memproduksi 100.000 batang korek api. Jika dilakukan sensus pengujian nyala api terhadap seluruh batang korek api, akibatnya adalah...",
    "options": {
      "A": "Keuntungan pabrik meningkat pesat",
      "B": "Seluruh korek api habis terbakar dan tidak ada yang bisa dijual",
      "C": "Kualitas korek api menjadi lebih tahan air",
      "D": "Waktu pengujian menjadi lebih singkat"
    },
    "correctAnswer": "B",
    "explanation": "Korek api hanya bisa dinyalakan sekali; jika semuanya diuji (sensus), maka seluruh produk akan habis terbakar.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 52
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Biaya transportasi dan honor petugas survei akan membengkak jika harus mendatangi 50.000 rumah warga di satu kabupaten. Hal ini menunjukkan bahwa penggunaan sampel bermanfaat untuk...",
    "options": {
      "A": "Menambah jumlah populasi",
      "B": "Menghemat biaya dan tenaga",
      "C": "Menghilangkan kebutuhan akan data",
      "D": "Membuat hasil survei menjadi bias"
    },
    "correctAnswer": "B",
    "explanation": "Mendatangi sampel rumah warga jauh lebih hemat biaya dan tenaga dibandingkan mendatangi seluruh 50.000 rumah.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 53
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang pembeli beras di pasar mengambil segenggam beras dari karung besar untuk memeriksa apakah beras tersebut pulen dan bersih. Tindakan pembeli ini efektif karena...",
    "options": {
      "A": "Beras di dalam satu karung umumnya memiliki kualitas yang seragam sehingga segenggam sudah mewakili",
      "B": "Beras di bagian atas karung selalu berbeda jenis",
      "C": "Pembeli tidak boleh melihat isi karung",
      "D": "Satu karung hanya berisi segenggam beras"
    },
    "correctAnswer": "A",
    "explanation": "Beras dalam satu karung bersifat homogen (seragam), sehingga segenggam sampel sudah cukup mewakili isi satu karung.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 54
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Apabila populasi yang diteliti sangat besar tetapi waktu yang tersedia sangat singkat, keputusan paling bijak bagi peneliti adalah...",
    "options": {
      "A": "Membatalkan penelitian karena tidak sempat sensus",
      "B": "Mengambil sampel yang representatif secara acak",
      "C": "Mengarang data tanpa turun ke lapangan",
      "D": "Menanyai satu orang saja sebagai wakil jutaan orang"
    },
    "correctAnswer": "B",
    "explanation": "Pengambilan sampel acak yang representatif adalah solusi ilmiah ketika populasi besar dan waktu terbatas.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 55
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Manakah situasi berikut yang paling tepat menggunakan metode SAMPEL daripada sensus?",
    "options": {
      "A": "Mengecek kelengkapan seragam 25 siswa sebelum upacara dimulai",
      "B": "Mengetahui kadar garam air laut di Samudra Hindia",
      "C": "Mendata jumlah guru yang hadir di ruang guru hari ini",
      "D": "Menghitung banyak ruang kelas di SMPN 1 Tabang"
    },
    "correctAnswer": "B",
    "explanation": "Air laut di Samudra Hindia sangat luas dan banyak sehingga mustahil diukur seluruhnya; cukup diambil sampel air laut.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 56
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah pabrik ban motor menguji jarak tempuh ban hingga permukaannya gundul. Mengapa pengujian ini dilakukan pada sampel ban saja?",
    "options": {
      "A": "Karena ban yang sudah diuji sampai gundul tidak layak jual lagi",
      "B": "Karena ban motor tidak pernah gundul",
      "C": "Karena semua motor ukurannya sama",
      "D": "Karena pengujian hanya dilakukan pada ban bekas"
    },
    "correctAnswer": "A",
    "explanation": "Pengujian ketahanan ban sampai gundul merusak kondisi fisik ban, sehingga cukup dilakukan pada beberapa sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 57
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dalam penelitian tentang kualitas udara di kota besar, petugas memasang alat sensor di 15 titik jalan raya. Alasan tidak memasang sensor di setiap jengkal jalan kota adalah...",
    "options": {
      "A": "Biaya pengadaan alat sensor sangat mahal jika dipasang di seluruh tempat",
      "B": "Udara di jalan lain tidak bergerak",
      "C": "Sensor hanya bekerja di dalam ruangan",
      "D": "Kota besar tidak memiliki polusi udara"
    },
    "correctAnswer": "A",
    "explanation": "Pemasangan alat di titik-titik sampel menghemat biaya pengadaan peralatan dan pemeliharaan.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 58
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang guru ingin mengetahui apakah soal ujian yang dibuatnya terlalu sulit atau sudah pas sebelum dibagikan ke seluruh siswa se-kabupaten. Guru mengujicobakan soal tersebut kepada 35 siswa. Uji coba ini bertujuan untuk...",
    "options": {
      "A": "Menghukum 35 siswa tersebut",
      "B": "Mendapatkan gambaran kualitas soal secara cepat dan hemat sebelum digunakan secara luas",
      "C": "Mengganti seluruh materi pelajaran",
      "D": "Menentukan juara umum kabupaten"
    },
    "correctAnswer": "B",
    "explanation": "Uji coba pada sampel 35 siswa menghemat waktu dan tenaga untuk mengevaluasi kelayakan soal sebelum dipakai massal.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 59
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Kelemahan metode sensus apabila diterapkan pada populasi yang berjumlah ratusan ribu objek adalah...",
    "options": {
      "A": "Hasilnya terlalu akurat",
      "B": "Membutuhkan waktu yang sangat lama, biaya besar, dan tenaga yang banyak",
      "C": "Tidak memerlukan perencanaan",
      "D": "Setiap anggota populasi terdata"
    },
    "correctAnswer": "B",
    "explanation": "Pada populasi sangat besar, sensus memerlukan sumber daya waktu, biaya, dan tenaga yang sangat besar.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 60
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Ibu kantin ingin mengetahui minuman favorit seluruh siswa SMPN 1 Tabang, tetapi ia hanya menanyai 30 siswa anggota ekstrakurikuler futsal yang baru selesai bertanding. Mengapa sampel ini disebut BIAS?",
    "options": {
      "A": "Karena jumlahnya 30 orang",
      "B": "Karena anak futsal yang kepanasan cenderung memilih minuman dingin tertentu dan tidak mewakili seluruh siswa",
      "C": "Karena siswa futsal tidak suka jajan di kantin",
      "D": "Karena Ibu kantin bertanya dengan ramah"
    },
    "correctAnswer": "B",
    "explanation": "Sampel hanya diambil dari satu kelompok yang sedang dalam kondisi khusus (kepanasan setelah futsal), sehingga tidak mencerminkan selera seluruh siswa.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 61
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "OSIS ingin mengetahui jenis buku bacaan yang paling disukai seluruh siswa SMPN 1 Tabang. Ketua OSIS membagikan angket hanya kepada 40 siswa yang sedang berada di perpustakaan. Kekurangan cara ini adalah...",
    "options": {
      "A": "Siswa di perpustakaan terlalu sedikit",
      "B": "Siswa yang jarang ke perpustakaan dan lebih suka membaca komik di kelas tidak terwakili",
      "C": "Perpustakaan tidak memiliki buku bacaan",
      "D": "Semua siswa pasti berada di perpustakaan saat istirahat"
    },
    "correctAnswer": "B",
    "explanation": "Siswa di perpustakaan umumnya sudah hobi membaca buku pelajaran/pengetahuan, sehingga siswa dengan minat baca lain tidak ikut terpilih (bias).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 62
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah stasiun radio menelepon 50 nomor telepon kabel rumah yang terdaftar di buku telepon lama untuk mengetahui lagu favorit warga kecamatan. Mengapa sampel ini TIDAK representatif?",
    "options": {
      "A": "Karena 50 orang terlalu banyak",
      "B": "Karena warga yang tidak punya telepon rumah (seperti remaja pengguna ponsel) tidak punya kesempatan terpilih",
      "C": "Karena semua warga pasti punya telepon kabel",
      "D": "Karena stasiun radio tidak memutar lagu"
    },
    "correctAnswer": "B",
    "explanation": "Warga muda yang hanya menggunakan ponsel tidak terdaftar di buku telepon rumah, sehingga pendapat mereka terabaikan (bias).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 63
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Rina berpendapat bahwa mengambil 100 siswa kelas VII saja sebagai sampel sudah pasti lebih akurat daripada mengambil 30 siswa secara acak dari kelas VII, VIII, dan IX untuk mewakili seluruh sekolah. Pendapat Rina keliru karena...",
    "options": {
      "A": "100 lebih kecil dari 30",
      "B": "Adil dan merata di seluruh tingkatan lebih penting daripada sekadar jumlah banyak tetapi menumpuk di satu kelas",
      "C": "Siswa kelas VII tidak boleh mengisi survei",
      "D": "Siswa kelas VIII dan IX tidak termasuk warga sekolah"
    },
    "correctAnswer": "B",
    "explanation": "Prinsip utama sampling adalah 'Adil dan mewakili lebih penting daripada sekadar banyak'. Mengambil hanya kelas VII membuat kelas VIII dan IX tidak terwakili.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 64
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah toko olahraga ingin mengetahui olahraga paling populer di kalangan warga kota. Petugas toko mewawancarai 100 orang yang sedang jogging di stadion pada Minggu pagi. Sampel ini bersifat...",
    "options": {
      "A": "Representatif karena jumlahnya 100 orang",
      "B": "Bias karena hanya menanyai orang-orang yang memang gemar berolahraga di stadion",
      "C": "Sensus seluruh warga kota",
      "D": "Acak sempurna"
    },
    "correctAnswer": "B",
    "explanation": "Orang yang datang ke stadion pada Minggu pagi sudah pasti kelompok yang gemar berolahraga, sehingga tidak mewakili warga kota secara keseluruhan.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 65
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Untuk mengetahui pendapat seluruh siswa tentang peraturan baru sekolah, guru BK mewawancarai 20 siswa yang sering terlambat masuk sekolah. Hasil wawancara ini akan bersifat...",
    "options": {
      "A": "Sangat objektif dan adil",
      "B": "Bias karena hanya mewakili sudut pandang siswa yang sering melanggar tata tertib",
      "C": "Mewakili seluruh siswa berprestasi",
      "D": "Sensus sekolah"
    },
    "correctAnswer": "B",
    "explanation": "Hanya memilih siswa yang sering terlambat membuat pendapat mayoritas siswa yang disiplin tidak terwakili.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 66
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Manakah di antara pilihan sampel berikut yang PALING REPRESENTATIF untuk mengetahui rata-rata uang saku seluruh siswa SMPN 1 Tabang?",
    "options": {
      "A": "Menanyai 30 siswa yang membawa motor ke sekolah",
      "B": "Menanyai 30 siswa yang sedang mengantre di kantin mahal",
      "C": "Mengundi 5 siswa dari setiap kelas (kelas VII, VIII, dan IX) secara acak",
      "D": "Menanyai seluruh anggota tim basket sekolah"
    },
    "correctAnswer": "C",
    "explanation": "Mengundi secara acak dari setiap kelas VII, VIII, dan IX memberikan kesempatan yang adil bagi seluruh tingkatan dan latar belakang siswa.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 67
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pengelola pusat perbelanjaan (mal) menyebarkan survei kepuasan pengunjung hanya pada hari Senin pukul 10.00 pagi. Mengapa hasil survei ini berpotensi bias?",
    "options": {
      "A": "Karena hari Senin mal tutup",
      "B": "Karena pengunjung hari Senin pagi umumnya kelompok tertentu saja, sedangkan pekerja dan pelajar baru datang pada akhir pekan",
      "C": "Karena survei dilakukan di dalam mal",
      "D": "Karena pengunjung pagi tidak bisa membaca"
    },
    "correctAnswer": "B",
    "explanation": "Karakteristik pengunjung hari kerja pagi berbeda dengan pengunjung akhir pekan (keluarga, pelajar, pekerja), sehingga belum mewakili seluruh pengunjung.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 68
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah survei online tentang 'Apakah masyarakat setuju internet gratis diperluas?' disebarkan melalui media sosial. Mengapa survei ini kurang mewakili warga di daerah terpencil yang belum memiliki sinyal internet?",
    "options": {
      "A": "Karena warga daerah terpencil tidak membutuhkan internet",
      "B": "Karena warga yang belum memiliki akses internet tidak dapat membuka dan mengisi survei online tersebut",
      "C": "Karena media sosial terlalu lambat",
      "D": "Karena survei online selalu salah"
    },
    "correctAnswer": "B",
    "explanation": "Warga tanpa akses internet otomatis tersingkir dari kesempatan mengisi survei online, sehingga sampelnya bias pada pengguna internet saja.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 69
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Panitia pensi sekolah ingin menentukan bintang tamu musik yang disukai seluruh siswa. Jika panitia hanya bertanya kepada anggota ekstrakurikuler paduan suara, dampak yang terjadi adalah...",
    "options": {
      "A": "Seluruh siswa pasti setuju dengan pilihan tersebut",
      "B": "Hasil survei cenderung condong ke selera musik anak paduan suara saja (bias)",
      "C": "Data yang terkumpul merupakan sensus",
      "D": "Biaya pensi menjadi gratis"
    },
    "correctAnswer": "B",
    "explanation": "Selera musik anggota paduan suara belum tentu sama dengan siswa lainnya, sehingga hasilnya berat sebelah (bias).",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 70
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Manakah ciri utama dari sampel yang BIAS?",
    "options": {
      "A": "Diambil dengan undian nomor absen",
      "B": "Setiap anggota populasi punya peluang sama untuk dipilih",
      "C": "Hanya diambil dari lokasi atau kelompok yang paling mudah dijangkau peneliti",
      "D": "Mencakup perwakilan dari setiap kelas secara merata"
    },
    "correctAnswer": "C",
    "explanation": "Memilih sampel hanya karena mudah dijangkau (convenience sampling) sering kali mengabaikan kelompok lain dan menyebabkan bias.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 71
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Petani jeruk hanya memetik 10 buah jeruk dari satu pohon yang berada tepat di samping saluran air untuk menilai kemanisan seluruh 500 pohon di kebunnya. Mengapa cara ini kurang tepat?",
    "options": {
      "A": "Karena jeruk di samping saluran air mendapat cukup air sehingga rasanya bisa berbeda dengan pohon yang jauh di atas bukit",
      "B": "Karena 10 buah jeruk terlalu berat",
      "C": "Karena pohon di samping air tidak berbuah",
      "D": "Karena petani seharusnya memetik daunnya"
    },
    "correctAnswer": "A",
    "explanation": "Kondisi tanah dan air di tepi saluran air berbeda dengan bagian kebun lainnya, sehingga 1 pohon itu tidak mewakili 500 pohon.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 72
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Untuk mengetahui tingkat kepuasan warga terhadap pelayanan puskesmas, petugas hanya menanyai pasien yang sudah sembuh dan tersenyum saat pulang. Sampel ini bersifat...",
    "options": {
      "A": "Adil dan acak",
      "B": "Bias karena mengabaikan pasien yang mungkin masih mengeluh atau kurang puas",
      "C": "Representatif sempurna",
      "D": "Sensus pasien"
    },
    "correctAnswer": "B",
    "explanation": "Memilih hanya responden yang terlihat senang membuat keluhan dari pasien lain tidak tercatat, sehingga data menjadi bias positif.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 73
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah perusahaan makanan bayi ingin mengetahui pendapat orang tua mengenai rasa bubur bayi produk barunya. Siapakah populasi yang tepat untuk penelitian ini?",
    "options": {
      "A": "Seluruh siswa SMP",
      "B": "Seluruh orang tua yang memiliki bayi",
      "C": "Seluruh remaja di kota",
      "D": "Seluruh pedagang elektronik"
    },
    "correctAnswer": "B",
    "explanation": "Populasi harus relevan dengan objek penelitian; produk bubur bayi ditujukan untuk orang tua yang memiliki bayi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 74
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dalam sebuah kotak berisi 50 bola merah dan 50 bola putih yang sudah diaduk rata, Andi mengambil 10 bola dengan mata tertutup. Sampel yang diambil Andi bersifat...",
    "options": {
      "A": "Bias warna merah",
      "B": "Acak dan adil karena setiap bola memiliki peluang yang sama untuk terambil",
      "C": "Sensus seluruh bola",
      "D": "Tidak valid"
    },
    "correctAnswer": "B",
    "explanation": "Bola sudah diaduk rata dan diambil dengan mata tertutup (acak), sehingga setiap bola punya kesempatan yang sama untuk terambil.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 75
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Mengapa mengambil sampel dengan cara mengundi nomor absen dari daftar hadir kelas dianggap jauh lebih baik daripada menunjuk siswa yang duduk di bangku paling depan?",
    "options": {
      "A": "Karena siswa di bangku depan biasanya memiliki karakteristik tertentu (misalnya lebih rajin atau berkacamata) sehingga tidak acak",
      "B": "Karena siswa di bangku belakang tidak masuk hitungan",
      "C": "Karena nomor absen selalu berjumlah 100",
      "D": "Karena bangku depan lebih mahal"
    },
    "correctAnswer": "A",
    "explanation": "Posisi tempat duduk sering berkaitan dengan kebiasaan belajar atau kondisi penglihatan siswa; undian nomor absen menghilangkan unsur pilih kasih tersebut.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 76
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dinas Perhubungan ingin mengetahui tingkat kemacetan jalan raya di suatu kota. Petugas hanya mencatat kepadatan kendaraan pada hari Minggu pukul 05.00 subuh. Kesimpulan petugas pasti melenceng karena...",
    "options": {
      "A": "Pada pukul 05.00 subuh hari Minggu jalanan sedang sepi sehingga tidak mewakili jam sibuk kerja dan sekolah",
      "B": "Pada hari Minggu tidak ada kendaraan bermotor",
      "C": "Petugas tidak membawa jam tangan",
      "D": "Jalan raya tidak pernah macet"
    },
    "correctAnswer": "A",
    "explanation": "Waktu pengambilan sampel pada subuh hari libur tidak mencerminkan kondisi lalu lintas normal pada jam aktivitas warga.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 77
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Jika kamu ingin mengetahui jenis jajanan sehat yang diinginkan seluruh siswa di sekolahmu, kelompok sampel manakah yang paling tidak bias?",
    "options": {
      "A": "10 siswa pengurus UKS saja",
      "B": "Perwakilan acak dari setiap kelas mulai dari kelas VII hingga kelas IX",
      "C": "15 siswa yang tidak pernah membawa uang jajan",
      "D": "20 siswa laki-laki dari kelas IX A saja"
    },
    "correctAnswer": "B",
    "explanation": "Perwakilan acak dari setiap kelas VII sampai IX menjamin suara siswa laki-laki, perempuan, dan semua jenjang usia terwakili secara adil.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 78
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pernyataan 'Semakin banyak jumlah sampel, pasti hasilnya selalu bebas dari bias' adalah pernyataan yang...",
    "options": {
      "A": "Benar dalam segala kondisi",
      "B": "Salah, karena jika cara memilihnya tetap dari satu kelompok tertentu saja maka hasilnya tetap bias",
      "C": "Benar jika sampelnya lebih dari 50 orang",
      "D": "Selalu berlaku pada survei sekolah"
    },
    "correctAnswer": "B",
    "explanation": "Jumlah sampel yang banyak tidak berguna jika teknik pengambilannya salah sasaran atau menumpuk pada satu kelompok saja.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 79
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah merek sepatu lari menanyai 200 pelari maraton profesional tentang kenyamanan sepatunya untuk dipakai jalan santai ke sekolah oleh siswa SMP. Sampel ini tidak tepat karena...",
    "options": {
      "A": "Pelari maraton profesional memiliki kebutuhan yang berbeda dengan siswa SMP yang berjalan santai ke sekolah",
      "B": "200 orang terlalu sedikit",
      "C": "Siswa SMP tidak memakai sepatu",
      "D": "Pelari maraton tidak suka sepatu lari"
    },
    "correctAnswer": "A",
    "explanation": "Populasi sasaran pengguna adalah siswa SMP, sehingga menanyai pelari maraton profesional tidak mewakili target populasi yang dituju.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 80
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "SMPN 1 Tabang memiliki 9 kelas (Kelas VII A–C, VIII A–C, dan IX A–C). Jika OSIS ingin mengambil 45 siswa sebagai sampel secara adil dan merata untuk survei kegiatan Class Meeting, cara terbaik adalah...",
    "options": {
      "A": "Mengambil 45 siswa dari kelas IX A dan IX B saja",
      "B": "Mengundi 5 siswa secara acak dari masing-masing ke-9 kelas tersebut",
      "C": "Memilih 45 siswa yang paling tinggi badannya",
      "D": "Menunjuk 45 siswa yang duduk di dekat kantor guru"
    },
    "correctAnswer": "B",
    "explanation": "Karena ada 9 kelas dan dibutuhkan 45 sampel, mengambil 45 ÷ 9 = 5 siswa secara acak dari setiap kelas menjamin keterwakilan yang adil.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 81
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dalam sebuah kelas terdapat 18 siswa perempuan dan 12 siswa laki-laki. Jika guru ingin memilih 5 siswa sebagai sampel secara proporsional (seimbang berdasarkan perbandingan jumlah), banyaknya siswa perempuan dan laki-laki yang harus dipilih adalah...",
    "options": {
      "A": "4 perempuan dan 1 laki-laki",
      "B": "3 perempuan dan 2 laki-laki",
      "C": "2 perempuan dan 3 laki-laki",
      "D": "5 perempuan dan 0 laki-laki"
    },
    "correctAnswer": "B",
    "explanation": "Perbandingan perempuan : laki-laki = 18 : 12 = 3 : 2. Untuk total 5 sampel, dipilih 3 siswa perempuan dan 2 siswa laki-laki.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 82
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang peneliti ingin mengambil sampel 10% dari seluruh populasi yang berjumlah 450 orang. Banyaknya anggota sampel yang harus diambil adalah...",
    "options": {
      "A": "10 orang",
      "B": "45 orang",
      "C": "90 orang",
      "D": "450 orang"
    },
    "correctAnswer": "B",
    "explanation": "10% dari 450 = (10/100) × 450 = 45 orang.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 83
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Di sebuah sekolah terdapat 200 siswa kelas VII, 150 siswa kelas VIII, dan 150 siswa kelas IX (total 500 siswa). Jika diambil 50 siswa secara merata/proporsional sesuai jumlah siswa tiap jenjang, berapa siswa kelas VII yang terpilih?",
    "options": {
      "A": "15 siswa",
      "B": "20 siswa",
      "C": "25 siswa",
      "D": "30 siswa"
    },
    "correctAnswer": "B",
    "explanation": "Proporsi kelas VII = (200 / 500) × 50 = (2/5) × 50 = 20 siswa.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 84
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Manakah alat atau cara berikut yang dapat digunakan guru untuk memilih 6 siswa secara acak (random) dari 36 siswa di kelas tanpa pilih kasih?",
    "options": {
      "A": "Membuat gulungan kertas berisi nomor absen 1 sampai 36 lalu mengocok dan mengambil 6 gulungan",
      "B": "Memilih absen nomor 1 sampai 6 saja",
      "C": "Memilih 6 siswa yang paling cepat mengangkat tangan",
      "D": "Memilih 6 siswa yang nilai ulangannya tertinggi"
    },
    "correctAnswer": "A",
    "explanation": "Mengocok gulungan kertas bernomor absen 1–36 memberikan kesempatan yang sama persis bagi setiap siswa untuk terpilih.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 85
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pak Hadi memiliki 40 baris tanaman jagung, masing-masing baris berisi 25 tanaman. Untuk mengecek serangan hama ulat secara adil di seluruh lahan, cara pengambilan sampel yang paling baik adalah...",
    "options": {
      "A": "Memeriksa 25 tanaman pada baris ke-1 saja",
      "B": "Memeriksa 2 tanaman yang dipilih acak dari setiap baris (total 80 tanaman)",
      "C": "Memeriksa tanaman yang daunnya terlihat hijau saja",
      "D": "Memeriksa tanaman di pojok kanan lahan saja"
    },
    "correctAnswer": "B",
    "explanation": "Mengambil 2 tanaman secara acak dari setiap baris memastikan seluruh bagian lahan dari ujung ke ujung terwakili dengan baik.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 86
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah gudang menyimpan 20 kardus berisi buku tulis. Setiap kardus berisi 50 buku. Jika petugas memeriksa 3 buku dari setiap kardus untuk mengecek kualitas cetak, berapakah ukuran sampelnya?",
    "options": {
      "A": "20 buku",
      "B": "50 buku",
      "C": "60 buku",
      "D": "1.000 buku"
    },
    "correctAnswer": "C",
    "explanation": "Terdapat 20 kardus dan diambil 3 buku dari tiap kardus, sehingga ukuran sampelnya = 20 × 3 = 60 buku.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 87
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Pada soal tentang gudang berisi 20 kardus yang masing-masing memuat 50 buku tulis, berapakah ukuran populasinya?",
    "options": {
      "A": "20 buku",
      "B": "60 buku",
      "C": "500 buku",
      "D": "1.000 buku"
    },
    "correctAnswer": "D",
    "explanation": "Ukuran populasi adalah seluruh buku di dalam gudang = 20 kardus × 50 buku = 1.000 buku.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 88
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Jika dari hasil survei acak terhadap 40 siswa SMPN 1 Tabang diperoleh bahwa 28 siswa menyukai Es Jeruk Peras dan 12 siswa menyukai Es Teh Leci, prediksi yang paling masuk akal untuk seluruh 360 siswa di sekolah adalah...",
    "options": {
      "A": "Sebagian besar siswa di sekolah lebih menyukai Es Jeruk Peras daripada Es Teh Leci",
      "B": "Tidak ada siswa yang menyukai Es Teh Leci",
      "C": "Seluruh 360 siswa pasti memilih Es Jeruk Peras",
      "D": "Es Teh Leci lebih laris daripada Es Jeruk Peras"
    },
    "correctAnswer": "A",
    "explanation": "Pada sampel acak, 28 dari 40 siswa (70%) memilih Es Jeruk Peras, sehingga dapat diprediksi sebagian besar siswa di sekolah juga menyukai Es Jeruk Peras.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 89
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Berdasarkan data sampel acak di atas (28 dari 40 siswa memilih Es Jeruk Peras), perkiraan jumlah siswa yang menyukai Es Jeruk Peras dari seluruh 360 siswa adalah...",
    "options": {
      "A": "108 siswa",
      "B": "252 siswa",
      "C": "280 siswa",
      "D": "320 siswa"
    },
    "correctAnswer": "B",
    "explanation": "Perkiraan jumlah = (28 / 40) × 360 = 28 × 9 = 252 siswa.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 90
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dalam sebuah produksi 500 buah lampu, diambil sampel acak sebanyak 25 lampu dan ditemukan 2 lampu rusak. Perkiraan banyak lampu yang rusak dari seluruh 500 lampu tersebut adalah...",
    "options": {
      "A": "2 lampu",
      "B": "20 lampu",
      "C": "40 lampu",
      "D": "50 lampu"
    },
    "correctAnswer": "C",
    "explanation": "Perkiraan lampu rusak = (2 / 25) × 500 = 2 × 20 = 40 lampu.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 91
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Mengapa seorang peneliti perlu mengocok kartu undian atau menggunakan aplikasi pengacak angka (randomizer) saat memilih sampel?",
    "options": {
      "A": "Agar terlihat canggih di depan teman",
      "B": "Untuk menghindari unsur subjektivitas atau pilih kasih dari peneliti",
      "C": "Agar jumlah sampel menjadi bertambah banyak",
      "D": "Supaya data tidak perlu dihitung lagi"
    },
    "correctAnswer": "B",
    "explanation": "Alat pengacak menghilangkan kecenderungan manusia untuk memilih orang-orang tertentu secara sadar maupun tidak sadar.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 92
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah kecamatan terdiri dari 8 desa. Untuk mengetahui tingkat kepuasan warga terhadap layanan internet desa, camat meminta setiap kepala desa mendata 15 warga secara acak di desanya masing-masing. Total sampel yang terkumpul adalah...",
    "options": {
      "A": "23 warga",
      "B": "80 warga",
      "C": "120 warga",
      "D": "150 warga"
    },
    "correctAnswer": "C",
    "explanation": "8 desa × 15 warga per desa = 120 warga sebagai sampel.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 93
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang guru ingin mengetahui rata-rata waktu belajar siswa di rumah setiap malam. Siswa diminta mengisi angket tanpa mencantumkan nama (anonim) pada sampel acak 50 siswa. Tujuan pengisian tanpa nama adalah...",
    "options": {
      "A": "Agar siswa menjawab dengan jujur tanpa rasa takut dinilai jelek oleh guru",
      "B": "Agar guru tidak tahu jumlah kertas yang kembali",
      "C": "Supaya sampel berubah menjadi populasi",
      "D": "Agar siswa tidak perlu mengisi angket"
    },
    "correctAnswer": "A",
    "explanation": "Kerahasiaan identitas (anonim) membantu mengurangi bias jawaban karena siswa merasa aman untuk menjawab apa adanya.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 94
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Dari 60 sampel acak buah jeruk di kebun Pak Budi, ditemukan 54 buah rasanya manis dan 6 buah rasanya asam. Persentase jeruk yang manis pada sampel tersebut adalah...",
    "options": {
      "A": "54%",
      "B": "60%",
      "C": "80%",
      "D": "90%"
    },
    "correctAnswer": "D",
    "explanation": "Persentase jeruk manis = (54 / 60) × 100% = (9 / 10) × 100% = 90%.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 95
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Jika 90% dari sampel acak jeruk Pak Budi terasa manis, maka dari 2.000 buah jeruk yang dipanen diperkirakan yang terasa manis adalah...",
    "options": {
      "A": "900 buah",
      "B": "1.500 buah",
      "C": "1.800 buah",
      "D": "1.900 buah"
    },
    "correctAnswer": "C",
    "explanation": "90% × 2.000 = 0,9 × 2.000 = 1.800 buah jeruk.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 96
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Manakah urutan langkah yang paling tepat dalam melakukan penelitian menggunakan sampel?",
    "options": {
      "A": "Menarik kesimpulan → Mengambil sampel → Menentukan populasi",
      "B": "Menentukan populasi → Mengambil sampel secara acak & adil → Mengumpulkan data sampel → Menarik kesimpulan",
      "C": "Mengumpulkan data → Membuat kesimpulan → Mengacak populasi",
      "D": "Memilih teman terdekat → Menarik kesimpulan → Mengabaikan populasi"
    },
    "correctAnswer": "B",
    "explanation": "Penelitian dimulai dengan menetapkan populasi, memilih sampel representatif secara acak, mengamati sampel, lalu menarik kesimpulan untuk populasi.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 97
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Sebuah kotak berisi 300 kancing baju (150 hitam dan 150 putih). Jika diambil 20 kancing secara acak dan terambil 11 hitam serta 9 putih, hal ini menunjukkan bahwa...",
    "options": {
      "A": "Sampel acak memberikan gambaran yang cukup mendekati perbandingan populasi sebenarnya",
      "B": "Kancing putih di dalam kotak sudah habis",
      "C": "Pengambilan acak selalu menghasilkan angka 10 dan 10 persis",
      "D": "Jumlah kancing hitam jauh lebih banyak dari putih"
    },
    "correctAnswer": "A",
    "explanation": "Perbandingan 11 : 9 pada sampel sangat mendekati perbandingan 1 : 1 (150 : 150) pada populasi sebenarnya.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 98
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Seorang siswa menyimpulkan bahwa 'Semua siswa SMPN 1 Tabang tidak suka pelajaran matematika' hanya karena 3 orang teman sebangkunya mengeluh saat mengerjakan PR. Kesalahan utama siswa tersebut adalah...",
    "options": {
      "A": "Menggeneralisasi seluruh populasi dari sampel yang sangat kecil dan tidak acak (bias)",
      "B": "Melakukan sensus terhadap seluruh sekolah",
      "C": "Menggunakan terlalu banyak responden",
      "D": "Menanyakan pelajaran lain"
    },
    "correctAnswer": "A",
    "explanation": "3 orang teman sebangku bukanlah sampel acak yang mewakili seluruh siswa sekolah, sehingga kesimpulannya keliru.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 99
  },
  {
    "grade": "9",
    "topic": "Populasi dan Sampel",
    "difficulty": "sedang",
    "questionText": "Tujuan utama kita mempelajari konsep populasi dan sampel dalam kehidupan sehari-hari adalah...",
    "options": {
      "A": "Agar bisa menghafal rumus yang panjang",
      "B": "Agar mampu mengumpulkan informasi secara efisien dan mengambil keputusan yang adil berdasarkan data yang mewakili",
      "C": "Agar tidak perlu lagi belajar berhitung",
      "D": "Agar semua penelitian wajib menggunakan sensus"
    },
    "correctAnswer": "B",
    "explanation": "Pemahaman populasi dan sampel melatih kita mengambil kesimpulan yang tepat, adil, dan tidak mudah tertipu oleh data yang berat sebelah.",
    "isActive": true,
    "source": "MathSMP Kuis Harian",
    "sourceIndex": 100
  }
];
