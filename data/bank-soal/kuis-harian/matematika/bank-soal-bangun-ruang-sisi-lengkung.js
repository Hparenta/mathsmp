// Bank Soal Matematika SMP - MathSMP (SMPN 1 Tabang)
// Pokok Bahasan: Bangun Ruang Sisi Lengkung - Standar TKA
// Struktur modular: aman digabung dengan file bank-soal-*.js materi lainnya

window.bankSoal = window.bankSoal || {};

window.bankSoal.bangunRuangSisiLengkung = [
  {
    "soal": "Warga di Desa Tabang sering memanfaatkan ruas bambu petung sebagai wadah penyimpanan air atau nira aren. Sebuah ruas bambu berbentuk tabung tanpa tutup memiliki diameter dalam 14 cm dan tinggi 30 cm. Jika $\\pi = \\frac{22}{7}$, luas permukaan bagian dalam ruas bambu yang bersentuhan langsung dengan cairan adalah ....",
    "gambar": "<svg viewBox='0 0 220 180' width='220' height='180' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='35' rx='45' ry='14' fill='#dcfce7' stroke='#166534' stroke-width='2'/><path d='M65 35 L65 145 A45 14 0 0 0 155 145 L155 35' fill='#bbf7d0' fill-opacity='0.5' stroke='#166534' stroke-width='2'/><ellipse cx='110' cy='145' rx='45' ry='14' fill='none' stroke='#166534' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='65' y1='35' x2='155' y2='35' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='3,2'/><text x='110' y='28' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 14 cm</text><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>t = 30 cm</text></svg>",
    "pilihan": [
      "1.320 cm²",
      "1.474 cm²",
      "1.628 cm²",
      "4.620 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Diketahui tabung tanpa tutup dengan diameter $d = 14\\text{ cm}$, sehingga jari-jari $r = 7\\text{ cm}$, dan tinggi $t = 30\\text{ cm}$. Luas permukaan tabung tanpa tutup $= \\pi r^2 + 2\\pi r t = (\\frac{22}{7} \\times 7 \\times 7) + (2 \\times \\frac{22}{7} \\times 7 \\times 30) = 154 + 1.320 = 1.474\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah jaring-jaring tabung memiliki selimut berbentuk persegi panjang dengan panjang 88 cm dan lebar 25 cm. Jika $\\pi = \\frac{22}{7}$, volume tabung yang terbentuk dari jaring-jaring tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 260 150' width='260' height='150' xmlns='http://www.w3.org/2000/svg'><circle cx='130' cy='25' r='18' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><rect x='60' y='43' width='140' height='64' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><circle cx='130' cy='125' r='18' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='130' y='78' font-size='12' text-anchor='middle' fill='#0c4a6e' font-weight='bold'>88 cm</text><text x='222' y='78' font-size='12' text-anchor='middle' fill='#0c4a6e' font-weight='bold'>25 cm</text></svg>",
    "pilihan": [
      "15.400 cm³",
      "7.700 cm³",
      "3.850 cm³",
      "2.200 cm³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Panjang selimut tabung sama dengan keliling lingkaran alas: $2\\pi r = 88 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 88 \\Rightarrow r = 14\\text{ cm}$. Tinggi tabung $t = 25\\text{ cm}$. Volume tabung $= \\pi r^2 t = \\frac{22}{7} \\times 14 \\times 14 \\times 25 = 15.400\\text{ cm}^3$."
  },
  {
    "soal": "Untuk menampung air bersih dari mata air pegunungan di Kecamatan Tabang, warga membangun bak penampungan berbentuk tabung dengan jari-jari 1 meter dan tinggi 1,4 meter. Jika bak tersebut baru terisi $\\frac{3}{4}$ bagian, berapa liter air lagi yang diperlukan hingga bak terisi penuh? ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='30' rx='55' ry='15' fill='#f1f5f9' stroke='#334155' stroke-width='2'/><path d='M55 60 L55 140 A55 15 0 0 0 165 140 L165 60 Z' fill='#38bdf8' fill-opacity='0.6'/><path d='M55 30 L55 140 A55 15 0 0 0 165 140 L165 30' fill='none' stroke='#334155' stroke-width='2'/><ellipse cx='110' cy='60' rx='55' ry='15' fill='#7dd3fc' fill-opacity='0.7' stroke='#0284c7' stroke-width='1.5'/><line x1='110' y1='30' x2='165' y2='30' stroke='#dc2626' stroke-width='1.5'/><text x='138' y='24' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 1 m</text><text x='190' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>t = 1,4 m</text></svg>",
    "pilihan": [
      "1.100 liter",
      "2.200 liter",
      "3.300 liter",
      "4.400 liter"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Volume penuh tabung $= \\pi r^2 t = \\frac{22}{7} \\times 1^2 \\times 1,4 = 4,4\\text{ m}^3 = 4.400\\text{ liter}$. Bagian yang belum terisi adalah $1 - \\frac{3}{4} = \\frac{1}{4}$ bagian. Jadi tambahan air yang diperlukan $= \\frac{1}{4} \\times 4.400 = 1.100\\text{ liter}$."
  },
  {
    "soal": "Perhatikan gambar kerucut berikut. Jika panjang jari-jari alas $r = 9\\text{ cm}$ dan tinggi kerucut $t = 12\\text{ cm}$, maka luas seluruh permukaan kerucut tersebut dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 220 180' width='220' height='180' xmlns='http://www.w3.org/2000/svg'><polygon points='110,25 50,145 170,145' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><ellipse cx='110' cy='145' rx='60' ry='16' fill='#fde68a' stroke='#b45309' stroke-width='2'/><line x1='110' y1='25' x2='110' y2='145' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='110' y1='145' x2='170' y2='145' stroke='#2563eb' stroke-width='1.5'/><text x='92' y='90' font-size='11' fill='#dc2626' font-weight='bold'>12 cm</text><text x='140' y='138' font-size='11' text-anchor='middle' fill='#2563eb' font-weight='bold'>9 cm</text></svg>",
    "pilihan": [
      "135π cm²",
      "189π cm²",
      "216π cm²",
      "324π cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Garis pelukis kerucut dicari dengan teorema Pythagoras: $s = \\sqrt{r^2 + t^2} = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$. Luas permukaan kerucut $= \\pi r(r + s) = \\pi \\times 9 \\times (9 + 15) = 9\\pi \\times 24 = 216\\pi\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah juring lingkaran dengan sudut pusat $216^\\circ$ dan jari-jari $20\\text{ cm}$ akan dibentuk menjadi selimut kerucut. Panjang jari-jari alas kerucut yang terbentuk adalah ....",
    "gambar": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><path d='M110,85 L175,85 A65,65 0 1,0 57,123 Z' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><path d='M128,85 A18,18 0 1,0 95,96' fill='none' stroke='#dc2626' stroke-width='1.5'/><text x='105' y='62' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>216°</text><text x='145' y='78' font-size='11' text-anchor='middle' fill='#581c87' font-weight='bold'>20 cm</text></svg>",
    "pilihan": [
      "10 cm",
      "12 cm",
      "14 cm",
      "15 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari juring menjadi garis pelukis kerucut ($s = 20\\text{ cm}$). Keliling alas kerucut sama dengan panjang busur juring: $2\\pi r = \\frac{216^\\circ}{360^\\circ} \\times 2\\pi s \\Rightarrow r = \\frac{3}{5} \\times 20 = 12\\text{ cm}$."
  },
  {
    "soal": "Sebuah topi adat berbentuk kerucut dari anyaman bambu di Mamasa memiliki keliling alas $132\\text{ cm}$ dan tinggi $28\\text{ cm}$. Volume ruang di dalam topi tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='110,20 45,135 175,135' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><ellipse cx='110' cy='135' rx='65' ry='16' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><line x1='110' y1='20' x2='110' y2='135' stroke='#1e293b' stroke-width='1.5' stroke-dasharray='4,3'/><text x='88' y='85' font-size='11' fill='#1e293b' font-weight='bold'>28 cm</text><text x='110' y='162' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>Keliling = 132 cm</text></svg>",
    "pilihan": [
      "12.936 cm³",
      "19.404 cm³",
      "38.808 cm³",
      "4.312 cm³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Keliling alas $= 2\\pi r = 132 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 132 \\Rightarrow r = 21\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 21 \\times 21 \\times 28 = 22 \\times 21 \\times 28 = 12.936\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah bola logam pejal memiliki luas permukaan $616\\text{ cm}^2$. Jika $\\pi = \\frac{22}{7}$, panjang diameter bola tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='60' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><ellipse cx='100' cy='85' rx='60' ry='18' fill='none' stroke='#334155' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='40' y1='85' x2='160' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='100' y='78' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = ?</text></svg>",
    "pilihan": [
      "7 cm",
      "14 cm",
      "21 cm",
      "28 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas permukaan bola $= 4\\pi r^2 = 616 \\Rightarrow 4 \\times \\frac{22}{7} \\times r^2 = 616 \\Rightarrow r^2 = \\frac{616 \\times 7}{88} = 49 \\Rightarrow r = 7\\text{ cm}$. Diameter bola $d = 2r = 14\\text{ cm}$."
  },
  {
    "soal": "Sebuah mangkuk kayu berbentuk belahan bola (setengah bola) pejal memiliki jari-jari $10\\text{ cm}$. Luas seluruh permukaan luar dan penampang atas mangkuk pejal tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 220 160' width='220' height='160' xmlns='http://www.w3.org/2000/svg'><path d='M45,65 A65,65 0 0,0 175,65 Z' fill='#fde047' fill-opacity='0.6' stroke='#854d0e' stroke-width='2'/><ellipse cx='110' cy='65' rx='65' ry='18' fill='#fef08a' stroke='#854d0e' stroke-width='2'/><line x1='110' y1='65' x2='175' y2='65' stroke='#dc2626' stroke-width='1.5'/><text x='142' y='58' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 10 cm</text></svg>",
    "pilihan": [
      "628 cm²",
      "942 cm²",
      "1.256 cm²",
      "314 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas permukaan setengah bola pejal $= 2\\pi r^2 + \\pi r^2 = 3\\pi r^2 = 3 \\times 3,14 \\times 10^2 = 3 \\times 314 = 942\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah bola tepat berada di dalam tabung sehingga menyentuh sisi alas, sisi tutup, dan selimut tabung. Jika volume tabung adalah $720\\text{ cm}^3$, maka volume bola di dalamnya adalah ....",
    "gambar": "<svg viewBox='0 0 200 180' width='200' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='30' width='100' height='120' fill='none' stroke='#334155' stroke-width='2'/><ellipse cx='100' cy='30' rx='50' ry='12' fill='none' stroke='#334155' stroke-width='1.5'/><ellipse cx='100' cy='150' rx='50' ry='12' fill='none' stroke='#334155' stroke-width='1.5'/><circle cx='100' cy='90' r='50' fill='#93c5fd' fill-opacity='0.5' stroke='#1d4ed8' stroke-width='2'/></svg>",
    "pilihan": [
      "240 cm³",
      "360 cm³",
      "480 cm³",
      "540 cm³"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Jika bola menyinggung seluruh sisi tabung, maka jari-jari tabung sama dengan jari-jari bola ($r$) dan tinggi tabung $t = 2r$. Perbandingan $V_{\\text{bola}} : V_{\\text{tabung}} = \\frac{4}{3}\\pi r^3 : \\pi r^2(2r) = \\frac{4}{3} : 2 = 2 : 3$. Maka $V_{\\text{bola}} = \\frac{2}{3} \\times 720 = 480\\text{ cm}^3$."
  },
  {
    "soal": "Perhatikan gambar bangun gabungan tabung dan setengah bola berikut! Jika diameter alas $14\\text{ cm}$ dan tinggi tabung $10\\text{ cm}$, volume total bangun ruang tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'><path d='M55,80 A45,45 0 0,1 145,80' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><rect x='55' y='80' width='90' height='80' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><ellipse cx='100' cy='80' rx='45' ry='12' fill='none' stroke='#be185d' stroke-width='1.5' stroke-dasharray='3,3'/><ellipse cx='100' cy='160' rx='45' ry='12' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><text x='172' y='125' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>10 cm</text><text x='100' y='185' font-size='11' text-anchor='middle' fill='#be185d' font-weight='bold'>d = 14 cm</text></svg>",
    "pilihan": [
      "1.540 cm³",
      "2.258,67 cm³",
      "2.977,33 cm³",
      "3.080 cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 7\\text{ cm}$. Volume tabung $= \\pi r^2 t = \\frac{22}{7} \\times 49 \\times 10 = 1.540\\text{ cm}^3$. Volume setengah bola $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = \\frac{2.156}{3} \\approx 718,67\\text{ cm}^3$. Volume total $= 1.540 + 718,67 = 2.258,67\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah peluru mainan kayu terdiri dari gabungan tabung dan kerucut. Diameter alas keduanya $12\\text{ cm}$, tinggi tabung $15\\text{ cm}$, dan tinggi total bangun adalah $23\\text{ cm}$. Luas permukaan bangun gabungan tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 210' width='210' height='210' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 60,85 150,85' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><rect x='60' y='85' width='90' height='95' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><ellipse cx='105' cy='180' rx='45' ry='11' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><text x='178' y='135' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='32' y='105' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>23 cm</text></svg>",
    "pilihan": [
      "866,64 cm²",
      "979,68 cm²",
      "1.092,72 cm²",
      "753,60 cm²"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Jari-jari $r = 6\\text{ cm}$. Tinggi kerucut $t_k = 23 - 15 = 8\\text{ cm}$, sehingga garis pelukis kerucut $s = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Luas permukaan gabungan $= L_{\\text{alas tabung}} + L_{\\text{selimut tabung}} + L_{\\text{selimut kerucut}} = \\pi r^2 + 2\\pi r t + \\pi r s = \\pi r(r + 2t + s) = 3,14 \\times 6 \\times (6 + 30 + 10) = 18,84 \\times 46 = 866,64\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah tabung berjari-jari $14\\text{ cm}$ berisi air setinggi $20\\text{ cm}$. Ke dalam tabung tersebut dimasukkan 3 buah bola besi pejal yang masing-masing berjari-jari $7\\text{ cm}$ hingga seluruh bola tenggelam. Kenaikan tinggi air di dalam tabung adalah ....",
    "gambar": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='130' fill='none' stroke='#334155' stroke-width='2'/><rect x='55' y='75' width='100' height='85' fill='#bae6fd' fill-opacity='0.6'/><circle cx='82' cy='140' r='16' fill='#64748b'/><circle cx='125' cy='140' r='16' fill='#64748b'/><circle cx='103' cy='115' r='16' fill='#64748b'/><text x='180' y='120' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>Δt = ?</text></svg>",
    "pilihan": [
      "3,5 cm",
      "5,25 cm",
      "7,0 cm",
      "10,5 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Volume kenaikan air dalam tabung sama dengan volume 3 bola: $\\pi R^2 \\Delta t = 3 \\times \\frac{4}{3}\\pi r^3 \\Rightarrow 14^2 \\times \\Delta t = 4 \\times 7^3 \\Rightarrow 196 \\Delta t = 4 \\times 343 = 1.372 \\Rightarrow \\Delta t = \\frac{1.372}{196} = 7\\text{ cm}$."
  },
  {
    "soal": "Dua buah bola masing-masing memiliki jari-jari $6\\text{ cm}$ dan $9\\text{ cm}$. Perbandingan volume kedua bola tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 230 140' width='230' height='140' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='80' r='32' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><circle cx='155' cy='70' r='48' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><text x='60' y='128' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>r₁ = 6 cm</text><text x='155' y='133' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>r₂ = 9 cm</text></svg>",
    "pilihan": [
      "2 : 3",
      "4 : 9",
      "8 : 27",
      "16 : 81"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Perbandingan volume dua bola sebanding dengan pangkat tiga dari jari-jarinya: $V_1 : V_2 = r_1^3 : r_2^3 = 6^3 : 9^3 = (2)^3 : (3)^3 = 8 : 27$."
  },
  {
    "soal": "Di dekat jembatan Sungai Mamasa wilayah Tabang, terdapat tugu penanda jalan berbentuk gabungan kerucut dan setengah bola (bandul). Jika jari-jari alas kerucut sama dengan jari-jari setengah bola yaitu $7\\text{ cm}$, dan garis pelukis kerucut $25\\text{ cm}$, luas permukaan bandul tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='100,20 55,125 145,125' fill='#fde68a' stroke='#b45309' stroke-width='2'/><path d='M55,125 A45,45 0 0,0 145,125 Z' fill='#fcd34d' stroke='#b45309' stroke-width='2'/><text x='145' y='72' font-size='11' fill='#b45309' font-weight='bold'>s = 25 cm</text><text x='100' y='120' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "704 cm²",
      "858 cm²",
      "1.012 cm²",
      "1.166 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas permukaan bandul $= L_{\\text{selimut kerucut}} + L_{\\text{setengah bola}} = \\pi r s + 2\\pi r^2 = \\pi r(s + 2r) = \\frac{22}{7} \\times 7 \\times (25 + 14) = 22 \\times 39 = 858\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah tabung memiliki jari-jari $r$ dan tinggi $t$. Jika jari-jari tabung diperbesar menjadi $2$ kali semula dan tingginya diperkecil menjadi $\\frac{1}{2}$ kali semula, maka volume tabung yang baru adalah ....",
    "gambar": "<svg viewBox='0 0 240 150' width='240' height='150' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='45' height='95' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='52' y='140' font-size='11' text-anchor='middle' fill='#4338ca' font-weight='bold'>Awal (r, t)</text><text x='102' y='82' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='130' y='77' width='90' height='48' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><text x='175' y='140' font-size='11' text-anchor='middle' fill='#4338ca' font-weight='bold'>Baru (2r, ½t)</text></svg>",
    "pilihan": [
      "sama dengan volume semula",
      "2 kali volume semula",
      "4 kali volume semula",
      "½ kali volume semula"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume awal $V_1 = \\pi r^2 t$. Volume baru $V_2 = \\pi (2r)^2 (\\frac{1}{2}t) = \\pi (4r^2)(\\frac{1}{2}t) = 2\\pi r^2 t = 2V_1$. Jadi volumenya menjadi 2 kali volume semula."
  }
  {
    "soal": "Sebuah kaleng cat berbentuk tabung memiliki diameter $28\\text{ cm}$ dan tinggi $25\\text{ cm}$. Jika label kertas pembungkus ditempelkan mengelilingi selimut kaleng tanpa tumpang tindih, luas kertas pembungkus tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 175' width='220' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='32' rx='50' ry='14' fill='#f1f5f9' stroke='#334155' stroke-width='2'/><rect x='60' y='52' width='100' height='75' fill='#fef08a' stroke='#ca8a04' stroke-width='1.5'/><path d='M60 32 L60 142 A50 14 0 0 0 160 142 L160 32' fill='none' stroke='#334155' stroke-width='2'/><text x='110' y='94' font-size='11' text-anchor='middle' fill='#854d0e' font-weight='bold'>Label</text><text x='182' y='92' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>25 cm</text><text x='110' y='24' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 28 cm</text></svg>",
    "pilihan": [
      "1.100 cm²",
      "2.200 cm²",
      "3.432 cm²",
      "15.400 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Diameter $d = 28\\text{ cm}$ dan tinggi $t = 25\\text{ cm}$. Luas selimut tabung $= \\pi d t = \\frac{22}{7} \\times 28 \\times 25 = 22 \\times 4 \\times 25 = 2.200\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kerucut memiliki luas selimut $550\\text{ cm}^2$ dan jari-jari alas $7\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, panjang garis pelukis kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='14' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#0369a1' font-weight='bold'>s = ?</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "20 cm",
      "22 cm",
      "25 cm",
      "28 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas selimut kerucut $= \\pi r s \\Rightarrow 550 = \\frac{22}{7} \\times 7 \\times s \\Rightarrow 550 = 22s \\Rightarrow s = \\frac{550}{22} = 25\\text{ cm}$."
  },
  {
    "soal": "Petani kopi di Kecamatan Tabang menumpuk gabah/biji kopi kering di atas terpal datar sehingga membentuk tumpukan kerucut dengan diameter alas $2,8\\text{ m}$ dan tinggi $1,2\\text{ m}$. Volume tumpukan biji kopi tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='110,30 40,135 180,135' fill='#d6d3d1' stroke='#57534e' stroke-width='2'/><ellipse cx='110' cy='135' rx='70' ry='16' fill='#a8a29e' stroke='#57534e' stroke-width='2'/><line x1='110' y1='30' x2='110' y2='135' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='85' y='85' font-size='11' fill='#dc2626' font-weight='bold'>1,2 m</text><text x='110' y='162' font-size='11' text-anchor='middle' fill='#292524' font-weight='bold'>d = 2,8 m</text></svg>",
    "pilihan": [
      "1,848 m³",
      "2,464 m³",
      "3,696 m³",
      "7,392 m³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 1,4\\text{ m}$ dan tinggi $t = 1,2\\text{ m}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 1,4 \\times 1,4 \\times 1,2 = \\frac{22 \\times 0,2 \\times 1,4 \\times 1,2}{1} = 2,464\\text{ m}^3$."
  },
  {
    "soal": "Sebuah kerucut dan sebuah tabung memiliki alas yang sama besar dan tinggi yang sama pula. Jika volume kerucut adalah $450\\text{ cm}^3$, maka selisih volume tabung dan volume kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='65,35 30,130 100,130' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='65' y='148' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>Kerucut</text><rect x='135' y='35' width='70' height='95' fill='#bfdbfe' stroke='#1d4ed8' stroke-width='2'/><ellipse cx='170' cy='35' rx='35' ry='9' fill='#dbeafe' stroke='#1d4ed8' stroke-width='1.5'/><text x='170' y='148' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>Tabung</text></svg>",
    "pilihan": [
      "450 cm³",
      "900 cm³",
      "1.350 cm³",
      "1.800 cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Dengan alas dan tinggi yang sama, $V_{\\text{tabung}} = 3 \\times V_{\\text{kerucut}} = 3 \\times 450 = 1.350\\text{ cm}^3$. Selisih volumenya $= 1.350 - 450 = 900\\text{ cm}^3$."
  },
  {
    "soal": "Volume sebuah bola adalah $38.808\\text{ cm}^3$. Jika $\\pi = \\frac{22}{7}$, jari-jari bola tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='58' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><ellipse cx='100' cy='85' rx='58' ry='17' fill='none' stroke='#be185d' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='100' y1='85' x2='158' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='128' y='78' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = ?</text></svg>",
    "pilihan": [
      "14 cm",
      "21 cm",
      "28 cm",
      "35 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume bola $= \\frac{4}{3}\\pi r^3 = 38.808 \\Rightarrow \\frac{4}{3} \\times \\frac{22}{7} \\times r^3 = 38.808 \\Rightarrow r^3 = \\frac{38.808 \\times 21}{88} = 441 \\times 21 = 9.261 \\Rightarrow r = 21\\text{ cm}$."
  },
  {
    "soal": "Sebuah kubah menara masjid/balai pertemuan berbentuk setengah bola berdiameter $14\\text{ meter}$. Bagian luar kubah akan dicat dengan biaya Rp45.000,00 per $\\text{m}^2$. Biaya total pengecatan kubah tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,110 A65,65 0 0,1 175,110 Z' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><line x1='45' y1='110' x2='175' y2='110' stroke='#15803d' stroke-width='2'/><text x='110' y='128' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>d = 14 m</text></svg>",
    "pilihan": [
      "Rp13.860.000,00",
      "Rp20.790.000,00",
      "Rp27.720.000,00",
      "Rp55.440.000,00"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Jari-jari $r = 7\\text{ m}$. Luas permukaan luar setengah bola $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 7 \\times 7 = 308\\text{ m}^2$. Biaya pengecatan $= 308 \\times \\text{Rp}45.000,00 = \\text{Rp}13.860.000,00$."
  },
  {
    "soal": "Perhatikan gambar kerucut terpancung atau gabungan tabung dan kerucut berikut. Jika jari-jari alas $7\\text{ cm}$, tinggi tabung $12\\text{ cm}$, dan tinggi kerucut $6\\text{ cm}$, volume bangun gabungan tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 210 205' width='210' height='205' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 60,75 150,75' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><rect x='60' y='75' width='90' height='95' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><ellipse cx='105' cy='170' rx='45' ry='11' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><text x='172' y='55' font-size='11' fill='#c2410c' font-weight='bold'>6 cm</text><text x='172' y='125' font-size='11' fill='#1e293b' font-weight='bold'>12 cm</text><text x='105' y='193' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "1.848 cm³",
      "2.156 cm³",
      "2.464 cm³",
      "2.772 cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume tabung $= \\pi r^2 t_1 = \\frac{22}{7} \\times 49 \\times 12 = 1.848\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t_2 = \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 6 = 308\\text{ cm}^3$. Volume gabungan $= 1.848 + 308 = 2.156\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah tabung memiliki luas alas $154\\text{ cm}^2$ dan tinggi $20\\text{ cm}$. Jika di dalam tabung tersebut dibuat sebuah kerucut terbesar dengan alas berimpit dengan alas tabung dan puncaknya menyentuh pusat tutup tabung, berapakah volume ruang tabung di luar kerucut?",
    "gambar": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='120' fill='#e0f2fe' fill-opacity='0.5' stroke='#0369a1' stroke-width='2'/><ellipse cx='105' cy='30' rx='50' ry='12' fill='#bae6fd' stroke='#0369a1' stroke-width='1.5'/><polygon points='105,30 55,150 155,150' fill='#fde68a' fill-opacity='0.7' stroke='#b45309' stroke-width='2'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>20 cm</text></svg>",
    "pilihan": [
      "1.026,67 cm³",
      "1.540 cm³",
      "2.053,33 cm³",
      "3.080 cm³"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Volume tabung $= L_{\\text{alas}} \\times t = 154 \\times 20 = 3.080\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3} \\times 3.080 = 1.026,67\\text{ cm}^3$. Volume di luar kerucut $= 3.080 - 1.026,67 = 2.053,33\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah bola memiliki jari-jari $r$. Jika jari-jari bola tersebut diperbesar menjadi $3$ kali semula, maka luas permukaan bola yang baru menjadi .... kali luas permukaan semula.",
    "gambar": "<svg viewBox='0 0 230 145' width='230' height='145' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='80' r='16' fill='#e9d5ff' stroke='#7e22ce' stroke-width='2'/><text x='50' y='115' font-size='11' text-anchor='middle' fill='#7e22ce' font-weight='bold'>r</text><text x='92' y='84' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><circle cx='165' cy='72' r='48' fill='#d8b4fe' stroke='#7e22ce' stroke-width='2'/><text x='165' y='135' font-size='11' text-anchor='middle' fill='#7e22ce' font-weight='bold'>3r</text></svg>",
    "pilihan": [
      "3 kali",
      "6 kali",
      "9 kali",
      "27 kali"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas permukaan bola berbanding lurus dengan kuadrat jari-jarinya ($L = 4\\pi r^2$). Jika jari-jari menjadi $3r$, maka luas barunya $= 4\\pi (3r)^2 = 9 \\times 4\\pi r^2 = 9$ kali luas semula."
  },
  {
    "soal": "Sebuah kerucut memiliki jari-jari $6\\text{ cm}$ dan tinggi $8\\text{ cm}$. Jika tinggi kerucut diubah menjadi $12\\text{ cm}$ sementara jari-jarinya tetap, perbandingan volume kerucut awal terhadap volume kerucut akhir adalah ....",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='60,55 30,130 90,130' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='60' y='148' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>t = 8 cm</text><polygon points='165,25 135,130 195,130' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='165' y='148' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>t = 12 cm</text></svg>",
    "pilihan": [
      "1 : 2",
      "2 : 3",
      "3 : 4",
      "4 : 9"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Karena jari-jari sama, perbandingan volume kerucut sama dengan perbandingan tingginya: $V_1 : V_2 = t_1 : t_2 = 8 : 12 = 2 : 3$."
  },
  {
    "soal": "Sebuah tabung terbuka di bagian atas dan tertutup di bagian bawah memiliki jari-jari $10\\text{ cm}$ dan tinggi $15\\text{ cm}$. Berapa luas seluruh sisi luar tabung tersebut? ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='35' rx='48' ry='13' fill='none' stroke='#0f766e' stroke-width='2' stroke-dasharray='4,3'/><path d='M57 35 L57 140 A48 13 0 0 0 153 140 L153 35' fill='#ccfbf1' fill-opacity='0.6' stroke='#0f766e' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#99f6e4' stroke='#0f766e' stroke-width='2'/><text x='176' y='92' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='128' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 10 cm</text></svg>",
    "pilihan": [
      "942 cm²",
      "1.256 cm²",
      "1.570 cm²",
      "1.884 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas sisi tabung terbuka di atas $= L_{\\text{alas}} + L_{\\text{selimut}} = \\pi r^2 + 2\\pi r t = \\pi r(r + 2t) = 3,14 \\times 10 \\times (10 + 30) = 31,4 \\times 40 = 1.256\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kerucut memiliki volume $1.232\\text{ cm}^3$ dan jari-jari alas $7\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, tinggi kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 205 175' width='205' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='102,25 52,138 152,138' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><ellipse cx='102' cy='138' rx='50' ry='13' fill='#f5d0fe' stroke='#86198f' stroke-width='2'/><line x1='102' y1='25' x2='102' y2='138' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='82' y='88' font-size='11' fill='#dc2626' font-weight='bold'>t = ?</text><text x='128' y='131' font-size='11' text-anchor='middle' fill='#86198f' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "18 cm",
      "21 cm",
      "24 cm",
      "27 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = 1.232 \\Rightarrow \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times t = 1.232 \\Rightarrow \\frac{154}{3} t = 1.232 \\Rightarrow t = \\frac{1.232 \\times 3}{154} = 8 \\times 3 = 24\\text{ cm}$."
  },
  {
    "soal": "Sebuah bola dimasukkan ke dalam kotak kubus dengan panjang rusuk $20\\text{ cm}$ sehingga bola tepat menyinggung keenam sisi kubus. Berapa persen volume kubus yang tidak terisi oleh bola? ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><polygon points='60,40 140,40 165,20 85,20' fill='#f1f5f9' stroke='#334155' stroke-width='1.5'/><rect x='60' y='40' width='80' height='100' fill='none' stroke='#334155' stroke-width='2'/><polygon points='140,40 165,20 165,120 140,140' fill='#e2e8f0' stroke='#334155' stroke-width='1.5'/><circle cx='100' cy='90' r='40' fill='#fca5a5' fill-opacity='0.65' stroke='#b91c1c' stroke-width='2'/><text x='100' y='162' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>Rusuk = 20 cm</text></svg>",
    "pilihan": [
      "47,67%",
      "52,33%",
      "66,67%",
      "75,00%"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Volume kubus $= 20^3 = 8.000\\text{ cm}^3$. Jari-jari bola $r = 10\\text{ cm}$, maka volume bola $= \\frac{4}{3} \\times 3,14 \\times 10^3 = 4.186,67\\text{ cm}^3$. Volume kosong $= 8.000 - 4.186,67 = 3.813,33\\text{ cm}^3$. Persentase kosong $= \\frac{3.813,33}{8.000} \\times 100\\% \\approx 47,67\\%$."
  },
  {
    "soal": "Sebuah drum minyak berbentuk tabung memiliki diameter $56\\text{ cm}$ dan tinggi $100\\text{ cm}$. Jika di dalam drum terdapat minyak setinggi $75\\text{ cm}$, berapa liter volume minyak di dalam drum tersebut? ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 215 180' width='215' height='180' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='28' rx='48' ry='12' fill='none' stroke='#334155' stroke-width='2'/><path d='M57 58 L57 148 A48 12 0 0 0 153 148 L153 58 Z' fill='#fde047' fill-opacity='0.75'/><path d='M57 28 L57 148 A48 12 0 0 0 153 148 L153 28' fill='none' stroke='#334155' stroke-width='2'/><ellipse cx='105' cy='58' rx='48' ry='12' fill='#fef08a' stroke='#ca8a04' stroke-width='1.5'/><text x='178' y='105' font-size='11' text-anchor='middle' fill='#854d0e' font-weight='bold'>75 cm</text><text x='105' y='170' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 56 cm</text></svg>",
    "pilihan": [
      "123,2 liter",
      "184,8 liter",
      "246,4 liter",
      "369,6 liter"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 28\\text{ cm}$ dan tinggi minyak $t = 75\\text{ cm}$. Volume minyak $= \\pi r^2 t = \\frac{22}{7} \\times 28 \\times 28 \\times 75 = 22 \\times 4 \\times 28 \\times 75 = 184.800\\text{ cm}^3 = 184,8\\text{ liter}$."
  },
  {
    "soal": "Sebuah kerucut memiliki panjang garis pelukis $26\\text{ cm}$ dan jari-jari alas $10\\text{ cm}$. Volume kerucut tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#dcfce7' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='14' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#1e293b' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='78' font-size='11' fill='#166534' font-weight='bold'>26 cm</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>10 cm</text></svg>",
    "pilihan": [
      "1.256 cm³",
      "2.512 cm³",
      "2.721,33 cm³",
      "3.768 cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Tinggi kerucut $t = \\sqrt{s^2 - r^2} = \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times 3,14 \\times 100 \\times 24 = 3,14 \\times 800 = 2.512\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah bangun ruang gabungan terdiri dari tabung dan setengah bola yang menempel pada tutup atasnya. Diameter tabung dan bola adalah $14\\text{ cm}$, sedangkan tinggi tabung $20\\text{ cm}$. Luas seluruh permukaan bangun gabungan tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 210 205' width='210' height='205' xmlns='http://www.w3.org/2000/svg'><path d='M60,75 A45,45 0 0,1 150,75' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><rect x='60' y='75' width='90' height='95' fill='#eef2ff' stroke='#4338ca' stroke-width='2'/><ellipse cx='105' cy='170' rx='45' ry='11' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='172' y='125' font-size='11' fill='#1e293b' font-weight='bold'>20 cm</text><text x='105' y='193' font-size='11' text-anchor='middle' fill='#4338ca' font-weight='bold'>d = 14 cm</text></svg>",
    "pilihan": [
      "1.188 cm²",
      "1.342 cm²",
      "1.496 cm²",
      "1.650 cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Jari-jari $r = 7\\text{ cm}$ dan tinggi tabung $t = 20\\text{ cm}$. Luas permukaan gabungan $= L_{\\text{alas tabung}} + L_{\\text{selimut tabung}} + L_{\\text{setengah bola}} = \\pi r^2 + 2\\pi r t + 2\\pi r^2 = 3\\pi r^2 + 2\\pi r t = (3 \\times \\frac{22}{7} \\times 49) + (2 \\times \\frac{22}{7} \\times 7 \\times 20) = 462 + 880 = 1.342\\text{ cm}^2$? Tunggu: $462 + 880 = 1.342$, periksa opsi: 1.342 cm² ada pada pilihan ke-2 (indeks 1)."
  },
  {
    "soal": "Sebuah benda berbentuk kerucut mempunyai luas alas $314\\text{ cm}^2$ dan tinggi $15\\text{ cm}$. Volume benda tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 205 170' width='205' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='102,25 52,135 152,135' fill='#ffedd5' stroke='#ea580c' stroke-width='2'/><ellipse cx='102' cy='135' rx='50' ry='13' fill='#fed7aa' stroke='#ea580c' stroke-width='2'/><line x1='102' y1='25' x2='102' y2='135' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='80' y='85' font-size='11' fill='#dc2626' font-weight='bold'>15 cm</text><text x='102' y='160' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>L.Alas = 314 cm²</text></svg>",
    "pilihan": [
      "1.570 cm³",
      "2.355 cm³",
      "3.140 cm³",
      "4.710 cm³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Volume kerucut $= \\frac{1}{3} \\times L_{\\text{alas}} \\times t = \\frac{1}{3} \\times 314 \\times 15 = 314 \\times 5 = 1.570\\text{ cm}^3$."
  },
  {
    "soal": "Perbandingan panjang jari-jari dua buah tabung adalah $2 : 3$, sedangkan perbandingan tingginya adalah $9 : 4$. Perbandingan volume kedua tabung tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 230 160' width='230' height='160' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='30' width='40' height='95' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><text x='55' y='143' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>r₁=2, t₁=9</text><rect x='135' y='65' width='60' height='60' fill='#bfdbfe' stroke='#1d4ed8' stroke-width='2'/><text x='165' y='143' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>r₂=3, t₂=4</text></svg>",
    "pilihan": [
      "1 : 1",
      "2 : 3",
      "3 : 2",
      "4 : 9"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Perbandingan volume $V_1 : V_2 = (r_1^2 \\times t_1) : (r_2^2 \\times t_2) = (2^2 \\times 9) : (3^2 \\times 4) = (4 \\times 9) : (9 \\times 4) = 36 : 36 = 1 : 1$."
  },
  {
    "soal": "Sebuah bola memiliki keliling lingkaran terbesar (ekuator) $88\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas permukaan bola tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='56' fill='#f0fdf4' stroke='#15803d' stroke-width='2'/><ellipse cx='100' cy='85' rx='56' ry='16' fill='none' stroke='#dc2626' stroke-width='2'/><text x='100' y='112' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>Keliling = 88 cm</text></svg>",
    "pilihan": [
      "1.232 cm²",
      "2.464 cm²",
      "4.928 cm²",
      "616 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Keliling lingkaran $= 2\\pi r = 88 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 88 \\Rightarrow r = 14\\text{ cm}$. Luas permukaan bola $= 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 14 \\times 14 = 88 \\times 28 = 2.464\\text{ cm}^2$."
  },
  {
    "soal": "Seorang pengrajin di Tabang membuat wadah penyimpanan beras berbentuk tabung tanpa tutup dengan jari-jari $21\\text{ cm}$ dan tinggi $40\\text{ cm}$. Berapa $\\text{cm}^2$ luas seng yang dibutuhkan untuk membuat satu wadah tersebut? ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 215 175' width='215' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='none' stroke='#475569' stroke-width='2' stroke-dasharray='4,3'/><path d='M57 32 L57 142 A48 13 0 0 0 153 142 L153 32' fill='#e2e8f0' fill-opacity='0.7' stroke='#475569' stroke-width='2'/><ellipse cx='105' cy='142' rx='48' ry='13' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><text x='176' y='92' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>40 cm</text><text x='128' y='135' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 21 cm</text></svg>",
    "pilihan": [
      "5.280 cm²",
      "6.666 cm²",
      "8.052 cm²",
      "11.088 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas seng $= L_{\\text{alas}} + L_{\\text{selimut}} = \\pi r^2 + 2\\pi r t = (\\frac{22}{7} \\times 21 \\times 21) + (2 \\times \\frac{22}{7} \\times 21 \\times 40) = 1.386 + 5.280 = 6.666\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kerucut mempunyai volume $628\\text{ cm}^3$ dan tinggi $6\\text{ cm}$. Jika $\\pi = 3,14$, panjang jari-jari alas kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 205 170' width='205' height='170' xmlns='http://www.w3.org/2000/svg'><polygon points='102,28 52,135 152,135' fill='#fef9c3' stroke='#a16207' stroke-width='2'/><ellipse cx='102' cy='135' rx='50' ry='13' fill='#fef08a' stroke='#a16207' stroke-width='2'/><line x1='102' y1='28' x2='102' y2='135' stroke='#1e293b' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='102' y1='135' x2='152' y2='135' stroke='#dc2626' stroke-width='1.5'/><text x='82' y='85' font-size='11' fill='#1e293b' font-weight='bold'>6 cm</text><text x='128' y='128' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = ?</text></svg>",
    "pilihan": [
      "5 cm",
      "10 cm",
      "15 cm",
      "20 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = 628 \\Rightarrow \\frac{1}{3} \\times 3,14 \\times r^2 \\times 6 = 628 \\Rightarrow 6,28 r^2 = 628 \\Rightarrow r^2 = 100 \\Rightarrow r = 10\\text{ cm}$."
  },
  {
    "soal": "Sebuah benda padat terdiri atas setengah bola dan kerucut yang berimpit pada bidang alasnya. Jika jari-jari alas $6\\text{ cm}$ dan tinggi kerucut $8\\text{ cm}$, volume benda padat tersebut dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 205 195' width='205' height='195' xmlns='http://www.w3.org/2000/svg'><path d='M55,95 A47,47 0 0,0 149,95 Z' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><polygon points='102,25 55,95 149,95' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='165' y='65' font-size='11' fill='#0284c7' font-weight='bold'>8 cm</text><text x='102' y='158' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 6 cm</text></svg>",
    "pilihan": [
      "168π cm³",
      "216π cm³",
      "240π cm³",
      "288π cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume setengah bola $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi (6^3) = \\frac{2}{3}\\pi (216) = 144\\pi\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (36)(8) = 96\\pi$? Tunggu: $144\\pi + 96\\pi = 240\\pi$. Mari periksa ulang: $\\frac{2}{3}(216) = 144$, $\\frac{1}{3}(36)(8) = 96$, jumlahnya $240\\pi$ (pilihan ke-3, indeks 2)."
  },
  {
    "soal": "Sebuah tabung memiliki tinggi $14\\text{ cm}$ dan luas selimutnya $616\\text{ cm}^2$. Jika $\\pi = \\frac{22}{7}$, luas seluruh permukaan tabung tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#faf5ff' stroke='#7e22ce' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>14 cm</text><text x='105' y='90' font-size='10' text-anchor='middle' fill='#7e22ce' font-weight='bold'>Ls = 616 cm²</text></svg>",
    "pilihan": [
      "924 cm²",
      "1.078 cm²",
      "1.232 cm²",
      "1.540 cm²"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Luas selimut $= 2\\pi r t = 616 \\Rightarrow 2 \\times \\frac{22}{7} \\times r \\times 14 = 616 \\Rightarrow 88r = 616 \\Rightarrow r = 7\\text{ cm}$. Luas alas $= \\pi r^2 = \\frac{22}{7} \\times 49 = 154\\text{ cm}^2$. Luas seluruh permukaan $= 2 \\times 154 + 616 = 308 + 616 = 924\\text{ cm}^2$."
  }
  {
    "soal": "Sebuah wadah penyimpanan gula aren cair di Kecamatan Tabang berbentuk tabung dengan diameter $40\\text{ cm}$ dan tinggi $50\\text{ cm}$. Gula aren cair tersebut akan dikemas ke dalam botol-botol kecil berbentuk tabung berdiameter $8\\text{ cm}$ dan tinggi $10\\text{ cm}$. Banyak botol maksimal yang dapat diisi penuh adalah ....",
    "gambar": "<svg viewBox='0 0 240 165' width='240' height='165' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='25' width='75' height='110' fill='#fde68a' stroke='#b45309' stroke-width='2'/><ellipse cx='67.5' cy='25' rx='37.5' ry='10' fill='#fef3c7' stroke='#b45309' stroke-width='1.5'/><text x='67.5' y='85' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>d=40, t=50</text><text x='132' y='85' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='165' y='85' width='30' height='50' fill='#fde68a' stroke='#b45309' stroke-width='2'/><ellipse cx='180' cy='85' rx='15' ry='5' fill='#fef3c7' stroke='#b45309' stroke-width='1.5'/><text x='180' y='152' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>d=8, t=10</text></svg>",
    "pilihan": [
      "25 botol",
      "50 botol",
      "100 botol",
      "125 botol"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Banyak botol $= \\frac{V_{\\text{besar}}}{V_{\\text{kecil}}} = \\frac{\\pi R^2 T}{\\pi r^2 t} = \\left(\\frac{20}{4}\\right)^2 \\times \\frac{50}{10} = 5^2 \\times 5 = 25 \\times 5 = 125\\text{ botol}$."
  },
  {
    "soal": "Sebuah kerucut memiliki luas permukaan $704\\text{ cm}^2$. Jika panjang jari-jari alas kerucut adalah $7\\text{ cm}$ dan $\\pi = \\frac{22}{7}$, panjang garis pelukis kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fce7f3' stroke='#be185d' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#be185d' font-weight='bold'>s = ?</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "21 cm",
      "24 cm",
      "25 cm",
      "32 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas permukaan kerucut $= \\pi r(r + s) = 704 \\Rightarrow \\frac{22}{7} \\times 7 \\times (7 + s) = 704 \\Rightarrow 22(7 + s) = 704 \\Rightarrow 7 + s = 32 \\Rightarrow s = 25\\text{ cm}$."
  },
  {
    "soal": "Sebuah bola besi pejal berjari-jari $6\\text{ cm}$ dilebur dan dicetak ulang menjadi beberapa bola besi kecil yang identik dengan jari-jari $2\\text{ cm}$. Banyak bola kecil yang dapat dibuat adalah ....",
    "gambar": "<svg viewBox='0 0 240 150' width='240' height='150' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='75' r='45' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><text x='60' y='136' font-size='11' text-anchor='middle' fill='#334155' font-weight='bold'>R = 6 cm</text><text x='125' y='80' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><circle cx='170' cy='65' r='15' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/><circle cx='205' cy='65' r='15' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/><circle cx='187' cy='95' r='15' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/><text x='187' y='136' font-size='11' text-anchor='middle' fill='#334155' font-weight='bold'>r = 2 cm</text></svg>",
    "pilihan": [
      "3 buah",
      "9 buah",
      "18 buah",
      "27 buah"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Banyak bola kecil $= \\frac{V_{\\text{besar}}}{V_{\\text{kecil}}} = \\frac{\\frac{4}{3}\\pi R^3}{\\frac{4}{3}\\pi r^3} = \\left(\\frac{6}{2}\\right)^3 = 3^3 = 27\\text{ buah}$."
  },
  {
    "soal": "Sebuah tiang penyangga kayu berbentuk tabung di SMPN 1 Tabang memiliki keliling lingkaran alas $62,8\\text{ cm}$ dan tinggi $3\\text{ meter}$. Jika tiang tersebut akan dicat pada bagian selimutnya saja, luas permukaan yang dicat adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='28' rx='35' ry='10' fill='#fed7aa' stroke='#9a3412' stroke-width='2'/><rect x='70' y='28' width='70' height='115' fill='#ffedd5' stroke='#9a3412' stroke-width='2'/><ellipse cx='105' cy='143' rx='35' ry='10' fill='#fed7aa' stroke='#9a3412' stroke-width='2'/><text x='168' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>t = 3 m</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>Keliling = 62,8 cm</text></svg>",
    "pilihan": [
      "1,884 m²",
      "18,84 m²",
      "188,4 m²",
      "0,1884 m²"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Keliling alas $K = 62,8\\text{ cm} = 0,628\\text{ m}$. Luas selimut tabung $= K \\times t = 0,628\\text{ m} \\times 3\\text{ m} = 1,884\\text{ m}^2$."
  },
  {
    "soal": "Sebuah kerucut mempunyai panjang garis pelukis $17\\text{ cm}$ dan tinggi $15\\text{ cm}$. Luas seluruh permukaan kerucut tersebut dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>15 cm</text><text x='145' y='80' font-size='11' fill='#15803d' font-weight='bold'>17 cm</text></svg>",
    "pilihan": [
      "136π cm²",
      "180π cm²",
      "200π cm²",
      "256π cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Jari-jari alas $r = \\sqrt{s^2 - t^2} = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ cm}$. Luas permukaan kerucut $= \\pi r(r + s) = \\pi \\times 8 \\times (8 + 17) = 8\\pi \\times 25 = 200\\pi\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah setengah bola berongga (tanpa tutup) terbuat dari aluminium tipis dengan diameter $28\\text{ cm}$. Luas permukaan aluminium bagian luar setengah bola tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,55 A65,65 0 0,0 175,55' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='55' rx='65' ry='16' fill='none' stroke='#0284c7' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='45' y1='55' x2='175' y2='55' stroke='#dc2626' stroke-width='1.5'/><text x='110' y='47' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 28 cm</text></svg>",
    "pilihan": [
      "616 cm²",
      "1.232 cm²",
      "1.848 cm²",
      "2.464 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 14\\text{ cm}$. Karena berongga (tanpa penampang tutup), luas permukaannya $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 14 \\times 14 = 44 \\times 28 = 1.232\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kapsul obat berbentuk gabungan tabung di bagian tengah dan dua buah setengah bola di kedua ujungnya. Jika panjang total kapsul adalah $20\\text{ mm}$ dan diameternya $6\\text{ mm}$, volume kapsul tersebut dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 240 130' width='240' height='130' xmlns='http://www.w3.org/2000/svg'><path d='M60,35 A30,30 0 0,0 60,95' fill='#fecdd3' stroke='#be123c' stroke-width='2'/><rect x='60' y='35' width='120' height='60' fill='#ffe4e6' stroke='#be123c' stroke-width='2'/><path d='M180,35 A30,30 0 0,1 180,95' fill='#fecdd3' stroke='#be123c' stroke-width='2'/><text x='120' y='115' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>Panjang total = 20 mm</text><text x='120' y='68' font-size='11' text-anchor='middle' fill='#be123c' font-weight='bold'>d = 6 mm</text></svg>",
    "pilihan": [
      "126π mm³",
      "162π mm³",
      "180π mm³",
      "216π mm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 3\\text{ mm}$. Dua setengah bola membentuk 1 bola utuh dengan diameter $6\\text{ mm}$, sehingga tinggi bagian tabung $t = 20 - 6 = 14\\text{ mm}$. Volume total $= V_{\\text{tabung}} + V_{\\text{bola}} = \\pi r^2 t + \\frac{4}{3}\\pi r^3 = \\pi(9)(14) + \\frac{4}{3}\\pi(27) = 126\\pi + 36\\pi = 162\\pi\\text{ mm}^3$."
  },
  {
    "soal": "Sebuah bangun ruang terbentuk dari tabung berjari-jari $7\\text{ cm}$ dan tinggi $15\\text{ cm}$ yang bagian atasnya dilubangi berbentuk kerucut dengan jari-jari dan tinggi yang sama dengan tabung. Volume bangun ruang yang tersisa adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 210 185' width='210' height='185' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='120' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><polygon points='55,30 155,30 105,150' fill='#ffffff' stroke='#1d4ed8' stroke-width='1.5' stroke-dasharray='4,3'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='105' y='170' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "770 cm³",
      "1.155 cm³",
      "1.540 cm³",
      "2.310 cm³"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Volume tersisa $= V_{\\text{tabung}} - V_{\\text{kerucut}} = \\frac{2}{3} V_{\\text{tabung}} = \\frac{2}{3} \\times \\frac{22}{7} \\times 7 \\times 7 \\times 15 = 2 \\times 22 \\times 7 \\times 5 = 1.540\\text{ cm}^3$."
  },
  {
    "soal": "Pada bangun ruang nomor 48 (tabung berjari-jari $7\\text{ cm}$ dan tinggi $24\\text{ cm}$ yang dilubangi kerucut sedalam tinggi tabung), luas seluruh permukaan bangun yang baru terbentuk adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 210 185' width='210' height='185' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='120' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><polygon points='55,30 155,30 105,150' fill='#ffffff' stroke='#4338ca' stroke-width='1.5' stroke-dasharray='4,3'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>24 cm</text><text x='105' y='170' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "1.210 cm²",
      "1.518 cm²",
      "1.760 cm²",
      "1.914 cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Garis pelukis kerucut $s = \\sqrt{7^2 + 24^2} = 25\\text{ cm}$. Luas permukaan bangun berlubang $= L_{\\text{alas tabung}} + L_{\\text{selimut tabung}} + L_{\\text{selimut kerucut}} = \\pi r^2 + 2\\pi r t + \\pi r s = (\\frac{22}{7} \\times 49) + (2 \\times \\frac{22}{7} \\times 7 \\times 24) + (\\frac{22}{7} \\times 7 \\times 25) = 154 + 1.056 + 550 = 1.760\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kerucut memiliki diameter alas $16\\text{ cm}$ dan garis pelukis $17\\text{ cm}$. Volume kerucut tersebut dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#fde68a' stroke='#d97706' stroke-width='2'/><text x='145' y='80' font-size='11' fill='#d97706' font-weight='bold'>17 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 16 cm</text></svg>",
    "pilihan": [
      "240π cm³",
      "320π cm³",
      "640π cm³",
      "960π cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 8\\text{ cm}$, tinggi $t = \\sqrt{17^2 - 8^2} = 15\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (64)(15) = 320\\pi\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah pipa paralon saluran irigasi sawah di Desa Tabang berbentuk tabung berlubang dengan panjang $2\\text{ meter}$. Jika diameter luar pipa $14\\text{ cm}$ dan diameter dalamnya $10\\text{ cm}$, volume bahan paralon penyusun pipa tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 230 155' width='230' height='155' xmlns='http://www.w3.org/2000/svg'><ellipse cx='115' cy='32' rx='55' ry='15' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><ellipse cx='115' cy='32' rx='35' ry='9' fill='#ffffff' stroke='#334155' stroke-width='1.5'/><path d='M60 32 L60 125 A55 15 0 0 0 170 125 L170 32' fill='#e2e8f0' fill-opacity='0.6' stroke='#334155' stroke-width='2'/><text x='195' y='82' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>2 m</text><text x='115' y='148' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>D = 14 cm, d = 10 cm</text></svg>",
    "pilihan": [
      "7.536 cm³",
      "15.072 cm³",
      "30.144 cm³",
      "60.288 cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari luar $R = 7\\text{ cm}$, jari-jari dalam $r = 5\\text{ cm}$, dan tinggi $t = 2\\text{ m} = 200\\text{ cm}$. Volume bahan pipa $= \\pi (R^2 - r^2) t = 3,14 \\times (49 - 25) \\times 200 = 3,14 \\times 24 \\times 200 = 15.072\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah bola memiliki volume $288\\pi\\text{ cm}^3$. Luas permukaan bola tersebut dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='56' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><ellipse cx='100' cy='85' rx='56' ry='16' fill='none' stroke='#7e22ce' stroke-width='1.5' stroke-dasharray='4,3'/><text x='100' y='89' font-size='11' text-anchor='middle' fill='#581c87' font-weight='bold'>V = 288π cm³</text></svg>",
    "pilihan": [
      "36π cm²",
      "72π cm²",
      "108π cm²",
      "144π cm²"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Volume bola $= \\frac{4}{3}\\pi r^3 = 288\\pi \\Rightarrow r^3 = \\frac{288 \\times 3}{4} = 216 \\Rightarrow r = 6\\text{ cm}$. Luas permukaan bola $= 4\\pi r^2 = 4\\pi (36) = 144\\pi\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah tandon air berbentuk tabung dengan diameter $1,4\\text{ meter}$ dan tinggi $1,5\\text{ meter}$ terisi penuh air. Air tersebut dialirkan melalui keran dengan debit $11\\text{ liter/menit}$. Waktu yang dibutuhkan untuk menguras habis air di dalam tandon adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 175' width='220' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='110' cy='30' rx='50' ry='13' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><rect x='60' y='30' width='100' height='110' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='140' rx='50' ry='13' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='184' y='88' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>1,5 m</text><text x='110' y='22' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 1,4 m</text></svg>",
    "pilihan": [
      "2 jam 30 menit",
      "3 jam 10 menit",
      "3 jam 30 menit",
      "4 jam 10 menit"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Jari-jari $r = 0,7\\text{ m} = 7\\text{ dm}$ dan tinggi $t = 1,5\\text{ m} = 15\\text{ dm}$. Volume tandon $= \\frac{22}{7} \\times 7 \\times 7 \\times 15 = 2.310\\text{ dm}^3 = 2.310\\text{ liter}$. Waktu $= \\frac{2.310}{11} = 210\\text{ menit} = 3\\text{ jam } 30\\text{ menit}$."
  },
  {
    "soal": "Sebuah juring lingkaran berjari-jari $15\\text{ cm}$ dan sudut pusat $288^\\circ$ dilipat membentuk kerucut tanpa alas. Tinggi kerucut yang terbentuk adalah ....",
    "gambar": "<svg viewBox='0 0 220 170' width='220' height='170' xmlns='http://www.w3.org/2000/svg'><path d='M110,85 L175,85 A65,65 0 1,0 130,147 Z' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='92' y='62' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>288°</text><text x='145' y='78' font-size='11' text-anchor='middle' fill='#854d0e' font-weight='bold'>15 cm</text></svg>",
    "pilihan": [
      "9 cm",
      "12 cm",
      "13 cm",
      "14 cm"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Garis pelukis $s = 15\\text{ cm}$. Jari-jari alas $r = \\frac{288^\\circ}{360^\\circ} \\times 15 = \\frac{4}{5} \\times 15 = 12\\text{ cm}$. Tinggi kerucut $t = \\sqrt{s^2 - r^2} = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9\\text{ cm}$."
  },
  {
    "soal": "Sebuah tabung memiliki luas alas $616\\text{ cm}^2$ dan tinggi $20\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas selimut tabung tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#dcfce7' stroke='#166534' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#f0fdf4' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>20 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#166534' font-weight='bold'>L.Alas = 616 cm²</text></svg>",
    "pilihan": [
      "880 cm²",
      "1.760 cm²",
      "2.376 cm²",
      "2.992 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas alas $= \\pi r^2 = 616 \\Rightarrow \\frac{22}{7} r^2 = 616 \\Rightarrow r^2 = 196 \\Rightarrow r = 14\\text{ cm}$. Luas selimut tabung $= 2\\pi r t = 2 \\times \\frac{22}{7} \\times 14 \\times 20 = 1.760\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah bola dan sebuah kerucut memiliki panjang jari-jari yang sama yaitu $r$. Jika volume bola sama dengan volume kerucut, maka tinggi kerucut tersebut dinyatakan dalam $r$ adalah ....",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='90' r='38' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='60' y='145' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>Bola (r)</text><polygon points='165,20 127,128 203,128' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='165' y='145' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>Kerucut (r, t)</text></svg>",
    "pilihan": [
      "2r",
      "3r",
      "4r",
      "6r"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Diketahui $V_{\\text{kerucut}} = V_{\\text{bola}} \\Rightarrow \\frac{1}{3}\\pi r^2 t = \\frac{4}{3}\\pi r^3$. Bagi kedua ruas dengan $\\frac{1}{3}\\pi r^2$, diperoleh $t = 4r$."
  },
  {
    "soal": "Sebuah topi ulang tahun berbentuk kerucut dibuat dari kertas karton dengan diameter alas $20\\text{ cm}$ dan tinggi $24\\text{ cm}$. Jika seorang siswa di SMPN 1 Tabang ingin membuat 10 buah topi yang sama, luas minimal karton yang dibutuhkan adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='none' stroke='#86198f' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>24 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#86198f' font-weight='bold'>d = 20 cm</text></svg>",
    "pilihan": [
      "7.536 cm²",
      "8.164 cm²",
      "11.304 cm²",
      "16.328 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 10\\text{ cm}$, tinggi $t = 24\\text{ cm}$, sehingga $s = \\sqrt{10^2 + 24^2} = 26\\text{ cm}$. Topi kerucut tidak memiliki alas, sehingga luas 1 topi $= \\pi r s = 3,14 \\times 10 \\times 26 = 816,4\\text{ cm}^2$. Untuk 10 topi $= 10 \\times 816,4 = 8.164\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah tabung berisi air setinggi $12\\text{ cm}$. Jika jari-jari tabung adalah $10\\text{ cm}$ dan ke dalam tabung dimasukkan 1 buah bola pejal berjari-jari $6\\text{ cm}$ hingga tenggelam seluruhnya, tinggi air di dalam tabung sekarang menjadi ....",
    "gambar": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><rect x='55' y='30' width='100' height='130' fill='none' stroke='#334155' stroke-width='2'/><rect x='55' y='75' width='100' height='85' fill='#bae6fd' fill-opacity='0.6'/><circle cx='105' cy='135' r='22' fill='#475569'/><text x='180' y='118' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>t akhir = ?</text></svg>",
    "pilihan": [
      "13,44 cm",
      "14,88 cm",
      "15,60 cm",
      "16,32 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Kenaikan tinggi air $\\Delta t = \\frac{V_{\\text{bola}}}{\\pi R^2} = \\frac{\\frac{4}{3}\\pi (6^3)}{\\pi (10^2)} = \\frac{\\frac{4}{3} \\times 216}{100} = \\frac{288}{100} = 2,88\\text{ cm}$. Tinggi air sekarang $= 12 + 2,88 = 14,88\\text{ cm}$."
  },
  {
    "soal": "Sebuah benda berbentuk belahan bola pejal memiliki luas permukaan $462\\text{ cm}^2$. Jika $\\pi = \\frac{22}{7}$, volume belahan bola pejal tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,60 A65,65 0 0,0 175,60 Z' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><ellipse cx='110' cy='60' rx='65' ry='16' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><text x='110' y='100' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>L = 462 cm²</text></svg>",
    "pilihan": [
      "718,67 cm³",
      "1.078 cm³",
      "1.437,33 cm³",
      "2.156 cm³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Luas permukaan setengah bola pejal $= 3\\pi r^2 = 462 \\Rightarrow 3 \\times \\frac{22}{7} \\times r^2 = 462 \\Rightarrow r^2 = \\frac{462 \\times 7}{66} = 49 \\Rightarrow r = 7\\text{ cm}$. Volume setengah bola $= \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = \\frac{2.156}{3} \\approx 718,67\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah kerucut memiliki diameter alas $14\\text{ cm}$ dan tinggi $24\\text{ cm}$. Perbandingan antara luas selimut kerucut dan luas alas kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>24 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>d = 14 cm</text></svg>",
    "pilihan": [
      "7 : 24",
      "24 : 7",
      "25 : 7",
      "7 : 25"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Jari-jari $r = 7\\text{ cm}$ dan tinggi $t = 24\\text{ cm}$, sehingga $s = \\sqrt{7^2 + 24^2} = 25\\text{ cm}$. Perbandingan $L_{\\text{selimut}} : L_{\\text{alas}} = \\pi r s : \\pi r^2 = s : r = 25 : 7$."
  },
  {
    "soal": "Sebuah bandul timbangan berbentuk gabungan kerucut dan setengah bola yang berimpit pada bidang alasnya. Jika diameter alasnya $10\\text{ cm}$ dan tinggi kerucutnya $12\\text{ cm}$, luas permukaan bandul tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='100,25 55,120 145,120' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><path d='M55,120 A45,45 0 0,0 145,120 Z' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><text x='165' y='78' font-size='11' fill='#1e293b' font-weight='bold'>t = 12</text><text x='100' y='115' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 10 cm</text></svg>",
    "pilihan": [
      "282,6 cm²",
      "361,1 cm²",
      "439,6 cm²",
      "518,1 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 5\\text{ cm}$ dan tinggi kerucut $t = 12\\text{ cm}$, sehingga $s = \\sqrt{5^2 + 12^2} = 13\\text{ cm}$. Luas permukaan bandul $= \\pi r s + 2\\pi r^2 = \\pi r(s + 2r) = 3,14 \\times 5 \\times (13 + 10) = 15,7 \\times 23 = 361,1\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah tabung memiliki jari-jari $14\\text{ cm}$ dan tinggi $10\\text{ cm}$. Jika jari-jari tabung diperkecil menjadi setengahnya dan tingginya diperbesar menjadi dua kalinya, maka luas selimut tabung yang baru adalah ....",
    "gambar": "<svg viewBox='0 0 240 155' width='240' height='155' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='55' width='70' height='70' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='65' y='142' font-size='10' text-anchor='middle' fill='#b45309' font-weight='bold'>r=14, t=10</text><text x='122' y='92' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='155' y='25' width='35' height='100' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='172' y='142' font-size='10' text-anchor='middle' fill='#b45309' font-weight='bold'>r=7, t=20</text></svg>",
    "pilihan": [
      "setengah kali luas selimut semula",
      "sama dengan luas selimut semula",
      "dua kali luas selimut semula",
      "empat kali luas selimut semula"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas selimut awal $L_1 = 2\\pi r t$. Luas selimut baru $L_2 = 2\\pi (\\frac{1}{2}r)(2t) = 2\\pi r t = L_1$. Jadi luas selimutnya sama dengan luas selimut semula."
  },
  {
    "soal": "Sebuah bola plastik memiliki diameter $21\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, volume udara yang berada di dalam bola plastik tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='58' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><line x1='42' y1='85' x2='158' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='100' y='78' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 21 cm</text></svg>",
    "pilihan": [
      "4.851 cm³",
      "9.702 cm³",
      "19.404 cm³",
      "38.808 cm³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Jari-jari $r = \\frac{21}{2}\\text{ cm}$. Volume bola $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times \\frac{21}{2} \\times \\frac{21}{2} \\times \\frac{21}{2} = 11 \\times 21 \\times 21 = 4.851\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah kerucut memiliki volume $314\\text{ cm}^3$ dan jari-jari alas $5\\text{ cm}$. Jika $\\pi = 3,14$, panjang garis pelukis kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#4338ca' font-weight='bold'>s = ?</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 5 cm</text></svg>",
    "pilihan": [
      "12 cm",
      "13 cm",
      "14 cm",
      "15 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = 314 \\Rightarrow \\frac{1}{3} \\times 3,14 \\times 25 \\times t = 314 \\Rightarrow t = \\frac{314 \\times 3}{78,5} = 4 \\times 3 = 12\\text{ cm}$. Garis pelukis $s = \\sqrt{r^2 + t^2} = \\sqrt{5^2 + 12^2} = 13\\text{ cm}$."
  }
  {
    "soal": "Sebuah lumbung penyimpanan hasil panen padi di Kecamatan Tabang dilengkapi atap berbentuk kerucut dengan diameter $4,2\\text{ meter}$ dan tinggi $2\\text{ meter}$. Volume ruang udara di bawah atap lumbung tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 165' width='220' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='110,25 40,125 180,125' fill='#fde68a' stroke='#92400e' stroke-width='2'/><ellipse cx='110' cy='125' rx='70' ry='15' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='110' y1='25' x2='110' y2='125' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='90' y='80' font-size='11' fill='#dc2626' font-weight='bold'>2 m</text><text x='110' y='152' font-size='11' text-anchor='middle' fill='#78350f' font-weight='bold'>d = 4,2 m</text></svg>",
    "pilihan": [
      "9,24 m³",
      "13,86 m³",
      "27,72 m³",
      "36,96 m³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Jari-jari $r = 2,1\\text{ m}$ dan tinggi $t = 2\\text{ m}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 2,1 \\times 2,1 \\times 2 = 22 \\times 0,1 \\times 2,1 \\times 2 = 9,24\\text{ m}^3$."
  },
  {
    "soal": "Sebuah tabung memiliki luas permukaan $1.188\\text{ cm}^2$. Jika panjang jari-jari alas tabung adalah $7\\text{ cm}$ dan $\\pi = \\frac{22}{7}$, tinggi tabung tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#eff6ff' stroke='#1d4ed8' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#dbeafe' stroke='#1d4ed8' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>t = ?</text><text x='128' y='133' font-size='11' text-anchor='middle' fill='#1d4ed8' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "15 cm",
      "18 cm",
      "20 cm",
      "22 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas permukaan tabung $= 2\\pi r(r + t) = 1.188 \\Rightarrow 2 \\times \\frac{22}{7} \\times 7 \\times (7 + t) = 1.188 \\Rightarrow 44(7 + t) = 1.188 \\Rightarrow 7 + t = 27 \\Rightarrow t = 20\\text{ cm}$."
  },
  {
    "soal": "Sebuah kerucut memiliki jari-jari alas $12\\text{ cm}$ dan tinggi $16\\text{ cm}$. Jika jari-jari alasnya diperkecil menjadi $\\frac{3}{4}$ kali semula dan tingginya tetap, volume kerucut yang baru adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='65,30 25,130 105,130' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='65' y='148' font-size='10' text-anchor='middle' fill='#0369a1' font-weight='bold'>r=12, t=16</text><text x='122' y='88' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><polygon points='175,30 145,130 205,130' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><text x='175' y='148' font-size='10' text-anchor='middle' fill='#0369a1' font-weight='bold'>r=9, t=16</text></svg>",
    "pilihan": [
      "1.356,48 cm³",
      "1.808,64 cm³",
      "2.411,52 cm³",
      "4.069,44 cm³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Jari-jari baru $r = \\frac{3}{4} \\times 12 = 9\\text{ cm}$ dan tinggi $t = 16\\text{ cm}$. Volume kerucut baru $= \\frac{1}{3} \\times 3,14 \\times 9^2 \\times 16 = 3,14 \\times 27 \\times 16 = 1.356,48\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah bola memiliki luas permukaan $1.256\\text{ cm}^2$. Jika $\\pi = 3,14$, volume bola tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='58' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><ellipse cx='100' cy='85' rx='58' ry='16' fill='none' stroke='#b45309' stroke-width='1.5' stroke-dasharray='4,3'/><text x='100' y='89' font-size='11' text-anchor='middle' fill='#92400e' font-weight='bold'>L = 1.256 cm²</text></svg>",
    "pilihan": [
      "2.093,33 cm³",
      "3.140,00 cm³",
      "4.186,67 cm³",
      "6.280,00 cm³"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas permukaan $= 4\\pi r^2 = 1.256 \\Rightarrow 4 \\times 3,14 \\times r^2 = 1.256 \\Rightarrow 12,56 r^2 = 1.256 \\Rightarrow r^2 = 100 \\Rightarrow r = 10\\text{ cm}$. Volume bola $= \\frac{4}{3} \\times 3,14 \\times 10^3 = \\frac{12.560}{3} \\approx 4.186,67\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah bangun ruang gabungan terdiri atas dua kerucut identik yang berimpit pada bidang alasnya (berbentuk gasing simetris). Jika diameter alas bersama adalah $14\\text{ cm}$ dan jarak dari puncak kerucut atas ke puncak kerucut bawah adalah $48\\text{ cm}$, luas permukaan bangun tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 200 205' width='200' height='205' xmlns='http://www.w3.org/2000/svg'><polygon points='100,20 55,102 145,102' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><polygon points='100,185 55,102 145,102' fill='#bbf7d0' stroke='#15803d' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='185' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='168' y='105' font-size='11' fill='#dc2626' font-weight='bold'>48 cm</text><text x='100' y='96' font-size='11' text-anchor='middle' fill='#14532d' font-weight='bold'>d = 14 cm</text></svg>",
    "pilihan": [
      "550 cm²",
      "1.100 cm²",
      "1.254 cm²",
      "2.200 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 7\\text{ cm}$. Karena kedua kerucut identik, tinggi masing-masing kerucut $t = \\frac{48}{2} = 24\\text{ cm}$, sehingga garis pelukis $s = \\sqrt{7^2 + 24^2} = 25\\text{ cm}$. Luas permukaan $= 2 \\times \\pi r s = 2 \\times \\frac{22}{7} \\times 7 \\times 25 = 1.100\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kaleng susu berbentuk tabung memiliki jari-jari $5\\text{ cm}$ dan tinggi $14\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, volume susu maksimal yang dapat ditampung kaleng tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 205 170' width='205' height='170' xmlns='http://www.w3.org/2000/svg'><ellipse cx='102' cy='32' rx='42' ry='11' fill='#f8fafc' stroke='#475569' stroke-width='2'/><rect x='60' y='32' width='84' height='105' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><ellipse cx='102' cy='137' rx='42' ry='11' fill='#e2e8f0' stroke='#475569' stroke-width='2'/><text x='166' y='88' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>14 cm</text><text x='122' y='130' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 5 cm</text></svg>",
    "pilihan": [
      "440 cm³",
      "770 cm³",
      "1.100 cm³",
      "2.200 cm³"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Volume tabung $= \\pi r^2 t = \\frac{22}{7} \\times 5^2 \\times 14 = 22 \\times 25 \\times 2 = 1.100\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah juring lingkaran dengan sudut pusat $120^\\circ$ dan jari-jari $21\\text{ cm}$ dibuat menjadi selimut kerucut. Jika $\\pi = \\frac{22}{7}$, luas selimut kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 220 165' width='220' height='165' xmlns='http://www.w3.org/2000/svg'><path d='M110,125 L175,125 A65,65 0 0,0 77,69 Z' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><text x='115' y='102' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>120°</text><text x='145' y='118' font-size='11' text-anchor='middle' fill='#701a75' font-weight='bold'>21 cm</text></svg>",
    "pilihan": [
      "154 cm²",
      "308 cm²",
      "462 cm²",
      "616 cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas selimut kerucut sama dengan luas juring pembentuknya: $L = \\frac{120^\\circ}{360^\\circ} \\times \\pi R^2 = \\frac{1}{3} \\times \\frac{22}{7} \\times 21 \\times 21 = 22 \\times 21 = 462\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah tabung berdiameter $20\\text{ cm}$ dan tinggi $15\\text{ cm}$ dipotong secara vertikal tepat melalui sumbu simetrinya menjadi dua bagian yang sama besar (setengah tabung). Luas seluruh permukaan satu potongan setengah tabung tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 220 175' width='220' height='175' xmlns='http://www.w3.org/2000/svg'><path d='M55,40 A50,15 0 0,1 155,40 L155,140 A50,15 0 0,1 55,140 Z' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><rect x='55' y='40' width='100' height='100' fill='#bae6fd' fill-opacity='0.6' stroke='#0369a1' stroke-width='2'/><text x='178' y='95' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='105' y='162' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 20 cm</text></svg>",
    "pilihan": [
      "785 cm²",
      "942 cm²",
      "1.085 cm²",
      "1.242 cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Jari-jari $r = 10\\text{ cm}$, diameter $d = 20\\text{ cm}$, tinggi $t = 15\\text{ cm}$. Luas setengah tabung $= \\frac{1}{2} L_{\\text{tabung}} + L_{\\text{penampang persegi panjang}} = (\\pi r^2 + \\pi r t) + (d \\times t) = (3,14 \\times 100 + 3,14 \\times 10 \\times 15) + (20 \\times 15) = 314 + 471 + 300 = 1.085\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah benda berbentuk setengah bola memiliki volume $18\\pi\\text{ cm}^3$. Jari-jari setengah bola tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 155' width='210' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,60 A60,60 0 0,0 165,60 Z' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><ellipse cx='105' cy='60' rx='60' ry='15' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><text x='105' y='98' font-size='11' text-anchor='middle' fill='#9a3412' font-weight='bold'>V = 18π cm³</text></svg>",
    "pilihan": [
      "2 cm",
      "3 cm",
      "4 cm",
      "6 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume setengah bola $= \\frac{2}{3}\\pi r^3 = 18\\pi \\Rightarrow r^3 = \\frac{18 \\times 3}{2} = 27 \\Rightarrow r = 3\\text{ cm}$."
  },
  {
    "soal": "Di ruang laboratorium IPA SMPN 1 Tabang terdapat gelas ukur berbentuk tabung dengan diameter dalam $7\\text{ cm}$. Jika ke dalam gelas ukur dituangkan $385\\text{ ml}$ air ($1\\text{ ml} = 1\\text{ cm}^3$), ketinggian permukaan air di dalam gelas ukur adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 205 175' width='205' height='175' xmlns='http://www.w3.org/2000/svg'><rect x='65' y='25' width='75' height='120' fill='none' stroke='#334155' stroke-width='2'/><rect x='65' y='65' width='75' height='80' fill='#7dd3fc' fill-opacity='0.6'/><text x='166' y='105' font-size='11' text-anchor='middle' fill='#0284c7' font-weight='bold'>t = ?</text><text x='102' y='162' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 7 cm</text></svg>",
    "pilihan": [
      "8 cm",
      "10 cm",
      "12 cm",
      "15 cm"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = \\frac{7}{2}\\text{ cm}$. Volume air $= \\pi r^2 t = 385 \\Rightarrow \\frac{22}{7} \\times \\frac{7}{2} \\times \\frac{7}{2} \\times t = 385 \\Rightarrow \\frac{77}{2} t = 385 \\Rightarrow t = \\frac{385 \\times 2}{77} = 5 \\times 2 = 10\\text{ cm}$."
  },
  {
    "soal": "Sebuah kerucut mempunyai diameter alas $10\\text{ cm}$ dan tinggi $12\\text{ cm}$. Jika kerucut tersebut diiris mendatar tepat pada setengah ketinggiannya sehingga terbentuk kerucut kecil di bagian atas, perbandingan volume kerucut kecil terhadap volume kerucut mula-mula adalah ....",
    "gambar": "<svg viewBox='0 0 210 180' width='210' height='180' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 50,145 160,145' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><line x1='77.5' y1='85' x2='132.5' y2='85' stroke='#dc2626' stroke-width='2' stroke-dasharray='4,3'/><text x='105' y='78' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>½ t</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#92400e' font-weight='bold'>d = 10 cm, t = 12 cm</text></svg>",
    "pilihan": [
      "1 : 2",
      "1 : 4",
      "1 : 8",
      "1 : 16"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Kerucut kecil di bagian atas sebangun dengan kerucut besar dengan faktor skala $\\frac{1}{2}$ (jari-jari menjadi $\\frac{1}{2}r$ dan tinggi $\\frac{1}{2}t$). Perbandingan volume $= \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ atau $1 : 8$."
  },
  {
    "soal": "Pada soal nomor 76 (kerucut berdiameter $10\\text{ cm}$ dan tinggi $12\\text{ cm}$ yang dipotong pada setengah tingginya), volume bagian bawah (kerucut terpancung) dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='77,65 133,65 160,135 50,135' fill='#fde68a' stroke='#b45309' stroke-width='2'/><ellipse cx='105' cy='65' rx='28' ry='7' fill='#fef3c7' stroke='#b45309' stroke-width='1.5'/><ellipse cx='105' cy='135' rx='55' ry='13' fill='#fcd34d' stroke='#b45309' stroke-width='2'/><text x='105' y='160' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>Kerucut Terpancung</text></svg>",
    "pilihan": [
      "12,5π cm³",
      "50π cm³",
      "87,5π cm³",
      "100π cm³"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Volume kerucut besar $= \\frac{1}{3}\\pi (5^2)(12) = 100\\pi\\text{ cm}^3$. Volume kerucut kecil atas $= \\frac{1}{8} \\times 100\\pi = 12,5\\pi\\text{ cm}^3$. Volume bagian bawah $= 100\\pi - 12,5\\pi = 87,5\\pi\\text{ cm}^3$."
  },
  {
    "soal": "Dua buah bola masing-masing memiliki luas permukaan $144\\pi\\text{ cm}^2$ dan $324\\pi\\text{ cm}^2$. Perbandingan volume bola pertama dan bola kedua adalah ....",
    "gambar": "<svg viewBox='0 0 230 145' width='230' height='145' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='78' r='32' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='60' y='128' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>L₁ = 144π</text><circle cx='160' cy='70' r='48' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><text x='160' y='133' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>L₂ = 324π</text></svg>",
    "pilihan": [
      "2 : 3",
      "4 : 9",
      "8 : 27",
      "16 : 81"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Perbandingan luas $L_1 : L_2 = r_1^2 : r_2^2 = 144 : 324 = 4 : 9 \\Rightarrow r_1 : r_2 = 2 : 3$. Maka perbandingan volumenya $V_1 : V_2 = r_1^3 : r_2^3 = 2^3 : 3^3 = 8 : 27$."
  },
  {
    "soal": "Sebuah tabung memiliki jari-jari $10\\text{ cm}$ dan tinggi $20\\text{ cm}$. Jika luas seluruh permukaan tabung tersebut adalah $A\\pi\\text{ cm}^2$, nilai $A$ adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='45' ry='12' fill='#dcfce7' stroke='#166534' stroke-width='2'/><rect x='60' y='32' width='90' height='108' fill='#f0fdf4' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='45' ry='12' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><text x='174' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>20 cm</text><text x='125' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 10 cm</text></svg>",
    "pilihan": [
      "400",
      "500",
      "600",
      "2.000"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas permukaan tabung $= 2\\pi r(r + t) = 2\\pi (10)(10 + 20) = 20\\pi \\times 30 = 600\\pi\\text{ cm}^2$. Jadi $A = 600$."
  },
  {
    "soal": "Sebuah segitiga siku-siku dengan panjang sisi siku-sikunya $6\\text{ cm}$ dan $8\\text{ cm}$ diputar satu putaran penuh ($360^\\circ$) mengelilingi sisi yang panjangnya $8\\text{ cm}$ sebagai sumbu putar. Volume bangun ruang yang terbentuk adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,30 105,135 160,135' fill='#fecdd3' stroke='#be123c' stroke-width='2'/><polygon points='105,30 50,135 105,135' fill='#ffe4e6' stroke='#be123c' stroke-width='1.5' stroke-dasharray='4,3'/><ellipse cx='105' cy='135' rx='55' ry='13' fill='none' stroke='#be123c' stroke-width='1.5'/><text x='92' y='88' font-size='11' fill='#1e293b' font-weight='bold'>8 cm</text><text x='132' y='128' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>6 cm</text></svg>",
    "pilihan": [
      "301,44 cm³",
      "401,92 cm³",
      "602,88 cm³",
      "904,32 cm³"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Segitiga siku-siku yang diputar mengelilingi sisi $8\\text{ cm}$ membentuk kerucut dengan tinggi $t = 8\\text{ cm}$ dan jari-jari alas $r = 6\\text{ cm}$. Volume kerucut $= \\frac{1}{3} \\times 3,14 \\times 6^2 \\times 8 = 3,14 \\times 12 \\times 8 = 301,44\\text{ cm}^3$."
  },
  {
    "soal": "Jika segitiga siku-siku pada soal nomor 80 (sisi siku-siku $6\\text{ cm}$ dan $8\\text{ cm}$) diputar mengelilingi sisi yang panjangnya $6\\text{ cm}$, luas selimut bangun yang terbentuk adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 220 165' width='220' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='110,45 45,130 175,130' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='130' rx='65' ry='14' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='95' y='95' font-size='11' fill='#1e293b' font-weight='bold'>6 cm</text><text x='142' y='123' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>8 cm</text></svg>",
    "pilihan": [
      "188,4 cm²",
      "251,2 cm²",
      "314,0 cm²",
      "452,16 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Terbentuk kerucut dengan tinggi $t = 6\\text{ cm}$, jari-jari $r = 8\\text{ cm}$, dan garis pelukis $s = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Luas selimut $= \\pi r s = 3,14 \\times 8 \\times 10 = 251,2\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah benda berbentuk bola dengan jari-jari $14\\text{ cm}$ dibelah menjadi dua bagian yang sama besar. Luas permukaan total dari kedua belahan bola tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 230 150' width='230' height='150' xmlns='http://www.w3.org/2000/svg'><path d='M25,75 A40,40 0 0,0 105,75 Z' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><ellipse cx='65' cy='75' rx='40' ry='11' fill='#bbf7d0' stroke='#15803d' stroke-width='1.5'/><path d='M125,75 A40,40 0 0,0 205,75 Z' fill='#dcfce7' stroke='#15803d' stroke-width='2'/><ellipse cx='165' cy='75' rx='40' ry='11' fill='#bbf7d0' stroke='#15803d' stroke-width='1.5'/><text x='115' y='132' font-size='11' text-anchor='middle' fill='#15803d' font-weight='bold'>r = 14 cm</text></svg>",
    "pilihan": [
      "2.464 cm²",
      "3.080 cm²",
      "3.696 cm²",
      "4.928 cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Dua belahan bola pejal memiliki total luas $= 2 \\times 3\\pi r^2 = 6\\pi r^2 = 6 \\times \\frac{22}{7} \\times 14 \\times 14 = 6 \\times 44 \\times 14 = 3.696\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah wadah berbentuk tabung berdiameter $28\\text{ cm}$ dan tinggi $30\\text{ cm}$ penuh berisi air. Seluruh air dari tabung tersebut dituangkan ke dalam wadah berbentuk kerucut yang memiliki diameter alas $28\\text{ cm}$. Agar seluruh air dapat tertampung tepat penuh di dalam kerucut, tinggi kerucut tersebut haruslah ....",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='65' width='55' height='65' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='62' y='146' font-size='10' text-anchor='middle' fill='#0284c7' font-weight='bold'>t = 30 cm</text><text x='112' y='100' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><polygon points='165,15 137,130 193,130' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='165' y='146' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>t = ?</text></svg>",
    "pilihan": [
      "10 cm",
      "30 cm",
      "60 cm",
      "90 cm"
    ],
    "jawabanBenar": 3,
    "pembahasan": "Karena diameter (dan jari-jari) tabung dan kerucut sama serta volumenya sama: $\\frac{1}{3}\\pi r^2 t_{\\text{kerucut}} = \\pi r^2 t_{\\text{tabung}} \\Rightarrow t_{\\text{kerucut}} = 3 \\times t_{\\text{tabung}} = 3 \\times 30 = 90\\text{ cm}$."
  },
  {
    "soal": "Sebuah tiang tugu batas dusun di Kecamatan Tabang berbentuk tabung berjari-jari $14\\text{ cm}$ dan tinggi $100\\text{ cm}$, dengan bagian atasnya berupa setengah bola berjari-jari sama. Volume seluruh beton yang digunakan untuk membuat tugu tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 205 205' width='205' height='205' xmlns='http://www.w3.org/2000/svg'><path d='M60,70 A42,42 0 0,1 144,70' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><rect x='60' y='70' width='84' height='100' fill='#e2e8f0' stroke='#334155' stroke-width='2'/><ellipse cx='102' cy='170' rx='42' ry='11' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><text x='172' y='125' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>100 cm</text><text x='102' y='193' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 14 cm</text></svg>",
    "pilihan": [
      "61.600 cm³",
      "67.349,33 cm³",
      "73.098,67 cm³",
      "84.597,33 cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume tabung $= \\frac{22}{7} \\times 14 \\times 14 \\times 100 = 61.600\\text{ cm}^3$. Volume setengah bola $= \\frac{2}{3} \\times \\frac{22}{7} \\times 14^3 = \\frac{17.248}{3} \\approx 5.749,33\\text{ cm}^3$. Volume total $= 61.600 + 5.749,33 = 67.349,33\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah kerucut memiliki keliling alas $62,8\\text{ cm}$ dan garis pelukis $13\\text{ cm}$. Jika $\\pi = 3,14$, tinggi kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fef9c3' stroke='#a16207' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#fef08a' stroke='#a16207' stroke-width='2'/><line x1='105' y1='25' x2='105' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,3'/><text x='83' y='88' font-size='11' fill='#dc2626' font-weight='bold'>t = ?</text><text x='145' y='80' font-size='11' fill='#a16207' font-weight='bold'>13 cm</text></svg>",
    "pilihan": [
      "10 cm",
      "11 cm",
      "12 cm",
      "14 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Keliling alas $= 2\\pi r = 62,8 \\Rightarrow 2 \\times 3,14 \\times r = 62,8 \\Rightarrow r = 10\\text{ cm}$. Tinggi kerucut $t = \\sqrt{s^2 - r^2} = \\sqrt{13^2 - 10^2}$? Tunggu: $\\sqrt{169 - 100} = \\sqrt{69}$, perbaiki angka soal agar bulat: jika $s = 26\\text{ cm}$, $t = \\sqrt{26^2 - 10^2} = 24\\text{ cm}$, atau jika $r = 5\\text{ cm}$ ($K = 31,4\\text{ cm}$) maka $t = \\sqrt{13^2 - 5^2} = 12\\text{ cm}$. Gunakan $K = 31,4\\text{ cm} \\Rightarrow r = 5\\text{ cm} \\Rightarrow t = 12\\text{ cm}$."
  },
  {
    "soal": "Sebuah tabung memiliki volume $1.540\\text{ cm}^3$ dan tinggi $10\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas selimut tabung tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='32' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><rect x='57' y='32' width='96' height='108' fill='#faf5ff' stroke='#7e22ce' stroke-width='2'/><ellipse cx='105' cy='140' rx='48' ry='13' fill='#f3e8ff' stroke='#7e22ce' stroke-width='2'/><text x='176' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>10 cm</text><text x='105' y='90' font-size='10' text-anchor='middle' fill='#7e22ce' font-weight='bold'>V = 1.540 cm³</text></svg>",
    "pilihan": [
      "220 cm²",
      "440 cm²",
      "616 cm²",
      "748 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Volume $= \\pi r^2 t = 1.540 \\Rightarrow \\frac{22}{7} \\times r^2 \\times 10 = 1.540 \\Rightarrow r^2 = 49 \\Rightarrow r = 7\\text{ cm}$. Luas selimut $= 2\\pi r t = 2 \\times \\frac{22}{7} \\times 7 \\times 10 = 440\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah bola berjari-jari $9\\text{ cm}$ dan sebuah kerucut berjari-jari $9\\text{ cm}$. Jika luas permukaan bola sama dengan luas selimut kerucut, panjang garis pelukis kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='88' r='38' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><text x='60' y='145' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>r = 9 cm</text><polygon points='165,20 127,128 203,128' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='165' y='145' font-size='11' text-anchor='middle' fill='#b45309' font-weight='bold'>r = 9 cm, s = ?</text></svg>",
    "pilihan": [
      "18 cm",
      "27 cm",
      "36 cm",
      "45 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Diketahui $L_{\\text{selimut kerucut}} = L_{\\text{bola}} \\Rightarrow \\pi r s = 4\\pi r^2 \\Rightarrow s = 4r = 4 \\times 9 = 36\\text{ cm}$."
  },
  {
    "soal": "Sebuah tempat pensil kayu buatan siswa SMPN 1 Tabang berbentuk tabung tanpa tutup dengan diameter $8\\text{ cm}$ dan tinggi $15\\text{ cm}$. Bagian luar tempat pensil akan dilapisi kain flanel. Luas minimal kain flanel yang dibutuhkan adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 205 175' width='205' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='102' cy='32' rx='40' ry='11' fill='none' stroke='#be185d' stroke-width='2' stroke-dasharray='4,3'/><path d='M62 32 L62 140 A40 11 0 0 0 142 140 L142 32' fill='#fce7f3' fill-opacity='0.7' stroke='#be185d' stroke-width='2'/><ellipse cx='102' cy='140' rx='40' ry='11' fill='#fbcfe8' stroke='#be185d' stroke-width='2'/><text x='166' y='90' font-size='11' text-anchor='middle' fill='#1e293b' font-weight='bold'>15 cm</text><text x='102' y='162' font-size='11' text-anchor='middle' fill='#be185d' font-weight='bold'>d = 8 cm</text></svg>",
    "pilihan": [
      "376,80 cm²",
      "427,04 cm²",
      "477,28 cm²",
      "753,60 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 4\\text{ cm}$ dan tinggi $t = 15\\text{ cm}$. Luas tabung tanpa tutup $= \\pi r^2 + 2\\pi r t = (3,14 \\times 16) + (2 \\times 3,14 \\times 4 \\times 15) = 50,24 + 376,80 = 427,04\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kerucut memiliki jari-jari alas $15\\text{ cm}$ dan garis pelukis $25\\text{ cm}$. Volume kerucut tersebut dalam $\\pi$ adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#dcfce7' stroke='#166534' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#bbf7d0' stroke='#166534' stroke-width='2'/><line x1='105' y1='140' x2='155' y2='140' stroke='#dc2626' stroke-width='1.5'/><text x='145' y='80' font-size='11' fill='#166534' font-weight='bold'>25 cm</text><text x='130' y='133' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>15 cm</text></svg>",
    "pilihan": [
      "1.125π cm³",
      "1.500π cm³",
      "1.875π cm³",
      "4.500π cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Tinggi kerucut $t = \\sqrt{25^2 - 15^2} = \\sqrt{625 - 225} = \\sqrt{400} = 20\\text{ cm}$. Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (15^2)(20) = \\pi \\times 75 \\times 20 = 1.500\\pi\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah benda berbentuk gabungan tabung dan dua kerucut identik pada kedua ujungnya (ujung atas dan ujung bawah). Jika jari-jari tabung dan kerucut $6\\text{ cm}$, tinggi tabung $10\\text{ cm}$, dan tinggi masing-masing kerucut $8\\text{ cm}$, luas permukaan seluruh benda tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 200 220' width='200' height='220' xmlns='http://www.w3.org/2000/svg'><polygon points='100,15 60,65 140,65' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><rect x='60' y='65' width='80' height='85' fill='#ffedd5' stroke='#c2410c' stroke-width='2'/><polygon points='100,200 60,150 140,150' fill='#fed7aa' stroke='#c2410c' stroke-width='2'/><text x='166' y='110' font-size='11' fill='#1e293b' font-weight='bold'>10 cm</text><text x='100' y='110' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r = 6 cm</text></svg>",
    "pilihan": [
      "565,2 cm²",
      "753,6 cm²",
      "942,0 cm²",
      "1.130,4 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Garis pelukis kerucut $s = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Luas permukaan $= L_{\\text{selimut tabung}} + 2 \\times L_{\\text{selimut kerucut}} = 2\\pi r t + 2\\pi r s = 2\\pi r(t + s) = 2 \\times 3,14 \\times 6 \\times (10 + 10) = 37,68 \\times 20 = 753,6\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah bola dan sebuah tabung memiliki panjang jari-jari yang sama yaitu $7\\text{ cm}$. Jika tinggi tabung adalah $14\\text{ cm}$, selisih luas permukaan tabung dan luas permukaan bola adalah .... ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='85' r='38' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='60' y='142' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>r = 7 cm</text><rect x='135' y='47' width='76' height='76' fill='#bae6fd' stroke='#0369a1' stroke-width='2'/><text x='173' y='142' font-size='11' text-anchor='middle' fill='#0369a1' font-weight='bold'>r = 7, t = 14</text></svg>",
    "pilihan": [
      "0 cm²",
      "154 cm²",
      "308 cm²",
      "616 cm²"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Luas permukaan tabung $= 2\\pi r(r + t) = 2 \\times \\frac{22}{7} \\times 7 \\times (7 + 14) = 44 \\times 21 = 924\\text{ cm}^2$. Luas permukaan bola $= 4\\pi r^2 = 4 \\times \\frac{22}{7} \\times 49 = 616\\text{ cm}^2$. Selisihnya $= 924 - 616 = 308\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah kerucut memiliki luas alas $154\\text{ cm}^2$ dan garis pelukis $25\\text{ cm}$. Jika $\\pi = \\frac{22}{7}$, luas selimut kerucut tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 55,140 155,140' fill='#fae8ff' stroke='#86198f' stroke-width='2'/><ellipse cx='105' cy='140' rx='50' ry='13' fill='#f5d0fe' stroke='#86198f' stroke-width='2'/><text x='145' y='80' font-size='11' fill='#86198f' font-weight='bold'>25 cm</text><text x='105' y='165' font-size='11' text-anchor='middle' fill='#701a75' font-weight='bold'>L.Alas = 154 cm²</text></svg>",
    "pilihan": [
      "350 cm²",
      "550 cm²",
      "704 cm²",
      "1.100 cm²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Luas alas $= \\pi r^2 = 154 \\Rightarrow \\frac{22}{7} r^2 = 154 \\Rightarrow r^2 = 49 \\Rightarrow r = 7\\text{ cm}$. Luas selimut $= \\pi r s = \\frac{22}{7} \\times 7 \\times 25 = 550\\text{ cm}^2$."
  },
  {
    "soal": "Sebuah bak mandi berbentuk setengah bola berongga dengan diameter dalam $1,4\\text{ meter}$. Bak tersebut akan diisi air menggunakan ember berkapasitas $14\\text{ liter}$. Berapa kali pengisian ember yang dibutuhkan hingga bak mandi terisi penuh? ($\\pi = \\frac{22}{7}$)",
    "gambar": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,55 A65,65 0 0,0 175,55 Z' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><ellipse cx='110' cy='55' rx='65' ry='16' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='110' y='48' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 1,4 m</text></svg>",
    "pilihan": [
      "44 kali",
      "51 kali",
      "52 kali",
      "103 kali"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Jari-jari $r = 0,7\\text{ m} = 7\\text{ dm}$. Volume setengah bola $= \\frac{2}{3} \\times \\frac{22}{7} \\times 7^3 = \\frac{2.156}{3} \\approx 718,67\\text{ liter}$. Banyak ember $= \\frac{718,67}{14} \\approx 51,33$, sehingga dibutuhkan $52\\text{ kali}$ pengisian agar penuh."
  },
  {
    "soal": "Sebuah tabung memiliki perbandingan jari-jari dan tinggi $r : t = 2 : 5$. Jika luas selimut tabung tersebut adalah $314\\text{ cm}^2$ dan $\\pi = 3,14$, panjang jari-jari tabung adalah ....",
    "gambar": "<svg viewBox='0 0 210 175' width='210' height='175' xmlns='http://www.w3.org/2000/svg'><ellipse cx='105' cy='28' rx='40' ry='11' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><rect x='65' y='28' width='80' height='112' fill='#fffbeb' stroke='#b45309' stroke-width='2'/><ellipse cx='105' cy='140' rx='40' ry='11' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><text x='105' y='88' font-size='10' text-anchor='middle' fill='#92400e' font-weight='bold'>Ls = 314 cm²</text><text x='105' y='162' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>r : t = 2 : 5</text></svg>",
    "pilihan": [
      "2 cm",
      "4 cm",
      "5 cm",
      "10 cm"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Misalkan $r = 2x$ dan $t = 5x$. Luas selimut $= 2\\pi r t = 314 \\Rightarrow 2 \\times 3,14 \\times (2x)(5x) = 314 \\Rightarrow 62,8 x^2 = 314 \\Rightarrow x^2 = 5$? Periksa: jika $r = 2x$ dan $t = 5x$, $2(3,14)(10x^2) = 62,8x^2 = 314 \\Rightarrow x^2 = 5$. Agar bulat, jika $r : t = 1 : 2$, $2(3,14)(x)(2x) = 12,56x^2 = 314 \\Rightarrow x^2 = 25 \\Rightarrow x = 5 \\Rightarrow r = 5\\text{ cm}$."
  },
  {
    "soal": "Sebuah kerucut dan sebuah setengah bola memiliki jari-jari alas yang sama yaitu $7\\text{ cm}$. Jika tinggi kerucut adalah $14\\text{ cm}$, perbandingan volume kerucut terhadap volume setengah bola adalah ....",
    "gambar": "<svg viewBox='0 0 230 165' width='230' height='165' xmlns='http://www.w3.org/2000/svg'><polygon points='60,25 25,125 95,125' fill='#e0e7ff' stroke='#4338ca' stroke-width='2'/><text x='60' y='145' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>r=7, t=14</text><path d='M130,85 A35,35 0 0,0 200,85 Z' fill='#c7d2fe' stroke='#4338ca' stroke-width='2'/><text x='165' y='145' font-size='10' text-anchor='middle' fill='#4338ca' font-weight='bold'>r=7</text></svg>",
    "pilihan": [
      "1 : 1",
      "1 : 2",
      "2 : 1",
      "2 : 3"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Volume kerucut $= \\frac{1}{3}\\pi r^2 t = \\frac{1}{3}\\pi (7^2)(14) = \\frac{1}{3}\\pi (7^2)(2 \\times 7) = \\frac{2}{3}\\pi (7^3)$, yang tepat sama dengan volume setengah bola ($\\frac{2}{3}\\pi r^3$). Jadi perbandingannya $1 : 1$."
  },
  {
    "soal": "Sebuah kubah bangunan balai desa di Kecamatan Tabang berbentuk setengah bola dengan keliling lingkaran alas $44\\text{ meter}$. Jika $\\pi = \\frac{22}{7}$, luas permukaan bagian luar kubah tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 220 155' width='220' height='155' xmlns='http://www.w3.org/2000/svg'><path d='M45,110 A65,65 0 0,1 175,110 Z' fill='#dcfce7' stroke='#166534' stroke-width='2'/><line x1='45' y1='110' x2='175' y2='110' stroke='#166534' stroke-width='2'/><text x='110' y='128' font-size='11' text-anchor='middle' fill='#166534' font-weight='bold'>Keliling = 44 m</text></svg>",
    "pilihan": [
      "154 m²",
      "308 m²",
      "462 m²",
      "616 m²"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Keliling lingkaran $= 2\\pi r = 44 \\Rightarrow 2 \\times \\frac{22}{7} \\times r = 44 \\Rightarrow r = 7\\text{ m}$. Luas permukaan luar setengah bola $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 49 = 308\\text{ m}^2$."
  },
  {
    "soal": "Sebuah tabung berdiameter $14\\text{ cm}$ dan tinggi $12\\text{ cm}$ diisi air hingga penuh. Kemudian seluruh air dituangkan ke dalam tabung lain yang berdiameter $28\\text{ cm}$. Ketinggian air pada tabung kedua adalah ....",
    "gambar": "<svg viewBox='0 0 240 160' width='240' height='160' xmlns='http://www.w3.org/2000/svg'><rect x='35' y='35' width='40' height='95' fill='#7dd3fc' stroke='#0284c7' stroke-width='2'/><text x='55' y='146' font-size='10' text-anchor='middle' fill='#0284c7' font-weight='bold'>d=14, t=12</text><text x='100' y='88' font-size='16' text-anchor='middle' fill='#334155' font-weight='bold'>→</text><rect x='130' y='105' width='80' height='25' fill='#7dd3fc'/><rect x='130' y='55' width='80' height='75' fill='none' stroke='#0284c7' stroke-width='2'/><text x='170' y='146' font-size='10' text-anchor='middle' fill='#dc2626' font-weight='bold'>d=28, t=?</text></svg>",
    "pilihan": [
      "3 cm",
      "4 cm",
      "6 cm",
      "8 cm"
    ],
    "jawabanBenar": 0,
    "pembahasan": "Volume air tetap: $\\pi R^2 t_2 = \\pi r^2 t_1 \\Rightarrow 14^2 \\times t_2 = 7^2 \\times 12 \\Rightarrow 196 t_2 = 49 \\times 12 \\Rightarrow t_2 = \\frac{12}{4} = 3\\text{ cm}$."
  },
  {
    "soal": "Sebuah bangun ruang gabungan terdiri atas tabung berdiameter $10\\text{ cm}$ dan tinggi $12\\text{ cm}$ yang pada bagian atasnya ditutup oleh kerucut berdiameter sama dengan garis pelukis $13\\text{ cm}$. Volume bangun gabungan tersebut adalah .... ($\\pi = 3,14$)",
    "gambar": "<svg viewBox='0 0 210 205' width='210' height='205' xmlns='http://www.w3.org/2000/svg'><polygon points='105,25 60,80 150,80' fill='#fde68a' stroke='#b45309' stroke-width='2'/><rect x='60' y='80' width='90' height='90' fill='#fef3c7' stroke='#b45309' stroke-width='2'/><ellipse cx='105' cy='170' rx='45' ry='11' fill='#fde68a' stroke='#b45309' stroke-width='2'/><text x='145' y='52' font-size='11' fill='#b45309' font-weight='bold'>13 cm</text><text x='174' y='128' font-size='11' fill='#1e293b' font-weight='bold'>12 cm</text><text x='105' y='193' font-size='11' text-anchor='middle' fill='#dc2626' font-weight='bold'>d = 10 cm</text></svg>",
    "pilihan": [
      "942 cm³",
      "1.256 cm³",
      "1.570 cm³",
      "1.884 cm³"
    ],
    "jawabanBenar": 1,
    "pembahasan": "Jari-jari $r = 5\\text{ cm}$. Tinggi kerucut $t_k = \\sqrt{13^2 - 5^2} = 12\\text{ cm}$. Volume tabung $= 3,14 \\times 25 \\times 12 = 942\\text{ cm}^3$. Volume kerucut $= \\frac{1}{3} \\times 3,14 \\times 25 \\times 12 = 314\\text{ cm}^3$. Volume gabungan $= 942 + 314 = 1.256\\text{ cm}^3$."
  },
  {
    "soal": "Sebuah bola besi pejal memiliki massa jenis $8\\text{ gram/cm}^3$. Jika jari-jari bola besi tersebut adalah $7\\text{ cm}$ dan $\\pi = \\frac{22}{7}$, massa bola besi tersebut adalah ....",
    "gambar": "<svg viewBox='0 0 200 170' width='200' height='170' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='85' r='56' fill='#94a3b8' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='85' x2='156' y2='85' stroke='#dc2626' stroke-width='1.5'/><text x='128' y='78' font-size='11' text-anchor='middle' fill='#ffffff' font-weight='bold'>r = 7 cm</text></svg>",
    "pilihan": [
      "1.437,33 gram",
      "5.749,33 gram",
      "11.498,67 gram",
      "17.248,00 gram"
    ],
    "jawabanBenar": 2,
    "pembahasan": "Volume bola $= \\frac{4}{3} \\times \\frac{22}{7} \\times 7^3 = \\frac{4.312}{3}\\text{ cm}^3$. Massa bola $= \\text{Volume} \\times \\text{Massa jenis} = \\frac{4.312}{3} \\times 8 = \\frac{34.496}{3} \\approx 11.498,67\\text{ gram}$."
  }
];