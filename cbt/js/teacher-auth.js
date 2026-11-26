
import { auth } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Backend lokal untuk pengujian.
const API_BASE = "https://backend.herdiantoparenta2.workers.dev";

const form = document.getElementById("teacherLoginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const button = document.getElementById("loginButton");
const message = document.getElementById("message");

function showMessage(text, success = false) {
  message.style.color = success ? "green" : "#c62828";
  message.textContent = text;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  button.disabled = true;
  button.textContent = "Memverifikasi...";
  message.textContent = "";

  let user = null;

  try {
    // 1. Login melalui Firebase Authentication.
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    user = result.user;

    // 2. Ambil Firebase ID Token.
    const idToken = await user.getIdToken(true);

    // 3. Kirim token ke backend.
    const response = await fetch(
      `${API_BASE}/api/auth/me`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${idToken}`,
          "Content-Type": "application/json"
        },
        cache: "no-store"
      }
    );

    const data = await response.json();

    // 4. Periksa hasil verifikasi backend.
    if (!response.ok || data.status !== "success") {
      throw new Error(
        data.message || "Verifikasi backend gagal."
      );
    }

    // 5. Periksa role guru.
    if (data.user?.role !== "teacher") {
      throw new Error(
        "Akun ini bukan akun guru."
      );
    }

    // 6. Periksa status akun.
    if (data.user?.isActive !== true) {
      throw new Error(
        "Akun guru tidak aktif."
      );
    }

    // 7. Login guru berhasil.
    showMessage(
      `Login berhasil. Selamat datang, ${data.user.displayName || email}!`,
      true
    );

    button.textContent = "Berhasil";

    console.log("Profil guru terverifikasi:", data.user);

    setTimeout(() => {
      window.location.replace("teacher-dashboard.html");
    }, 800);

  } catch (error) {
    // Jika autentikasi atau verifikasi gagal,
    // jangan biarkan sesi pengguna tetap aktif.
    if (user) {
      try {
        await signOut(auth);
      } catch (signOutError) {
        console.error("Gagal mengakhiri sesi:", signOutError);
      }
    }

    console.error("Login guru gagal:", error);

    if (error.code === "auth/invalid-credential") {
      showMessage("Email atau password salah.");
    } else if (error.code === "auth/too-many-requests") {
      showMessage("Terlalu banyak percobaan. Coba kembali nanti.");
    } else {
      showMessage(error.message || "Login gagal.");
    }

  } finally {
    button.disabled = false;

    if (button.textContent !== "Berhasil") {
      button.textContent = "Masuk sebagai Guru";
    }
  }
});
