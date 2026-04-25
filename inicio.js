import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const citas = document.getElementById("citas");

async function cargarCitas() {

citas.innerHTML = "Cargando citas...";

const datos = await getDocs(collection(db,"consultas"));

let lista = [];

datos.forEach((docu) => {

let data = docu.data();

if(data.proxima && data.proxima != ""){

lista.push(data);

}

});

lista.sort((a,b)=> a.proxima.localeCompare(b.proxima));

citas.innerHTML = "";

if(lista.length == 0){
citas.innerHTML = "<p>No hay próximas citas registradas</p>";
return;
}

lista.slice(0,5).forEach((item)=>{

citas.innerHTML += `
<div class="cita">
<b>📅 Fecha:</b> ${item.proxima}<br>
<b>👤 Dueño:</b> ${item.dueno}<br>
<b>🐾 Mascota:</b> ${item.mascota}<br>
<b>🐶 Tipo:</b> ${item.tipo}
</div>
`;

});

}

cargarCitas();