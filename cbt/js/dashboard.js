
import { auth, db } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ==========================================
// KONFIGURASI
// ==========================================

const API_BASE_URL = "https://backend.herdiantoparenta2.workers.dev";

const studentName = document.getElementById("studentName");
const studentNis = document.getElementById("studentNis");
const studentClass = document.getElementById("studentClass");
const studentSection = document.getElementById("studentSection");
const studentStatus = document.getElementById("studentStatus");

const logoutButton = document.getElementById("logoutButton");
const message = document.getElementById("dashboardMessage");

const examList = document.getElementById("examList");
const examMessage = document.getElementById("examMessage");
const historyList = document.getElementById("historyList");
const historyMessage = document.getElementById("historyMessage");

let isLoggingOut = false;
let countdownInterval = null;
let activeAttemptTimer = null;
let currentUser = null;
let activeAttempt = null;

// ==========================================
// STATE PENGERJAAN
// ==========================================

let currentQuestionIndex = 0;
let reviewQuestions = new Set();
let savedAnswers = {};
let savingQuestions = new Set();

// ==========================================
// CSS TAMPILAN CBT
// ==========================================

function installExamStyles() {
  if (document.getElementById("cbt-exam-styles")) return;

  const style = document.createElement("style");
  style.id = "cbt-exam-styles";

  style.textContent = `
    .cbt-shell {
      width: 100%;
      max-width: 1160px;
      margin: 0 auto;
      padding: 20px 24px 24px;
      background: #ffffff;
      border: 1px solid #e3eaf5;
      border-radius: 0 0 18px 18px;
      box-sizing: border-box;
      color: #17345d;
      font-family: Arial, sans-serif;
    }

    .cbt-topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #e5ebf4;
      margin-bottom: 16px;
    }

    .cbt-exam-title {
      font-size: 15px;
      font-weight: 700;
      color: #17345d;
      margin: 0 0 7px;
    }

    .cbt-exam-subtitle {
      font-size: 12px;
      color: #71829c;
      margin: 0;
    }

    .cbt-timer {
      flex-shrink: 0;
      min-width: 90px;
      padding: 14px 15px;
      border-radius: 11px;
      background: #edf4ff;
      color: #164c9a;
      text-align: center;
      font-size: 23px;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
    }

    .cbt-progress-track {
      height: 7px;
      background: #e8eef7;
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 18px;
    }

    .cbt-progress-fill {
      height: 100%;
      width: 0;
      background: #2864ed;
      border-radius: 20px;
      transition: width .2s ease;
    }

    .cbt-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 242px;
      gap: 19px;
      align-items: start;
    }

    .cbt-question-panel {
      min-width: 0;
      padding: 21px;
      border: 1px solid #e0e8f4;
      border-radius: 14px;
      background: #fbfcff;
    }

    .cbt-question-meta {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      color: #647b9b;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: .5px;
      text-transform: uppercase;
      margin-bottom: 13px;
    }

    .cbt-question-type {
      display: inline-block;
      padding: 7px 10px;
      border-radius: 20px;
      background: #edf4ff;
      color: #2457a4;
      font-size: 10px;
      font-weight: 700;
      margin-bottom: 13px;
    }

    .cbt-stimulus {
      padding: 15px 17px;
      margin-bottom: 19px;
      background: #f3f7fd;
      border: 1px solid #dce7f6;
      border-left: 4px solid #80a3d7;
      border-radius: 11px;
      color: #355477;
      line-height: 1.7;
      white-space: pre-wrap;
    }

    .cbt-stimulus-title {
      display: block;
      margin-bottom: 6px;
      font-size: 13px;
      font-weight: 700;
      color: #24446e;
    }

    .cbt-question-text {
      margin: 0 0 20px;
      color: #172b48;
      font-size: 16px;
      line-height: 1.7;
      font-weight: 700;
      white-space: pre-wrap;
    }

    .cbt-question-image {
      display: block;
      width: auto;
      max-width: 100%;
      max-height: 340px;
      height: auto;
      object-fit: contain;
      margin: 0 auto 20px;
      padding: 8px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      background: #ffffff;
    }

    .cbt-instruction {
      color: #7890ae;
      font-size: 12px;
      margin-bottom: 14px;
    }

    .cbt-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .cbt-option {
      display: flex;
      align-items: center;
      gap: 13px;
      width: 100%;
      min-height: 49px;
      padding: 10px 14px;
      box-sizing: border-box;
      border: 1px solid #d5dfed;
      border-radius: 10px;
      background: #ffffff;
      cursor: pointer;
      color: #284363;
      transition: border-color .15s, background .15s;
    }

    .cbt-option:hover {
      border-color: #7fa5e8;
      background: #f7faff;
    }

    .cbt-option.selected {
      border: 1.5px solid #2864ed;
      background: #eff5ff;
    }

    .cbt-option input {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      accent-color: #2864ed;
      margin: 0;
    }

    .cbt-option-letter {
      width: 16px;
      flex-shrink: 0;
      color: #174c94;
      font-weight: 800;
    }

    .cbt-option-text {
      font-size: 14px;
      line-height: 1.55;
      white-space: pre-wrap;
    }

    .cbt-save-status {
      min-height: 17px;
      display: block;
      margin-top: 12px;
      font-size: 11px;
      color: #64816e;
    }

    .cbt-save-status.error {
      color: #b42318;
    }

    .cbt-navigation {
      padding: 16px;
      border: 1px solid #e0e8f4;
      border-radius: 13px;
      background: #ffffff;
      position: sticky;
      top: 12px;
    }

    .cbt-navigation h3 {
      margin: 2px 0 14px;
      font-size: 14px;
      color: #17345d;
    }

    .cbt-number-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 7px;
    }

    .cbt-number {
      min-width: 0;
      height: 36px;
      border: 1px solid #d3deed;
      border-radius: 8px;
      background: #ffffff;
      color: #35506f;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }

    .cbt-number:hover {
      border-color: #2864ed;
    }

    .cbt-number.current {
      border: 2px solid #2864ed;
      color: #174cba;
      background: #eff5ff;
    }

    .cbt-number.answered {
      border-color: #80c59b;
      color: #167341;
      background: #eaf8ef;
    }

    .cbt-number.review {
      border-color: #e8bd64;
      color: #98620b;
      background: #fff7e5;
    }

    .cbt-number.current.answered {
      border: 2px solid #2864ed;
      color: #174cba;
      background: #eff5ff;
    }

    .cbt-legend {
      display: grid;
      gap: 8px;
      margin: 16px 0;
      color: #71829c;
      font-size: 11px;
    }

    .cbt-legend-item {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .cbt-legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      background: #cbd5e1;
    }

    .cbt-legend-dot.green { background: #36a269; }
    .cbt-legend-dot.yellow { background: #d69b25; }
    .cbt-legend-dot.blue { background: #2864ed; }

    .cbt-nav-divider {
      height: 1px;
      background: #e5ebf4;
      margin: 14px 0;
    }

    .cbt-completion {
      color: #58708f;
      font-size: 11px;
      margin-bottom: 12px;
    }

    .cbt-submit {
      width: 100%;
      padding: 12px 10px;
      border: 0;
      border-radius: 9px;
      background: #2864ed;
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
      cursor: not-allowed;
      opacity: .55;
    }

    .cbt-bottom-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-top: 15px;
    }

    .cbt-action-button {
      min-height: 39px;
      padding: 9px 14px;
      border: 1px solid #d4dfef;
      border-radius: 9px;
      background: #ffffff;
      color: #20446f;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }

    .cbt-action-button:disabled {
      opacity: .4;
      cursor: not-allowed;
    }

    .cbt-action-button.primary {
      border-color: #2864ed;
      background: #2864ed;
      color: #ffffff;
    }

    .cbt-action-button.marked {
      background: #fff5dc;
      border-color: #e4b95e;
      color: #8c5b08;
    }

    .cbt-message {
      margin: 12px 0;
      padding: 10px 12px;
      border-radius: 8px;
      background: #eff6ff;
      color: #28558d;
      font-size: 12px;
    }

    @media (max-width: 760px) {
      .cbt-shell {
        padding: 14px 12px;
        border-radius: 12px;
      }

      .cbt-layout {
        grid-template-columns: 1fr;
      }

      .cbt-navigation {
        position: static;
        order: -1;
      }

      .cbt-number-grid {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }

      .cbt-question-panel {
        padding: 15px;
      }

      .cbt-bottom-actions {
        flex-wrap: wrap;
      }

      .cbt-action-button {
        flex: 1;
      }
    }
  `;

  document.head.appendChild(style);
}

