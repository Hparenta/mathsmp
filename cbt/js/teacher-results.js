import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Untuk uji lokal. Saat produksi, ganti dengan URL Worker produksi.
const API_BASE_URL = window.CBT_API_BASE_URL || "https://backend.herdiantoparenta2.workers.dev";

const examSelect = document.getElementById("examSelect");
const resultsMessage = document.getElementById("resultsMessage");
const resultsArea = document.getElementById("resultsArea");
const resultsBody = document.getElementById("resultsBody");
const selectedExamTitle = document.getElementById("selectedExamTitle");
const resultsSummary = document.getElementById("resultsSummary");
const tableCount = document.getElementById("tableCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const refreshButton = document.getElementById("refreshButton");
const csvButton = document.getElementById("csvButton");
const syncButton = document.getElementById("syncButton");
const openSheetButton = document.getElementById("openSheetButton");

let currentUser = null;
let currentExam = null;
let allResults = [];
let spreadsheetUrl = "";

const CLASS_NAMES = {
  kelas_vii: "VII",
  kelas_viii: "VIII",
  kelas_ix: "IX",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
};

function setMessage(message, type = "info") {
  resultsMessage.textContent = message;
  resultsMessage.className = `message${type === "error" ? " error" : type === "success" ? " success" : ""}`;
  resultsMessage.hidden = !message;
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit", hour12: false,
  }).format(date);
}

function classLabel(item) {
  const raw = String(item.classId || "").trim();
  const grade = CLASS_NAMES[raw.toLowerCase()] || raw || "-";
  const section = String(item.classSection || "").trim();
  return section ? `${grade} ${section}` : grade;
}

function scoreClass(value) {
  const score = Number(value);
  if (score >= 75) return "score-high";
  if (score >= 60) return "score-mid";
  return "score-low";
}

function makeCell(text, className = "") {
  const cell = document.createElement("td");
  cell.textContent = text === null || text === undefined || text === "" ? "-" : String(text);
  if (className) cell.className = className;
  return cell;
}

function renderStats(results) {
  const scores = results.map((item) => Number(item.score) || 0);
  document.getElementById("statTotal").textContent = String(results.length);

  if (!scores.length) {
    document.getElementById("statAverage").textContent = "0";
    document.getElementById("statHighest").textContent = "0";
    document.getElementById("statLowest").textContent = "0";
    return;
  }

  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  document.getElementById("statAverage").textContent = average.toFixed(1).replace(".", ",");
  document.getElementById("statHighest").textContent = String(Math.max(...scores));
  document.getElementById("statLowest").textContent = String(Math.min(...scores));
}

function getFilteredResults() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("id-ID");
  if (!keyword) return allResults;

  return allResults.filter((item) => {
    const text = [item.studentName, item.nis, classLabel(item)]
      .map((value) => String(value ?? "").toLocaleLowerCase("id-ID"))
      .join(" ");
    return text.includes(keyword);
  });
}

function renderTable() {
  const results = getFilteredResults();
  const fragment = document.createDocumentFragment();
  resultsBody.replaceChildren();

  results.forEach((item, index) => {
    const row = document.createElement("tr");
    row.appendChild(makeCell(String(index + 1), "num"));

    const nameCell = document.createElement("td");
    const name = document.createElement("span");
    name.className = "student-name";
    name.textContent = item.studentName || "Siswa tidak ditemukan";
    const sub = document.createElement("span");
    sub.className = "student-sub";
    sub.textContent = "Peserta ujian";
    nameCell.append(name, sub);
    row.appendChild(nameCell);

    row.appendChild(makeCell(item.nis || "-"));

    const classCell = document.createElement("td");
    const classPill = document.createElement("span");
    classPill.className = "class-pill";
    classPill.textContent = classLabel(item);
    classCell.appendChild(classPill);
    row.appendChild(classCell);

    const scoreCell = document.createElement("td");
    scoreCell.className = "num";
    const scorePill = document.createElement("span");
    scorePill.className = `score-pill ${scoreClass(item.score)}`;
    scorePill.textContent = String(Number(item.score) || 0);
    scoreCell.appendChild(scorePill);
    row.appendChild(scoreCell);

    row.appendChild(makeCell(String(item.correctCount ?? 0), "num"));
    row.appendChild(makeCell(String(item.wrongCount ?? 0), "num"));
    row.appendChild(makeCell(String(item.unansweredCount ?? 0), "num"));
    row.appendChild(makeCell(formatDate(item.startedAt), "date-cell"));
    row.appendChild(makeCell(formatDate(item.submittedAt), "date-cell"));
    fragment.appendChild(row);
  });

  resultsBody.appendChild(fragment);
  emptyState.hidden = results.length !== 0;
  document.getElementById("resultsTable").hidden = results.length === 0;
  tableCount.textContent = `${results.length} dari ${allResults.length} siswa ditampilkan`;
}

async function apiFetch(path, options = {}) {
  if (!currentUser) throw new Error("Sesi guru tidak ditemukan. Silakan login kembali.");
  const token = await currentUser.getIdToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
      ...(options.body ? { "Content-Type": "application/json" } : {}),
    },
    cache: "no-store",
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Respons server tidak dapat dibaca.");
  }

  if (!response.ok || data.status === "error") {
    throw new Error(data.message || `Permintaan gagal (${response.status}).`);
  }
  return data;
}

