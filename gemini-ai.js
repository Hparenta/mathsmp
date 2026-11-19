/*
 * MathSMP BYOK — Gemini Developer API (Interactions API)
 * Each teacher supplies their own key. The key is kept in this tab session only
 * after a successful test. Calls use raw fetch (no SDK-only CORS headers),
 * x-goog-api-key, JSON Schema output, and store:false for stateless requests.
 */
(() => {
  "use strict";

  const API_BASE = "https://generativelanguage.googleapis.com/v1beta";
  const SESSION_KEY = "mathsmp_gemini_api_key_session";
  const SESSION_MODEL = "mathsmp_gemini_model_session";

  const byId = id => document.getElementById(id);
  const keyInput = byId("geminiApiKey");
  const modelInput = byId("geminiModel");
  const modelSelect = byId("geminiModelSelect");
  const connectButton = byId("geminiConnect");
  const disconnectButton = byId("geminiDisconnect");
  const toggleButton = byId("geminiToggleKey");
  const statusNode = byId("geminiStatus");

  function readSession(key) {
    try { return window.sessionStorage.getItem(key) || ""; }
    catch (_) { return ""; }
  }

  function writeSession(key, value) {
    try { window.sessionStorage.setItem(key, value); return true; }
    catch (_) { return false; }
  }

  function removeSession(key) {
    try { window.sessionStorage.removeItem(key); } catch (_) { /* storage unavailable */ }
  }

  function currentKey() {
    return String(keyInput?.value || readSession(SESSION_KEY)).trim();
  }

  function currentModel() {
    return String(modelInput?.value || readSession(SESSION_MODEL) || "gemini-3.8-flash").trim();
  }

  function setStatus(message, state = "info") {
    if (!statusNode) return;
    statusNode.textContent = message;
    statusNode.dataset.state = state;
  }

  function readableApiError(payload, status) {
    const message = payload?.error?.message || payload?.message || "";
    const normalized = String(message).toLowerCase();
    if (status === 400 && /api key|key not valid|api_key_invalid/.test(normalized)) {
      return "API Key tidak valid. Salin ulang kunci Gemini dari Google AI Studio tanpa tanda kutip atau spasi tambahan.";
    }
    if (status === 400 && /invalid_request|response_format|schema/.test(normalized)) {
      return `Permintaan atau skema keluaran ditolak Gemini: ${message || "periksa model dan format respons"}`;
    }
    if (status === 401 || status === 403) {
      return "Akses ditolak. Pastikan kunci dibuat untuk Gemini Developer API, masih aktif, dan proyeknya memiliki akses ke Gemini API.";
    }
    if (status === 404) return "Model atau endpoint Interactions tidak ditemukan. Periksa Model ID yang dipilih dan pastikan model tersebut mendukung Interactions API.";
    if (status === 429) return "Kuota atau batas permintaan Gemini tercapai. Periksa kuota di Google AI Studio atau coba lagi nanti.";
    if (status === 500 || status === 503) return "Layanan Gemini sedang bermasalah atau sibuk. Coba lagi beberapa saat kemudian.";
    if (message) return `Gemini API (${status}): ${message}`;
    if (status === 0) return "Tidak dapat menghubungi Gemini API. Periksa koneksi internet dan buka situs melalui HTTPS (misalnya GitHub Pages), bukan file lokal.";
    return `Permintaan Gemini gagal (HTTP ${status}).`;
  }

  async function request(url, options, timeoutMs = 120000) {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal, cache: "no-store" });
      let body = {};
      try { body = await response.json(); } catch (_) { body = {}; }
      if (!response.ok) {
        const error = new Error(readableApiError(body, response.status));
        error.status = response.status;
        error.payload = body;
        throw error;
      }
      return body;
    } catch (error) {
      if (error.name === "AbortError") throw new Error("Permintaan melewati batas waktu. Coba lagi atau gunakan model Flash yang lebih ringan.");
      if (error instanceof TypeError) throw new Error(readableApiError({}, 0));
      throw error;
    } finally {
      window.clearTimeout(timer);
    }
  }

  function rankModel(name) {
    const lower = name.toLowerCase();
    if (/gemini-3\.8-flash$/.test(lower)) return 0;
    if (/gemini-3\.[0-9]+-flash$/.test(lower)) return 1;
    if (/gemini-2\.5-flash$/.test(lower)) return 2;
    if (/gemini-2\.[0-9]+-flash$/.test(lower)) return 3;
    if (/flash/.test(lower) && !/(preview|experimental|exp)/.test(lower)) return 4;
    if (/flash/.test(lower)) return 5;
    if (!/(preview|experimental|exp)/.test(lower)) return 6;
    return 7;
  }

  function populateModels(models) {
    if (!modelSelect) return [];
    const usable = (Array.isArray(models) ? models : [])
      .filter(item => item && item.name && Array.isArray(item.supportedGenerationMethods) && item.supportedGenerationMethods.includes("generateContent"))
      .map(item => ({ id: String(item.name).replace(/^models\//, ""), label: item.displayName || String(item.name).replace(/^models\//, "") }))
      // Interactions API supports Gemini 3 models and newer; exclude audio/image-only families.
      .filter(item => /^gemini-(?:3|4)-/i.test(item.id) && !/(embedding|tts|live|image|robotics|audio|video)/i.test(item.id))
      .sort((a, b) => rankModel(a.id) - rankModel(b.id) || a.id.localeCompare(b.id));

    modelSelect.innerHTML = "";
    if (!usable.length) {
      const option = document.createElement("option");
      option.value = "gemini-3.8-flash";
      option.textContent = "Gemini 3.8 Flash (Model ID default; uji saat menghubungkan)";
      modelSelect.appendChild(option);
      modelSelect.disabled = false;
      return ["gemini-3.8-flash"];
    }

    usable.forEach(item => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = `${item.label} (${item.id})`;
      modelSelect.appendChild(option);
    });

    const saved = currentModel();
    let preferred = usable.find(item => item.id === saved);
    if (!preferred && saved) {
      preferred = { id: saved, label: `${saved} (Model ID manual)` };
      const option = document.createElement("option");
      option.value = preferred.id;
      option.textContent = preferred.label;
      modelSelect.insertBefore(option, modelSelect.firstChild);
    }
    preferred = preferred || usable[0];
    modelSelect.value = preferred.id;
    if (modelInput) modelInput.value = preferred.id;
    modelSelect.disabled = false;
    return usable.map(item => item.id);
  }

  async function requestInteraction(prompt, schema, options = {}, key = currentKey(), model = currentModel()) {
    const body = {
      model,
      input: prompt,
      store: false,
      generation_config: {
        temperature: options.temperature ?? 0.35,
        max_output_tokens: options.maxOutputTokens ?? 8192
      }
    };
    if (schema) {
      body.response_format = {
        type: "text",
        mime_type: "application/json",
        schema
      };
    }
    return request(`${API_BASE}/interactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": key
      },
      body: JSON.stringify(body)
    }, options.timeoutMs || 180000);
  }

  async function testConnection() {
    const key = currentKey();
    if (!key) {
      setStatus("Masukkan API Key Gemini terlebih dahulu.", "error");
      keyInput?.focus();
      return false;
    }
    if (connectButton) {
      connectButton.disabled = true;
      connectButton.textContent = "Menguji koneksi…";
    }
    setStatus("Menguji API Key dan model Gemini dengan permintaan singkat…", "loading");
    try {
      let model = currentModel();
      let availableCount = 0;
      try {
        const listing = await request(`${API_BASE}/models`, {
          method: "GET",
          headers: { "x-goog-api-key": key }
        }, 30000);
        const available = (listing.models || []).filter(item => Array.isArray(item.supportedGenerationMethods) && item.supportedGenerationMethods.includes("generateContent"));
        const ids = populateModels(available);
        availableCount = ids.length;
        model = currentModel();
      } catch (_) {
        // Model ID manual tetap dapat diuji lewat Interactions API.
      }

      if (!model) throw new Error("Isi Model ID terlebih dahulu, misalnya gemini-3.8-flash.");
      const probe = await requestInteraction("Balas hanya dengan satu kata: OK", null, {
        temperature: 0,
        maxOutputTokens: 12,
        timeoutMs: 45000
      }, key, model);
      const probeText = extractText(probe);
      if (!probeText) throw new Error("API Key diterima tetapi model tidak menghasilkan respons uji.");

      const stored = writeSession(SESSION_KEY, key);
      writeSession(SESSION_MODEL, model);
      setStatus(`Terhubung ke ${model}. Uji respons berhasil.${availableCount ? ` ${availableCount} model teks terdeteksi.` : " Model diuji melalui Model ID manual."}${stored ? " Kunci disimpan hanya pada sesi tab ini." : " Penyimpanan sesi tidak tersedia; jangan tutup atau muat ulang tab sebelum selesai."}`, "success");
      return true;
    } catch (error) {
      setStatus(error.message || "Koneksi Gemini gagal.", "error");
      return false;
    } finally {
      if (connectButton) {
        connectButton.disabled = false;
        connectButton.textContent = "Uji koneksi & model";
      }
    }
  }

  const stringProperty = description => ({ type: "string", description });
  const objectSchema = properties => ({
    type: "object",
    properties,
    required: Object.keys(properties)
  });

  function schemaFor(generatorType) {
    if (generatorType === "modul") {
      return objectSchema({
        prior: stringProperty("Kompetensi awal dan prasyarat belajar."),
        understanding: stringProperty("Pemahaman bermakna."),
        trigger: stringProperty("Pertanyaan pemantik yang kontekstual."),
        model: stringProperty("Model, pendekatan, metode, dan strategi pembelajaran."),
        opening: stringProperty("Kegiatan pendahuluan terperinci."),
        core: stringProperty("Kegiatan inti terperinci, runtut, berpusat pada peserta didik dan disertai aktivitas guru serta peserta didik."),
        closing: stringProperty("Kegiatan penutup, simpulan, refleksi, umpan balik, dan tindak lanjut."),
        assessment: stringProperty("Asesmen diagnostik, formatif, sumatif, teknik, instrumen, dan kriteria/rubrik."),
        differentiation: stringProperty("Diferensiasi, dukungan, remedial, dan pengayaan."),
        reflection: stringProperty("Pertanyaan refleksi untuk guru dan peserta didik.")
      });
    }
    if (generatorType === "lkpd") {
      return objectSchema({
        materials: stringProperty("Alat, bahan, media, dan sumber belajar."),
        stimulus: stringProperty("Stimulus kontekstual yang memadai, termasuk data atau situasi yang diperlukan untuk menjawab tugas."),
        instructions: stringProperty("Petunjuk pengerjaan yang jelas untuk peserta didik SMP."),
        activity: stringProperty("Langkah kegiatan berurutan; satu langkah per baris."),
        tasks: { type: "array", items: stringProperty("Pertanyaan atau tugas LKPD yang dapat dikerjakan berdasarkan stimulus dan tujuan." ) },
        reflection: stringProperty("Pertanyaan refleksi peserta didik.")
      });
    }
    return objectSchema({
      questions: {
        type: "array",
        items: objectSchema({
          type: { type: "string", enum: ["pg", "isian", "uraian"] },
          question: stringProperty("Pernyataan soal secara lengkap dan mandiri."),
          options: { type: "array", items: stringProperty("Satu pilihan jawaban. Untuk pilihan ganda harus tepat empat pilihan.") },
          answer: stringProperty("Untuk PG gunakan huruf A, B, C, atau D; untuk isian/uraian tulis jawaban akhir."),
          explanation: stringProperty("Pembahasan atau alasan jawaban yang benar, dengan langkah hitung jika diperlukan.")
        })
      }
    });
  }

  function buildPrompt(generatorType, data, mode, previousText = "", revision = "") {
    const context = {
      sekolah: data.school || "Tidak disebutkan",
      guru: data.teacher || "Tidak disebutkan",
      mata_pelajaran: data.subject || "Matematika",
      kelas: data.className || "Tidak disebutkan",
      semester: data.semester || "Tidak disebutkan",
      materi: data.topic || "Belum dipilih",
      tujuan_pembelajaran_TP: data.mainObjective || "Tidak tersedia",
      tujuan_pembelajaran_khusus_TPK: data.objective || "Tidak tersedia",
      dimensi_profil_lulusan: data.dimensions || "Tidak ditentukan",
      alokasi_waktu: data.allocation || "Tidak ditentukan",
      capaian_pembelajaran_CP: data.cp || "Tidak disediakan dalam workbook ATP; jangan mengarang CP resmi",
      arahan_tambahan: data.aiInstruction || "Tidak ada"
    };

    const common = [
      "Anda adalah asisten perancang pembelajaran Matematika SMP Indonesia yang teliti, praktis, dan berorientasi pada pembelajaran mendalam.",
      "Tulis seluruh keluaran dalam Bahasa Indonesia yang baik, jelas, spesifik, dapat dilaksanakan guru SMP, dan tidak bertele-tele.",
      "Gunakan konteks ATP sebagai acuan utama. Pertahankan redaksi TP, TPK, dimensi profil lulusan, kelas, semester, materi, dan alokasi waktu persis sebagaimana diberikan. Jangan mengganti, memperluas, atau mengarang isi ATP.",
      "Jangan mengarang kutipan peraturan, CP resmi, atau sumber. Jika CP tidak diberikan, jangan membuat klaim bahwa teks yang dihasilkan adalah CP resmi.",
      "Jaga kesesuaian tingkat kesulitan dengan kelas yang dipilih. Aktivitas harus realistis dengan sumber daya sekolah yang wajar; jangan mengasumsikan laboratorium, internet stabil, atau perangkat setiap siswa tersedia.",
      "Pastikan seluruh soal, bilangan, operasi, satuan, kunci, dan pembahasan diperiksa ulang secara mandiri. Hindari soal ambigu atau lebih dari satu jawaban benar jika tidak diminta.",
      "Jangan menyertakan data pribadi peserta didik. Jangan mengembalikan Markdown fence; jawaban harus mengikuti skema JSON yang diminta."
    ].join("\n");

    if (generatorType === "modul") {
      const fields = ["prior", "understanding", "trigger", "model", "opening", "core", "closing", "assessment", "differentiation", "reflection"];
      const current = Object.fromEntries(fields.map(key => [key, data[key] || ""]));
      const modeText = mode === "revise"
        ? `TUGAS REVISI: Perbaiki dokumen sesuai instruksi berikut: ${revision}. Pertahankan bagian yang sudah baik dari dokumen saat ini, perbaiki hanya yang perlu, dan kembalikan semua field lengkap agar dokumen dapat dibangun ulang.\nDOKUMEN SAAT INI:\n${previousText}`
        : "TUGAS: Susun draf modul ajar yang substantif, bukan sekadar kerangka atau daftar judul. Isi semua bagian dengan kegiatan konkret, urutan waktu yang masuk akal sesuai alokasi, pertanyaan/tugas, asesmen yang benar-benar dapat digunakan, kriteria keberhasilan, serta diferensiasi yang operasional.";
      return `${common}\n\nJENIS DOKUMEN: MODUL AJAR MATEMATIKA SMP.\nKONTEKS ATP DAN FORMULIR:\n${JSON.stringify(context, null, 2)}\n\nDATA ISIAN SAAT INI:\n${JSON.stringify(current, null, 2)}\n\n${modeText}\n\nSYARAT KHUSUS:\n- Jangan isi atau mengarang CP. CP tetap diambil dari kolom manual guru, bukan dari keluaran Anda.\n- Kegiatan inti harus berurutan, menyebut aktivitas guru dan peserta didik, serta menerapkan pengalaman belajar yang bermakna, berkesadaran, dan menggembirakan secara wajar.\n- Sertakan estimasi waktu tiap tahap jika alokasi tersedia dan pastikan totalnya masuk akal.\n- Asesmen harus memiliki contoh instrumen atau indikator, bukan hanya menyebut diagnostik/formatif/sumatif.\n- Diferensiasi harus konkret untuk kebutuhan dukungan dan pengayaan.\n- Isi semua 10 field dalam JSON; gunakan string dengan pemisah baris untuk butir berurutan.`;
    }

    if (generatorType === "lkpd") {
      const fields = ["materials", "stimulus", "instructions", "activity", "reflection"];
      const current = Object.fromEntries(fields.map(key => [key, data[key] || ""]));
      const taskCount = Math.max(1, Math.min(20, Number.parseInt(data.taskCount, 10) || 5));
      const modeText = mode === "revise"
        ? `TUGAS REVISI: Revisi LKPD sesuai instruksi: ${revision}. Pertahankan isi dokumen yang masih relevan. Kembalikan semua field dan tepat ${taskCount} tugas.\nDOKUMEN SAAT INI:\n${previousText}`
        : `TUGAS: Buat LKPD siap pakai, bukan template kosong. Buat stimulus mandiri yang cukup, petunjuk yang jelas, langkah kegiatan aktif dan kolaboratif, serta tepat ${taskCount} pertanyaan/tugas yang meningkat dari pemahaman ke penalaran/penerapan.`;
      return `${common}\n\nJENIS DOKUMEN: LKPD MATEMATIKA SMP.\nKONTEKS ATP DAN FORMULIR:\n${JSON.stringify(context, null, 2)}\nBENTUK KERJA: ${data.grouping || "Individu"}.\nBENTUK RESPONS: ${data.taskType || "Jawaban singkat"}.\nJUMLAH TUGAS: ${taskCount}.\nISIAN SAAT INI:\n${JSON.stringify(current, null, 2)}\n\n${modeText}\n\nSYARAT KHUSUS:\n- Setiap tugas harus dapat dijawab berdasarkan stimulus, data, dan materi yang disediakan.\n- Untuk soal hitungan, periksa hasilnya dan pastikan data cukup.\n- Gunakan konteks kehidupan sehari-hari yang dekat dengan peserta didik, tanpa memaksakan konteks.\n- Jangan menampilkan kunci jawaban pada lembar siswa.\n- Kembalikan materials, stimulus, instructions, activity, tasks, reflection. Activity berupa satu string dengan tiap langkah pada baris baru; tasks berupa array tepat ${taskCount} elemen.`;
    }

    const requestedCount = Math.max(1, Math.min(40, Number.parseInt(data.questionCount, 10) || 10));
    const questionType = data.questionType || "pg";
    const typeText = { pg: "pilihan ganda", isian: "isian singkat", uraian: "uraian", campuran: "campuran PG, isian singkat, dan uraian" }[questionType] || "pilihan ganda";
    const modeText = mode === "revise"
      ? `TUGAS REVISI: Revisi naskah soal mengikuti instruksi: ${revision}. Pertahankan jumlah soal tepat ${requestedCount} dan bentuk ${typeText}. Gunakan dokumen saat ini sebagai dasar, tetapi perbaiki soal yang diminta.\nDOKUMEN SAAT INI:\n${previousText}`
      : `TUGAS: Buat tepat ${requestedCount} butir soal tipe ${typeText}, lengkap dan siap digunakan sebagai draf evaluasi kelas.`;
    return `${common}\n\nJENIS DOKUMEN: NASKAH SOAL MATEMATIKA SMP.\nKONTEKS ATP DAN FORMULIR:\n${JSON.stringify(context, null, 2)}\nJUMLAH SOAL: ${requestedCount}.\nBENTUK SOAL: ${typeText}.\nPETUNJUK PENGERJAAN: ${data.instruction || "Bacalah setiap soal dengan teliti."}\n\n${modeText}\n\nSYARAT KHUSUS:\n- Semua butir harus mengukur TP/TPK yang dipilih. Variasikan konteks dan proses berpikir, jangan mengulang soal yang sama dengan angka berbeda.\n- Untuk pilihan ganda, setiap soal harus memiliki tepat empat opsi A-D yang masuk akal, hanya satu jawaban benar, dan distraktor harus sejenis serta tidak ambigu. Field answer harus berupa huruf A, B, C, atau D.\n- Untuk isian/uraian, options harus array kosong dan answer berisi jawaban final atau pokok jawaban.\n- Untuk bentuk campuran, distribusikan jenis pg/isian/uraian secara seimbang sedekat mungkin sambil tetap berjumlah tepat ${requestedCount}.\n- Sertakan pembahasan yang menunjukkan proses perhitungan atau alasan kunci. Kerjakan ulang seluruh hitungan sebelum mengirim jawaban.\n- Hindari menyebut soal ini sebagai soal TKA. Ini adalah naskah kuis/evaluasi reguler kecuali guru menyatakan lain.\n- Kembalikan array questions tepat ${requestedCount} elemen dengan field type, question, options, answer, explanation.`;
  }

  function extractText(data) {
    if (data?.status === "failed") {
      const detail = data?.error?.message || data?.error?.details || "Interaksi Gemini gagal.";
      throw new Error(String(detail));
    }
    if (data?.status && data.status !== "completed") {
      throw new Error(`Respons Gemini berstatus ${data.status}. Coba kurangi jumlah atau panjang keluaran.`);
    }
    if (typeof data?.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
    const modelSteps = (Array.isArray(data?.steps) ? data.steps : [])
      .filter(step => step?.type === "model_output");
    const pieces = [];
    modelSteps.forEach(step => {
      (Array.isArray(step.content) ? step.content : []).forEach(part => {
        if (part?.type === "text" && typeof part.text === "string") pieces.push(part.text);
      });
    });
    const text = pieces.join("\n").trim();
    if (!text) throw new Error("Gemini tidak mengembalikan teks. Coba model lain atau kurangi panjang instruksi.");
    return text;
  }

  function parseJsonText(text) {
    const cleaned = String(text).trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
    try { return JSON.parse(cleaned); }
    catch (_) {
      const first = cleaned.indexOf("{");
      const last = cleaned.lastIndexOf("}");
      if (first >= 0 && last > first) return JSON.parse(cleaned.slice(first, last + 1));
      throw new Error("Respons AI tidak mengikuti format JSON. Silakan ulangi atau pilih model lain.");
    }
  }

  async function generate(prompt, schema, options = {}) {
    const key = currentKey();
    const model = currentModel();
    if (!key) throw new Error("Masukkan API Key Gemini dan uji koneksi terlebih dahulu.");
    if (!model) throw new Error("Pilih atau masukkan Model ID Gemini terlebih dahulu.");
    const data = await requestInteraction(prompt, schema, options, key, model);
    const text = extractText(data);
    const result = parseJsonText(text);
    if (!result || typeof result !== "object" || Array.isArray(result)) throw new Error("Hasil AI kosong atau bukan objek JSON.");
    return result;
  }

  function clearKey() {
    removeSession(SESSION_KEY);
    removeSession(SESSION_MODEL);
    if (keyInput) keyInput.value = "";
    if (modelInput) modelInput.value = "gemini-3.8-flash";
    if (modelSelect) {
      modelSelect.innerHTML = '<option value="">Uji koneksi untuk memuat model</option>';
      modelSelect.disabled = true;
    }
    setStatus("API Key dihapus dari sesi browser ini.", "info");
  }

  function init() {
    if (!keyInput || !modelInput || !connectButton) return;
    keyInput.value = readSession(SESSION_KEY);
    const savedModel = readSession(SESSION_MODEL);
    if (savedModel) modelInput.value = savedModel;
    if (toggleButton) toggleButton.addEventListener("click", () => {
      const showing = keyInput.type === "text";
      keyInput.type = showing ? "password" : "text";
      toggleButton.textContent = showing ? "Lihat" : "Sembunyikan";
    });
    connectButton.addEventListener("click", testConnection);
    disconnectButton?.addEventListener("click", clearKey);
    modelSelect?.addEventListener("change", () => {
      if (!modelSelect.value) return;
      modelInput.value = modelSelect.value;
      writeSession(SESSION_MODEL, modelSelect.value);
    });
    modelInput.addEventListener("change", () => writeSession(SESSION_MODEL, currentModel()));
    keyInput.addEventListener("input", () => {
      if (readSession(SESSION_KEY) && keyInput.value.trim() !== readSession(SESSION_KEY)) {
        removeSession(SESSION_KEY);
        setStatus("API Key berubah. Uji koneksi kembali untuk menyimpannya di sesi.", "info");
      }
    });
    if (keyInput.value) setStatus("API Key sesi ditemukan. Uji koneksi untuk memuat daftar model.", "info");
  }

  window.MathSMPGemini = {
    generate,
    buildPrompt,
    schemaFor,
    testConnection,
    getModel: currentModel
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
