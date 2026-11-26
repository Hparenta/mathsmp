import { auth } from "./firebase-config.js";

const API_BASE = "https://backend.herdiantoparenta2.workers.dev";

// 15 soal per kelas (VII, VIII, IX). Tidak ada pembahasan.
const questions = [
  // KELAS VII (15 soal)
  {
    grade: "7", topic: "Bilangan Bulat", difficulty: "mudah",
    questionText: "Hasil dari -8 + 15 adalah ...",
    options: { A: "5", B: "6", C: "7", D: "8" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "7", topic: "Bilangan Bulat", difficulty: "mudah",
    questionText: "Hasil dari 24 - (-9) adalah ...",
    options: { A: "15", B: "25", C: "31", D: "33" }, correctAnswer: "D", isActive: true
  },
  {
    grade: "7", topic: "Bilangan Bulat", difficulty: "mudah",
    questionText: "Hasil dari (-6) × (-4) adalah ...",
    options: { A: "-24", B: "-10", C: "10", D: "24" }, correctAnswer: "D", isActive: true
  },
  {
    grade: "7", topic: "Pecahan", difficulty: "sedang",
    questionText: "Hasil dari 3/4 + 1/2 adalah ...",
    options: { A: "1/4", B: "5/4", C: "3/2", D: "2" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "7", topic: "Pecahan", difficulty: "mudah",
    questionText: "Dua per tiga dari 30 adalah ...",
    options: { A: "10", B: "15", C: "20", D: "25" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "7", topic: "Bentuk Aljabar", difficulty: "mudah",
    questionText: "Bentuk sederhana dari 4x + 3x - 2 adalah ...",
    options: { A: "7x + 2", B: "7x - 2", C: "x - 2", D: "12x - 2" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "7", topic: "Bentuk Aljabar", difficulty: "mudah",
    questionText: "Jika x = 5, nilai dari 2x + 3 adalah ...",
    options: { A: "10", B: "11", C: "12", D: "13" }, correctAnswer: "D", isActive: true
  },
  {
    grade: "7", topic: "Persamaan Linear Satu Variabel", difficulty: "mudah",
    questionText: "Nilai x yang memenuhi x + 7 = 19 adalah ...",
    options: { A: "10", B: "11", C: "12", D: "13" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "7", topic: "Bentuk Aljabar", difficulty: "sedang",
    questionText: "Jika x = 4, nilai dari 3(2x - 1) adalah ...",
    options: { A: "18", B: "20", C: "21", D: "24" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "7", topic: "Perbandingan", difficulty: "sedang",
    questionText: "Perbandingan banyak siswa laki-laki dan perempuan adalah 2 : 3. Jika jumlah seluruh siswa 25 orang, banyak siswa laki-laki adalah ...",
    options: { A: "8 orang", B: "10 orang", C: "12 orang", D: "15 orang" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "7", topic: "Bangun Datar", difficulty: "mudah",
    questionText: "Sebuah persegi panjang memiliki panjang 12 cm dan lebar 5 cm. Kelilingnya adalah ...",
    options: { A: "17 cm", B: "24 cm", C: "30 cm", D: "34 cm" }, correctAnswer: "D", isActive: true
  },
  {
    grade: "7", topic: "Bangun Datar", difficulty: "mudah",
    questionText: "Sebuah segitiga memiliki alas 10 cm dan tinggi 8 cm. Luasnya adalah ...",
    options: { A: "18 cm²", B: "30 cm²", C: "40 cm²", D: "80 cm²" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "7", topic: "Statistika", difficulty: "sedang",
    questionText: "Rata-rata dari data 6, 8, 10, dan 12 adalah ...",
    options: { A: "8", B: "9", C: "10", D: "11" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "7", topic: "Pecahan dan Desimal", difficulty: "mudah",
    questionText: "Bentuk pecahan paling sederhana dari 0,75 adalah ...",
    options: { A: "1/2", B: "2/3", C: "3/4", D: "4/5" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "7", topic: "Bilangan Desimal", difficulty: "mudah",
    questionText: "Hasil dari 1,2 × 5 adalah ...",
    options: { A: "5", B: "5,5", C: "6", D: "6,5" }, correctAnswer: "C", isActive: true
  },

  // KELAS VIII (15 soal)
  {
    grade: "8", topic: "Teorema Pythagoras", difficulty: "mudah",
    questionText: "Sebuah segitiga siku-siku memiliki panjang sisi siku-siku 3 cm dan 4 cm. Panjang sisi miringnya adalah ...",
    options: { A: "4 cm", B: "5 cm", C: "6 cm", D: "7 cm" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "8", topic: "Teorema Pythagoras", difficulty: "sedang",
    questionText: "Segitiga siku-siku memiliki sisi siku-siku 5 cm dan 12 cm. Panjang sisi miringnya adalah ...",
    options: { A: "10 cm", B: "11 cm", C: "12 cm", D: "13 cm" }, correctAnswer: "D", isActive: true
  },
  {
    grade: "8", topic: "Persamaan Garis Lurus", difficulty: "sedang",
    questionText: "Gradien garis yang melalui titik (1, 2) dan (3, 6) adalah ...",
    options: { A: "1", B: "2", C: "3", D: "4" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "8", topic: "Persamaan Garis Lurus", difficulty: "mudah",
    questionText: "Diketahui y = 2x + 1. Nilai y jika x = 4 adalah ...",
    options: { A: "7", B: "8", C: "9", D: "10" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Persamaan Linear", difficulty: "mudah",
    questionText: "Nilai x yang memenuhi 3x - 5 = 16 adalah ...",
    options: { A: "5", B: "6", C: "7", D: "8" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Bentuk Aljabar", difficulty: "sedang",
    questionText: "Faktorisasi dari 6x + 12 adalah ...",
    options: { A: "6(x + 2)", B: "6(x + 12)", C: "3(2x + 12)", D: "2(3x + 12)" }, correctAnswer: "A", isActive: true
  },
  {
    grade: "8", topic: "Persamaan Linear", difficulty: "mudah",
    questionText: "Nilai x yang memenuhi 2(x + 3) = 18 adalah ...",
    options: { A: "3", B: "5", C: "6", D: "9" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Lingkaran", difficulty: "sedang",
    questionText: "Sebuah lingkaran berjari-jari 7 cm. Jika π = 22/7, keliling lingkaran tersebut adalah ...",
    options: { A: "22 cm", B: "44 cm", C: "88 cm", D: "154 cm" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "8", topic: "Lingkaran", difficulty: "sedang",
    questionText: "Sebuah lingkaran berjari-jari 7 cm. Jika π = 22/7, luas lingkaran tersebut adalah ...",
    options: { A: "44 cm²", B: "77 cm²", C: "154 cm²", D: "308 cm²" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Bangun Datar", difficulty: "sedang",
    questionText: "Sebuah trapesium memiliki sisi sejajar 8 cm dan 12 cm serta tinggi 5 cm. Luasnya adalah ...",
    options: { A: "40 cm²", B: "45 cm²", C: "50 cm²", D: "100 cm²" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Statistika", difficulty: "mudah",
    questionText: "Rata-rata dari data 4, 6, 8, 10, dan 12 adalah ...",
    options: { A: "6", B: "7", C: "8", D: "9" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Statistika", difficulty: "mudah",
    questionText: "Median dari data 3, 5, 7, 9, dan 11 adalah ...",
    options: { A: "5", B: "6", C: "7", D: "9" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Peluang", difficulty: "sedang",
    questionText: "Sebuah dadu bersisi enam dilempar satu kali. Peluang muncul mata dadu genap adalah ...",
    options: { A: "1/6", B: "1/3", C: "1/2", D: "2/3" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "8", topic: "Transformasi Geometri", difficulty: "sedang",
    questionText: "Titik P(2, -1) ditranslasikan oleh T(3, 4). Koordinat bayangan titik P adalah ...",
    options: { A: "(5, 3)", B: "(1, 3)", C: "(5, -5)", D: "(-1, -3)" }, correctAnswer: "A", isActive: true
  },
  {
    grade: "8", topic: "Bangun Ruang", difficulty: "mudah",
    questionText: "Sebuah kubus memiliki panjang rusuk 4 cm. Volumenya adalah ...",
    options: { A: "16 cm³", B: "32 cm³", C: "48 cm³", D: "64 cm³" }, correctAnswer: "D", isActive: true
  },

  // KELAS IX (15 soal)
  {
    grade: "9", topic: "Bilangan Berpangkat", difficulty: "mudah",
    questionText: "Hasil dari 2³ × 2² adalah ...",
    options: { A: "16", B: "24", C: "32", D: "64" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Bentuk Akar", difficulty: "mudah",
    questionText: "Nilai dari √144 adalah ...",
    options: { A: "10", B: "11", C: "12", D: "14" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Bentuk Akar", difficulty: "sedang",
    questionText: "Bentuk sederhana dari √72 adalah ...",
    options: { A: "3√2", B: "4√2", C: "6√2", D: "8√2" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Persamaan Kuadrat", difficulty: "sedang",
    questionText: "Akar-akar persamaan x² - 5x + 6 = 0 adalah ...",
    options: { A: "1 dan 6", B: "2 dan 3", C: "-2 dan -3", D: "-1 dan -6" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "9", topic: "Persamaan Kuadrat", difficulty: "sedang",
    questionText: "Himpunan penyelesaian dari 2x² - 8 = 0 adalah ...",
    options: { A: "-2 dan 2", B: "-4 dan 4", C: "2 saja", D: "-2 saja" }, correctAnswer: "A", isActive: true
  },
  {
    grade: "9", topic: "Fungsi Kuadrat", difficulty: "sedang",
    questionText: "Sumbu simetri grafik y = x² - 4x + 3 adalah ...",
    options: { A: "x = 1", B: "x = 2", C: "x = 3", D: "x = 4" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "9", topic: "Kesebangunan", difficulty: "sedang",
    questionText: "Dua bangun sebangun memiliki perbandingan sisi yang bersesuaian 1 : 2. Jika salah satu sisi bangun kecil 5 cm, sisi yang bersesuaian pada bangun besar adalah ...",
    options: { A: "7 cm", B: "8 cm", C: "9 cm", D: "10 cm" }, correctAnswer: "D", isActive: true
  },
  {
    grade: "9", topic: "Transformasi Geometri", difficulty: "sedang",
    questionText: "Titik (2, -1) didilatasikan dengan pusat O(0, 0) dan faktor skala 3. Koordinat bayangannya adalah ...",
    options: { A: "(6, -3)", B: "(5, 2)", C: "(3, -1)", D: "(-6, 3)" }, correctAnswer: "A", isActive: true
  },
  {
    grade: "9", topic: "Bangun Ruang", difficulty: "sedang",
    questionText: "Sebuah kubus memiliki panjang rusuk 5 cm. Luas permukaannya adalah ...",
    options: { A: "100 cm²", B: "125 cm²", C: "150 cm²", D: "625 cm²" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Bangun Ruang", difficulty: "sedang",
    questionText: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Jika π = 22/7, volumenya adalah ...",
    options: { A: "440 cm³", B: "770 cm³", C: "1540 cm³", D: "3080 cm³" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Barisan Aritmetika", difficulty: "sedang",
    questionText: "Diketahui barisan aritmetika 3, 7, 11, 15, ... Suku ke-10 barisan tersebut adalah ...",
    options: { A: "35", B: "37", C: "39", D: "43" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Peluang", difficulty: "mudah",
    questionText: "Dalam sebuah kantong terdapat 3 bola merah dan 2 bola biru. Jika satu bola diambil secara acak, peluang terambil bola merah adalah ...",
    options: { A: "1/5", B: "2/5", C: "3/5", D: "4/5" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Persamaan Garis Lurus", difficulty: "mudah",
    questionText: "Persamaan garis yang melalui titik asal (0, 0) dan memiliki gradien -3 adalah ...",
    options: { A: "y = 3x", B: "y = x - 3", C: "y = -3x", D: "y = 3 - x" }, correctAnswer: "C", isActive: true
  },
  {
    grade: "9", topic: "Persamaan Kuadrat", difficulty: "mudah",
    questionText: "Akar-akar persamaan x² - 9 = 0 adalah ...",
    options: { A: "-9 dan 9", B: "-3 dan 3", C: "0 dan 9", D: "3 saja" }, correctAnswer: "B", isActive: true
  },
  {
    grade: "9", topic: "Bangun Ruang", difficulty: "sedang",
    questionText: "Sebuah bola memiliki jari-jari 3 cm. Volume bola tersebut adalah ...",
    options: { A: "12π cm³", B: "18π cm³", C: "27π cm³", D: "36π cm³" }, correctAnswer: "D", isActive: true
  }
];

async function seedQuestions() {
  if (!auth.currentUser) {
    alert("Silakan login sebagai guru terlebih dahulu, lalu jalankan ulang script ini.");
    return;
  }

  const counts = {
    VII: questions.filter(q => q.grade === "7").length,
    VIII: questions.filter(q => q.grade === "8").length,
    IX: questions.filter(q => q.grade === "9").length,
  };

  const accepted = confirm(
    `Script akan menambahkan hingga ${questions.length} soal aktif:\n` +
    `Kelas VII: ${counts.VII} soal\n` +
    `Kelas VIII: ${counts.VIII} soal\n` +
    `Kelas IX: ${counts.IX} soal\n\n` +
    `Soal yang sudah ada dengan kelas dan teks sama akan dilewati. Lanjutkan?`
  );

  if (!accepted) {
    console.log("Penambahan soal dibatalkan.");
    return;
  }

  const token = await auth.currentUser.getIdToken(true);

  const listResponse = await fetch(`${API_BASE}/api/teacher/questions`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const listData = await listResponse.json();

  if (!listResponse.ok) {
    throw new Error(listData.message || "Gagal membaca Bank Soal.");
  }

  const existing = new Set(
    (listData.questions || []).map(q => `${q.grade}::${q.questionText}`)
  );

  const results = [];

  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    const key = `${question.grade}::${question.questionText}`;
    const classLabel = { "7": "VII", "8": "VIII", "9": "IX" }[question.grade];

    if (existing.has(key)) {
      results.push({ nomor: index + 1, kelas: classLabel, hasil: "Dilewati (sudah ada)" });
      continue;
    }

    try {
      const response = await fetch(`${API_BASE}/api/teacher/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(question)
      });

      const data = await response.json();

      if (!response.ok) {
        results.push({ nomor: index + 1, kelas: classLabel, hasil: `Gagal: ${data.message || response.status}` });
      } else {
        existing.add(key);
        results.push({ nomor: index + 1, kelas: classLabel, hasil: "Berhasil dibuat", id: data.question?.id });
      }
    } catch (error) {
      results.push({ nomor: index + 1, kelas: classLabel, hasil: `Gagal: ${error.message}` });
    }
  }

  console.table(results);

  const created = results.filter(r => r.hasil === "Berhasil dibuat").length;
  const skipped = results.filter(r => r.hasil.startsWith("Dilewati")).length;
  const failed = results.filter(r => r.hasil.startsWith("Gagal")).length;

  console.log(`Selesai. Dibuat: ${created}; dilewati: ${skipped}; gagal: ${failed}.`);

  alert(
    `Penambahan soal selesai.\nBerhasil dibuat: ${created}\nDilewati: ${skipped}\nGagal: ${failed}\n\nBuka Bank Soal untuk memeriksa hasilnya.`
  );
}

await seedQuestions();