// ==========================================
// UTILITAS
// ==========================================

function formatDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Jadwal tidak valid";
  }

  return date.toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "short"
  });
}

function formatCountdown(milliseconds) {
  if (milliseconds <= 0) return "00:00";

  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function sanitizeQuestionSvg(svgSource) {
  if (typeof svgSource !== "string" || !svgSource.trim() || svgSource.length > 50000) {
    return "";
  }

  const allowedTags = new Set([
    "svg", "g", "path", "rect", "circle", "ellipse",
    "line", "polyline", "polygon", "text", "tspan"
  ]);
  const allowedAttributes = new Set([
    "xmlns", "viewBox", "width", "height", "x", "y",
    "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry",
    "d", "points", "fill", "fill-opacity", "stroke",
    "stroke-width", "stroke-dasharray", "stroke-linecap",
    "stroke-linejoin", "font-size", "font-weight",
    "font-family", "text-anchor", "dominant-baseline",
    "opacity", "transform"
  ]);

  try {
    const parsed = new DOMParser().parseFromString(svgSource, "image/svg+xml");
    const root = parsed.documentElement;
    if (
      root.localName !== "svg" ||
      root.namespaceURI !== "http://www.w3.org/2000/svg" ||
      parsed.querySelector("parsererror")
    ) return "";

    const elements = [root, ...root.querySelectorAll("*")];
    for (const element of elements) {
      if (!allowedTags.has(element.localName)) {
        element.remove();
        continue;
      }

      for (const attribute of [...element.attributes]) {
        const name = attribute.name;
        const value = attribute.value;
        if (
          !allowedAttributes.has(name) ||
          /url\\s*\\(|javascript:|data:/i.test(value)
        ) {
          element.removeAttribute(name);
        }
      }
    }

    return new XMLSerializer().serializeToString(root);
  } catch {
    return "";
  }
}

function createTextElement(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;

  if (className) {
    element.className = className;
  }

  return element;
}

function showExamMessage(text, isError = false) {
  if (!examMessage) return;

  examMessage.textContent = text;
  examMessage.style.color = isError ? "#b91c1c" : "";
}

async function apiRequest(path, method, user, body) {
  const idToken = await user.getIdToken();

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Authorization": `Bearer ${idToken}`,
      "Content-Type": "application/json"
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });

  let result = {};

  try {
    result = await response.json();
  } catch {
    throw new Error("Server mengirim respons yang tidak dapat dibaca.");
  }

  if (!response.ok || result.status !== "success") {
    throw new Error(
      result.message ||
      result.error ||
      `Permintaan gagal (HTTP ${response.status}).`
    );
  }

  return result;
}

