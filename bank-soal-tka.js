/*
 * BANK SOAL TKA — MathSMP
 * File ini sengaja KOSONG sampai soal TKA benar-benar disiapkan dan diperiksa.
 * Jangan menyalin bank soal Kuis Harian ke file ini.
 *
 * Struktur satu butir soal (tambahkan objek ke array `soal`):
 * {
 *   id: "TKA-MTK-0001",                 // ID unik dan stabil
 *   status: "draft" | "published",     // hanya published masuk katalog/tryout
 *   domain: "Bilangan",                 // domain/materi utama
 *   subdomain: "...",                   // opsional
 *   levelKognitif: "...",               // metadata internal, isi setelah dipetakan
 *   stimulus: "...",                    // opsional; teks stimulus bersama
 *   tipe: "pilihan_tunggal" | "pilihan_ganda_kompleks",
 *   soal: "...",
 *   pilihan: [
 *     { kode: "A", teks: "..." },
 *     { kode: "B", teks: "..." },
 *     { kode: "C", teks: "..." },
 *     { kode: "D", teks: "..." }
 *   ],
 *   kunci: ["A"],                        // kompleks: misalnya ["A", "C"]
 *   pembahasan: "..."
 * }
 *
 * Catatan: tipe dan format soal di atas adalah kontrak teknis awal MathSMP,
 * bukan pernyataan bahwa seluruh format tersebut merupakan format resmi TKA.
 */
window.bankSoalTKA = {
  versiSkema: 1,
  jenjang: "SMP",
  mataPelajaran: "Matematika",
  soal: []
};