async function verifyTeacher(user) {
  const token = await user.getIdToken();
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const data = await response.json();

  if (!response.ok || data.status !== "success" || data.user?.role !== "teacher" || data.user?.isActive !== true) {
    throw new Error(data.message || "Akun ini tidak memiliki akses guru aktif.");
  }
}

async function loadExams() {
  setMessage("Memuat daftar ujian...");
  const data = await apiFetch("/api/teacher/exams");
  const exams = data.exams || [];

  examSelect.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = exams.length ? "-- Pilih ujian --" : "Belum ada ujian";
  examSelect.appendChild(placeholder);

  exams.forEach((exam) => {
    const option = document.createElement("option");
    option.value = exam.id;
    option.textContent = `${exam.title} · Kelas ${CLASS_NAMES[String(exam.grade)] || exam.grade}`;
    examSelect.appendChild(option);
  });

  setMessage(exams.length ? "Pilih ujian untuk menampilkan hasil dan nilai siswa." : "Belum ada ujian yang dibuat.");
}

async function loadResults(examId) {
  allResults = [];
  currentExam = null;
  spreadsheetUrl = "";
  resultsArea.hidden = true;
  csvButton.disabled = true;
  syncButton.disabled = true;
  refreshButton.disabled = !examId;
  openSheetButton.hidden = true;
  searchInput.value = "";

  if (!examId) {
    setMessage("Pilih ujian untuk melihat rekap nilai siswa.");
    return;
  }

  setMessage("Mengambil hasil ujian dari Firestore...");
  try {
    const data = await apiFetch(`/api/teacher/results/${encodeURIComponent(examId)}`);
    allResults = data.results || [];
    currentExam = (await apiFetch("/api/teacher/exams")).exams?.find((exam) => exam.id === examId) || null;

    selectedExamTitle.textContent = currentExam?.title || "Rekap Nilai";
    resultsSummary.textContent = `Kelas ${CLASS_NAMES[String(currentExam?.grade)] || currentExam?.grade || "-"} · ${allResults.length} siswa telah mengumpulkan ujian.`;
    renderStats(allResults);
    renderTable();
    resultsArea.hidden = false;
    csvButton.disabled = allResults.length === 0;
    syncButton.disabled = false;
    refreshButton.disabled = false;

    if (allResults.length) {
      setMessage(`Data berhasil dimuat: ${allResults.length} siswa telah mengumpulkan ujian.`, "success");
    } else {
      setMessage("Belum ada siswa yang mengumpulkan ujian ini. Sinkronisasi tetap dapat dilakukan untuk membuat header spreadsheet.");
    }
  } catch (error) {
    console.error("Gagal memuat hasil ujian:", error);
    refreshButton.disabled = false;
    setMessage(error.message || "Gagal mengambil hasil ujian.", "error");
  }
}

function toCsvValue(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function downloadCsv() {
  const results = getFilteredResults();
  if (!results.length || !currentExam) return;

  const headers = ["Nama Siswa", "NIS", "Kelas/Rombel", "Nilai", "Benar", "Salah", "Tidak Dijawab", "Waktu Mulai", "Waktu Pengumpulan"];
  const rows = results.map((item) => [
    item.studentName, item.nis, classLabel(item), item.score,
    item.correctCount, item.wrongCount, item.unansweredCount,
    item.startedAt, item.submittedAt,
  ]);
  const csv = [headers, ...rows].map((row) => row.map(toCsvValue).join(",")).join("\r\n");
  const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Hasil-${(currentExam.title || "Ujian").replace(/[^a-z0-9-_]+/gi, "-")}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function syncToGoogleSheets() {
  if (!examSelect.value || !currentExam) return;
  syncButton.disabled = true;
  syncButton.textContent = "Menyinkronkan...";
  setMessage("Mengirim rekap dari Firestore ke Google Spreadsheet...");

  try {
    const data = await apiFetch(`/api/teacher/results/${encodeURIComponent(currentExam.id)}/sync`, {
      method: "POST",
    });
    spreadsheetUrl = data.spreadsheetUrl || "";
    if (spreadsheetUrl) openSheetButton.hidden = false;
    setMessage(`Berhasil disinkronkan: ${data.total ?? allResults.length} baris hasil ujian dikirim ke Google Spreadsheet.`, "success");
  } catch (error) {
    console.error("Google Sheets sync error:", error);
    setMessage(error.message || "Gagal menyinkronkan Google Spreadsheet.", "error");
  } finally {
    syncButton.disabled = false;
    syncButton.textContent = "▣ Sinkronkan ke Sheets";
  }
}

examSelect.addEventListener("change", () => loadResults(examSelect.value));
refreshButton.addEventListener("click", () => loadResults(examSelect.value));
searchInput.addEventListener("input", renderTable);
csvButton.addEventListener("click", downloadCsv);
syncButton.addEventListener("click", syncToGoogleSheets);
openSheetButton.addEventListener("click", () => {
  if (spreadsheetUrl) window.open(spreadsheetUrl, "_blank", "noopener,noreferrer");
});

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.replace("teacher-login.html");
    return;
  }

  currentUser = user;
  try {
    await verifyTeacher(user);
    await loadExams();
  } catch (error) {
    console.error("Verifikasi guru gagal:", error);
    setMessage(error.message || "Gagal memverifikasi akun guru.", "error");
  }
});
