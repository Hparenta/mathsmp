// Bank Soal Matematika SMP - MathSMP (SMPN 1 Tabang)
// Pokok Bahasan: Literasi Finansial Bilangan Rasional - diskon, pajak, dan cicilan tanpa bunga (30 soal kuis reguler - 5 opsi A-E)
// Komposisi: 6 soal pemahaman, 12 soal penerapan, 12 soal penalaran. Konteks: Kecamatan Tabang, Kabupaten Mamasa, Sulawesi Barat.
// Kunci jawaban berada pada opsi A-D agar konversi ke Bank Soal CBT (4 opsi) tidak mengubah kunci, kecuali butir bernomor 5, 10, 20, dan 26 yang kuncinya E.

window.bankSoal = window.bankSoal || {};

window.bankSoal.literasiFinansialBilanganRasional = [
  {
    "soal": "Di Pasar Tabang, Ibu Ratna membeli sebuah sarung tenun Mamasa yang diberi label harga Rp250.000,00. Penjual memberikan diskon $20\\%$ untuk pembelian pagi hari. Uang yang harus dibayar Ibu Ratna adalah...",
    "pilihan": [
      "Rp200.000,00",
      "Rp225.000,00",
      "Rp230.000,00",
      "Rp250.000,00",
      "Rp270.000,00"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Potongan harga $= 20\\% \\times 250.000 = 50.000$. Harga yang dibayar $= 250.000 - 50.000 = \\text{Rp200.000,00}$."
  },
  {
    "soal": "Koperasi petani di Tabang menjual kopi arabika Mamasa seharga Rp80.000,00 per kilogram. Anggota koperasi mendapat diskon $15\\%$. Besar potongan harga untuk setiap kilogram kopi bagi anggota koperasi adalah...",
    "pilihan": [
      "Rp8.000,00",
      "Rp12.000,00",
      "Rp15.000,00",
      "Rp68.000,00",
      "Rp92.000,00"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Potongan $= 15\\% \\times 80.000 = 12.000$. Nilai Rp68.000,00 adalah harga setelah diskon, bukan besar potongan."
  },
  {
    "soal": "Pak Daud membeli sepatu di toko Tabang. Harga pada label Rp180.000,00, dan ia membayar Rp144.000,00 di kasir. Persentase diskon yang diberikan toko adalah...",
    "pilihan": [
      "$10\\%$",
      "$16\\%$",
      "$20\\%$",
      "$25\\%$",
      "$36\\%$"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Potongan $= 180.000 - 144.000 = 36.000$. Persentase diskon dihitung dari harga awal: $\\frac{36.000}{180.000} \\times 100\\% = 20\\%$. Pembagian dengan harga bayar menghasilkan $25\\%$ dan merupakan kekeliruan."
  },
  {
    "soal": "Sebuah jaket di toko Tabang sedang diskon $30\\%$. Setelah diskon, Rina membayar Rp140.000,00. Harga jaket sebelum diskon adalah...",
    "pilihan": [
      "Rp98.000,00",
      "Rp170.000,00",
      "Rp182.000,00",
      "Rp200.000,00",
      "Rp210.000,00"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Harga bayar $= 100\\% - 30\\% = 70\\%$ dari harga awal. Harga awal $= 140.000 \\div 0,7 = \\text{Rp200.000,00}$. Menambah $30\\%$ dari Rp140.000,00 (hasil Rp182.000,00) keliru karena persen diskon dihitung dari harga awal."
  },
  {
    "soal": "Sebuah warung makan di Tabang menambahkan pajak restoran $10\\%$ dari harga makanan. Harga seporsi nasi ayam adalah Rp45.000,00. Total yang harus dibayar untuk seporsi nasi ayam tersebut adalah...",
    "pilihan": [
      "Rp4.500,00",
      "Rp40.500,00",
      "Rp45.500,00",
      "Rp49.000,00",
      "Rp49.500,00"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Pajak $= 10\\% \\times 45.000 = 4.500$. Total $= 45.000 + 4.500 = \\text{Rp49.500,00}$."
  },
  {
    "soal": "Struk pembelian mesin pemipil jagung di sebuah toko pertanian menunjukkan total bayar Rp165.000,00, sudah termasuk pajak $10\\%$ dari harga mesin. Harga mesin sebelum pajak adalah...",
    "pilihan": [
      "Rp148.500,00",
      "Rp150.000,00",
      "Rp155.000,00",
      "Rp165.000,00",
      "Rp181.500,00"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Total bayar $= 110\\%$ dari harga mesin. Harga mesin $= 165.000 \\div 1,1 = \\text{Rp150.000,00}$. Mengurangi $10\\%$ dari Rp165.000,00 (hasil Rp148.500,00) keliru karena pajak dihitung dari harga sebelum pajak."
  },
  {
    "soal": "Pak Andarias membeli telepon seluler seharga Rp2.400.000,00 dengan cicilan tanpa bunga selama 12 bulan. Besar cicilan setiap bulan adalah...",
    "pilihan": [
      "Rp20.000,00",
      "Rp120.000,00",
      "Rp150.000,00",
      "Rp200.000,00",
      "Rp240.000,00"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Cicilan tanpa bunga berarti total bayar sama dengan harga barang. Cicilan per bulan $= 2.400.000 \\div 12 = \\text{Rp200.000,00}$."
  },
  {
    "soal": "Sebuah sepeda motor untuk perjalanan antardesa di Kecamatan Tabang dijual Rp18.000.000,00. Pembeli membayar uang muka Rp3.000.000,00, dan sisanya dicicil tanpa bunga selama 10 bulan. Besar cicilan setiap bulan adalah...",
    "pilihan": [
      "Rp300.000,00",
      "Rp1.350.000,00",
      "Rp1.500.000,00",
      "Rp1.700.000,00",
      "Rp1.800.000,00"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Sisa yang dicicil $= 18.000.000 - 3.000.000 = 15.000.000$. Cicilan per bulan $= 15.000.000 \\div 10 = \\text{Rp1.500.000,00}$. Nilai Rp1.800.000,00 muncul jika uang muka tidak diperhitungkan."
  },
  {
    "soal": "Sebuah selimut tenun berharga Rp200.000,00. Toko A memberi diskon $30\\%$. Toko B memberi diskon $20\\%$, kemudian diskon tambahan $10\\%$ dari harga setelah diskon pertama. Ibu Marta membandingkan kedua toko tersebut. Pernyataan yang benar adalah...",
    "pilihan": [
      "Toko A lebih murah Rp4.000,00 karena diskon tambahan $10\\%$ di Toko B dihitung dari harga yang sudah turun",
      "Toko B lebih murah Rp4.000,00 karena mendapat dua kali diskon",
      "Harga di kedua toko sama karena $20\\% + 10\\% = 30\\%$",
      "Toko A lebih murah Rp10.000,00 karena diskon $30\\%$ lebih besar daripada $20\\%$",
      "Kedua toko sama-sama menjual seharga Rp140.000,00"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Toko A: $200.000 \\times 0,7 = 140.000$. Toko B: $200.000 \\times 0,8 = 160.000$, lalu $160.000 \\times 0,9 = 144.000$. Toko A lebih murah Rp4.000,00. Diskon bertingkat tidak boleh dijumlahkan karena dihitung dari harga yang berbeda."
  },
  {
    "soal": "Sebuah toko di Tabang memberi diskon $50\\%$, lalu diskon tambahan $20\\%$ dari harga setelah diskon pertama, untuk barang berharga Rp100.000,00. Ani berkata, \"Total diskonnya $70\\%$, jadi aku cukup membayar Rp30.000,00.\" Tanggapan yang paling tepat terhadap pernyataan Ani adalah...",
    "pilihan": [
      "Ani benar karena kedua diskon dapat dijumlahkan menjadi $70\\%$",
      "Ani kurang tepat; seharusnya membayar Rp50.000,00 karena hanya diskon pertama yang berlaku",
      "Ani kurang tepat; seharusnya membayar Rp65.000,00 karena kedua diskon dirata-ratakan menjadi $35\\%$",
      "Ani kurang tepat; seharusnya membayar Rp80.000,00 karena hanya diskon kedua yang berlaku",
      "Ani kurang tepat; seharusnya membayar Rp40.000,00 karena diskon $20\\%$ dihitung dari Rp50.000,00"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Setelah diskon $50\\%$, harga menjadi Rp50.000,00. Diskon $20\\%$ dihitung dari harga ini, yaitu $0,2 \\times 50.000 = 10.000$. Harga akhir $= 50.000 - 10.000 = \\text{Rp40.000,00}$. Total diskon sebenarnya $60\\%$, bukan $70\\%$."
  },
  {
    "soal": "Sebuah toko di Pasar Tabang menawarkan promo \"Beli 2 gratis 1\" untuk kain tenun yang harganya sama. Promo tersebut setara dengan diskon sebesar...",
    "pilihan": [
      "$20\\%$",
      "$25\\%$",
      "$30\\%$",
      "$33\\frac{1}{3}\\%$",
      "$50\\%$"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Pembeli membawa pulang 3 kain tetapi hanya membayar 2 kain. Potongan $= \\frac{1}{3}$ dari harga 3 kain, sehingga diskonnya $\\frac{1}{3} \\times 100\\% = 33\\frac{1}{3}\\%$."
  },
  {
    "soal": "Harga sebuah barang Rp500.000,00. Barang itu mendapat diskon $10\\%$, lalu harga setelah diskon dikenai pajak $10\\%$. Dina berpendapat, \"Diskon dan pajak sama besar, jadi harga akhirnya tetap Rp500.000,00.\" Harga akhir yang benar adalah...",
    "pilihan": [
      "Rp450.000,00",
      "Rp490.000,00",
      "Rp495.000,00",
      "Rp500.000,00",
      "Rp550.000,00"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Harga setelah diskon $= 500.000 \\times 0,9 = 450.000$. Harga setelah pajak $= 450.000 \\times 1,1 = \\text{Rp495.000,00}$. Persen yang sama besar tidak saling meniadakan karena dihitung dari nilai dasar yang berbeda."
  },
  {
    "soal": "Pada pembelian mesin penggiling kopi seharga Rp2.000.000,00, pembeli membayar pajak sebesar Rp220.000,00. Tarif pajak yang dikenakan adalah...",
    "pilihan": [
      "$5\\%$",
      "$10\\%$",
      "$11\\%$",
      "$12\\%$",
      "$22\\%$"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Tarif pajak $= \\frac{220.000}{2.000.000} \\times 100\\% = 11\\%$."
  },
  {
    "soal": "Bu Marta membeli mesin pengupas kulit kopi seharga Rp4.500.000,00 dengan cicilan tanpa bunga selama 9 bulan. Setelah membayar 5 kali cicilan, sisa utang Bu Marta adalah...",
    "pilihan": [
      "Rp500.000,00",
      "Rp2.000.000,00",
      "Rp2.250.000,00",
      "Rp2.500.000,00",
      "Rp4.000.000,00"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Cicilan per bulan $= 4.500.000 \\div 9 = 500.000$. Sisa cicilan $= 9 - 5 = 4$ kali, sehingga sisa utang $= 4 \\times 500.000 = \\text{Rp2.000.000,00}$."
  },
  {
    "soal": "Sebuah toko elektronik menawarkan televisi seharga Rp1.650.000,00 jika dibayar tunai. Toko yang sama menawarkan \"cicilan tanpa bunga\" Rp150.000,00 per bulan selama 12 bulan. Pernyataan yang paling tepat adalah...",
    "pilihan": [
      "Cicilan lebih hemat karena tidak ada bunga",
      "Kedua cara pembayaran menghasilkan total yang sama",
      "Cicilan lebih hemat Rp150.000,00 daripada pembayaran tunai",
      "Total cicilan lebih mahal Rp150.000,00 daripada harga tunai, sehingga istilah \"tanpa bunga\" perlu diperiksa dengan membandingkan total pembayaran",
      "Pembayaran tunai lebih mahal karena harus dibayar sekaligus"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Total cicilan $= 12 \\times 150.000 = 1.800.000$. Selisih dengan harga tunai $= 1.800.000 - 1.650.000 = \\text{Rp150.000,00}$. Jadi cicilan itu sebenarnya memuat biaya tambahan, meskipun disebut tanpa bunga."
  },
  {
    "soal": "Sepeda motor seharga Rp21.000.000,00 dibeli dengan uang muka $20\\%$. Sisanya dicicil tanpa bunga selama 12 bulan. Besar cicilan setiap bulan adalah...",
    "pilihan": [
      "Rp1.050.000,00",
      "Rp1.400.000,00",
      "Rp1.600.000,00",
      "Rp1.750.000,00",
      "Rp1.800.000,00"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Sisa yang dicicil $= 80\\% \\times 21.000.000 = 16.800.000$. Cicilan per bulan $= 16.800.000 \\div 12 = \\text{Rp1.400.000,00}$."
  },
  {
    "soal": "Struk di sebuah rumah makan di Tabang mencatat makanan Rp120.000,00 dan minuman Rp30.000,00. Pajak $10\\%$ dikenakan pada seluruh pesanan. Total yang harus dibayar adalah...",
    "pilihan": [
      "Rp150.000,00",
      "Rp153.000,00",
      "Rp162.000,00",
      "Rp165.000,00",
      "Rp180.000,00"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Jumlah pesanan $= 120.000 + 30.000 = 150.000$. Pajak $= 10\\% \\times 150.000 = 15.000$. Total $= \\text{Rp165.000,00}$. Nilai Rp162.000,00 muncul jika pajak hanya dikenakan pada makanan."
  },
  {
    "soal": "Toko kain di Tabang memberi diskon $\\frac{3}{8}$ dari harga untuk kain berharga Rp240.000,00. Besar potongan harga adalah...",
    "pilihan": [
      "Rp90.000,00",
      "Rp100.000,00",
      "Rp120.000,00",
      "Rp150.000,00",
      "Rp240.000,00"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Potongan $= \\frac{3}{8} \\times 240.000 = 90.000$. Nilai Rp150.000,00 adalah harga yang dibayar setelah diskon."
  },
  {
    "soal": "Lima toko di Tabang memberi diskon pada barang yang sama: Toko P sebesar $\\frac{1}{5}$ dari harga, Toko Q sebesar $0,18$ dari harga, Toko R sebesar $\\frac{3}{20}$ dari harga, Toko S sebesar $22\\%$ dari harga, dan Toko T sebesar $\\frac{7}{40}$ dari harga. Toko yang memberi diskon terbesar adalah...",
    "pilihan": [
      "Toko P",
      "Toko Q",
      "Toko R",
      "Toko S",
      "Toko T"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Ubah semuanya ke persen: P $= 20\\%$, Q $= 18\\%$, R $= 15\\%$, S $= 22\\%$, T $= 17,5\\%$. Diskon terbesar adalah Toko S."
  },
  {
    "soal": "Sebuah kain tenun Mamasa berharga Rp350.000,00 dan sedang diskon $12\\%$. Ibu Lina membawa uang Rp300.000,00. Kesimpulan yang benar adalah...",
    "pilihan": [
      "Uang cukup dan masih tersisa Rp42.000,00",
      "Uang cukup dan pas tanpa sisa",
      "Uang tidak cukup; kurang Rp42.000,00",
      "Uang tidak cukup; kurang Rp50.000,00",
      "Uang tidak cukup; kurang Rp8.000,00"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Harga bayar $= 88\\% \\times 350.000 = 308.000$. Karena $308.000 > 300.000$, uang Ibu Lina kurang $308.000 - 300.000 = \\text{Rp8.000,00}$. Nilai Rp42.000,00 adalah besar potongan harga, bukan kekurangan uang."
  },
  {
    "soal": "Harga kopi bubuk Rp50.000,00 per bungkus. Karena hasil panen menurun, harga naik $20\\%$. Beberapa hari kemudian koperasi memberi diskon $20\\%$ dari harga yang sudah naik. Dibandingkan harga semula, harga akhir kopi tersebut...",
    "pilihan": [
      "sama dengan harga semula",
      "lebih mahal $4\\%$ dari harga semula",
      "lebih murah $4\\%$ dari harga semula",
      "lebih murah $20\\%$ dari harga semula",
      "lebih mahal $20\\%$ dari harga semula"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Harga naik menjadi $50.000 \\times 1,2 = 60.000$. Setelah diskon $20\\%$ dari Rp60.000,00 menjadi $60.000 \\times 0,8 = 48.000$. Harga akhir Rp48.000,00 lebih rendah Rp2.000,00 dari harga semula, yaitu $\\frac{2.000}{50.000} \\times 100\\% = 4\\%$."
  },
  {
    "soal": "Total pembayaran sebuah komponen mesin penggiling kopi adalah Rp330.000,00, sudah termasuk pajak $10\\%$ dari harga komponen. Besar pajak yang dibayar adalah...",
    "pilihan": [
      "Rp3.000,00",
      "Rp30.000,00",
      "Rp33.000,00",
      "Rp300.000,00",
      "Rp363.000,00"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Harga komponen $= 330.000 \\div 1,1 = 300.000$. Pajak $= 330.000 - 300.000 = \\text{Rp30.000,00}$. Nilai Rp33.000,00 keliru karena $10\\%$ dihitung dari total, bukan dari harga sebelum pajak."
  },
  {
    "soal": "Pak Herman membeli kulkas seharga Rp6.000.000,00. Ia membayar uang muka $\\frac{1}{4}$ dari harga, sisanya dicicil tanpa bunga selama 6 bulan. Besar cicilan setiap bulan adalah...",
    "pilihan": [
      "Rp750.000,00",
      "Rp900.000,00",
      "Rp1.000.000,00",
      "Rp1.250.000,00",
      "Rp1.500.000,00"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Uang muka $= \\frac{1}{4} \\times 6.000.000 = 1.500.000$. Sisa $= 4.500.000$. Cicilan per bulan $= 4.500.000 \\div 6 = \\text{Rp750.000,00}$. Nilai Rp1.000.000,00 muncul jika uang muka tidak diperhitungkan."
  },
  {
    "soal": "Ibu Dina berbelanja di koperasi: beras 10 kg @ Rp14.000,00, gula 2 kg @ Rp18.000,00, dan minyak goreng 2 liter @ Rp17.000,00. Sebagai anggota koperasi, ia mendapat diskon $5\\%$ dari total belanja. Uang yang dibayar Ibu Dina adalah...",
    "pilihan": [
      "Rp189.000,00",
      "Rp199.500,00",
      "Rp200.500,00",
      "Rp205.000,00",
      "Rp210.000,00"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Total belanja $= 140.000 + 36.000 + 34.000 = 210.000$. Diskon $= 5\\% \\times 210.000 = 10.500$. Uang yang dibayar $= 210.000 - 10.500 = \\text{Rp199.500,00}$."
  },
  {
    "soal": "Sebuah televisi seharga Rp3.600.000,00 dapat dibeli dengan cicilan tanpa bunga: Pilihan A selama 12 bulan dan Pilihan B selama 18 bulan. Pernyataan yang benar adalah...",
    "pilihan": [
      "Total pembayaran kedua pilihan sama, yaitu Rp3.600.000,00; Pilihan B meringankan beban bulanan (Rp200.000,00) tetapi cicilannya lebih lama",
      "Pilihan B lebih hemat karena cicilan per bulannya lebih kecil",
      "Pilihan A lebih hemat karena jangka waktunya lebih singkat",
      "Total pembayaran Pilihan B lebih besar karena dibayar selama 18 bulan",
      "Cicilan Pilihan A Rp200.000,00 per bulan dan cicilan Pilihan B Rp300.000,00 per bulan"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Pilihan A: $3.600.000 \\div 12 = 300.000$ per bulan. Pilihan B: $3.600.000 \\div 18 = 200.000$ per bulan. Karena tanpa bunga, total pembayaran keduanya sama, yaitu Rp3.600.000,00. Perbedaannya hanya pada besar cicilan per bulan dan lama pembayaran."
  },
  {
    "soal": "Pak Yusuf berpenghasilan Rp3.000.000,00 per bulan. Ia berpegang pada aturan bahwa cicilan tidak boleh lebih dari $\\frac{1}{3}$ penghasilan. Ia ingin membeli motor Rp15.000.000,00 tanpa uang muka dengan cicilan tanpa bunga selama 12 bulan. Keputusan yang tepat adalah...",
    "pilihan": [
      "Boleh, karena cicilan Rp1.250.000,00 lebih kecil daripada penghasilan",
      "Boleh, karena cicilan Rp1.000.000,00 tepat sama dengan batas",
      "Tidak boleh, karena cicilan Rp1.500.000,00 melebihi batas Rp1.000.000,00",
      "Boleh, karena batas cicilannya Rp1.500.000,00 (setengah penghasilan)",
      "Tidak boleh, karena cicilan Rp1.250.000,00 melebihi batas Rp1.000.000,00 sebesar Rp250.000,00"
    ],
    "jawabanBenar": 4,
    "pembahasan": "Cicilan $= 15.000.000 \\div 12 = 1.250.000$. Batas cicilan $= \\frac{1}{3} \\times 3.000.000 = 1.000.000$. Karena $1.250.000 > 1.000.000$ dengan selisih Rp250.000,00, aturan tidak terpenuhi sehingga pembelian sebaiknya tidak dilakukan."
  },
  {
    "soal": "Dani dan Ela menghitung total belanja Rp400.000,00. Dani menghitung diskon $15\\%$ lebih dahulu, lalu menambahkan pajak $10\\%$. Ela menambahkan pajak $10\\%$ lebih dahulu, lalu mengurangi diskon $15\\%$. Pernyataan yang benar adalah...",
    "pilihan": [
      "Dani membayar lebih murah karena diskon dihitung lebih dahulu",
      "Ela membayar lebih murah karena diskon dihitung dari nilai yang lebih besar",
      "Keduanya membayar Rp374.000,00 karena urutan perkalian faktor $0,85$ dan $1,10$ tidak mengubah hasil",
      "Keduanya membayar Rp380.000,00 karena selisih diskon dan pajak adalah $5\\%$",
      "Keduanya membayar Rp340.000,00 karena pajak tidak memengaruhi harga setelah diskon"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Dani: $400.000 \\times 0,85 = 340.000$, lalu $340.000 \\times 1,1 = 374.000$. Ela: $400.000 \\times 1,1 = 440.000$, lalu $440.000 \\times 0,85 = 374.000$. Hasilnya sama karena perkalian bersifat komutatif."
  },
  {
    "soal": "Kopi bubuk kemasan 250 gram berharga Rp35.000,00 dan sedang diskon $10\\%$. Kopi kemasan 500 gram berharga Rp72.000,00 tanpa diskon. Ibu Sinta membutuhkan 500 gram kopi. Pilihan yang paling hemat adalah...",
    "pilihan": [
      "Membeli satu kemasan 500 gram, lebih hemat Rp9.000,00",
      "Membeli satu kemasan 500 gram, lebih hemat Rp4.500,00",
      "Membeli satu kemasan 500 gram atau dua kemasan 250 gram, harganya sama",
      "Membeli dua kemasan 250 gram, lebih hemat Rp9.000,00",
      "Membeli dua kemasan 250 gram, lebih hemat Rp2.000,00"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Harga satu kemasan 250 gram setelah diskon $= 0,9 \\times 35.000 = 31.500$. Dua kemasan $= 63.000$. Dibandingkan Rp72.000,00, selisihnya $72.000 - 63.000 = \\text{Rp9.000,00}$ lebih hemat. Nilai Rp2.000,00 muncul jika diskon diabaikan ($72.000 - 70.000$)."
  },
  {
    "soal": "Seorang pedagang di Tabang membeli sarung tenun seharga Rp150.000,00 per lembar. Ia memasang label Rp200.000,00, tetapi karena sepi pembeli ia memberi diskon $10\\%$. Jika sarung itu terjual, persentase keuntungan terhadap harga beli adalah...",
    "pilihan": [
      "$10\\%$",
      "$20\\%$",
      "$30\\%$",
      "$33\\frac{1}{3}\\%$",
      "$50\\%$"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Harga jual $= 0,9 \\times 200.000 = 180.000$. Keuntungan $= 180.000 - 150.000 = 30.000$. Persentase keuntungan terhadap harga beli $= \\frac{30.000}{150.000} \\times 100\\% = 20\\%$."
  },
  {
    "soal": "Sebuah barang berharga Rp250.000,00 didiskon $20\\%$. Pajak $11\\%$ dikenakan pada harga setelah diskon. Besar pajak yang dibayar adalah...",
    "pilihan": [
      "Rp20.000,00",
      "Rp22.000,00",
      "Rp27.500,00",
      "Rp30.000,00",
      "Rp55.000,00"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Harga setelah diskon $= 0,8 \\times 250.000 = 200.000$. Pajak $= 11\\% \\times 200.000 = \\text{Rp22.000,00}$. Nilai Rp27.500,00 muncul jika pajak dihitung dari harga sebelum diskon."
  }
];
