
import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const API_BASE = "https://backend.herdiantoparenta2.workers.dev";

const $ = (id) => document.getElementById(id);

let currentToken = null;
let questions = [];
let exams = [];
let selectedQuestionIds = new Set();

function typesetMath(element) {
  if (window.MathJax?.typesetPromise && element) {
    window.MathJax.typesetPromise([element]).catch((error) => {
      console.warn("Gagal merender notasi matematika:", error);
    });
  }
}

function showMessage(message, error = false) {
  $("message").textContent = message;
  $("message").style.color = error ? "#b91c1c" : "#15803d";
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentToken}`,
      ...options.headers
    }
  });

  const data = await response.json().catch(() => ({}));

  if (response.status === 401 || response.status === 403) {
    await auth.signOut();
    window.location.href = "teacher-login.html";
    throw new Error("Sesi guru tidak valid atau akses ditolak.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Permintaan gagal.");
  }

  return data;
}

function toLocalDateTime(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  );

  return localDate.toISOString().slice(0, 16);
}

function toISOString(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new Error("Tanggal atau jam ujian tidak valid.");
  }

  return date.toISOString();
}

function formatDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function renderQuestionPicker() {
  const grade = $("grade").value;

  const available = questions.filter(
    (question) =>
      question.grade === grade &&
      question.isActive === true
  );

  if (available.length === 0) {
    $("questionPicker").innerHTML =
      "<p>Belum ada soal aktif untuk kelas ini. Tambahkan soal melalui Bank Soal terlebih dahulu.</p>";

    updateSelectionCount();
    return;
  }

  $("questionPicker").innerHTML = available.map((q) => `
    <label class="question-choice">
      <input
        type="checkbox"
        value="${escapeHTML(q.id)}"
        ${selectedQuestionIds.has(q.id) ? "checked" : ""}
      >

      <span>
        ${escapeHTML(q.questionText)}
        <small>
          Materi: ${escapeHTML(q.topic)} |
          Kesulitan: ${escapeHTML(q.difficulty)}
        </small>
      </span>
    </label>
  `).join("");

  typesetMath($("questionPicker"));

  $("questionPicker")
    .querySelectorAll('input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedQuestionIds.add(checkbox.value);
        } else {
          selectedQuestionIds.delete(checkbox.value);
        }

        updateSelectionCount();
      });
    });

  updateSelectionCount();
}

function updateSelectionCount() {
  $("questionSelectionCount").textContent =
    `${selectedQuestionIds.size} soal dipilih.`;
}

async function loadQuestions() {
  const data = await apiRequest("/api/teacher/questions");

  questions = data.questions || [];
  renderQuestionPicker();
}

async function loadExams() {
  const data = await apiRequest("/api/teacher/exams");

  exams = data.exams || [];
  renderExams();
}

function renderExams() {
  const keyword = $("searchInput").value.toLowerCase();

  const filtered = exams.filter((exam) =>
    `${exam.title} ${exam.grade}`.toLowerCase().includes(keyword)
  );

  $("examCount").textContent =
    `Menampilkan ${filtered.length} dari ${exams.length} ujian.`;

  if (filtered.length === 0) {
    $("examList").innerHTML =
      "<p>Belum ada ujian yang sesuai dengan pencarian.</p>";
    return;
  }

  const statusLabels = {
    draft: "Draft",
    published: "Terbit",
    closed: "Ditutup"
  };

  $("examList").innerHTML = filtered.map((exam) => `
    <article class="exam-card">
      <h4>${escapeHTML(exam.title)}</h4>

      <div class="exam-meta">
        Kelas ${escapeHTML(exam.grade)}<br>
        Jumlah soal: ${exam.questions?.length ?? 0}<br>
        Durasi: ${escapeHTML(exam.durationMinutes)} menit<br>
        Mulai: ${escapeHTML(formatDate(exam.startAt))}<br>
        Berakhir: ${escapeHTML(formatDate(exam.endAt))}<br>
        Acak soal: ${exam.shuffleQuestions ? "Ya" : "Tidak"}
      </div>

      <span class="status status-${escapeHTML(exam.status)}">
        ${escapeHTML(statusLabels[exam.status] || exam.status)}
      </span>

      <div class="actions" style="margin-top: 14px">
        <button
          type="button"
          class="secondary"
          data-edit="${escapeHTML(exam.id)}"
        >
          Edit
        </button>

        <button
          type="button"
          class="danger"
          data-delete="${escapeHTML(exam.id)}"
        >
          Hapus
        </button>
      </div>
    </article>
  `).join("");

  $("examList").querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editExam(button.dataset.edit);
    });
  });

  $("examList").querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      removeExam(button.dataset.delete);
    });
  });
}

function resetForm() {
  $("examForm").reset();

  $("examId").value = "";
  $("formTitle").textContent = "Buat Ujian Baru";
  $("saveButton").textContent = "Simpan Ujian";
  $("cancelButton").classList.add("hidden");

  $("grade").value = "7";
  $("durationMinutes").value = "90";
  $("shuffleQuestions").value = "false";
  $("status").value = "draft";

  selectedQuestionIds.clear();
  renderQuestionPicker();
}

function editExam(id) {
  const exam = exams.find((item) => item.id === id);

  if (!exam) return;

  $("examId").value = exam.id;
  $("title").value = exam.title;
  $("grade").value = exam.grade;
  $("description").value = exam.description || "";

  $("startAt").value = toLocalDateTime(exam.startAt);
  $("endAt").value = toLocalDateTime(exam.endAt);

  $("durationMinutes").value = exam.durationMinutes;
  $("shuffleQuestions").value = String(exam.shuffleQuestions);
  $("status").value = exam.status;

  selectedQuestionIds = new Set(exam.questionIds || []);

  $("formTitle").textContent = "Edit Ujian";
  $("saveButton").textContent = "Simpan Perubahan";
  $("cancelButton").classList.remove("hidden");

  renderQuestionPicker();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

async function removeExam(id) {
  const confirmed = confirm(
    "Apakah kakak yakin ingin menghapus ujian ini?"
  );

  if (!confirmed) return;

  try {
    await apiRequest(
      `/api/teacher/exams/${encodeURIComponent(id)}`,
      { method: "DELETE" }
    );

    showMessage("Ujian berhasil dihapus.");
    await loadExams();
  } catch (error) {
    showMessage(error.message, true);
  }
}

$("examForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = $("examId").value;

  if (selectedQuestionIds.size === 0) {
    showMessage("Pilih minimal satu soal untuk ujian.", true);
    return;
  }
  if (
    $("status").value === "published" &&
    selectedQuestionIds.size < 10
  ) {
    showMessage(
      "Ujian hanya dapat diterbitkan jika memiliki minimal 10 soal.",
      true
    );
    return;
  }
  
  $("status").addEventListener("change", () => {
    if (
      $("status").value === "published" &&
      selectedQuestionIds.size < 10
    ) {
      $("status").value = "draft";

      showMessage(
        "Minimal 10 soal harus dipilih sebelum ujian dapat diterbitkan.",
        true
      );
    }
  });

  let startAt;
  let endAt;

  try {
    startAt = toISOString($("startAt").value);
    endAt = toISOString($("endAt").value);
  } catch (error) {
    showMessage(error.message, true);
    return;
  }

  if (new Date(endAt) <= new Date(startAt)) {
    showMessage(
      "Waktu berakhir harus setelah waktu mulai.",
      true
    );
    return;
  }

  const payload = {
    title: $("title").value.trim(),
    grade: $("grade").value,
    description: $("description").value.trim(),
    questionIds: [...selectedQuestionIds],
    startAt,
    endAt,
    durationMinutes: Number($("durationMinutes").value),
    shuffleQuestions: $("shuffleQuestions").value === "true",
    status: $("status").value
  };

  $("saveButton").disabled = true;

  try {
    if (id) {
      await apiRequest(
        `/api/teacher/exams/${encodeURIComponent(id)}`,
        {
          method: "PATCH",
          body: JSON.stringify(payload)
        }
      );

      showMessage("Ujian berhasil diperbarui.");
    } else {
      await apiRequest("/api/teacher/exams", {
        method: "POST",
        body: JSON.stringify(payload)
      });

      showMessage("Ujian berhasil dibuat.");
    }

    resetForm();
    await loadExams();
  } catch (error) {
    showMessage(error.message, true);
  } finally {
    $("saveButton").disabled = false;
  }
});

$("grade").addEventListener("change", () => {
  selectedQuestionIds.clear();
  renderQuestionPicker();
});

$("cancelButton").addEventListener("click", resetForm);

$("searchInput").addEventListener("input", renderExams);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "teacher-login.html";
    return;
  }

  try {
    currentToken = await user.getIdToken(true);

    const profile = await apiRequest("/api/auth/me");

    if (
      profile.user.role !== "teacher" ||
      !profile.user.isActive
    ) {
      await auth.signOut();
      window.location.href = "teacher-login.html";
      return;
    }

    await Promise.all([
      loadQuestions(),
      loadExams()
    ]);
  } catch (error) {
    showMessage(error.message, true);
  }
});