// ==========================================
// DAFTAR UJIAN
// ==========================================

function updateExamStatuses() {
  if (!examList) return;

  const now = Date.now();

  examList.querySelectorAll("[data-exam-card]").forEach((card) => {
    const startAt = new Date(card.dataset.startAt).getTime();
    const endAt = new Date(card.dataset.endAt).getTime();

    const statusElement = card.querySelector("[data-exam-status]");
    const countdownElement = card.querySelector("[data-exam-countdown]");
    const startButton = card.querySelector("[data-start-exam]");

    if (!Number.isFinite(startAt) || !Number.isFinite(endAt)) {
      statusElement.textContent = "Jadwal tidak valid";
      if (startButton) startButton.disabled = true;
      return;
    }

    if (now < startAt) {
      statusElement.textContent = "Belum dimulai";
      countdownElement.textContent =
        `Dimulai dalam: ${formatCountdown(startAt - now)}`;

      if (startButton) {
        startButton.disabled = true;
        startButton.textContent = "Belum Waktunya";
      }
    } else if (now < endAt) {
      statusElement.textContent = "Sedang berlangsung";
      countdownElement.textContent = "Ujian sedang berada dalam jadwal pelaksanaan.";

      if (startButton) {
        startButton.disabled = false;
        startButton.textContent = "Mulai Ujian";
      }
    } else {
      statusElement.textContent = "Waktu ujian berakhir";
      countdownElement.textContent = "Jadwal ujian telah berakhir.";

      if (startButton) {
        startButton.disabled = true;
        startButton.textContent = "Waktu Habis";
      }
    }
  });
}

function createExamCard(exam) {
  const card = document.createElement("article");
  card.className = "dashboard-card";
  card.dataset.examCard = "true";
  card.dataset.startAt = exam.startAt;
  card.dataset.endAt = exam.endAt;

  const title = createTextElement("h3", exam.title || "Ujian Matematika");
  const description = createTextElement(
    "p",
    exam.description || "Tidak ada deskripsi ujian."
  );

  const grade = createTextElement(
    "p",
    `Kelas: ${exam.grade ? "Kelas " + exam.grade : "-"}`
  );

  const questionCount = createTextElement(
    "p",
    `Jumlah soal: ${exam.questionCount ?? 0}`
  );

  const duration = createTextElement(
    "p",
    `Durasi: ${exam.durationMinutes ?? 0} menit`
  );

  const startSchedule = createTextElement(
    "p",
    `Mulai: ${formatDate(exam.startAt)}`
  );

  const endSchedule = createTextElement(
    "p",
    `Berakhir: ${formatDate(exam.endAt)}`
  );

  const status = createTextElement("p", "Memeriksa jadwal...");
  status.dataset.examStatus = "true";

  const countdown = createTextElement("p", "");
  countdown.dataset.examCountdown = "true";

  const startButton = createTextElement(
    "button",
    "Mulai Ujian",
    "start-exam-button"
  );

  startButton.type = "button";
  startButton.dataset.startExam = "true";
  startButton.disabled = true;

  startButton.addEventListener("click", () => {
    startExam(exam, startButton);
  });

  card.append(
    title,
    description,
    grade,
    questionCount,
    duration,
    startSchedule,
    endSchedule,
    status,
    countdown,
    startButton
  );

  return card;
}

// ==========================================
// MULAI UJIAN
// ==========================================

async function startExam(exam, button) {
  if (!currentUser || button.disabled) return;

  const confirmed = window.confirm(
    `Mulai ujian "${exam.title}" sekarang?`
  );

  if (!confirmed) return;

  button.disabled = true;
  button.textContent = "Menyiapkan soal...";

  showExamMessage("Menyiapkan soal ujian...");

  try {
    const result = await apiRequest(
      `/api/student/exams/${encodeURIComponent(exam.id)}/start`,
      "POST",
      currentUser
    );

    if (
      !result.attempt ||
      !result.exam ||
      !Array.isArray(result.exam.questions)
    ) {
      throw new Error("Data pengerjaan ujian dari server tidak lengkap.");
    }

    activeAttempt = {
      examId: exam.id,
      attempt: result.attempt,
      exam: result.exam,
      user: currentUser
    };

    currentQuestionIndex = 0;
    reviewQuestions = new Set();
    savedAnswers = {
      ...(result.attempt.answers || {})
    };
    savingQuestions = new Set();

    installExamStyles();
    renderActiveExam(activeAttempt);

  } catch (error) {
    console.error("Gagal memulai ujian:", error);
    showExamMessage(error.message, true);

    button.disabled = false;
    button.textContent = "Coba Mulai Lagi";
  }
}

// ==========================================
// TAMPILKAN UJIAN
// ==========================================

