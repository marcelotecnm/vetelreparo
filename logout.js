import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.salir = async function () {
 await signOut(auth);
 window.location.href = "index.html";
}