(() => {
  "use strict";

  const registry = window.daftarPaketTKA || { mataPelajaran: [], paket: [] };
  const $ = id => document.getElementById(id);
  const params = new URLSearchParams(window.location.search);
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[ch]));

  function findSubject(id) {
    return registry.mataPelajaran.find(item => item.id === id) || registry.mataPelajaran[0] || null;
  }
  function packagesFor(subjectId) {
    return registry.paket.filter(item => item.mataPelajaranId === subjectId);
  }
  function assetUrl(rootRelativePath) {
    if (!rootRelativePath) return "";
    return new URL(`../../${String(rootRelativePath).replace(/^\/+/, "")}`, document.baseURI).href;
  }

  function init(options) {
    const subjectSelect = $("mapelTKA");
    const packageSelect = $("paketTKA");
    const loadButton = $("muatPaketTKA");
    const statusBox = $("statusPemilihanPaket");
    if (!subjectSelect || !packageSelect || !loadButton || !statusBox) {
      console.error("Komponen pemilih paket TKA tidak lengkap.");
      return;
    }

    const mode = options?.mode || "bank";
    const onLoad = typeof options?.onLoad === "function" ? options.onLoad : () => {};
    let loadSequence = 0;

    subjectSelect.innerHTML = registry.mataPelajaran.map(item =>
      `<option value="${esc(item.id)}">${esc(item.nama)}</option>`
    ).join("");

    function populatePackages(preferredId) {
      const selectedSubject = subjectSelect.value;
      const items = packagesFor(selectedSubject);
      if (!items.length) {
        packageSelect.innerHTML = `<option value="">Belum ada paket</option>`;
        packageSelect.disabled = true;
        loadButton.disabled = true;
        statusBox.textContent = "Bank soal untuk mata pelajaran ini belum tersedia.";
        return;
      }
      packageSelect.disabled = false;
      packageSelect.innerHTML = items.map(item => {
        const label = item.status === "published" ? item.nama : `${item.nama} — dalam persiapan`;
        return `<option value="${esc(item.id)}">${esc(label)}</option>`;
      }).join("");
      const chosen = items.find(item => item.id === preferredId) || items[0];
      packageSelect.value = chosen.id;
      loadButton.disabled = false;
      showPackageStatus(chosen);
    }

    function showPackageStatus(pkg) {
      if (!pkg) return;
      if (pkg.status !== "published") {
        statusBox.textContent = `${pkg.judul}: bank soal belum diisi. Paket ini masih berstatus draft dan belum dapat digunakan untuk tryout.`;
      } else {
        statusBox.textContent = `${pkg.judul} · ${pkg.jumlahSoal} soal · ${pkg.durasiMenit} menit`;
      }
    }

    function selectedPackage() {
      return packagesFor(subjectSelect.value).find(item => item.id === packageSelect.value) || null;
    }

    function writeQuery(pkg) {
      const url = new URL(window.location.href);
      url.searchParams.set("mapel", subjectSelect.value);
      if (pkg) url.searchParams.set("paket", pkg.id);
      else url.searchParams.delete("paket");
      window.history.replaceState({}, "", url);
    }

    function loadSelected() {
      const pkg = selectedPackage();
      const subject = findSubject(subjectSelect.value);
      if (!pkg || !subject) {
        statusBox.textContent = "Pilih mata pelajaran dan paket yang tersedia.";
        return;
      }
      showPackageStatus(pkg);
      writeQuery(pkg);
      const thisSequence = ++loadSequence;
      loadButton.disabled = true;
      loadButton.textContent = "Memuat paket…";
      const previous = document.querySelector("script[data-tka-package-loader]");
      if (previous) previous.remove();
      window.dataPaketTKA = null;
      const script = document.createElement("script");
      script.dataset.tkaPackageLoader = "true";
      script.src = assetUrl(pkg.file);
      script.onload = () => {
        if (thisSequence !== loadSequence) return;
        const data = window.dataPaketTKA;
        if (!data || data.idPaket !== pkg.id || data.mataPelajaranId !== subject.id) {
          statusBox.textContent = "File paket dimuat, tetapi identitas mata pelajaran atau paket tidak cocok. Periksa daftar-paket.js.";
          loadButton.disabled = false;
          loadButton.textContent = mode === "tryout" ? "Muat Tryout" : "Tampilkan Bank Soal";
          return;
        }
        statusBox.textContent = data.status === "draft"
          ? `${pkg.judul}: bank masih kosong dan belum dapat dikerjakan.`
          : `${pkg.judul} berhasil dimuat.`;
        loadButton.disabled = false;
        loadButton.textContent = mode === "tryout" ? "Muat Tryout" : "Tampilkan Bank Soal";
        onLoad(data, pkg, subject);
      };
      script.onerror = () => {
        if (thisSequence !== loadSequence) return;
        statusBox.textContent = `File paket tidak ditemukan: ${pkg.file}`;
        loadButton.disabled = false;
        loadButton.textContent = mode === "tryout" ? "Muat Tryout" : "Tampilkan Bank Soal";
      };
      document.body.appendChild(script);
    }

    const initialSubject = findSubject(params.get("mapel")) || findSubject("matematika");
    subjectSelect.value = initialSubject ? initialSubject.id : "";
    populatePackages(params.get("paket") || "paket-01");
    subjectSelect.addEventListener("change", () => populatePackages("paket-01"));
    packageSelect.addEventListener("change", () => showPackageStatus(selectedPackage()));
    loadButton.addEventListener("click", loadSelected);

    // Muat paket awal secara otomatis agar halaman langsung menampilkan konten.
    if (selectedPackage()) loadSelected();
    else loadButton.disabled = true;
  }

  window.TKASelector = { init, assetUrl };
})();