function renderActiveExam(data) {
  if (!examList) return;

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  if (activeAttemptTimer) {
    clearInterval(activeAttemptTimer);
  }

  examList.replaceChildren();

  showExamMessage(
    "Ujian berlangsung. Jawaban disimpan otomatis ke server."
  );

  const questions = data.exam.questions;
  const total = questions.length;

  const shell = document.createElement("section");
  shell.className = "cbt-shell";

  // HEADER
  const topbar = document.createElement("div");
  topbar.className = "cbt-topbar";

  const titleGroup = document.createElement("div");

  const title = createTextElement(
    "h2",
    data.exam.title || "Ujian Matematika",
    "cbt-exam-title"
  );

  const subtitle = createTextElement(
    "p",
    `Peserta: ${studentName?.textContent || "-"} · ${studentClass?.textContent || "-"}`,
    "cbt-exam-subtitle"
  );

  titleGroup.append(title, subtitle);

  const timer = createTextElement(
    "div",
    "--:--",
    "cbt-timer"
  );

  topbar.append(titleGroup, timer);

  // PROGRESS
  const progressTrack = document.createElement("div");
  progressTrack.className = "cbt-progress-track";

  const progressFill = document.createElement("div");
  progressFill.className = "cbt-progress-fill";

  progressTrack.appendChild(progressFill);

  // LAYOUT
  const layout = document.createElement("div");
  layout.className = "cbt-layout";

  const questionPanel = document.createElement("section");
  questionPanel.className = "cbt-question-panel";

  const navigation = document.createElement("aside");
  navigation.className = "cbt-navigation";

  layout.append(questionPanel, navigation);

  // TOMBOL BAWAH
  const bottomActions = document.createElement("div");
  bottomActions.className = "cbt-bottom-actions";

  const previousButton = createTextElement(
    "button",
    "← Sebelumnya",
    "cbt-action-button"
  );

  previousButton.type = "button";

  const reviewButton = createTextElement(
    "button",
    "Tandai ragu-ragu",
    "cbt-action-button"
  );

  reviewButton.type = "button";

  const nextButton = createTextElement(
    "button",
    "Berikutnya →",
    "cbt-action-button primary"
  );

  nextButton.type = "button";

  bottomActions.append(
    previousButton,
    reviewButton,
    nextButton
  );

  shell.append(
    topbar,
    progressTrack,
    layout,
    bottomActions
  );

  examList.appendChild(shell);

  // ========================================
  // RENDER SOAL AKTIF
  // ========================================

  function renderQuestion() {
    const question = questions[currentQuestionIndex];
    if (!question) return;

    questionPanel.replaceChildren();

    const meta = document.createElement("div");
    meta.className = "cbt-question-meta";

    const numberLabel = createTextElement(
      "span",
      `SOAL ${currentQuestionIndex + 1} DARI ${total}`
    );

    const topicLabel = createTextElement(
      "span",
      question.topic || "MATEMATIKA"
    );

    meta.append(numberLabel, topicLabel);

    const type = createTextElement(
      "span",
      "Pilihan Ganda (PG)",
      "cbt-question-type"
    );

    questionPanel.append(meta, type);

    if (question.stimulus) {
      const stimulus = document.createElement("div");
      stimulus.className = "cbt-stimulus";

      const stimulusTitle = createTextElement(
        "strong",
        "Stimulus",
        "cbt-stimulus-title"
      );

      const stimulusText = createTextElement(
        "div",
        question.stimulus
      );

      stimulus.append(stimulusTitle, stimulusText);
      questionPanel.appendChild(stimulus);
    }

    const questionText = createTextElement(
      "h3",
      question.questionText || "",
      "cbt-question-text"
    );

    const instruction = createTextElement(
      "p",
      "Pilih satu jawaban yang paling tepat.",
      "cbt-instruction"
    );

    questionPanel.appendChild(questionText);

    const safeSvg = sanitizeQuestionSvg(question.imageSvg);
    if (safeSvg) {
      const illustration = document.createElement("img");
      illustration.className = "cbt-question-image";
      illustration.alt = "Ilustrasi soal";
      illustration.loading = "lazy";
      illustration.decoding = "async";
      illustration.src =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(safeSvg);
      questionPanel.appendChild(illustration);
    }

    questionPanel.appendChild(instruction);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "cbt-options";

    const options = question.options || {};

    ["A", "B", "C", "D"].forEach((letter) => {
      const optionText = options[letter];

      if (optionText === undefined || optionText === null) {
        return;
      }

      const label = document.createElement("label");
      label.className = "cbt-option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${question.id}`;
      radio.value = letter;

      radio.checked = savedAnswers[question.id] === letter;

      if (radio.checked) {
        label.classList.add("selected");
      }

      const letterElement = createTextElement(
        "span",
        letter,
        "cbt-option-letter"
      );

      const textElement = createTextElement(
        "span",
        String(optionText),
        "cbt-option-text"
      );

      radio.addEventListener("change", () => {
        if (radio.checked) {
          saveAnswer(
            question.id,
            letter,
            radio,
            optionsContainer
          );
        }
      });

      label.append(
        radio,
        letterElement,
        textElement
      );

      optionsContainer.appendChild(label);
    });

    const saveStatus = createTextElement(
      "small",
      savedAnswers[question.id]
        ? "Jawaban tersimpan"
        : "Belum dijawab",
      "cbt-save-status"
    );

    saveStatus.dataset.saveStatus = "true";

    questionPanel.append(
      optionsContainer,
      saveStatus
    );

    previousButton.disabled = currentQuestionIndex === 0;

    nextButton.textContent =
      currentQuestionIndex === total - 1
        ? "Soal terakhir"
        : "Berikutnya →";

    reviewButton.classList.toggle(
      "marked",
      reviewQuestions.has(question.id)
    );

    reviewButton.textContent =
      reviewQuestions.has(question.id)
        ? "Hapus tanda ragu-ragu"
        : "Tandai ragu-ragu";

    updateNavigation();
  }

  // ========================================
  // NAVIGASI NOMOR
  // ========================================

  function updateNavigation() {
    navigation.replaceChildren();

    const heading = createTextElement(
      "h3",
      "Navigasi Nomor"
    );

    const numberGrid = document.createElement("div");
    numberGrid.className = "cbt-number-grid";

    let answeredCount = 0;

    questions.forEach((question, index) => {
      const numberButton = createTextElement(
        "button",
        String(index + 1),
        "cbt-number"
      );

      numberButton.type = "button";

      const isAnswered =
        Boolean(savedAnswers[question.id]);

      const isReview =
        reviewQuestions.has(question.id);

      if (isAnswered) {
        answeredCount++;
        numberButton.classList.add("answered");
      }

      if (isReview) {
        numberButton.classList.add("review");
      }

      if (index === currentQuestionIndex) {
        numberButton.classList.add("current");
      }

      numberButton.addEventListener("click", () => {
        currentQuestionIndex = index;
        renderQuestion();
      });

      numberGrid.appendChild(numberButton);
    });

    const legend = document.createElement("div");
    legend.className = "cbt-legend";

    const legendItems = [
      ["green", "Lengkap"],
      ["yellow", "Ragu-ragu"],
      ["blue", "Sedang dibuka"],
      ["", "Belum dijawab"]
    ];

    legendItems.forEach(([color, label]) => {
      const item = document.createElement("div");
      item.className = "cbt-legend-item";

      const dot = document.createElement("span");
      dot.className = `cbt-legend-dot ${color}`;

      const text = createTextElement("span", label);

      item.append(dot, text);
      legend.appendChild(item);
    });

    const divider = document.createElement("div");
    divider.className = "cbt-nav-divider";

    const completion = createTextElement(
      "p",
      `${answeredCount} dari ${total} soal terjawab`,
      "cbt-completion"
    );

    const submitButton = createTextElement(
      "button",
      "Selesai & Kumpulkan",
      "cbt-submit"
    );

    submitButton.type = "button";
    submitButton.disabled = false;

    submitButton.style.opacity = "1";
    submitButton.style.cursor = "pointer";

    submitButton.title =
      "Klik untuk mengumpulkan ujian. Soal yang belum dijawab akan diberi peringatan.";

    submitButton.addEventListener("click", () => {
      submitExam();
    });

    navigation.append(
      heading,
      numberGrid,
      legend,
      divider,
      completion,
      submitButton
    );

    progressFill.style.width =
      `${(answeredCount / total) * 100}%`;
  }

  // ========================================
  // EVENT TOMBOL NAVIGASI
  // ========================================

  previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < total - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  });

  reviewButton.addEventListener("click", () => {
    const question = questions[currentQuestionIndex];

    if (reviewQuestions.has(question.id)) {
      reviewQuestions.delete(question.id);
    } else {
      reviewQuestions.add(question.id);
    }

    renderQuestion();
  });

  // ========================================
  // TIMER
  // ========================================

  const deadline = new Date(
    data.attempt.deadlineAt
  ).getTime();

  function updateTimer() {
    const remaining = deadline - Date.now();

    timer.textContent = formatCountdown(remaining);

    if (remaining <= 0) {
      clearInterval(activeAttemptTimer);

      questionPanel
        .querySelectorAll("input")
        .forEach((input) => {
          input.disabled = true;
        });

      previousButton.disabled = true;
      nextButton.disabled = true;
      reviewButton.disabled = true;

      showExamMessage(
        "Waktu ujian telah habis. Jawaban yang berhasil tersimpan tetap tercatat.",
        true
      );
    }
  }

  renderQuestion();
  updateTimer();

  activeAttemptTimer = setInterval(
    updateTimer,
    1000
  );
}

