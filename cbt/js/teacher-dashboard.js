import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Backend lokal untuk pengujian.
const API_BASE = "https://backend.herdiantoparenta2.workers.dev";

const dashboard = document.getElementById("dashboardContent");
const pageMessage = document.getElementById("pageMessage");
const errorMessage = document.getElementById("errorMessage");
const logoutButton = document.getElementById("logoutButton");

let verificationStarted = false;

function showError(message) {
  errorMessage.textContent = message;
}

async function verifyTeacher(user) {
  const idToken = await user.getIdToken();

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

  if (!response.ok || data.status !== "success") {
    throw new Error(
      data.message || "Verifikasi akun gagal."
    );
  }

  if (data.user?.role !== "teacher") {
    throw new Error("Akses ditolak. Akun bukan guru.");
  }

  if (data.user?.isActive !== true) {
    throw new Error("Akun guru tidak aktif.");
  }

  return data.user;
}

function displayTeacher(profile, user) {
  const name = profile.displayName || "Guru";

  document.getElementById("teacherName").textContent = name;
  document.getElementById("profileName").textContent = name;
  document.getElementById("profileEmail").textContent =
    user.email || "-";
  document.getElementById("profileRole").textContent =
    profile.role;
  document.getElementById("profileStatus").textContent =
    "Aktif";

  pageMessage.hidden = true;
  dashboard.hidden = false;
}

onAuthStateChanged(auth, async (user) => {
  if (verificationStarted) return;

  if (!user) {
    window.location.replace("teacher-login.html");
    return;
  }

  verificationStarted = true;

  try {
    const profile = await verifyTeacher(user);

    displayTeacher(profile, user);

  } catch (error) {
    console.error("Dashboard verification error:", error);

    showError(
      error.message || "Gagal memverifikasi akun guru."
    );

    try {
      await signOut(auth);
    } catch (signOutError) {
      console.error("Logout error:", signOutError);
    }

    setTimeout(() => {
      window.location.replace("teacher-login.html");
    }, 2000);
  }
});

logoutButton.addEventListener("click", async () => {
  logoutButton.disabled = true;
  logoutButton.textContent = "Keluar...";

  try {
    await signOut(auth);
    window.location.replace("teacher-login.html");
  } catch (error) {
    console.error("Logout error:", error);

    showError("Gagal keluar. Silakan coba kembali.");

    logoutButton.disabled = false;
    logoutButton.textContent = "Keluar";
  }
});
