
import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from
  "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Backend lokal untuk pengujian.
// Alamat produksi akan dikonfigurasi setelah pengujian selesai.
const API_BASE = "https://backend.herdiantoparenta2.workers.dev";

const $ = (id) => document.getElementById(id);

let questions = [];
let currentToken = null;

function typesetMath(element) {
  if (!window.MathJax || !element) return;

  const ready = window.MathJax.startup?.promise || Promise.resolve();

  ready
    .then(() => window.MathJax.typesetPromise?.([element]))
    .catch((error) => {
      console.warn("Gagal merender notasi matematika:", error);
    });
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

  const data = await response.json();

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

async function loadQuestions() {
  try {
    const data = await apiRequest("/api/teacher/questions");

    questions = data.questions || [];
    renderQuestions();
  } catch (error) {
    showMessage(error.message, true);
  }
}

function renderQuestions() {
  const keyword = $("searchInput").value.toLowerCase();
  const grade = $("filterGrade").value;
  const difficulty = $("filterDifficulty").value;

  const filtered = questions.filter((q) => {
    const text = `${q.questionText} ${q.topic}`.toLowerCase();

    return (
      text.includes(keyword) &&
      (!grade || q.grade === grade) &&
      (!difficulty || q.difficulty === difficulty)
    );
  });

  $("questionCount").textContent =
    `Menampilkan ${filtered.length} dari ${questions.length} soal`;

  if (!filtered.length) {
    $("questionList").innerHTML =
      "<p>Belum ada soal yang sesuai dengan pencarian.</p>";
    return;
  }

  $("questionList").innerHTML = filtered.map((q) => `
    <article class="question">
      <h4>${escapeHTML(q.questionText)}</h4>

      <div class="meta">
        Kelas ${escapeHTML(q.grade)} |
        ${escapeHTML(q.topic)} |
        ${escapeHTML(q.difficulty)}
      </div>

      <div class="options">
        ${["A", "B", "C", "D"].map((key) => `
          <div class="option">
            <strong>${key}.</strong>
            ${escapeHTML(q.options?.[key])}
          </div>
        `).join("")}
      </div>

      <div class="answer">
        Kunci jawaban: ${escapeHTML(q.correctAnswer)}
      </div>

      <div class="meta">
        <span class="status ${q.isActive ? "active" : "inactive"}">
          ${q.isActive ? "Aktif" : "Nonaktif"}
        </span>
      </div>

      <div class="actions">
        <button class="secondary" data-edit="${escapeHTML(q.id)}">
          Edit
        </button>
        <button class="danger" data-delete="${escapeHTML(q.id)}">
          Hapus
        </button>
      </div>
    </article>
  `).join("");

  typesetMath($("questionList"));

  $("questionList").querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editQuestion(button.dataset.edit);
    });
  });

  $("questionList").querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      removeQuestion(button.dataset.delete);
    });
  });
}

function resetForm() {
  $("questionForm").reset();
  $("questionId").value = "";
  $("formTitle").textContent = "Tambah Soal Baru";
  $("saveButton").textContent = "Simpan Soal";
  $("cancelButton").classList.add("hidden");
  $("grade").value = "7";
  $("difficulty").value = "mudah";
  $("correctAnswer").value = "A";
  $("isActive").value = "true";
}

function editQuestion(id) {
  const q = questions.find((item) => item.id === id);

  if (!q) return;

  $("questionId").value = q.id;
  $("grade").value = q.grade;
  $("difficulty").value = q.difficulty;
  $("topic").value = q.topic;
  $("questionText").value = q.questionText;

  $("optionA").value = q.options.A;
  $("optionB").value = q.options.B;
  $("optionC").value = q.options.C;
  $("optionD").value = q.options.D;

  $("correctAnswer").value = q.correctAnswer;
  $("isActive").value = String(q.isActive);

  $("formTitle").textContent = "Edit Soal";
  $("saveButton").textContent = "Simpan Perubahan";
  $("cancelButton").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function removeQuestion(id) {
  const confirmed = confirm(
    "Apakah kakak yakin ingin menghapus soal ini?"
  );

  if (!confirmed) return;

  try {
    await apiRequest(
      `/api/teacher/questions/${encodeURIComponent(id)}`,
      { method: "DELETE" }
    );

    showMessage("Soal berhasil dihapus.");
    await loadQuestions();
  } catch (error) {
    showMessage(error.message, true);
  }
}

$("questionForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = $("questionId").value;

  const payload = {
    grade: $("grade").value,
    topic: $("topic").value.trim(),
    difficulty: $("difficulty").value,
    questionText: $("questionText").value.trim(),

    options: {
      A: $("optionA").value.trim(),
      B: $("optionB").value.trim(),
      C: $("optionC").value.trim(),
      D: $("optionD").value.trim()
    },

    correctAnswer: $("correctAnswer").value,
    isActive: $("isActive").value === "true"
  };

  $("saveButton").disabled = true;

  try {
    if (id) {
      await apiRequest(
        `/api/teacher/questions/${encodeURIComponent(id)}`,
        {
          method: "PATCH",
          body: JSON.stringify(payload)
        }
      );

      showMessage("Soal berhasil diperbarui.");
    } else {
      await apiRequest("/api/teacher/questions", {
        method: "POST",
        body: JSON.stringify(payload)
      });

      showMessage("Soal berhasil ditambahkan.");
    }

    resetForm();
    await loadQuestions();
  } catch (error) {
    showMessage(error.message, true);
  } finally {
    $("saveButton").disabled = false;
  }
});

$("cancelButton").addEventListener("click", resetForm);

$("searchInput").addEventListener("input", renderQuestions);
$("filterGrade").addEventListener("change", renderQuestions);
$("filterDifficulty").addEventListener("change", renderQuestions);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "teacher-login.html";
    return;
  }

  try {
    currentToken = await user.getIdToken();

    const profile = await apiRequest("/api/auth/me");

    if (
      profile.user.role !== "teacher" ||
      !profile.user.isActive
    ) {
      await auth.signOut();
      window.location.href = "teacher-login.html";
      return;
    }

    await loadQuestions();
  } catch (error) {
    showMessage(error.message, true);
  }
});