// ==========================================
// SIMPAN JAWABAN
// ==========================================

async function saveAnswer(
  questionId,
  answer,
  selectedRadio,
  optionsContainer
) {
  if (!activeAttempt) return;

  if (savingQuestions.has(questionId)) {
    return;
  }

  const radios = [
    ...optionsContainer.querySelectorAll(
      'input[type="radio"]'
    )
  ];

  const saveStatus =
    optionsContainer.parentElement.querySelector(
      "[data-save-status]"
    );

  savingQuestions.add(questionId);

  radios.forEach((radio) => {
    radio.disabled = true;
  });

  if (saveStatus) {
    saveStatus.textContent = "Menyimpan jawaban...";
    saveStatus.classList.remove("error");
  }

  try {
    await apiRequest(
      `/api/student/attempts/${encodeURIComponent(activeAttempt.attempt.id)}/answer`,
      "PATCH",
      activeAttempt.user,
      {
        examId: activeAttempt.examId,
        questionId,
        answer
      }
    );

    savedAnswers[questionId] = answer;

    if (saveStatus) {
      saveStatus.textContent = "Jawaban berhasil disimpan";
    }

    optionsContainer
      .querySelectorAll(".cbt-option")
      .forEach((label) => {
        const radio = label.querySelector("input");

        label.classList.toggle(
          "selected",
          radio.value === answer
        );
      });

    updateNavigationAfterSave();

  } catch (error) {
    console.error("Gagal menyimpan jawaban:", error);

    selectedRadio.checked = false;

    if (saveStatus) {
      saveStatus.textContent =
        `Gagal menyimpan: ${error.message}`;

      saveStatus.classList.add("error");
    }

    showExamMessage(
      `Jawaban belum tersimpan: ${error.message}`,
      true
    );

  } finally {
    savingQuestions.delete(questionId);

    updateNavigationAfterSave();
    
    const expired =
      Date.now() >= new Date(
        activeAttempt.attempt.deadlineAt
      ).getTime();

    radios.forEach((radio) => {
      radio.disabled = expired;
    });
  }
}

