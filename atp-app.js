(() => {
  "use strict";
  const record = Array.isArray(window.daftarATP) ? window.daftarATP[0] : null;
  const list = document.getElementById("atpList");
  const count = document.getElementById("atpCount");
  const search = document.getElementById("atpSearch");
  const grade = document.getElementById("atpClass");
  const semester = document.getElementById("atpSemester");
  const docCard = document.getElementById("atpDocumentCard");
  const stats = document.getElementById("atpStats");
  const recap = document.getElementById("atpRekap");
  if (!record || !list) {
    if (list) list.innerHTML = '<div class="rg-empty-state"><h3>Data ATP belum tersedia</h3><p>Tambahkan data ATP pada atp-data.js.</p></div>';
    return;
  }
  const topics = Array.isArray(record.pokokBahasan) ? record.pokokBahasan : [];
  const escapeHTML = value => String(value ?? "").replace(/[&<>\"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const semName = n => Number(n) === 1 ? "Ganjil" : "Genap";

  docCard.innerHTML = `<div class="rg-atp-document-main"><div class="rg-atp-document-icon">▤</div><div><span class="rg-kicker">DOKUMEN SUMBER</span><h2>${escapeHTML(record.judul)}</h2><p>${escapeHTML(record.satuanPendidikan)} · ${escapeHTML(record.lokasi)}</p><div class="rg-atp-document-meta"><span>Fase ${escapeHTML(record.fase)}</span><span>Kelas VII–IX</span><span>${escapeHTML(record.tahunAjaran)}</span></div></div></div><a class="rg-download-link rg-atp-xlsx-link" href="${escapeHTML(record.file)}" download>Unduh workbook ATP (.xlsx) <b>↓</b></a>`;

  stats.innerHTML = [
    [record.jumlahPokokBahasan || 24, "Pokok bahasan utama"],
    [record.jumlahProyek || 1, "Proyek akhir"],
    [record.jumlahSubPokokBahasan || 0, "Subpokok bahasan / TPK"],
    ["VII–IX", "Cakupan kelas"]
  ].map(([value, label]) => `<div class="rg-atp-stat"><strong>${escapeHTML(value)}</strong><span>${escapeHTML(label)}</span></div>`).join("");

  function topicMatches(topic, query) {
    if (!query) return { matched: true, subtopics: topic.subPokokBahasan || [] };
    const mainText = [topic.materi, topic.tp, topic.kelas, topic.no].join(" ").toLocaleLowerCase("id-ID");
    const subtopics = (topic.subPokokBahasan || []).filter(sub => [sub.materi, sub.tujuan, sub.dimensi].join(" ").toLocaleLowerCase("id-ID").includes(query));
    if (mainText.includes(query)) return { matched: true, subtopics: topic.subPokokBahasan || [] };
    return { matched: subtopics.length > 0, subtopics };
  }

  function renderTopics() {
    const q = search.value.trim().toLocaleLowerCase("id-ID");
    const selectedGrade = grade.value;
    const selectedSemester = semester.value;
    const filtered = topics.map(topic => ({ topic, match: topicMatches(topic, q) })).filter(({ topic, match }) =>
      match.matched && (!selectedGrade || topic.kelas === selectedGrade) && (!selectedSemester || String(topic.semester) === selectedSemester)
    );
    const shownSubtopics = filtered.reduce((sum, item) => sum + item.match.subtopics.length, 0);
    count.textContent = `${filtered.length} pokok bahasan/proyek dan ${shownSubtopics} subpokok bahasan ditampilkan dari ${topics.length} pokok bahasan/proyek.`;
    if (!filtered.length) {
      list.innerHTML = '<div class="rg-empty-state"><div class="rg-empty-icon">⌕</div><h3>Materi tidak ditemukan</h3><p>Ubah kata kunci atau filter kelas dan semester.</p></div>';
      return;
    }
    const groups = new Map();
    filtered.forEach(item => {
      const key = `${item.topic.kelas}|${item.topic.semester}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });
    list.innerHTML = Array.from(groups.entries()).map(([key, items]) => {
      const [klass, sem] = key.split("|");
      const heading = `Kelas ${klass} · Semester ${semName(sem)}`;
      return `<section class="rg-atp-semester-group"><div class="rg-atp-group-heading"><h3>${escapeHTML(heading)}</h3><span>${items.length} pokok bahasan/proyek</span></div><div class="rg-atp-topic-stack">${items.map(({ topic, match }) => {
        const subtitle = (match.subtopics || []).map((sub, idx) => `<article class="rg-atp-subtopic"><div class="rg-atp-subtopic-head"><strong>${escapeHTML(sub.materi)}</strong><span>${escapeHTML(sub.jpTotal ?? sub.jpTPK ?? "—")} JP</span></div><p>${escapeHTML(sub.tujuan)}</p><div class="rg-atp-subtopic-foot"><span>JP TPK: ${escapeHTML(sub.jpTPK ?? "—")}${sub.jpUH ? ` · JP UH: ${escapeHTML(sub.jpUH)}` : ""}</span><span>${escapeHTML(sub.dimensi || "")}</span></div></article>`).join("");
        return `<details class="rg-atp-topic" ${q ? "open" : ""}><summary><span class="rg-atp-topic-no">${escapeHTML(topic.isProyek ? "★" : topic.no)}</span><span class="rg-atp-topic-title"><strong>${escapeHTML(topic.materi)}</strong><small>${escapeHTML(topic.jpTotal ?? "—")} JP · ${match.subtopics.length} subpokok bahasan</small></span><span class="rg-atp-topic-toggle">⌄</span></summary><div class="rg-atp-topic-content"><div class="rg-atp-tp"><span>Tujuan Pembelajaran (TP)</span><p>${escapeHTML(topic.tp)}</p></div><div class="rg-atp-subtopic-list">${subtitle || '<p class="rg-muted">Tidak ada rincian subpokok bahasan yang cocok dengan kata kunci.</p>'}</div></div></details>`;
      }).join("")}</div></section>`;
    }).join("");
  }

  function renderRecap() {
    const rows = Array.isArray(record.rekapSemester) ? record.rekapSemester : [];
    const totals = rows.filter(row => row.jenis === "total");
    const reserves = rows.filter(row => row.jenis === "cadangan");
    recap.innerHTML = totals.map(row => {
      const reserve = reserves.find(item => item.kelas === row.kelas && item.semester === row.semester);
      return `<article class="rg-atp-recap-card"><span>Kelas ${escapeHTML(row.kelas)} · ${escapeHTML(semName(row.semester))}</span><strong>${escapeHTML(row.totalJP)} <small>JP</small></strong><p>${escapeHTML(reserve ? `Cadangan: ${reserve.totalJP} JP` : row.keterangan || "")}</p></article>`;
    }).join("");
  }

  [search, grade, semester].forEach(control => control.addEventListener(control === search ? "input" : "change", renderTopics));
  renderTopics();
  renderRecap();
})();
