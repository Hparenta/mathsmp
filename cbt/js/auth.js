
import { auth, db } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const button = document.getElementById("loginButton");

const DOMAIN = "cbtmathsmp.firebaseapp.com";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fullName = document
    .getElementById("fullName").value.trim();

  const nis = document
    .getElementById("nis").value.trim();

  const password = document
    .getElementById("password").value;

  message.textContent = "";
  button.disabled = true;
  button.textContent = "Memeriksa...";

  let user = null;

  try {
    const email = `${nis}@${DOMAIN}`;

    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    user = result.user;

    const profile = await getDoc(
      doc(db, "users", user.uid)
    );

    if (!profile.exists()) {
      throw new Error("Profil siswa tidak ditemukan.");
    }

    const data = profile.data();

    const namaDatabase = String(data.displayName || "")
      .trim().toLowerCase();

    if (namaDatabase !== fullName.toLowerCase()) {
      throw new Error("Nama lengkap tidak sesuai dengan NIS.");
    }

    if (data.role !== "student" || data.isActive !== true) {
      throw new Error("Akun siswa tidak aktif atau tidak valid.");
    }

    message.style.color = "green";
    message.textContent = "Login berhasil!";

    // Dashboard siswa akan kita buat pada tahap berikutnya.
    window.location.href = "dashboard.html";

  } catch (error) {
    if (user) {
      await signOut(auth);
    }

    message.style.color = "#c62828";

    if (error.code === "auth/invalid-credential") {
      message.textContent = "NIS atau password salah.";
    } else {
      message.textContent = error.message;
    }

  } finally {
    button.disabled = false;
    button.textContent = "Masuk";
  }
});