function updateNavigationAfterSave() {
  const shell = examList?.querySelector(".cbt-shell");

  if (!shell) return;

  const questions = activeAttempt.exam.questions;
  const total = questions.length;

  const buttons = shell.querySelectorAll(".cbt-number");
  let answeredCount = 0;

  questions.forEach((question, index) => {
    const button = buttons[index];
    if (!button) return;

    const isAnswered =
      Boolean(savedAnswers[question.id]);

    if (isAnswered) {
      answeredCount++;
      button.classList.add("answered");
    } else {
      button.classList.remove("answered");
    }
  });

  const completion =
    shell.querySelector(".cbt-completion");

  if (completion) {
    completion.textContent =
      `${answeredCount} dari ${total} soal terjawab`;
  }

  const progress =
    shell.querySelector(".cbt-progress-fill");

  if (progress) {
    progress.style.width =
      `${(answeredCount / total) * 100}%`;
  }
    const submitButton =
    shell.querySelector(".cbt-submit");

  if (submitButton) {
    // Tombol tetap aktif meskipun ada soal kosong.
    // Nonaktifkan hanya saat penyimpanan jawaban sedang berlangsung.
    const allSaved = savingQuestions.size === 0;

    submitButton.disabled = !allSaved;
    submitButton.style.opacity = allSaved ? "1" : "0.55";
    submitButton.style.cursor = allSaved ? "pointer" : "not-allowed";

    submitButton.title = allSaved
      ? (answeredCount === total
          ? "Semua jawaban sudah tersimpan. Klik untuk mengumpulkan ujian."
          : "Masih ada soal kosong. Klik untuk mengumpulkan dengan jawaban yang sudah ada.")
      : "Tunggu hingga jawaban selesai disimpan.";
  }
}


// ==========================================
// MENGUMPULKAN UJIAN
// ==========================================

let isSubmittingExam = false;


