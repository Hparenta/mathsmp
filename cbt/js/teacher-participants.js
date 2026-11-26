import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Samakan dengan konfigurasi API pada halaman teacher-results.js.
const API_BASE_URL = "https://backend.herdiantoparenta2.workers.dev";

const examSelect = document.getElementById("examSelect");
const refreshButton = document.getElementById("refreshButton");
const participantsMessage = document.getElementById("participantsMessage");
const errorMessage = document.getElementById("errorMessage");
const summary = document.getElementById("summary");
const participantsTable = document.getElementById("participantsTable");
const participantsBody = document.getElementById("participantsBody");

let currentUser = null;
let pageReady = false;

const statusLabels = {
  not_started: "Belum Mulai",
  in_progress: "Sedang Mengerjakan",
  completed: "Selesai",
  expired: "Kedaluwarsa",
};

const classLabels = {
  kelas_vii: "VII",
  kelas_viii: "VIII",
  kelas_ix: "IX",
};

function showError(message) {
  errorMessage.textContent = message || "Terjadi kesalahan.";
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getClassLabel(item) {
  const className = classLabels[item.classId] || item.classId || "-";
  return item.classSection
    ? `${className} ${item.classSection}`
    : className;
}

async function apiGet(path) {
  if (!currentUser) {
    throw new Error("Sesi guru tidak ditemukan. Silakan login kembali.");
  }

  const token = await currentUser.getIdToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Respons server tidak dapat dibaca.");
  }

  if (!response.ok || data.status !== "success") {
    throw new Error(data.message || "Permintaan ke server gagal.");
  }

  return data;
}

async function verifyTeacher() {
  const data = await apiGet("/api/auth/me");
  if (data.user?.role !== "teacher" || data.user?.isActive !== true) {
    throw new Error("Akses ditolak. Halaman ini khusus guru aktif.");
  }
}

async function loadExams() {
  participantsMessage.textContent = "Memuat daftar ujian...";
  errorMessage.textContent = "";
  examSelect.disabled = true;
  refreshButton.disabled = true;

  const data = await apiGet("/api/teacher/exams");
  const exams = (data.exams || []).filter((exam) => exam.status === "published");

  examSelect.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = exams.length
    ? "-- Pilih Ujian --"
    : "Belum ada ujian terbit";
  examSelect.appendChild(placeholder);

  for (const exam of exams) {
    const option = document.createElement("option");
    option.value = exam.id;
    option.textContent = `${exam.title} - Kelas ${exam.grade}`;
    examSelect.appendChild(option);
  }

  examSelect.disabled = exams.length === 0;
  refreshButton.disabled = exams.length === 0;
  participantsMessage.textContent = exams.length
    ? "Pilih ujian untuk melihat seluruh siswa pada tingkat kelas tersebut."
    : "Belum ada ujian yang diterbitkan.";
}

function updateSummary(participants) {
  const counts = {
    not_started: 0,
    in_progress: 0,
    completed: 0,
    expired: 0,
  };

  for (const participant of participants) {
    if (Object.hasOwn(counts, participant.status)) {
      counts[participant.status] += 1;
    }
  }

  document.getElementById("totalCount").textContent = String(participants.length);
  document.getElementById("notStartedCount").textContent = String(counts.not_started);
  document.getElementById("inProgressCount").textContent = String(counts.in_progress);
  document.getElementById("completedCount").textContent = String(counts.completed);
  document.getElementById("expiredCount").textContent = String(counts.expired);
  summary.hidden = false;
}

function appendCell(row, value) {
  const cell = document.createElement("td");
  cell.textContent = value === null || value === undefined || value === ""
    ? "-"
    : String(value);
  row.appendChild(cell);
}

function renderParticipants(participants) {
  participantsBody.replaceChildren();

  participants.forEach((participant, index) => {
    const row = document.createElement("tr");
    appendCell(row, index + 1);
    appendCell(row, participant.studentName || "-");
    appendCell(row, participant.nis || "-");
    appendCell(row, getClassLabel(participant));

    const statusCell = document.createElement("td");
    const statusBadge = document.createElement("span");
    const statusKey = Object.hasOwn(statusLabels, participant.status)
      ? participant.status
      : "not_started";
    statusBadge.className = `status status-${statusKey}`;
    statusBadge.textContent = statusLabels[statusKey];
    statusCell.appendChild(statusBadge);
    row.appendChild(statusCell);

    appendCell(row, participant.score === null || participant.score === undefined
      ? "-"
      : participant.score);
    appendCell(row, formatDate(participant.startedAt));
    appendCell(row, formatDate(participant.submittedAt));
    participantsBody.appendChild(row);
  });

  participantsTable.hidden = participants.length === 0;
}

async function loadParticipants(examId) {
  participantsBody.replaceChildren();
  participantsTable.hidden = true;
  summary.hidden = true;
  errorMessage.textContent = "";

  if (!examId) {
    participantsMessage.textContent = "Pilih ujian untuk melihat daftar peserta.";
    return;
  }

  participantsMessage.textContent = "Memuat data peserta...";
  refreshButton.disabled = true;
  examSelect.disabled = true;

  try {
    const data = await apiGet(
      `/api/teacher/participants/${encodeURIComponent(examId)}`
    );
    const participants = data.participants || [];
    updateSummary(participants);
    renderParticipants(participants);
    participantsMessage.textContent = participants.length
      ? `Menampilkan ${participants.length} siswa yang terdaftar pada tingkat kelas ujian ini.`
      : "Belum ada siswa terdaftar pada tingkat kelas ujian ini.";
  } catch (error) {
    console.error("Gagal memuat peserta ujian:", error);
    showError(error.message);
    participantsMessage.textContent = "Data peserta gagal dimuat.";
  } finally {
    refreshButton.disabled = false;
    examSelect.disabled = false;
  }
}

examSelect.addEventListener("change", () => {
  loadParticipants(examSelect.value);
});

refreshButton.addEventListener("click", () => {
  if (examSelect.value) loadParticipants(examSelect.value);
});

onAuthStateChanged(auth, async (user) => {
  if (pageReady) return;
  if (!user) {
    window.location.replace("teacher-login.html");
    return;
  }

  pageReady = true;
  currentUser = user;

  try {
    await verifyTeacher();
    await loadExams();
  } catch (error) {
    console.error("Verifikasi halaman peserta gagal:", error);
    showError(error.message || "Gagal memverifikasi akun guru.");
    participantsMessage.textContent = "Akses halaman tidak dapat dilanjutkan.";
    examSelect.disabled = true;
    refreshButton.disabled = true;
  }
});
