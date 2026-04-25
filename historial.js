import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const lista = document.getElementById("lista");

window.historialMascota = async function () {

let texto = document.getElementById("buscarMascota").value.trim().toLowerCase();

lista.innerHTML = "";

const datos = await getDocs(collection(db,"consultas"));

let encontrados = [];

datos.forEach((docu)=>{

let data = docu.data();

let mascota = (data.mascota || "").toLowerCase();

if(mascota.includes(texto)){
encontrados.push(data);
}

});

if(encontrados.length === 0){
lista.innerHTML = "<p>No se encontró historial.</p>";
return;
}

// ordenar por fecha próxima o consulta
encontrados.sort((a,b)=>(a.proxima || "").localeCompare(b.proxima || ""));

encontrados.forEach((data)=>{

lista.innerHTML += `
<div class="card">

<b>🐾 Mascota:</b> ${data.mascota}<br>
<b>👤 Dueño:</b> ${data.dueno}<br>
<b>📞 Teléfono:</b> ${data.telefono}<br>
<b>🐶 Tipo:</b> ${data.tipo}<br>
<b>🧬 Raza:</b> ${data.raza}<br>
<b>🎂 Edad:</b> ${data.edad}<br>
<b>🩺 Motivo:</b> ${data.motivo}<br>
<b>💊 Tratamiento:</b> ${data.tratamiento}<br>
<b>📅 Próxima cita:</b> ${data.proxima}<br>

</div>
`;

});

}