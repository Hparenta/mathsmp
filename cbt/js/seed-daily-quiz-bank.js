import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { dailyQuizQuestions } from "./daily-quiz-bank-data.js";

const API_BASE = "https://backend.herdiantoparenta2.workers.dev";

async function runImport() {
  const user = auth.currentUser;
  if (!user) {
    document.getElementById("status").textContent =
      "Belum login. Login sebagai guru terlebih dahulu, lalu buka halaman ini kembali.";
    return;
  }

  const confirmed = window.confirm(
    "Impor 296 soal dari bank kuis harian ke Bank Soal CBT?\n\n" +
    "Kelas VII — Operasi Bilangan Rasional: 100 soal\n" +
    "Kelas IX — Bangun Ruang Sisi Lengkung: 96 soal\n" +
    "Kelas IX — Populasi dan Sampel: 100 soal\n\n" +
    "Soal dengan kelas, materi, dan teks yang sama akan dilewati. " +
    "Impor tidak membuat ujian."
  );
  if (!confirmed) {
    document.getElementById("status").textContent = "Impor dibatalkan.";
    return;
  }

  const status = document.getElementById("status");
  const details = document.getElementById("details");
  const button = document.getElementById("startImport");
  button.disabled = true;

  try {
    const token = await user.getIdToken(true);
    const listResponse = await fetch(`${API_BASE}/api/teacher/questions`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const listData = await listResponse.json();
    if (!listResponse.ok) {
      throw new Error(listData.message || "Gagal membaca Bank Soal CBT.");
    }

    const existing = new Set((listData.questions || []).map(q =>
      `${q.grade}::${q.topic}::${q.questionText}`
    ));

    let created = 0, skipped = 0, failed = 0;
    const failures = [];

    for (let i = 0; i < dailyQuizQuestions.length; i++) {
      const source = dailyQuizQuestions[i];
      const key = `${source.grade}::${source.topic}::${source.questionText}`;
      if (existing.has(key)) {
        skipped++;
      } else {
        const payload = {
          grade: source.grade,
          topic: source.topic,
          difficulty: source.difficulty,
          questionText: source.questionText,
          options: source.options,
          correctAnswer: source.correctAnswer,
          isActive: true,
          explanation: source.explanation,
          ...(source.imageSvg ? { imageSvg: source.imageSvg } : {})
        };

        try {
          const response = await fetch(`${API_BASE}/api/teacher/questions`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(payload)
          });
          const data = await response.json();
          if (!response.ok) {
            failed++;
            failures.push(`#${i + 1} ${source.topic}: ${data.message || response.status}`);
          } else {
            created++;
            existing.add(key);
          }
        } catch (error) {
          failed++;
          failures.push(`#${i + 1} ${source.topic}: ${error.message}`);
        }
      }

      const done = i + 1;
      status.textContent = `Memproses ${done}/${dailyQuizQuestions.length} soal...`;
      details.textContent = `Berhasil: ${created} | Dilewati: ${skipped} | Gagal: ${failed}`;
    }

    status.textContent = "Impor selesai.";
    details.textContent =
      `Berhasil ditambahkan: ${created}\nDilewati (sudah ada): ${skipped}\nGagal: ${failed}` +
      (failures.length ? `\n\nRincian kegagalan:\n${failures.slice(0, 20).join("\n")}` : "");
  } catch (error) {
    status.textContent = `Impor gagal: ${error.message}`;
  } finally {
    button.disabled = false;
  }
}

const startButton = document.getElementById("startImport");
startButton.disabled = true;
onAuthStateChanged(auth, (user) => {
  startButton.disabled = !user;
  document.getElementById("status").textContent = user
    ? "Sesi guru terdeteksi. Siap melakukan impor."
    : "Belum login. Login sebagai guru, lalu buka halaman impor ini.";
});
startButton.addEventListener("click", runImport);
