import { db } from "./firebase.js";

import {
addDoc,
collection,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const lista = document.getElementById("lista");

// GUARDAR CONSULTA
window.guardarConsulta = async function () {

let dueno = document.getElementById("dueno").value;
let telefono = document.getElementById("telefono").value;
let mascota = document.getElementById("mascota").value;
let tipo = document.getElementById("tipo").value;
let raza = document.getElementById("raza").value;
let edad = document.getElementById("edad").value;
let motivo = document.getElementById("motivo").value;
let tratamiento = document.getElementById("tratamiento").value;
let proxima = document.getElementById("proxima").value;

if(dueno=="" || mascota==""){
alert("Completa los campos principales");
return;
}

await addDoc(collection(db,"consultas"),{
dueno,
telefono,
mascota,
tipo,
raza,
edad,
motivo,
tratamiento,
proxima
});

limpiar();
mostrarConsultas();

alert("Consulta guardada");
};

// MOSTRAR CONSULTAS
window.mostrarConsultas = async function (){

lista.innerHTML="";

const datos = await getDocs(collection(db,"consultas"));

datos.forEach((docu)=>{

let data = docu.data();

lista.innerHTML += `
<div class="card">
<b>Dueño:</b> ${data.dueno}<br>
<b>Teléfono:</b> ${data.telefono}<br>
<b>Mascota:</b> ${data.mascota}<br>
<b>Tipo:</b> ${data.tipo}<br>
<b>Raza:</b> ${data.raza}<br>
<b>Edad:</b> ${data.edad}<br>
<b>Motivo:</b> ${data.motivo}<br>
<b>Tratamiento:</b> ${data.tratamiento}<br>
<b>Próxima cita:</b> ${data.proxima}<br><br>

<button onclick="eliminarConsulta('${docu.id}')">
Eliminar
</button>
</div>
`;
});

}

window.buscarConsulta = async function () {

let nombre = document.getElementById("buscar").value.trim().toLowerCase();

lista.innerHTML = "";

const datos = await getDocs(collection(db,"consultas"));

datos.forEach((docu) => {

let data = docu.data();

let dueño = (data.dueno || "").toLowerCase();

if (dueño.includes(nombre)) {

lista.innerHTML += `
<div class="card">
<b>Dueño:</b> ${data.dueno}<br>
<b>Teléfono:</b> ${data.telefono}<br>
<b>Mascota:</b> ${data.mascota}<br>
<b>Tipo:</b> ${data.tipo}<br>
<b>Raza:</b> ${data.raza}<br>
<b>Edad:</b> ${data.edad}<br>
<b>Motivo:</b> ${data.motivo}<br>
<b>Tratamiento:</b> ${data.tratamiento}<br>
<b>Próxima cita:</b> ${data.proxima}<br><br>

<button onclick="eliminarConsulta('${docu.id}')">
Eliminar
</button>

</div>
`;

}

});

if(lista.innerHTML==""){
lista.innerHTML="<p>No se encontraron resultados</p>";
}

}
// ELIMINAR
window.eliminarConsulta = async function(id){

await deleteDoc(doc(db,"consultas",id));
mostrarConsultas();

};

// LIMPIAR
function limpiar(){

document.getElementById("dueno").value="";
document.getElementById("telefono").value="";
document.getElementById("mascota").value="";
document.getElementById("raza").value="";
document.getElementById("edad").value="";
document.getElementById("motivo").value="";
document.getElementById("tratamiento").value="";
document.getElementById("proxima").value="";

}

// INICIAR
mostrarConsultas();