
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// GANTI bagian ini dengan konfigurasi firebaseConfig dari Notepad tadi.
const firebaseConfig = {
  apiKey: "AIzaSyAijE8oFFsoi4iEh5dmQWoGsJrazG3zTOc",
  authDomain: "cbtmathsmp.firebaseapp.com",
  projectId: "cbtmathsmp",
  storageBucket: "cbtmathsmp.firebasestorage.app",
  messagingSenderId: "276679886391",
  appId: "1:276679886391:web:6739f2788cd061716de1b2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
