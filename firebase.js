import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzDkDovbEEDb2NlLx-VHySABSCeStxeus",
  authDomain: "app-crud-nube-89a17.firebaseapp.com",
  projectId: "app-crud-nube-89a17",
  storageBucket: "app-crud-nube-89a17.firebasestorage.app",
  messagingSenderId: "917823300201",
  appId: "1:917823300201:web:5a510486dc7ddf03ad78f8"
};

// INICIAR FIREBASE
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };