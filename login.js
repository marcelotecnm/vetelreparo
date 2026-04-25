import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.entrar = async function () {

let usuario = document.getElementById("usuario").value.trim();
let clave = document.getElementById("clave").value.trim();
let mensaje = document.getElementById("mensaje");

try {

await signInWithEmailAndPassword(auth, usuario, clave);

mensaje.style.color = "green";
mensaje.innerHTML = "Acceso correcto";

setTimeout(() => {
window.location.href = "inicio.html";
}, 1000);

}catch(error){

console.log("ERROR:", error.code);
console.log(error.message);

mensaje.style.color = "red";
mensaje.innerHTML = error.code;

}

}