function showExamResultModal(result) {
  // Hapus popup lama jika masih ada
  document.getElementById("cbt-result-modal")?.remove();

  const score = Number(result.score ?? 0);
  const correct = Number(result.correctCount ?? 0);
  const wrong = Number(result.wrongCount ?? 0);
  const unanswered = Number(result.unansweredCount ?? 0);
  const total = Number(result.totalQuestions ?? 0);

  // CSS popup
  if (!document.getElementById("cbt-result-style")) {
    const style = document.createElement("style");
    style.id = "cbt-result-style";

    style.textContent = `
      .cbt-result-overlay {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(15, 23, 42, .72);
        backdrop-filter: blur(5px);
        animation: cbtFadeIn .2s ease;
      }

      .cbt-result-modal {
        width: 100%;
        max-width: 440px;
        max-height: 90vh;
        overflow-y: auto;
        background: #ffffff;
        border-radius: 22px;
        padding: 28px;
        box-shadow: 0 25px 70px rgba(0,0,0,.25);
        font-family: Arial, sans-serif;
        animation: cbtModalIn .25s ease;
      }

      .cbt-result-header {
        text-align: center;
      }

      .cbt-result-icon {
        width: 68px;
        height: 68px;
        margin: 0 auto 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #dcfce7;
        color: #16834a;
        font-size: 36px;
        font-weight: bold;
      }

      .cbt-result-header h2 {
        margin: 0;
        color: #173b70;
        font-size: 21px;
      }

      .cbt-result-header p {
        margin: 9px 0 22px;
        color: #64748b;
        font-size: 13px;
      }

      .cbt-result-score {
        padding: 22px;
        text-align: center;
        border-radius: 16px;
        background: linear-gradient(135deg, #eaf2ff, #f3f7ff);
        border: 1px solid #dbeafe;
      }

      .cbt-result-score small {
        display: block;
        color: #526987;
        font-weight: bold;
        letter-spacing: 1.5px;
        font-size: 11px;
      }

      .cbt-result-score strong {
        display: block;
        margin: 5px 0;
        color: #1769d2;
        font-size: 55px;
        line-height: 1.2;
      }

      .cbt-result-score span {
        color: #64748b;
        font-size: 12px;
      }

      .cbt-result-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-top: 17px;
      }

      .cbt-result-card {
        padding: 16px 10px;
        text-align: center;
        border: 1px solid #e2e8f0;
        border-radius: 13px;
        background: #fff;
      }

      .cbt-result-card strong {
        display: block;
        font-size: 25px;
        margin-bottom: 5px;
      }

      .cbt-result-card span {
        color: #64748b;
        font-size: 12px;
      }

      .cbt-result-card.correct strong {
        color: #16834a;
      }

      .cbt-result-card.wrong strong {
        color: #dc2626;
      }

      .cbt-result-card.unanswered strong {
        color: #d97706;
      }

      .cbt-result-card.total strong {
        color: #1769d2;
      }

      .cbt-result-close {
        width: 100%;
        margin-top: 22px;
        padding: 14px;
        border: none;
        border-radius: 11px;
        background: #1769d2;
        color: white;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        transition: background .2s;
      }

      .cbt-result-close:hover {
        background: #1255ad;
      }

      @keyframes cbtFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes cbtModalIn {
        from {
          opacity: 0;
          transform: translateY(15px) scale(.97);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @media (max-width: 480px) {
        .cbt-result-modal {
          padding: 21px;
          border-radius: 18px;
        }

        .cbt-result-header h2 {
          font-size: 18px;
        }

        .cbt-result-score strong {
          font-size: 46px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // Buat struktur popup
  const overlay = document.createElement("div");
  overlay.id = "cbt-result-modal";
  overlay.className = "cbt-result-overlay";

  overlay.innerHTML = `
    <section class="cbt-result-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cbt-result-title">

      <div class="cbt-result-header">
        <div class="cbt-result-icon">✓</div>

        <h2 id="cbt-result-title">
          UJIAN BERHASIL DIKUMPULKAN
        </h2>

        <p>
          Selamat! Hasil ujian Anda telah tersimpan.
        </p>
      </div>

      <div class="cbt-result-score">
        <small>NILAI AKHIR</small>
        <strong data-score></strong>
        <span>dari 100</span>
      </div>

      <div class="cbt-result-grid">
        <div class="cbt-result-card correct">
          <strong data-correct></strong>
          <span>Jawaban Benar</span>
        </div>

        <div class="cbt-result-card wrong">
          <strong data-wrong></strong>
          <span>Jawaban Salah</span>
        </div>

        <div class="cbt-result-card unanswered">
          <strong data-unanswered></strong>
          <span>Tidak Dijawab</span>
        </div>

        <div class="cbt-result-card total">
          <strong data-total></strong>
          <span>Total Soal</span>
        </div>
      </div>

      <button type="button" class="cbt-result-close">
        Tutup
      </button>
    </section>
  `;

  // Masukkan data nilai
  overlay.querySelector("[data-score]").textContent = score;
  overlay.querySelector("[data-correct]").textContent = correct;
  overlay.querySelector("[data-wrong]").textContent = wrong;
  overlay.querySelector("[data-unanswered]").textContent = unanswered;
  overlay.querySelector("[data-total]").textContent = total;

  // Fungsi menutup popup
  const previousOverflow = document.body.style.overflow;

  function closeModal() {
    document.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = previousOverflow;
    overlay.remove();
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  overlay.querySelector(".cbt-result-close")
    .addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", handleEscape);

  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);

  overlay.querySelector(".cbt-result-close").focus();
}

async function submitExam() {
  if (!activeAttempt || isSubmittingExam) return;

  const questions = activeAttempt.exam.questions;
  // Gunakan state jawaban terbaru yang sudah dikonfirmasi tersimpan ke server,
  // bukan snapshot attempt.answers saat ujian pertama kali dimulai.
  const answers = savedAnswers;

  const unansweredCount = questions.filter((question) => {
    return !["A", "B", "C", "D"].includes(
      answers[question.id]
    );
  }).length;

  let confirmationMessage;

  if (unansweredCount > 0) {
    confirmationMessage =
      `PERINGATAN!\n\n` +
      `Masih ada ${unansweredCount} soal yang belum dijawab.\n\n` +
      `Apakah Anda yakin ingin mengumpulkan ujian?\n` +
      `Jawaban yang sudah dikumpulkan tidak dapat diubah lagi.`;
  } else {
    confirmationMessage =
      "Semua soal sudah dijawab.\n\n" +
      "Apakah Anda yakin ingin mengumpulkan ujian?";
  }

  const confirmed = window.confirm(confirmationMessage);

  if (!confirmed) return;

  isSubmittingExam = true;

  const submitButton =
    examList.querySelector(".cbt-submit");

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Mengumpulkan...";
  }

  try {
    const result = await apiRequest(
      `/api/student/attempts/${encodeURIComponent(activeAttempt.attempt.id)}/submit`,
      "POST",
      activeAttempt.user,
      {
        examId: activeAttempt.examId
      }
    );

    console.log("HASIL API PENGUMPULAN:", result);
    console.log("DATA NILAI:", result.result);

    if (activeAttemptTimer) {
      clearInterval(activeAttemptTimer);
    }

    activeAttempt.attempt.status = "completed";

    examList.querySelectorAll(
      ".cbt-option input, .cbt-action-button, .cbt-number"
    ).forEach((element) => {
      element.disabled = true;
    });

    if (submitButton) {
      submitButton.textContent = "Ujian Berhasil Dikumpulkan";
      submitButton.disabled = true;
      submitButton.style.opacity = "1";
      submitButton.style.background = "#16834a";
      submitButton.style.cursor = "default";
    }

    showExamResultModal(result.result);

  } catch (error) {
    console.error("Gagal mengumpulkan ujian:", error);

    showExamMessage(
      `Pengumpulan gagal: ${error.message}`,
      true
    );

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Selesai & Kumpulkan";
    }

  } finally {
    isSubmittingExam = false;
  }
}

// ==========================================
// MEMUAT UJIAN
// ==========================================

async function loadStudentExams(user) {
  if (!examList || !examMessage) return;

  examList.replaceChildren();

  showExamMessage("Memuat daftar ujian...");

  try {
    const result = await apiRequest(
      "/api/student/exams",
      "GET",
      user
    );

    const exams = Array.isArray(result.exams)
      ? result.exams
      : [];

    examMessage.textContent =
      `Total ujian tersedia: ${exams.length}`;

    if (exams.length === 0) {
      showExamMessage(
        "Belum ada ujian yang tersedia untuk kelas Anda."
      );
      return;
    }

    exams.forEach((exam) => {
      examList.appendChild(createExamCard(exam));
    });

    updateExamStatuses();

    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(
      updateExamStatuses,
      1000
    );

  } catch (error) {
    console.error("Kesalahan mengambil ujian:", error);

    showExamMessage(
      `Tidak dapat memuat daftar ujian: ${error.message}`,
      true
    );
  }
}

// ==========================================
// RIWAYAT UJIAN SISWA
// ==========================================

async function loadStudentHistory(user) {
  if (!historyList || !historyMessage) return;

  historyList.replaceChildren();
  historyMessage.textContent = "Memuat riwayat ujian...";

  try {
    const result = await apiRequest(
      "/api/student/history",
      "GET",
      user
    );

    const history = Array.isArray(result.history)
      ? result.history
      : [];

    if (history.length === 0) {
      historyMessage.textContent =
        "Belum ada ujian yang selesai dikerjakan.";
      return;
    }

    historyMessage.textContent =
      `Total ujian yang telah dikerjakan: ${history.length}`;

    history.forEach((item) => {
      const card = document.createElement("div");

      card.style.cssText = `
        padding: 16px;
        margin-bottom: 12px;
        border: 1px solid #dce5f1;
        border-radius: 12px;
        background: #ffffff;
      `;

      const title = createTextElement(
        "h3",
        item.examTitle || "Ujian",
      );

      title.style.cssText =
        "margin:0 0 10px;color:#17345d;font-size:16px;";

      const grade = createTextElement(
        "p",
        `Kelas: ${item.grade || "-"}`
      );

      const score = createTextElement(
        "p",
        `Nilai: ${item.score ?? 0}`
      );

      score.style.cssText =
        "font-size:20px;font-weight:bold;color:#1769d2;";

      const correct = createTextElement(
        "p",
        `Benar: ${item.correctCount ?? 0}`
      );

      const wrong = createTextElement(
        "p",
        `Salah: ${item.wrongCount ?? 0}`
      );

      const unanswered = createTextElement(
        "p",
        `Tidak dijawab: ${item.unansweredCount ?? 0}`
      );

      const submitted = item.submittedAt
        ? new Date(item.submittedAt).toLocaleString("id-ID", {
            dateStyle: "long",
            timeStyle: "short"
          })
        : "-";

      const date = createTextElement(
        "p",
        `Dikumpulkan: ${submitted}`
      );

      [
        grade,
        score,
        correct,
        wrong,
        unanswered,
        date
      ].forEach((element) => {
        element.style.margin = "6px 0";
      });

      card.append(
        title,
        grade,
        score,
        correct,
        wrong,
        unanswered,
        date
      );

      historyList.appendChild(card);
    });

  } catch (error) {
    console.error("Gagal memuat riwayat ujian:", error);

    historyMessage.textContent =
      `Gagal memuat riwayat: ${error.message}`;

    historyMessage.style.color = "#b91c1c";
  }
}

// ==========================================
// AUTENTIKASI SISWA
// ==========================================

onAuthStateChanged(auth, async (user) => {
  if (isLoggingOut) return;

  if (!user) {
    window.location.replace("index.html");
    return;
  }

  currentUser = user;

  try {
    const profileRef = doc(db, "users", user.uid);
    const profileSnap = await getDoc(profileRef);

    if (!profileSnap.exists()) {
      throw new Error("Profil pengguna tidak ditemukan.");
    }

    const profile = profileSnap.data();

    if (
      profile.role !== "student" ||
      profile.isActive !== true
    ) {
      throw new Error(
        "Akun tidak memiliki akses siswa aktif."
      );
    }

    const studentQuery = query(
      collection(db, "students"),
      where("authUid", "==", user.uid)
    );

    const studentSnapshot = await getDocs(studentQuery);

    if (studentSnapshot.empty) {
      throw new Error("Data siswa tidak ditemukan.");
    }

    const student = studentSnapshot.docs[0].data();

    if (student.isActive !== true) {
      throw new Error("Status siswa tidak aktif.");
    }

    const classNames = {
      kelas_vii: "VII",
      kelas_viii: "VIII",
      kelas_ix: "IX"
    };

    studentName.textContent =
      student.fullName || profile.displayName || "-";

    studentNis.textContent = student.nis || "-";

    studentClass.textContent =
      classNames[student.classId] ||
      student.classId ||
      "-";

    studentSection.textContent =
      student.classSection || "-";

    studentStatus.textContent = "Aktif";

    message.textContent = "";

    await loadStudentExams(user);
    await loadStudentHistory(user);

  } catch (error) {
    console.error("Kesalahan dashboard:", error);

    message.textContent = error.message;
    studentStatus.textContent =
      "Tidak dapat diverifikasi";

    isLoggingOut = true;

    await signOut(auth);

    window.location.replace("index.html");
  }
});

// ==========================================
// LOGOUT
// ==========================================

logoutButton.addEventListener("click", async () => {
  isLoggingOut = true;

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  if (activeAttemptTimer) {
    clearInterval(activeAttemptTimer);
  }

  logoutButton.disabled = true;
  logoutButton.textContent = "Keluar...";

  try {
    await signOut(auth);
    window.location.replace("index.html");

  } catch (error) {
    isLoggingOut = false;

    message.textContent =
      `Gagal keluar: ${error.message}`;

    logoutButton.disabled = false;
    logoutButton.textContent = "Keluar";
  }
});
