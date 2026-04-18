import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWtVRl1KZJcfNfQICJkbE6Y8r66opD9Xk",
  authDomain: "serviciomma-faa93.firebaseapp.com",
  projectId: "serviciomma-faa93",
  storageBucket: "serviciomma-faa93.firebasestorage.app",
  messagingSenderId: "168777569725",
  appId: "1:168777569725:web:0b3489560022679705aed4",
  measurementId: "G-HN98L7DMW9"
};

// INICIAR FIREBASE
const app = initializeApp(firebaseConfig);

// BASE DE DATOS
const db = getFirestore(app);

export { db };
