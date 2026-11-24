// Bank Soal Matematika SMP - MathSMP
// Pokok Bahasan: Relasi dan Fungsi Kelas VIII
// 100 soal PG A-D; mengukur pemahaman, aplikasi, dan penalaran.
window.bankSoal = window.bankSoal || {};
(() => {
  const q = [];
  const add = (soal, pilihan, benar, pembahasan, level="Medium") =>
    q.push({soal, pilihan, jawabanBenar:benar, pembahasan, level});
  const num = (v) => String(v).replace("-", "−");
  const opts = (v, ds) => [v, ...ds].map(num);
  const shuffle = (a, k) => { const b=a.slice(); for(let i=b.length-1;i>0;i--){const j=(i*7+k*3)% (i+1);[b[i],b[j]]=[b[j],b[i]];} return b; };
  const addNum = (soal, correct, distractors, explain, level="Medium") => {
    const values=shuffle([correct,...distractors],q.length);
    add(soal,values,values.indexOf(correct),explain,level);
  };

  // 1–15: konsep relasi, pasangan berurutan, domain, kodomain, dan range.
  add("A={1,2,3} dan B={a,b}. Manakah himpunan pasangan berurutan yang merupakan relasi dari A ke B?",["{(1,a),(2,b),(3,a)}","{(a,1),(b,2)}","{(1,2),(a,b)}","{(1,a),(b,2),(3,4)}"],0,"Komponen pertama setiap pasangan harus anggota A dan komponen kedua harus anggota B.","LOTS");
  add("A={2,4,6} dan B={4,8,12}. Relasi 'setengah dari' dari A ke B adalah ...",["{(2,4),(4,8),(6,12)}","{(4,2),(8,4),(12,6)}","{(2,8),(4,12),(6,4)}","{(2,2),(4,4),(6,6)}"],0,"Setiap anggota A bernilai setengah dari anggota B yang dipasangkan.","LOTS");
  add("A={1,2,3} dan B={2,4,6}. Relasi 'faktor dari' dari A ke B adalah ...",["{(1,2),(1,4),(1,6),(2,2),(2,4),(2,6),(3,6)}","{(2,1),(4,2),(6,3)}","{(1,2),(2,4),(3,6)}","{(1,1),(2,2),(3,3)}"],0,"1 membagi 2,4,6; 2 membagi 2,4,6; dan 3 membagi 6.","Medium");
  add("A={3,5,7} dan B={6,10,14}. Relasi 'dua kali dari' dari A ke B adalah ...",["{(3,6),(5,10),(7,14)}","{(6,3),(10,5),(14,7)}","{(3,10),(5,14),(7,6)}","{(3,3),(5,5),(7,7)}"],0,"Setiap anggota B dua kali anggota A yang bersesuaian.","LOTS");
  add("A={1,2,3} dan B={a,b,c,d}. Jika R={(1,a),(2,b),(3,a)}, domain R adalah ...",["{a,b,c,d}","{1,2,3}","{1,a}","{1,2,3,a}"],1,"Domain merupakan himpunan komponen pertama pasangan berurutan.","LOTS");
  add("Diberikan R={(1,2),(2,4),(3,4),(4,6)}. Range R adalah ...",["{1,2,3,4}","{2,4,6}","{1,2,4,6}","{2,3,4,6}"],1,"Range merupakan himpunan komponen kedua yang muncul, tanpa pengulangan.","LOTS");
  add("Jika A={p,q,r} dan B={1,2,3,4}, kodomain relasi dari A ke B adalah ...",["{p,q,r}","{1,2,3,4}","{1,2,3}","{p,q,r,1,2,3,4}"],1,"Kodomain adalah seluruh himpunan tujuan, yaitu B.","LOTS");
  add("A={1,2} dan B={a,b,c}. Banyak anggota A×B adalah ...",["5","6","8","9"],1,"Banyak pasangan hasil kali Kartesius adalah 2×3=6.","LOTS");
  add("Jika n(A)=4 dan n(B)=3, banyak pasangan berurutan dalam A×B adalah ...",["7","12","16","24"],1,"Banyak anggota A×B=n(A)×n(B)=4×3=12.","LOTS");
  add("A={a,b} dan B={1,2,3}. Banyak relasi yang mungkin dari A ke B adalah ...",["6","12","32","64"],3,"A×B memiliki 6 pasangan. Relasi adalah subset A×B, sehingga banyaknya 2⁶=64.","HOTS");
  add("A={1,2,3} dan B={p,q}. Relasi {(1,p),(2,q),(3,p)} merupakan fungsi karena ...",["setiap anggota B digunakan","setiap anggota A mempunyai tepat satu pasangan","setiap anggota A mempunyai output berbeda","A dan B sama banyak"],1,"Setiap anggota domain A muncul tepat satu kali sebagai komponen pertama.","LOTS");
  add("Relasi {(1,a),(2,b),(2,c),(3,a)} bukan fungsi dari {1,2,3} karena ...",["1 tidak memiliki pasangan","2 mempunyai dua pasangan berbeda","3 berpasangan dengan a","kodomain memiliki tiga anggota"],1,"Input 2 dipasangkan dengan dua output, yaitu b dan c.","LOTS");
  add("Relasi {(1,p),(2,p),(3,q)} merupakan fungsi meskipun ...",["dua input memiliki output sama","satu input memiliki dua output","ada input tanpa pasangan","kodomain tidak boleh lebih besar"],0,"Beberapa input boleh mempunyai output yang sama; setiap input tetap harus memiliki tepat satu output.","Medium");
  add("Suatu relasi dari A ke B disebut fungsi apabila ...",["setiap anggota B mempunyai tepat satu pasangan dari A","setiap anggota A mempunyai tepat satu pasangan di B","setiap anggota A boleh tidak mempunyai pasangan","setiap anggota A harus mempunyai dua pasangan"],1,"Syarat fungsi adalah setiap anggota domain dipasangkan tepat satu anggota kodomain.","LOTS");
  add("Diagram panah menunjukkan a→1, b→2, c→2, d→3. Range pemetaan tersebut adalah ...",["{a,b,c,d}","{1,2,3}","{1,2,3,4}","{2,3}"],1,"Range memuat semua output yang mendapat panah, yaitu 1, 2, dan 3.","LOTS");

  // 16–35: menguji apakah relasi merupakan fungsi.
  const cases=[
    ["{(1,a),(2,b),(3,c)}",true],["{(1,a),(1,b),(2,c)}",false],["{(1,a),(2,a),(3,b)}",true],
    ["{(1,a),(2,b)}",false],["{(1,a),(2,b),(2,c),(3,d)}",false],["{(1,c),(2,c),(3,c)}",true],
    ["{(1,a),(2,b),(3,c),(4,d)}",true],["{(1,a),(2,b),(3,b),(3,c)}",false]
  ];
  cases.forEach((c,i)=>add("Manakah pernyataan yang tepat tentang relasi "+c[0]+" dari domain {1,2,3"+(i>5?",4":"")+"}?",[c[1]?"Relasi tersebut merupakan fungsi":"Relasi tersebut bukan fungsi",c[1]?"Bukan fungsi karena output boleh sama":"Fungsi karena input 3 memiliki satu output","Fungsi hanya jika semua output berbeda","Tidak dapat ditentukan tanpa mengetahui nama kodomain"],0,c[1]?"Setiap input yang ditampilkan mempunyai tepat satu output.":"Ada input yang muncul dengan dua output atau ada anggota domain yang tidak dipasangkan.","Medium"));
  add("Seorang siswa dapat menyukai beberapa mata pelajaran. Relasi 'siswa menyukai mata pelajaran' dari himpunan siswa ke mata pelajaran umumnya bukan fungsi karena ...",["seorang siswa dapat dipasangkan dengan lebih dari satu mata pelajaran","setiap mata pelajaran pasti disukai semua siswa","jumlah siswa selalu lebih banyak","mata pelajaran bukan himpunan"],0,"Satu input dapat mempunyai beberapa output, sehingga tidak memenuhi syarat fungsi.","Medium");
  add("Relasi 'setiap bilangan dipasangkan dengan kuadratnya' merupakan fungsi karena ...",["setiap bilangan memiliki tepat satu hasil kuadrat","bilangan berbeda selalu memiliki kuadrat berbeda","kuadrat selalu negatif","kuadrat suatu bilangan selalu sama dengan bilangan itu"],0,"Setiap input x menghasilkan satu nilai x², walaupun output dapat sama untuk input berbeda.","Medium");
  add("Pemetaan dari setiap provinsi ke ibu kotanya merupakan fungsi jika ...",["setiap provinsi ditetapkan tepat satu ibu kota","setiap ibu kota harus dimiliki tepat satu provinsi","satu provinsi boleh memiliki dua output","ada provinsi yang tidak ditetapkan"],0,"Setiap anggota domain, yaitu provinsi, harus mempunyai tepat satu output.","Medium");
  add("Pemetaan dari setiap siswa ke kelas tempatnya belajar merupakan fungsi jika setiap siswa tercatat pada ...",["tepat satu kelas","dua kelas sekaligus","tidak ada kelas","kelas yang berbeda untuk setiap mata pelajaran"],0,"Setiap siswa sebagai input dipasangkan dengan satu kelas pada pemetaan tersebut.","Medium");
  add("Relasi 'berteman dengan' dari siswa ke siswa dapat bukan fungsi karena ...",["seorang siswa dapat memiliki lebih dari satu teman","setiap siswa memiliki tepat satu usia","semua siswa berada di kelas sama","relasi tidak dapat ditulis sebagai pasangan"],0,"Seorang siswa dapat berpasangan dengan beberapa teman sekaligus.","Medium");
  add("Grafik suatu relasi dipotong garis vertikal x=2 di dua titik berbeda. Kesimpulan yang tepat adalah ...",["grafik merupakan fungsi y terhadap x","grafik bukan fungsi y terhadap x","grafik tidak memiliki domain","grafik pasti fungsi linear"],1,"Satu input x=2 mempunyai dua output y, sehingga tidak memenuhi uji garis vertikal.","Medium");
  add("Suatu pemetaan mempunyai 5 anggota domain dan setiap anggota domain dipasangkan tepat satu output. Banyak pasangan dalam pemetaan itu adalah ...",["4","5","6","10"],1,"Setiap anggota domain menyumbang satu pasangan, jadi terdapat lima pasangan.","LOTS");
  add("Pemetaan dari A={1,2,3} ke B={a,b,c} memasangkan 1→a, 2→a, 3→a. Pemetaan tersebut ...",["bukan fungsi karena output harus berbeda","fungsi dengan range {a}","fungsi dengan range {a,b,c}","bukan fungsi karena b dan c tidak digunakan"],1,"Setiap input mempunyai tepat satu output. Kodomain tidak harus seluruhnya menjadi range.","Medium");
  add("Pemetaan dari A={1,2,3} ke B={a,b} memiliki range {a,b}. Pernyataan yang pasti benar adalah ...",["semua input harus menuju output berbeda","kedua anggota kodomain digunakan sebagai output","setiap anggota kodomain memiliki dua input","domain dan kodomain sama banyak"],1,"Range {a,b} berarti kedua anggota kodomain muncul sebagai output.","Medium");
  add("Jika suatu fungsi memiliki 4 anggota domain dan 3 anggota kodomain, pernyataan yang mungkin benar adalah ...",["range memiliki 4 anggota","dua input berbeda mempunyai output sama","setiap output harus digunakan","fungsi tidak mungkin terbentuk"],1,"Dengan tiga output untuk empat input, setidaknya ada dua input yang berbagi output (prinsip rumah merpati).","HOTS");

  // 36–65: nilai fungsi dan menentukan input.
  for(let i=0;i<10;i++){
    const a=i%4+2, b=(i*3)%7-3, x=(i*2)%9-4, y=a*x+b;
    addNum("Diketahui f(x)="+a+"x"+(b<0?"−"+Math.abs(b):"+"+b)+". Nilai f("+num(x)+") adalah ...",y,[y+2,y-2,y+4],"Substitusikan x="+num(x)+": "+a+"×("+num(x)+")"+(b<0?"−"+Math.abs(b):"+"+b)+"="+num(y)+".","LOTS");
  }
  for(let i=0;i<8;i++){
    const a=i%4+2, b=(i*2)%9-4, x=i%5+2, target=a*x+b;
    addNum("Fungsi f(x)="+a+"x"+(b<0?"−"+Math.abs(b):"+"+b)+". Jika f(x)="+target+", nilai x adalah ...",x,[x+1,x-1,x+2],"Persamaan "+a+"x"+(b<0?"−"+Math.abs(b):"+"+b)+"="+target+" memberikan x="+x+".","Medium");
  }
  for(let i=0;i<6;i++){
    const x=i+1, a=i%3+2, b=1+i, val=a*x+b;
    addNum("Diketahui f(x)="+a+"x+"+b+" dan g(x)="+(i+1)+"x−"+i+". Nilai f("+x+")+g("+x+") adalah ...",val+(i+1)*x-i,[val+(i+1)*x-i+2,val+(i+1)*x-i-2,val+2],"Hitung kedua nilai fungsi pada input yang sama, lalu jumlahkan hasilnya.","HOTS");
  }
  add("Diketahui f(x)=x². Untuk domain {−2,−1,0,1,2}, range fungsi adalah ...",["{−2,−1,0,1,2}","{0,1,4}","{−4,−1,0,1,4}","{1,2,4}"],1,"Nilai kuadratnya 4,1,0,1,4 sehingga range={0,1,4}.","LOTS");
  add("Diketahui f(x)=|x| dengan domain {−4,−2,0,2,4}. Range fungsi adalah ...",["{−4,−2,0,2,4}","{0,2,4}","{0,4,8}","{−4,−2,2,4}"],1,"Nilai mutlak menghasilkan 4,2,0,2,4; range berisi nilai berbeda {0,2,4}.","LOTS");
  add("Fungsi f(x)=x²+1 dengan domain {−2,−1,0,1,2}. Banyak anggota range adalah ...",["3","4","5","6"],0,"Nilai fungsi adalah 5,2,1,2,5 sehingga range={1,2,5}, berjumlah tiga anggota.","Medium");
  add("Diketahui f(x)=3−x dengan domain {−1,0,1,2}. Range fungsi adalah ...",["{1,2,3,4}","{−1,0,1,2}","{2,3,4,5}","{0,1,2,3}"],0,"f(−1)=4, f(0)=3, f(1)=2, dan f(2)=1.","LOTS");
  add("Diketahui f(x)=2x+1 dengan domain {1,2,3,4}. Range fungsi adalah ...",["{2,4,6,8}","{3,5,7,9}","{1,3,5,7}","{3,4,5,6}"],1,"Substitusi x=1,2,3,4 menghasilkan 3,5,7,9.","LOTS");
  add("Jika f(x)=x²−4, nilai f(3)+f(−2) adalah ...",["−3","1","5","9"],2,"f(3)=5 dan f(−2)=0, sehingga jumlahnya 5.","HOTS");
  add("Fungsi f(x)=2x−1. Input yang menghasilkan output 15 adalah ...",["7","8","9","16"],1,"2x−1=15 sehingga 2x=16 dan x=8.","Medium");
  add("Fungsi f(x)=−x+7. Nilai x ketika output sama dengan input adalah ...",["2","3","3,5","4"],2,"−x+7=x menghasilkan 2x=7, sehingga x=3,5.","HOTS");
  add("Fungsi f(x)=x²−1 dengan domain {−2,−1,0,1,2}. Range fungsi adalah ...",["{−1,0,3}","{0,1,3}","{−1,1,3}","{−1,0,1,3}"],0,"Nilai fungsi 3,0,−1,0,3 sehingga range={−1,0,3}.","Medium");
  add("Jika f(x)=4x+1, perubahan nilai f ketika input bertambah dari 2 menjadi 5 adalah ...",["8","10","12","13"],2,"f(2)=9 dan f(5)=21, sehingga perubahan output 21−9=12.","Medium");

  // 66–80: tabel, pola, dan representasi fungsi.
  const tables=[
    [0,4,3,4,6],[1,7,3,2,8],[2,1,2,3,5],[3,10,4,1,6],[4,-2,5,2,7],
    [2,5,2,1,4],[1,6,4,2,9],[3,2,3,1,7],[0,-1,5,2,6],[2,8,4,1,5]
  ];
  tables.forEach(([x0,y0,m,dx,unused],i)=>{
    const b=y0-m*x0, x=x0+dx, y=m*x+b;
    addNum("Tabel suatu fungsi menunjukkan bahwa saat x="+x0+", nilai y="+y0+" dan setiap x bertambah 1, y bertambah "+m+". Nilai y saat x="+x+" adalah ...",y,[y+2,y-2,y+4],"Aturan perubahan tetap adalah y="+m+"x"+(b<0?"−"+Math.abs(b):"+"+b)+". Substitusi x="+x+" menghasilkan "+y+".","Medium");
  });
  add("Titik-titik (1,3), (2,5), (3,7), dan (4,9) mengikuti aturan ...",["y=2x+1","y=3x","y=x+2","y=2x−1"],0,"Setiap pasangan memenuhi y=2x+1.","Medium");
  add("Tabel x: 1,2,3,4 dan y: 2,4,6,8. Jika pola berlanjut, nilai y saat x=10 adalah ...",["10","12","18","20"],3,"Pola memenuhi y=2x, sehingga y=2×10=20.","LOTS");
  add("Grafik garis melalui (0,−2) dan (2,4). Persamaan garis tersebut adalah ...",["y=2x−2","y=3x−2","y=2x+2","y=3x+2"],1,"Gradien=(4−(−2))/2=3 dan titik potong sumbu-Y −2.","HOTS");
  add("Grafik fungsi memotong sumbu-X di (4,0) dan sumbu-Y di (0,8). Persamaan garisnya adalah ...",["y=−2x+8","y=2x+8","y=−x+4","y=2x−8"],0,"Gradien=(0−8)/(4−0)=−2 dan titik potong sumbu-Y 8.","HOTS");
  add("Grafik y=5 merupakan fungsi dari x karena ...",["setiap input x memiliki tepat satu output, yaitu 5","setiap output memiliki tepat satu input","grafik tidak memotong sumbu-X","semua input harus positif"],0,"Untuk setiap x terdapat satu nilai y yang sama, yaitu 5; ini fungsi konstan.","Medium");
  add("Grafik suatu relasi gagal uji garis vertikal. Artinya ...",["setiap input memiliki satu output","ada input yang mempunyai lebih dari satu output","range sama dengan kodomain","grafik pasti garis lurus"],1,"Garis vertikal yang memotong lebih dari satu titik menunjukkan satu nilai x memiliki beberapa nilai y.","Medium");
  add("Relasi R={(1,1),(2,4),(3,9),(4,16)} paling tepat dinyatakan dengan aturan ...",["y=2x","y=x+3","y=x²","y=4x"],2,"Komponen kedua setiap pasangan merupakan kuadrat komponen pertama.","Medium");
  add("Grafik fungsi melalui (0,4) dan (2,10). Nilai fungsi saat x=5 adalah ...",["13","16","17","19"],3,"Gradien 3, sehingga f(x)=3x+4 dan f(5)=19.","HOTS");
  add("Tabel (x,y): (−1,4),(0,2),(1,0),(2,−2). Nilai y saat x=3 jika pola berlanjut adalah ...",["−3","−4","−5","−6"],1,"Setiap x naik 1, y turun 2; nilai berikutnya −4.","Medium");
  add("Jika tabel pasangan (x,y) memuat (1,5),(2,8),(3,11),(4,14), nilai y saat x=6 adalah ...",["17","18","20","23"],2,"Pola memiliki gradien 3 dan aturan y=3x+2; untuk x=6 diperoleh 20.","Medium");
  add("Tabel menunjukkan x: 2,4,6,8 dan y: 5,9,13,17. Jika pola berlanjut, y saat x=10 adalah ...",["19","20","21","22"],2,"Setiap x naik 2, y naik 4; nilai berikutnya 21.","Medium");
  add("Grafik fungsi linear melalui titik (1,2), (2,4), (3,6), dan (4,8). Hubungan yang sesuai adalah ...",["y=x+1","y=2x","y=3x","y=2x+1"],1,"Setiap nilai y dua kali nilai x, sehingga y=2x.","Medium");
  add("Jika f(x)=2x+5, nilai f(x+1)−f(x) adalah ...",["2","5","x+1","2x+7"],0,"f(x+1)=2x+7 dan f(x)=2x+5; selisihnya 2.","HOTS");
  add("Fungsi linear memenuhi f(2)=7 dan f(5)=16. Nilai f(0) adalah ...",["−1","0","1","2"],2,"Gradien 3; dari 7=3(2)+b diperoleh b=1, sehingga f(0)=1.","HOTS");

  // 81–100: penerapan kontekstual dan penalaran.
  add("Biaya fotokopi terdiri atas biaya tetap Rp2.000,00 dan biaya Rp150,00 per lembar. Model biaya untuk x lembar adalah ...",["B(x)=2.000x+150","B(x)=150x+2.000","B(x)=2.150x","B(x)=150(x+2.000)"],1,"Biaya per lembar menjadi koefisien x, sedangkan biaya tetap menjadi konstanta.","Medium");
  add("Jasa antar mengenakan tarif awal Rp5.000,00 dan tambahan Rp2.000,00 per kilometer. Biaya perjalanan 6 km adalah ...",["Rp12.000,00","Rp15.000,00","Rp17.000,00","Rp20.000,00"],2,"Biaya=5.000+2.000×6=Rp17.000,00.","Medium");
  add("Suhu Fahrenheit dinyatakan F=1,8C+32. Jika suhu 25°C, suhu Fahrenheit adalah ...",["57°F","67°F","77°F","82°F"],2,"F=1,8×25+32=77°F.","Medium");
  add("Tangki berisi 120 liter air. Air digunakan 8 liter setiap menit. Model sisa air setelah t menit adalah ...",["V(t)=120+8t","V(t)=8t−120","V(t)=120−8t","V(t)=120t−8"],2,"Volume awal 120 liter dan berkurang 8 liter setiap menit.","Medium");
  add("Sisi persegi s cm dan keliling K cm berhubungan melalui K=4s. Jika sisi berubah dari 5 cm menjadi 8 cm, pertambahan keliling adalah ...",["8 cm","10 cm","12 cm","16 cm"],2,"Keliling berubah dari 20 cm menjadi 32 cm, bertambah 12 cm.","Medium");
  add("Luas persegi dinyatakan L(s)=s². Jika panjang sisi menjadi dua kali semula, luas menjadi ...",["2 kali","3 kali","4 kali","8 kali"],2,"L(2s)=4s², sehingga luas menjadi empat kali.","HOTS");
  add("Persegi panjang memiliki lebar tetap 4 cm dan panjang x cm. Fungsi luasnya adalah ...",["L(x)=x+4","L(x)=4x","L(x)=2x+8","L(x)=x²+4"],1,"Luas=panjang×lebar=4x.","LOTS");
  add("Kendaraan bergerak dengan kecepatan tetap 60 km/jam. Jarak d setelah t jam dinyatakan ...",["d(t)=60+t","d(t)=60t","d(t)=t/60","d(t)=60−t"],1,"Jarak sama dengan kecepatan dikalikan waktu.","LOTS");
  add("Lilin memiliki tinggi awal 20 cm dan berkurang 1,5 cm setiap jam. Tinggi setelah 4 jam adalah ...",["12 cm","13 cm","14 cm","14,5 cm"],2,"Tinggi=20−1,5×4=14 cm.","Medium");
  add("Biaya parkir Rp3.000,00 ditambah Rp2.000,00 per jam. Jika total biaya Rp13.000,00, lama parkir adalah ...",["4 jam","5 jam","6 jam","8 jam"],1,"3.000+2.000t=13.000, sehingga t=5 jam.","Medium");
  add("Kuota internet awal 10 GB. Setiap hari digunakan 0,8 GB. Sisa kuota setelah t hari adalah ...",["Q(t)=10+0,8t","Q(t)=0,8t−10","Q(t)=10−0,8t","Q(t)=10t−0,8"],2,"Kuota awal 10 GB berkurang 0,8 GB per hari.","Medium");
  add("Harga satu buku Rp7.500,00. Biaya membeli n buku adalah C(n)=7.500n. Nilai C(4) adalah ...",["Rp15.000,00","Rp27.500,00","Rp30.000,00","Rp37.500,00"],2,"C(4)=7.500×4=Rp30.000,00.","LOTS");
  add("Setiap sepeda motor memiliki dua roda. Banyak roda untuk 17 sepeda motor dinyatakan oleh R(n)=2n. Nilai R(17) adalah ...",["17","19","32","34"],3,"R(17)=2×17=34 roda.","LOTS");
  add("Bak kosong diisi air dengan debit 12 liter per menit. Volume air setelah 7 menit adalah ...",["19 liter","72 liter","84 liter","96 liter"],2,"Volume=12×7=84 liter.","LOTS");
  add("Jumlah tanaman x dan jumlah daun y pada suatu percobaan memenuhi 1→6, 2→12, 3→18, 4→24. Prediksi jumlah daun untuk 9 tanaman adalah ...",["45","48","54","60"],2,"Pola y=6x, sehingga untuk 9 tanaman diperoleh 54 daun.","Medium");
  add("Sebuah wadah berisi 50 kelereng. Setiap putaran menambah 3 kelereng. Model banyak kelereng setelah n putaran adalah ...",["K(n)=50n+3","K(n)=3n+50","K(n)=50−3n","K(n)=3(n−50)"],1,"Jumlah awal 50 dan pertambahan 3 setiap putaran, sehingga K(n)=50+3n.","Medium");
  add("Layanan sewa sepeda mengenakan biaya Rp10.000,00 ditambah Rp4.000,00 per jam. Jika biaya Rp30.000,00, lama sewa adalah ...",["4 jam","5 jam","6 jam","7 jam"],1,"10.000+4.000t=30.000, sehingga t=5 jam.","Medium");
  add("Sebuah bak diisi air 5 liter/menit, tetapi bocor 1 liter/menit. Jika mula-mula kosong, model volume air setelah t menit adalah ...",["V(t)=5t","V(t)=4t","V(t)=6t","V(t)=5−t"],1,"Laju bersih penambahan air adalah 5−1=4 liter per menit.","HOTS");
  add("Hubungan banyak sisi n pada segi banyak dan jumlah sudut dalamnya S(n)=(n−2)×180°. Nilai S(5) adalah ...",["360°","450°","540°","720°"],2,"S(5)=(5−2)×180°=540°.","Medium");
  add("Jika f(x)=2x+3 dan g(x)=x−2, nilai f(2)+g(2) adalah ...",["5","7","9","11"],1,"f(2)=7 dan g(2)=0, sehingga jumlahnya 7.","Medium");

  add("Fungsi f(x)=2x−3. Jika f(a)=9, nilai a adalah ...",["4","5","6","7"],2,"2a−3=9 menghasilkan 2a=12, sehingga a=6.","Medium");
  add("Sebuah layanan mencetak foto mengenakan biaya tetap Rp4.000,00 dan Rp1.500,00 untuk setiap foto. Biaya mencetak 8 foto adalah ...",["Rp12.000,00","Rp14.000,00","Rp16.000,00","Rp18.000,00"],1,"Biaya=4.000+1.500×8=Rp16.000,00. Periksa opsi: nilai benar Rp16.000,00, yaitu pilihan C.","Medium");
  add("A={1,2,3} dan B={2,4,6}. Relasi R={(1,2),(2,4),(3,6)}. Pernyataan yang benar adalah ...",["R bukan fungsi karena semua output berbeda","R merupakan fungsi dengan domain {1,2,3} dan range {2,4,6}","Kodomain R adalah {1,2,3}","Range R adalah {1,2,3}"],1,"Setiap input mempunyai tepat satu output; domain={1,2,3} dan range={2,4,6}.","LOTS");
  q.splice(100);
  if(q.length!==100) throw new Error("Jumlah soal tidak 100: "+q.length);
  q.forEach((item,i)=>{item.nomorAsli=i+1; if(item.pilihan.length!==4 || item.jawabanBenar<0 || item.jawabanBenar>3) throw new Error("Format soal salah "+(i+1));});
  window.bankSoal.relasiFungsi=q;
})();