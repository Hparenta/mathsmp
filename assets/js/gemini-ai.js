/*
 * MathSMP BYOK — Gemini Developer API (Interactions API)
 * Free-tier-first setup. Teachers use their own Gemini API key.
 * By default the key stays in sessionStorage. With explicit opt-in it can be
 * remembered in localStorage on a trusted personal device.
 * Calls go directly to Google; keys are never written into website source/GitHub.
 */
(() => {
  "use strict";

  const API_BASE = "https://generativelanguage.googleapis.com/v1beta";
  const SESSION_KEY = "mathsmp_gemini_api_key_session";
  const SESSION_MODEL = "mathsmp_gemini_model_session";
  const DEVICE_KEY = "mathsmp_gemini_api_key_device";
  const DEVICE_MODEL = "mathsmp_gemini_model_device";
  // Current free-tier model confirmed in Google's official pricing table.
  // Keep the chooser restricted to avoid accidentally selecting paid-only models.
  const FREE_MODEL_ID = "gemini-3.8-flash";

  const byId = id => document.getElementById(id);
  const keyInput = byId("geminiApiKey");
  const modelInput = byId("geminiModel");
  const modelSelect = byId("geminiModelSelect");
  const connectButton = byId("geminiConnect");
  const disconnectButton = byId("geminiDisconnect");
  const toggleButton = byId("geminiToggleKey");
  const rememberCheckbox = byId("geminiRememberKey");
  const statusNode = byId("geminiStatus");

  function readFrom(storageName, key) {
    try { return window[storageName].getItem(key) || ""; }
    catch (_) { return ""; }
  }

  function writeTo(storageName, key, value) {
    try { window[storageName].setItem(key, value); return true; }
    catch (_) { return false; }
  }

  function removeFrom(storageName, key) {
    try { window[storageName].removeItem(key); } catch (_) { /* storage unavailable */ }
  }

  const readSession = key => readFrom("sessionStorage", key);
  const writeSession = (key, value) => writeTo("sessionStorage", key, value);
  const removeSession = key => removeFrom("sessionStorage", key);
  const readDevice = key => readFrom("localStorage", key);
  const writeDevice = (key, value) => writeTo("localStorage", key, value);
  const removeDevice = key => removeFrom("localStorage", key);

  function currentKey() {
    return String(keyInput?.value || readSession(SESSION_KEY) || readDevice(DEVICE_KEY)).trim();
  }

  function currentModel() {
    // Deliberately pin the public UI to the confirmed free-tier model.
    return FREE_MODEL_ID;
  }

  function saveCredentials(key, model) {
    if (rememberCheckbox?.checked) {
      const keySaved = writeDevice(DEVICE_KEY, key);
      const modelSaved = writeDevice(DEVICE_MODEL, model);
      if (keySaved && modelSaved) {
        removeSession(SESSION_KEY);
        removeSession(SESSION_MODEL);
        return "perangkat";
      }
      // Fall back to the current tab if persistent browser storage is unavailable.
      writeSession(SESSION_KEY, key);
      writeSession(SESSION_MODEL, model);
      return "sesi";
    }
    removeDevice(DEVICE_KEY);
    removeDevice(DEVICE_MODEL);
    const keySaved = writeSession(SESSION_KEY, key);
    writeSession(SESSION_MODEL, model);
    return keySaved ? "sesi" : "form";
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
      return "Akses ditolak. Pastikan API Key dibuat di Google AI Studio untuk Gemini Developer API, masih aktif, dan project memenuhi syarat Free Tier.";
    }
    if (status === 404) return "Model Gemini 3.8 Flash atau endpoint Interactions belum tersedia untuk project API Key ini. Periksa akses Gemini API dan model pada Google AI Studio.";
    if (status === 429) return "Batas penggunaan Free Tier Gemini tercapai atau permintaan terlalu cepat. Periksa Usage dan Rate limits di Google AI Studio, kurangi jumlah keluaran, atau coba lagi setelah kuota pulih.";
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

  function configureFreeModel() {
    if (modelInput) {
      modelInput.value = FREE_MODEL_ID;
      modelInput.readOnly = true;
    }
    if (modelSelect) {
      modelSelect.innerHTML = "";
      const option = document.createElement("option");
      option.value = FREE_MODEL_ID;
      option.textContent = "Gemini 3.8 Flash — Free Tier";
      modelSelect.appendChild(option);
      modelSelect.value = FREE_MODEL_ID;
      modelSelect.disabled = true;
    }
  }

  async function requestInteraction(prompt, schema, options = {}, key = currentKey(), model = currentModel()) {
    const body = {
      model,
      input: prompt,
      store: false,
      generation_config: {
        temperature: options.temperature ?? 0.35,
        // A larger default leaves room for both model thinking and visible output.
        max_output_tokens: options.maxOutputTokens ?? 16384,
        ...(options.thinkingLevel ? { thinking_level: options.thinkingLevel } : {})
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
    setStatus("Menguji API Key pada Gemini 3.8 Flash…", "loading");
    try {
      const model = currentModel();
      // Test one small Interactions API request directly. No paid model discovery/listing.
      const probe = await requestInteraction("Balas hanya dengan satu kata: OK", null, {
        temperature: 0,
        thinkingLevel: "low",
        maxOutputTokens: 512,
        timeoutMs: 45000
      }, key, model);
      const probeText = extractText(probe);
      if (!probeText) throw new Error("API Key diterima tetapi model tidak menghasilkan respons uji.");

      const storageMode = saveCredentials(key, model);
      const storageMessage = storageMode === "perangkat"
        ? "Kunci berhasil disimpan pada perangkat ini."
        : storageMode === "sesi"
          ? "Kunci tersimpan untuk sesi tab ini saja."
          : "Penyimpanan browser tidak tersedia; kunci hanya digunakan dari kolom saat halaman terbuka.";
      setStatus(`Terhubung ke ${model}. Uji respons berhasil. ${storageMessage}`, "success");
      return true;
    } catch (error) {
      setStatus(error.message || "Koneksi Gemini gagal.", "error");
      return false;
    } finally {
      if (connectButton) {
        connectButton.disabled = false;
        connectButton.textContent = "Uji koneksi Gemini";
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
    const subject = String(data.subject || "").trim() || "Mata pelajaran belum ditentukan";
    const isMath = /matematika|mathematics|math\b/i.test(subject);
    const context = {
      sekolah: data.school || "Tidak disebutkan",
      guru: data.teacher || "Tidak disebutkan",
      mata_pelajaran: subject,
      kelas: data.className || "Tidak disebutkan",
      fase: data.phase || "Tidak disebutkan",
      semester: data.semester || "Tidak disebutkan",
      materi: data.topic || "Belum dipilih",
      capaian_pembelajaran_CP: data.cp || "Tidak diberikan; jangan mengarang atau mengatasnamakan CP resmi",
      tujuan_pembelajaran_TP: data.mainObjective || "Tidak tersedia",
      tujuan_pembelajaran_khusus_TPK: data.objective || "Tidak tersedia",
      dimensi_profil_lulusan: data.dimensions || "Tidak ditentukan",
      alokasi_waktu: data.allocation || "Tidak ditentukan",
      referensi_ATP: data.atpReference || "Tidak menggunakan ATP terintegrasi; gunakan CP/TP/TPK yang diisi guru",
      arahan_tambahan: data.aiInstruction || "Tidak ada"
    };

    const common = [
      "Anda adalah asisten perancang pembelajaran lintas mata pelajaran untuk pendidikan SMP/MTs Indonesia. Anda harus mengikuti mata pelajaran yang dipilih guru, bukan menganggap semua permintaan sebagai Matematika.",
      `MATA PELAJARAN YANG HARUS DIIKUTI: ${subject}. Semua konsep, istilah, stimulus, aktivitas, soal, asesmen, dan rubrik harus sesuai dengan disiplin ilmu ini. Jangan mengubah mata pelajaran atau menyisipkan materi Matematika kecuali memang relevan dengan mata pelajaran yang dipilih.`,
      "Tulis seluruh keluaran dalam Bahasa Indonesia yang baik, jelas, spesifik, sesuai tingkat kelas, dapat dilaksanakan guru SMP, dan tidak bertele-tele.",
      "Gunakan CP, TP, TPK, dan referensi ATP yang diberikan guru sebagai acuan. Pertahankan redaksi tujuan yang berasal dari dokumen guru; jangan mengganti atau mengklaimnya sebagai dokumen resmi lain.",
      "Jika guru tidak memberikan CP/TP/TPK atau ATP, jangan mengarang kutipan CP resmi, nomor regulasi, atau sumber. Susun draf berdasarkan materi dan arahan yang tersedia, serta jangan menyatakan bahwa rumusan buatan AI adalah CP resmi.",
      "Pilih pendekatan, aktivitas, stimulus, bentuk respons, dan bukti belajar yang sesuai dengan karakteristik mata pelajaran. Jangan memaksakan perhitungan matematika pada mata pelajaran lain. Pertimbangkan praktik, eksperimen, diskusi, membaca, menulis, pengamatan, karya, gerak, atau analisis sumber hanya jika relevan dan realistis.",
      "Jaga kesesuaian tingkat kesulitan dengan kelas yang dipilih. Aktivitas harus realistis dengan sumber daya sekolah yang wajar; jangan mengasumsikan laboratorium, internet stabil, atau perangkat setiap siswa tersedia.",
      isMath
        ? "Untuk materi Matematika, periksa ulang setiap perhitungan, bilangan, operasi, satuan, kunci, dan pembahasan secara mandiri."
        : "Untuk mata pelajaran selain Matematika, periksa ketepatan konsep, istilah, fakta, penalaran, dan kesesuaian jawaban dengan materi. Jangan mengarang kutipan atau sumber. Jika ada fakta yang bergantung pada sumber tertentu tetapi sumber tidak diberikan, hindari menyajikannya sebagai kutipan atau kepastian resmi.",
      "Hindari soal ambigu atau lebih dari satu jawaban benar jika tidak diminta. Jangan menyertakan data pribadi peserta didik. Jangan mengembalikan Markdown fence; jawaban harus mengikuti skema JSON yang diminta."
    ].join("\n");

    if (generatorType === "modul") {
      const fields = ["prior", "understanding", "trigger", "model", "opening", "core", "closing", "assessment", "differentiation", "reflection"];
      const current = Object.fromEntries(fields.map(key => [key, data[key] || ""]));
      const modeText = mode === "revise"
        ? `TUGAS REVISI: Perbaiki dokumen sesuai instruksi berikut: ${revision}. Pertahankan bagian yang sudah baik dari dokumen saat ini, perbaiki hanya yang perlu, dan kembalikan semua field lengkap agar dokumen dapat dibangun ulang.\nDOKUMEN SAAT INI:\n${previousText}`
        : "TUGAS: Susun draf modul ajar yang substantif, bukan sekadar kerangka atau daftar judul. Isi semua bagian dengan kegiatan konkret, urutan waktu yang masuk akal sesuai alokasi, pertanyaan/tugas, asesmen yang benar-benar dapat digunakan, kriteria keberhasilan, serta diferensiasi yang operasional.";
      return `${common}\n\nJENIS DOKUMEN: MODUL AJAR ${subject.toUpperCase()} UNTUK SMP/MTs.\nKONTEKS ATP DAN FORMULIR:\n${JSON.stringify(context, null, 2)}\n\nDATA ISIAN SAAT INI:\n${JSON.stringify(current, null, 2)}\n\n${modeText}\n\nSYARAT KHUSUS:\n- Jangan mengisi atau mengarang CP resmi. Gunakan CP hanya jika guru telah memberikannya; jika tidak tersedia, jangan membuat bagian CP baru seolah-olah resmi.\n- Kegiatan inti harus berurutan, menyebut aktivitas guru dan peserta didik, serta sesuai dengan karakteristik mata pelajaran ${subject}.\n- Terapkan pengalaman belajar yang bermakna, berkesadaran, dan menggembirakan secara wajar; jangan sekadar menempelkan istilah tersebut.\n- Sertakan estimasi waktu tiap tahap jika alokasi tersedia dan pastikan totalnya masuk akal.\n- Asesmen harus memiliki contoh instrumen, indikator, kriteria keberhasilan, atau rubrik yang sesuai dengan kompetensi yang diukur.\n- Diferensiasi harus konkret untuk kebutuhan dukungan dan pengayaan.\n- Isi semua 10 field dalam JSON; gunakan string dengan pemisah baris untuk butir berurutan.`;
    }

    if (generatorType === "lkpd") {
      const fields = ["materials", "stimulus", "instructions", "activity", "reflection"];
      const current = Object.fromEntries(fields.map(key => [key, data[key] || ""]));
      const taskCount = Math.max(1, Math.min(20, Number.parseInt(data.taskCount, 10) || 5));
      const modeText = mode === "revise"
        ? `TUGAS REVISI: Revisi LKPD sesuai instruksi: ${revision}. Pertahankan isi dokumen yang masih relevan. Kembalikan semua field dan tepat ${taskCount} tugas.\nDOKUMEN SAAT INI:\n${previousText}`
        : `TUGAS: Buat LKPD siap pakai, bukan template kosong. Buat stimulus mandiri yang cukup, petunjuk yang jelas, langkah kegiatan aktif dan kolaboratif, serta tepat ${taskCount} pertanyaan/tugas yang meningkat dari pemahaman ke penalaran/penerapan sesuai mata pelajaran.`;
      return `${common}\n\nJENIS DOKUMEN: LKPD ${subject.toUpperCase()} UNTUK SMP/MTs.\nKONTEKS ATP DAN FORMULIR:\n${JSON.stringify(context, null, 2)}\nBENTUK KERJA: ${data.grouping || "Individu"}.\nBENTUK RESPONS: ${data.taskType || "Jawaban singkat"}.\nJUMLAH TUGAS: ${taskCount}.\nISIAN SAAT INI:\n${JSON.stringify(current, null, 2)}\n\n${modeText}\n\nSYARAT KHUSUS:\n- Setiap tugas harus dapat dikerjakan berdasarkan stimulus, data, sumber, dan materi yang disediakan.\n- Pastikan stimulus dan instruksi cocok dengan karakteristik mata pelajaran; jangan memakai konteks hitungan jika tidak relevan.\n- Gunakan situasi nyata yang dekat dengan peserta didik tanpa memaksakan konteks lokal.\n- Jangan menampilkan kunci jawaban pada lembar siswa.\n- Kembalikan materials, stimulus, instructions, activity, tasks, reflection. Activity berupa satu string dengan tiap langkah pada baris baru; tasks berupa array tepat ${taskCount} elemen.`;
    }

    const requestedCount = Math.max(1, Math.min(40, Number.parseInt(data.questionCount, 10) || 10));
    const questionType = data.questionType || "pg";
    const typeText = { pg: "pilihan ganda", isian: "isian singkat", uraian: "uraian", campuran: "campuran PG, isian singkat, dan uraian" }[questionType] || "pilihan ganda";
    const modeText = mode === "revise"
      ? `TUGAS REVISI: Revisi naskah soal mengikuti instruksi: ${revision}. Pertahankan jumlah soal tepat ${requestedCount} dan bentuk ${typeText}. Gunakan dokumen saat ini sebagai dasar, tetapi perbaiki soal yang diminta.\nDOKUMEN SAAT INI:\n${previousText}`
      : `TUGAS: Buat tepat ${requestedCount} butir soal tipe ${typeText}, lengkap dan siap digunakan sebagai draf evaluasi kelas.`;
    const mathSpecific = isMath
      ? "- Untuk soal Matematika, kerjakan ulang setiap perhitungan sebelum menetapkan kunci dan pembahasan. Tampilkan satuan dan langkah penyelesaian yang diperlukan."
      : "- Untuk mata pelajaran selain Matematika, gunakan istilah dan konsep yang tepat sesuai disiplin ilmu; pastikan kunci benar dan pembahasan menjelaskan alasan berdasarkan informasi pada soal atau pengetahuan mapel yang mapan.";
    return `${common}\n\nJENIS DOKUMEN: NASKAH SOAL ${subject.toUpperCase()} SMP/MTs.\nKONTEKS ATP DAN FORMULIR:\n${JSON.stringify(context, null, 2)}\nJUMLAH SOAL: ${requestedCount}.\nBENTUK SOAL: ${typeText}.\nPETUNJUK PENGERJAAN: ${data.instruction || "Bacalah setiap soal dengan teliti."}\n\n${modeText}\n\nSYARAT KHUSUS:\n- Semua butir harus mengukur TP/TPK atau tujuan yang dipilih dan sesuai dengan mata pelajaran ${subject}. Variasikan konteks dan proses berpikir; jangan mengulang soal yang sama dengan angka atau kata berbeda.\n- Untuk pilihan ganda, setiap soal harus memiliki tepat empat opsi A-D yang masuk akal, hanya satu jawaban benar, dan distraktor harus sejenis serta tidak ambigu. Field answer harus berupa huruf A, B, C, atau D.\n- Untuk isian/uraian, options harus array kosong dan answer berisi jawaban final atau pokok jawaban yang dinilai.\n- Untuk bentuk campuran, distribusikan jenis pg/isian/uraian secara seimbang sedekat mungkin sambil tetap berjumlah tepat ${requestedCount}.\n${mathSpecific}\n- Sertakan pembahasan atau alasan kunci yang jelas, bukan hanya mengulang jawaban.\n- Hindari menyebut soal ini sebagai soal TKA. Ini adalah naskah kuis/evaluasi reguler kecuali guru menyatakan lain.\n- Kembalikan array questions tepat ${requestedCount} elemen dengan field type, question, options, answer, explanation.`;
  }

  function extractText(data) {
    if (data?.status === "failed") {
      const detail = data?.error?.message || data?.error?.details || "Interaksi Gemini gagal.";
      throw new Error(String(detail));
    }
    if (data?.status && data.status !== "completed") {
      const errors = Array.isArray(data.errors)
        ? data.errors.map(item => item?.message || item?.details || JSON.stringify(item)).filter(Boolean).join("; ")
        : "";
      const usage = data.usage || {};
      const usageInfo = [
        Number.isFinite(usage.total_output_tokens) ? `output ${usage.total_output_tokens} token` : "",
        Number.isFinite(usage.total_thought_tokens) ? `thinking ${usage.total_thought_tokens} token` : ""
      ].filter(Boolean).join(", ");
      const detail = errors || (data.status === "incomplete"
        ? "Model menghentikan respons sebelum selesai; kemungkinan batas token tercapai. Coba kurangi jumlah soal/panjang dokumen atau gunakan keluaran yang lebih ringkas."
        : "Periksa status dan dukungan model yang dipilih.");
      throw new Error(`Respons Gemini berstatus ${data.status}. ${detail}${usageInfo ? ` (Pemakaian: ${usageInfo}.)` : ""}`);
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
    removeDevice(DEVICE_KEY);
    removeDevice(DEVICE_MODEL);
    if (keyInput) keyInput.value = "";
    if (rememberCheckbox) rememberCheckbox.checked = false;
    configureFreeModel();
    setStatus("API Key dihapus dari sesi dan penyimpanan perangkat MathSMP pada browser ini.", "info");
  }

  function init() {
    if (!keyInput || !modelInput || !connectButton) return;
    configureFreeModel();

    const deviceKey = readDevice(DEVICE_KEY);
    const sessionKey = readSession(SESSION_KEY);
    keyInput.value = deviceKey || sessionKey || "";
    if (rememberCheckbox) rememberCheckbox.checked = Boolean(deviceKey);

    if (toggleButton) toggleButton.addEventListener("click", () => {
      const showing = keyInput.type === "text";
      keyInput.type = showing ? "password" : "text";
      toggleButton.textContent = showing ? "Lihat" : "Sembunyikan";
    });
    connectButton.addEventListener("click", testConnection);
    disconnectButton?.addEventListener("click", clearKey);

    rememberCheckbox?.addEventListener("change", () => {
      if (!rememberCheckbox.checked) {
        const current = currentKey();
        removeDevice(DEVICE_KEY);
        removeDevice(DEVICE_MODEL);
        if (current) {
          writeSession(SESSION_KEY, current);
          writeSession(SESSION_MODEL, FREE_MODEL_ID);
        }
        setStatus("Ingat perangkat dimatikan. Kunci persisten dihapus; sesi tab ini tetap dapat digunakan sampai ditutup.", "info");
      } else {
        setStatus("Setelah uji koneksi berhasil, API Key akan disimpan pada browser perangkat ini.", "info");
      }
    });

    keyInput.addEventListener("input", () => {
      setStatus("API Key berubah atau baru dimasukkan. Klik Uji koneksi Gemini untuk memeriksanya.", "info");
    });

    if (deviceKey) {
      setStatus("API Key tersimpan pada perangkat ini. Klik Uji koneksi Gemini untuk memastikan kunci masih berlaku.", "info");
    } else if (sessionKey) {
      setStatus("API Key sesi ditemukan. Kunci akan hilang ketika sesi tab berakhir.", "info");
    }
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
