(() => {
  "use strict";
  const type = document.body.dataset.generator;
  const form = document.getElementById("generatorForm");
  const preview = document.getElementById("documentPreview");
  const wordButton = document.getElementById("downloadWord");
  const printButton = document.getElementById("printPdf");
  const copyButton = document.getElementById("copyText");
  const aiGenerateButton = document.getElementById("aiGenerate");
  const aiReviseButton = document.getElementById("aiRevise");
  const aiRevisionPrompt = document.getElementById("aiRevisionPrompt");
  const toast = document.getElementById("toast");
  if (!form || !preview || !["soal", "modul", "lkpd"].includes(type)) return;

  // Isi AI hanya hidup di memori halaman; dokumen tidak otomatis diterbitkan ke bank soal.
  let aiContent = null;

  const atpSelect = document.getElementById("atpReference");
  const atpRecords = Array.isArray(window.daftarATP) ? window.daftarATP : [];
  const get = id => {
    const node = document.getElementById(id);
    if (!node) return "";
    if (node.type === "checkbox") return node.checked;
    return String(node.value || "").trim();
  };
  const esc = value => String(value ?? "").replace(/[&<>\"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const fallback = value => value ? esc(value) : '<span class="rg-output-empty">[Belum diisi — klik untuk melengkapi]</span>';
  const paragraphs = value => {
    if (!value) return '<p class="rg-output-empty">[Belum diisi — klik untuk melengkapi]</p>';
    return String(value).split(/\n+/).map(line => line.trim()).filter(Boolean).map(line => `<p>${esc(line)}</p>`).join("");
  };
  const metaTable = rows => `<table class="rg-doc-meta"><tbody>${rows.map(([label, value]) => `<tr><td style="width:155px"><strong>${esc(label)}</strong></td><td>: ${fallback(value)}</td></tr>`).join("")}</tbody></table>`;
  const section = (title, content) => `<section class="rg-doc-section"><h2>${esc(title)}</h2>${content || '<p class="rg-output-empty">[Lengkapi bagian ini]</p>'}</section>`;
  const safeFileName = value => (String(value || "MathSMP-Dokumen").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9_-]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 65) || "MathSMP-Dokumen");

  function buildQuestionDocument() {
    const count = Math.max(1, Math.min(40, Number.parseInt(get("questionCount"), 10) || 10));
    const typeLabel = {pg: "Pilihan Ganda", isian: "Isian Singkat", uraian: "Uraian", campuran: "Campuran"}[get("questionType")] || "Pilihan Ganda";
    const questionBlock = (number, kind) => {
      if (kind === "pg") return `<div class="rg-doc-question"><p><strong>${number}.</strong> [Tuliskan pernyataan atau soal di sini]</p><ol class="rg-doc-options" type="A"><li>[Pilihan A]</li><li>[Pilihan B]</li><li>[Pilihan C]</li><li>[Pilihan D]</li></ol></div>`;
      if (kind === "isian") return `<div class="rg-doc-question"><p><strong>${number}.</strong> [Tuliskan soal isian singkat di sini]</p><p>Jawaban: ........................................................................................................</p></div>`;
      return `<div class="rg-doc-question"><p><strong>${number}.</strong> [Tuliskan soal uraian di sini]</p><div class="rg-doc-answer-space"></div><div class="rg-doc-answer-space"></div></div>`;
    };
    const generatedQuestions = Array.isArray(aiContent?.questions) ? aiContent.questions : null;
    const blocks = generatedQuestions
      ? generatedQuestions.map((item, index) => {
          const kind = item.type || "pg";
          const kindLabel = { pg: "Pilihan Ganda", isian: "Isian Singkat", uraian: "Uraian" }[kind] || "Soal";
          let detail = "";
          if (kind === "pg") {
            detail = `<ol class="rg-doc-options" type="A">${(item.options || []).map(option => `<li>${esc(option)}</li>`).join("")}</ol>`;
          } else if (kind === "isian") {
            detail = '<p>Jawaban: ........................................................................................................</p>';
          } else {
            detail = '<div class="rg-doc-answer-space"></div><div class="rg-doc-answer-space"></div>';
          }
          return `<div class="rg-doc-question"><p><strong>${index + 1}.</strong> <span class="rg-doc-small">[${esc(kindLabel)}]</span> ${esc(item.question)}</p>${detail}</div>`;
        }).join("")
      : Array.from({length: count}, (_, index) => {
          let kind = get("questionType");
          if (kind === "campuran") kind = ["pg", "isian", "uraian"][index % 3];
          return questionBlock(index + 1, kind);
        }).join("");
    const school = get("school");
    const includeKey = get("includeKey");
    const keyRows = generatedQuestions
      ? generatedQuestions.map((item, i) => `<tr><td>${i + 1}</td><td>${esc(item.answer || "")}</td><td>${esc(item.explanation || "")}</td></tr>`).join("")
      : Array.from({length: count}, (_, i) => `<tr><td>${i + 1}</td><td>[Isi kunci]</td><td>[Tuliskan pembahasan]</td></tr>`).join("");
    const keyPage = includeKey ? `<div style="page-break-before:always"></div><h2>KUNCI JAWABAN DAN PEMBAHASAN (UNTUK GURU)</h2><p class="rg-doc-small">${generatedQuestions ? "Kunci dan pembahasan merupakan draf AI; guru wajib memeriksa kembali sebelum digunakan." : "Lengkapi kunci dan pembahasan setelah butir soal selesai ditinjau."}</p><table><thead><tr><th style="width:50px">No.</th><th style="width:150px">Kunci</th><th>Pembahasan / alasan jawaban</th></tr></thead><tbody>${keyRows}</tbody></table>` : "";
    return `<h1>NASKAH SOAL ${esc((get("subject") || "MATEMATIKA").toUpperCase())}</h1><p class="rg-doc-subtitle">${fallback(school)}${school ? "<br>" : ""}Tahun Pelajaran: [Isi tahun pelajaran]</p>${metaTable([["Mata Pelajaran", get("subject") || "Matematika"],["Kelas / Semester", `${get("className") || "…"} / ${get("semester") || "…"}`],["Materi", get("topic")],["Dimensi Profil Lulusan", get("dimensions")],["Nama", "........................................................"],["Hari / Tanggal", "........................................................"],["Alokasi Waktu", "........................................................"]])}${section("Tujuan Pembelajaran (TP)", paragraphs(get("mainObjective")))}${section("Tujuan Pembelajaran Khusus (TPK) / Tujuan yang Diukur", paragraphs(get("objective")))}${section("Petunjuk Pengerjaan", paragraphs(get("instruction")))}<h2>SOAL (${esc(typeLabel.toUpperCase())})</h2>${blocks}${keyPage}<p class="rg-doc-small" style="margin-top:24px;text-align:center">MathSMP · Dokumen disusun dan ditinjau oleh guru</p>`;
  }

  function buildModuleDocument() {
    const rows = [["Satuan Pendidikan", get("school")], ["Penyusun", get("teacher")], ["Mata Pelajaran", get("subject") || "Matematika"], ["Fase / Kelas", `${get("phase") || "…"} / ${get("className") || "…"}`], ["Semester", get("semester")], ["Materi", get("topic")], ["Alokasi Waktu", get("allocation")], ["Dimensi Profil Lulusan", get("dimensions")]];
    return `<h1>MODUL AJAR</h1><p class="rg-doc-subtitle">${fallback(get("subject") || "Matematika")} · Fase ${fallback(get("phase"))}</p>${metaTable(rows)}${section("A. Capaian Pembelajaran (CP)", paragraphs(get("cp")))}${section("B. Tujuan Pembelajaran (TP)", paragraphs(get("mainObjective")))}${section("C. Tujuan Pembelajaran Khusus (TPK)", paragraphs(get("objective")))}${section("D. Kompetensi Awal", paragraphs(get("prior")))}${section("E. Pemahaman Bermakna", paragraphs(get("understanding")))}${section("F. Pertanyaan Pemantik", paragraphs(get("trigger")))}${section("G. Model dan Pendekatan Pembelajaran", paragraphs(get("model")))}${section("H. Langkah-Langkah Pembelajaran", `<h3>1. Kegiatan Pendahuluan</h3>${paragraphs(get("opening"))}<h3>2. Kegiatan Inti</h3>${paragraphs(get("core"))}<h3>3. Kegiatan Penutup</h3>${paragraphs(get("closing"))}`)}${section("I. Asesmen", paragraphs(get("assessment")))}${section("J. Diferensiasi dan Tindak Lanjut", paragraphs(get("differentiation")))}${section("K. Refleksi", paragraphs(get("reflection")))}<p class="rg-doc-small" style="margin-top:25px">Catatan: CP perlu diisi dengan merujuk dokumen CP yang berlaku; ATP sumber hanya menyediakan TP dan TPK sebagai kolom terpisah.</p>`;
  }

  function buildLKPDDocument() {
    const taskCount = Math.max(1, Math.min(20, Number.parseInt(get("taskCount"), 10) || 5));
    const taskType = get("taskType") || "Jawaban singkat";
    const generatedTasks = Array.isArray(aiContent?.tasks) ? aiContent.tasks : null;
    const tasks = generatedTasks
      ? generatedTasks.map((task, i) => `<tr><td style="width:38px">${i + 1}</td><td>${esc(task)}</td><td>[Ruang jawaban peserta didik]</td></tr>`).join("")
      : Array.from({length: taskCount}, (_, i) => `<tr><td style="width:38px">${i + 1}</td><td>[Tuliskan pertanyaan atau tugas ${i + 1}]</td><td>[Ruang jawaban peserta didik]</td></tr>`).join("");
    const steps = get("activity") ? `<ol>${get("activity").split(/\n+/).map(x => x.trim()).filter(Boolean).map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : '<p class="rg-output-empty">[Tambahkan langkah kegiatan, satu langkah per baris]</p>';
    return `<h1>LEMBAR KERJA PESERTA DIDIK (LKPD)</h1><p class="rg-doc-subtitle">${fallback(get("subject") || "Matematika")} · ${fallback(get("topic"))}</p>${metaTable([["Satuan Pendidikan", get("school")], ["Nama Guru", get("teacher")], ["Kelas / Semester", `${get("className") || "…"} / ${get("semester") || "…"}`], ["Alokasi Waktu", get("allocation")], ["Bentuk Kerja", get("grouping")], ["Dimensi Profil Lulusan", get("dimensions")]])}${section("A. Acuan Tujuan Pembelajaran (TP)", paragraphs(get("mainObjective")))}${section("B. Tujuan Kegiatan / Tujuan Pembelajaran Khusus (TPK)", paragraphs(get("objective")))}${section("C. Alat, Bahan, dan Sumber Belajar", paragraphs(get("materials")))}${section("D. Informasi / Stimulus", paragraphs(get("stimulus")))}${section("E. Petunjuk Pengerjaan", paragraphs(get("instructions")))}${section("F. Langkah Kegiatan", steps)}${section("G. Tugas dan Pertanyaan", `<p class="rg-doc-small">Bentuk respons: ${esc(taskType)}</p><table><thead><tr><th>No.</th><th>Tugas / Pertanyaan</th><th>Jawaban / Hasil Kerja</th></tr></thead><tbody>${tasks}</tbody></table>`)}${section("H. Kesimpulan", '<p>[Tuliskan kesimpulan berdasarkan hasil kegiatan.]</p><div class="rg-doc-answer-space"></div>')}${section("I. Refleksi Peserta Didik", paragraphs(get("reflection")))}<p class="rg-doc-small" style="margin-top:25px">MathSMP · Lembar kerja dapat disesuaikan dengan kebutuhan pembelajaran</p>`;
  }

  function setupAtpReference() {
    if (!atpSelect) return;
    const topicSelect = document.getElementById("atpTopicSelect");
    const subtopicSelect = document.getElementById("atpSubtopicSelect");
    const classField = document.getElementById("className");
    const semesterField = document.getElementById("semester");
    const topicField = document.getElementById("topic");
    const mainObjectiveField = document.getElementById("mainObjective");
    const objectiveField = document.getElementById("objective");
    const dimensionsField = document.getElementById("dimensions");
    const allocationField = document.getElementById("allocation");
    const phaseField = document.getElementById("phase");
    const usable = atpRecords.filter(item => item && item.id && item.judul && Array.isArray(item.pokokBahasan));

    usable.forEach(item => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = `${item.judul} — Kelas ${item.kelas || "VII–IX"}`;
      atpSelect.appendChild(option);
    });
    if (!usable.length) {
      atpSelect.disabled = true;
      atpSelect.innerHTML = '<option value="">Data ATP belum tersedia — isi manual</option>';
    }

    const activeRecord = () => usable.find(item => item.id === atpSelect.value) || null;
    const resetSelect = (node, placeholder) => {
      if (!node) return;
      node.innerHTML = "";
      const option = document.createElement("option");
      option.value = "";
      option.textContent = placeholder;
      node.appendChild(option);
    };
    const semesterNumber = () => {
      if (!semesterField) return 1;
      const value = String(semesterField.value).toLowerCase();
      return value === "2" || value.includes("genap") ? 2 : 1;
    };
    let currentTopics = [];
    let currentSubtopics = [];

    function updateTopics() {
      const record = activeRecord();
      resetSelect(topicSelect, record ? "Pilih pokok bahasan…" : "Pilih referensi ATP terlebih dahulu");
      resetSelect(subtopicSelect, "Pilih pokok bahasan terlebih dahulu");
      if (topicSelect) topicSelect.disabled = !record;
      if (subtopicSelect) subtopicSelect.disabled = true;
      currentTopics = [];
      currentSubtopics = [];
      if (!record) return;
      if (topicField) topicField.value = "";
      if (mainObjectiveField) mainObjectiveField.value = "";
      if (objectiveField) objectiveField.value = "";
      if (dimensionsField) dimensionsField.value = "";
      if (allocationField) allocationField.value = "";
      const klass = classField ? classField.value : "";
      const sem = semesterNumber();
      currentTopics = record.pokokBahasan.filter(topic => topic.kelas === klass && Number(topic.semester) === sem);
      currentTopics.forEach((topic, index) => {
        const option = document.createElement("option");
        option.value = String(index);
        option.textContent = `${topic.no === "Proyek" ? "★ Proyek" : topic.no + "."} ${topic.materi} (${topic.jpTotal || "—"} JP)`;
        topicSelect.appendChild(option);
      });
      if (!currentTopics.length) {
        resetSelect(topicSelect, "Tidak ada pokok bahasan untuk pilihan ini");
        if (topicSelect) topicSelect.disabled = true;
      }
    }

    function updateSubtopics() {
      const index = Number.parseInt(topicSelect?.value, 10);
      const topic = Number.isInteger(index) ? currentTopics[index] : null;
      resetSelect(subtopicSelect, topic ? "Pilih subpokok bahasan / TPK…" : "Pilih pokok bahasan terlebih dahulu");
      currentSubtopics = topic && Array.isArray(topic.subPokokBahasan) ? topic.subPokokBahasan : [];
      if (subtopicSelect) subtopicSelect.disabled = !topic || !currentSubtopics.length;
      if (!topic) return;
      if (topicField) topicField.value = topic.materi || "";
      if (mainObjectiveField) mainObjectiveField.value = topic.tp || "";
      if (objectiveField) objectiveField.value = "";
      if (dimensionsField) dimensionsField.value = "";
      if (allocationField) allocationField.value = "";
      currentSubtopics.forEach((sub, subIndex) => {
        const option = document.createElement("option");
        option.value = String(subIndex);
        option.textContent = `${sub.materi}${sub.jpTotal ? ` (${sub.jpTotal} JP)` : ""}`;
        subtopicSelect.appendChild(option);
      });
      if (!currentSubtopics.length && objectiveField) objectiveField.value = "";
    }

    function applySubtopic() {
      const index = Number.parseInt(subtopicSelect?.value, 10);
      const sub = Number.isInteger(index) ? currentSubtopics[index] : null;
      const topicIndex = Number.parseInt(topicSelect?.value, 10);
      const topic = Number.isInteger(topicIndex) ? currentTopics[topicIndex] : null;
      if (!sub || !topic) return;
      if (topicField) topicField.value = `${topic.materi} — ${sub.materi}`;
      if (objectiveField) objectiveField.value = sub.tujuan || "";
      if (dimensionsField) dimensionsField.value = sub.dimensi || "";
      if (allocationField) {
        const parts = [];
        if (sub.jpTPK) parts.push(`${sub.jpTPK} JP TPK`);
        if (sub.jpUH) parts.push(`${sub.jpUH} JP UH`);
        const total = sub.jpTotal || sub.jpTPK;
        allocationField.value = parts.length ? `${parts.join(" + ")}${total ? ` = ${total} JP total` : ""}` : (total ? `${total} JP` : "");
      }
      showToast("TP dan TPK dari ATP diterapkan. Periksa kembali sebelum membuat dokumen.");
    }

    atpSelect.addEventListener("change", () => {
      const record = activeRecord();
      if (record && phaseField) phaseField.value = record.fase || "D";
      updateTopics();
      if (!record) showToast("Mode manual dipilih. Isi materi dan tujuan pembelajaran sendiri.");
    });
    if (classField) classField.addEventListener("change", updateTopics);
    if (semesterField) semesterField.addEventListener("change", updateTopics);
    if (topicSelect) topicSelect.addEventListener("change", updateSubtopics);
    if (subtopicSelect) subtopicSelect.addEventListener("change", applySubtopic);
    form.addEventListener("reset", () => window.setTimeout(() => {
      if (atpSelect) atpSelect.value = "";
      updateTopics();
    }, 0));
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function enableActions(enabled) {
    [wordButton, printButton, copyButton].forEach(button => { button.disabled = !enabled; });
  }

  function renderDocument(message) {
    let markup = "";
    if (type === "soal") markup = buildQuestionDocument();
    if (type === "modul") markup = buildModuleDocument();
    if (type === "lkpd") markup = buildLKPDDocument();
    preview.className = "rg-document-wrap";
    preview.innerHTML = `<article class="rg-document" contenteditable="true" spellcheck="true" aria-label="Dokumen hasil generator. Klik teks untuk menyunting.">${markup}</article>`;
    enableActions(true);
    if (aiReviseButton) aiReviseButton.disabled = false;
    if (message) showToast(message);
    if (window.innerWidth < 900) preview.scrollIntoView({behavior: "smooth", block: "start"});
  }

  function generate(event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    aiContent = null;
    renderDocument("Kerangka manual berhasil dibuat. Klik area pratinjau untuk mengedit, atau minta AI mengembangkan draf ini.");
  }

  function collectFormData() {
    const result = {};
    form.querySelectorAll("input[id], textarea[id], select[id]").forEach(node => {
      if (node.type === "checkbox") result[node.id] = node.checked;
      else result[node.id] = String(node.value || "").trim();
    });
    return result;
  }

  function setFieldValue(id, value) {
    const node = document.getElementById(id);
    if (node && typeof value === "string") node.value = value;
  }

  function validateAIResult(result) {
    if (!result || typeof result !== "object") throw new Error("Hasil AI tidak lengkap.");
    if (type === "modul") {
      const required = ["prior", "understanding", "trigger", "model", "opening", "core", "closing", "assessment", "differentiation", "reflection"];
      const missing = required.filter(key => typeof result[key] !== "string" || !result[key].trim());
      if (missing.length) throw new Error(`Hasil modul belum lengkap pada bagian: ${missing.join(", ")}. Silakan generate ulang.`);
      return result;
    }
    if (type === "lkpd") {
      const expected = Math.max(1, Math.min(20, Number.parseInt(get("taskCount"), 10) || 5));
      const fields = ["materials", "stimulus", "instructions", "activity", "reflection"];
      const missing = fields.filter(key => typeof result[key] !== "string" || !result[key].trim());
      if (missing.length) throw new Error(`Hasil LKPD belum lengkap pada bagian: ${missing.join(", ")}.`);
      if (!Array.isArray(result.tasks) || result.tasks.length !== expected || result.tasks.some(task => typeof task !== "string" || !task.trim())) {
        throw new Error(`AI harus menghasilkan tepat ${expected} tugas LKPD. Hasil belum sesuai; silakan generate ulang.`);
      }
      return result;
    }

    const expected = Math.max(1, Math.min(40, Number.parseInt(get("questionCount"), 10) || 10));
    if (!Array.isArray(result.questions) || result.questions.length !== expected) {
      throw new Error(`AI harus menghasilkan tepat ${expected} soal. Hasil belum sesuai; silakan generate ulang.`);
    }
    const requestedType = get("questionType");
    result.questions.forEach((item, index) => {
      if (!item || typeof item.question !== "string" || !item.question.trim() || typeof item.answer !== "string" || !item.answer.trim() || typeof item.explanation !== "string" || !item.explanation.trim()) {
        throw new Error(`Soal nomor ${index + 1} belum memiliki soal, kunci, atau pembahasan yang lengkap.`);
      }
      if (!["pg", "isian", "uraian"].includes(item.type)) throw new Error(`Jenis soal nomor ${index + 1} tidak dikenali.`);
      if (requestedType !== "campuran" && item.type !== requestedType) throw new Error(`Bentuk soal nomor ${index + 1} tidak sesuai pilihan guru.`);
      if (item.type === "pg") {
        if (!Array.isArray(item.options) || item.options.length !== 4 || item.options.some(option => typeof option !== "string" || !option.trim())) {
          throw new Error(`Soal pilihan ganda nomor ${index + 1} harus memiliki tepat empat opsi.`);
        }
        const answer = item.answer.trim().match(/^([A-D])(?:[.)\s:]|$)/i);
        if (!answer) throw new Error(`Kunci soal pilihan ganda nomor ${index + 1} harus berupa A, B, C, atau D.`);
        item.answer = answer[1].toUpperCase();
      } else {
        item.options = [];
      }
    });
    return result;
  }

  function applyAIResult(result) {
    if (type === "modul") {
      ["prior", "understanding", "trigger", "model", "opening", "core", "closing", "assessment", "differentiation", "reflection"].forEach(key => setFieldValue(key, result[key]));
      // CP sengaja tidak disentuh: workbook ATP sumber tidak menyediakan kolom CP.
    } else if (type === "lkpd") {
      ["materials", "stimulus", "instructions", "activity", "reflection"].forEach(key => setFieldValue(key, result[key]));
    }
    aiContent = result;
  }

  async function runAI(mode) {
    if (!form.reportValidity()) return;
    if (!window.MathSMPGemini) {
      showToast("Modul Gemini belum dimuat. Muat ulang halaman dan periksa file gemini-ai.js.");
      return;
    }
    if (mode === "revise" && !preview.querySelector(".rg-document")) {
      showToast("Buat dokumen terlebih dahulu sebelum meminta revisi AI.");
      return;
    }
    const button = mode === "revise" ? aiReviseButton : aiGenerateButton;
    const originalLabel = button?.textContent || "Buat dengan AI";
    if (mode === "revise" && !String(aiRevisionPrompt?.value || "").trim()) {
      showToast("Tuliskan arahan revisi terlebih dahulu.");
      aiRevisionPrompt?.focus();
      return;
    }
    if (button) {
      button.disabled = true;
      button.textContent = mode === "revise" ? "AI sedang merevisi…" : "AI sedang menyusun…";
    }
    const previousText = mode === "revise" ? (preview.querySelector(".rg-document")?.innerText || "").slice(0, 24000) : "";
    try {
      const data = collectFormData();
      const prompt = window.MathSMPGemini.buildPrompt(type, data, mode, previousText, aiRevisionPrompt?.value || "");
      const result = await window.MathSMPGemini.generate(prompt, window.MathSMPGemini.schemaFor(type), {
        maxOutputTokens: type === "soal" ? 12000 : 9000,
        timeoutMs: 180000
      });
      const checked = validateAIResult(result);
      applyAIResult(checked);
      renderDocument(mode === "revise" ? "Revisi AI selesai. Periksa isi dan perhitungan sebelum digunakan." : "Draf AI selesai dibuat. Periksa seluruh soal, kegiatan, asesmen, dan kesesuaian ATP sebelum digunakan.");
      if (aiRevisionPrompt) aiRevisionPrompt.value = "";
    } catch (error) {
      showToast(error.message || "AI gagal membuat dokumen. Coba lagi.");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    }
  }

  function downloadWord() {
    const documentNode = preview.querySelector(".rg-document");
    if (!documentNode) return;
    const title = documentNode.querySelector("h1")?.textContent || "Dokumen MathSMP";
    const bodyHTML = documentNode.innerHTML;
    const style = `body{font-family:Arial,sans-serif;font-size:11pt;line-height:1.5;color:#17233b}h1{text-align:center;font-size:16pt;color:#14294d}h2{font-size:12pt;color:#14294d;margin-top:18px}h3{font-size:11pt;margin-top:13px}table{border-collapse:collapse;width:100%;margin:7px 0}td,th{border:1px solid #9aa8ba;padding:6px;vertical-align:top;text-align:left}th{background:#eef2f8}.rg-doc-meta{border:0}.rg-doc-meta td{border:0;padding:3px 5px}.rg-doc-subtitle{text-align:center}.rg-doc-question{margin:12px 0}.rg-doc-options{margin-left:24px}.rg-doc-answer-space{height:45px;border-bottom:1px dotted #999}`;
    const file = `<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8"><title>${esc(title)}</title><style>${style}</style></head><body>${bodyHTML}</body></html>`;
    const blob = new Blob(["\ufeff", file], {type: "application/msword;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${safeFileName(title)}.doc`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);
    showToast("Dokumen Word-compatible berhasil diunduh.");
  }

  async function copyDocumentText() {
    const doc = preview.querySelector(".rg-document");
    if (!doc) return;
    const text = doc.innerText || doc.textContent || "";
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const temp = document.createElement("textarea");
        temp.value = text; temp.style.position = "fixed"; temp.style.opacity = "0";
        document.body.appendChild(temp); temp.select();
        const ok = document.execCommand("copy"); temp.remove();
        if (!ok) throw new Error("copy-command-failed");
      }
      showToast("Teks dokumen berhasil disalin.");
    } catch (_) {
      showToast("Penyalinan otomatis diblokir browser. Pilih teks dokumen lalu salin secara manual.");
    }
  }

  setupAtpReference();
  form.addEventListener("submit", generate);
  form.addEventListener("reset", () => window.setTimeout(() => {
    aiContent = null;
    preview.className = "rg-document-placeholder";
    preview.innerHTML = `<div><span>▧</span><strong>Dokumen belum dibuat</strong><p>Isi formulir, lalu buat kembali kerangka dokumen.</p></div>`;
    enableActions(false);
    if (aiReviseButton) aiReviseButton.disabled = true;
  }, 0));
  aiGenerateButton?.addEventListener("click", () => runAI("generate"));
  aiReviseButton?.addEventListener("click", () => runAI("revise"));
  wordButton.addEventListener("click", downloadWord);
  printButton.addEventListener("click", () => window.print());
  copyButton.addEventListener("click", copyDocumentText);
  enableActions(false);
})();
