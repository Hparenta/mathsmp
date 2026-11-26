
import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const API_BASE_URL = "https://backend.herdiantoparenta2.workers.dev";

const examSelect = document.getElementById("examSelect");
const resultsMessage = document.getElementById("resultsMessage");

let currentUser = null;

// ==========================================
// MEMUAT DAFTAR UJIAN
// ==========================================

async function loadExams(user) {
  try {
    const token = await user.getIdToken();

    const response = await fetch(
      `${API_BASE_URL}/api/teacher/exams`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Gagal mengambil daftar ujian."
      );
    }

    examSelect.innerHTML =
      '<option value="">-- Pilih Ujian --</option>';

    for (const exam of data.exams ?? []) {
      const option = document.createElement("option");

      option.value = exam.id;
      option.textContent =
        `${exam.title} - Kelas ${exam.grade}`;

      examSelect.appendChild(option);
    }

    if (!data.exams?.length) {
      examSelect.innerHTML =
        '<option value="">Belum ada ujian</option>';
    }

    resultsMessage.textContent =
      "Silakan pilih ujian untuk melihat rekap nilai.";

  } catch (error) {
    console.error("Kesalahan memuat ujian:", error);

    resultsMessage.textContent = error.message;
  }
}

// ==========================================
// AUTENTIKASI GURU
// ==========================================

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.replace("index.html");
    return;
  }

  currentUser = user;

  await loadExams(user);
});


const resultsTable = document.getElementById("resultsTable");
const resultsBody = document.getElementById("resultsBody");
const resultsSummary = document.getElementById("resultsSummary");

// ==========================================
// MEMUAT HASIL UJIAN
// ==========================================

async function loadResults(examId) {
  resultsBody.innerHTML = "";
  resultsTable.style.display = "none";
  resultsSummary.innerHTML = "";

  if (!examId || !currentUser) {
    resultsMessage.textContent =
      "Pilih ujian untuk melihat hasil dan nilai siswa.";
    return;
  }

  resultsMessage.textContent = "Memuat hasil ujian...";

  try {
    const token = await currentUser.getIdToken();

    const response = await fetch(
      `${API_BASE_URL}/api/teacher/results/${encodeURIComponent(examId)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Gagal mengambil hasil ujian."
      );
    }

    const results = data.results ?? [];

    if (results.length === 0) {
      resultsMessage.textContent =
        "Belum ada siswa yang mengumpulkan ujian ini.";
      return;
    }

    resultsMessage.textContent =
      `Total peserta yang sudah mengumpulkan: ${results.length} siswa.`;

    // Statistik nilai
    const scores = results.map((item) => Number(item.score));

    const average = scores.reduce(
      (total, score) => total + score, 0
    ) / scores.length;

    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);

    resultsSummary.textContent =
      `Rata-rata: ${average.toFixed(2)} | ` +
      `Nilai tertinggi: ${highest} | ` +
      `Nilai terendah: ${lowest}`;

    // Isi tabel hasil
    results.forEach((item, index) => {
      const row = document.createElement("tr");

      const classNames = {
        kelas_vii: "VII",
        kelas_viii: "VIII",
        kelas_ix: "IX",
      };

      const className =
        classNames[item.classId] || item.classId || "-";

      const classLabel =
        item.classSection
          ? `${className} ${item.classSection}`
          : className;

      const submittedAt = item.submittedAt
        ? new Date(item.submittedAt).toLocaleString("id-ID")
        : "-";

      const values = [
        index + 1,
        item.studentName || "-",
        item.nis || "-",
        classLabel,
        item.score,
        item.correctCount,
        item.wrongCount,
        item.unansweredCount,
        submittedAt,
      ];

      values.forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = String(value);
        row.appendChild(cell);
      });

      resultsBody.appendChild(row);
    });

    resultsTable.style.display = "table";

  } catch (error) {
    console.error("Kesalahan memuat hasil:", error);

    resultsMessage.textContent = error.message;
  }
}

// ==========================================
// EVENT PILIH UJIAN
// ==========================================

examSelect.addEventListener("change", () => {
  loadResults(examSelect.value);
});
