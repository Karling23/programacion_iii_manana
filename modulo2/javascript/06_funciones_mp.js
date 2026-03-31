console.log("Funciones");

console.log("Forma Clásica");

function registrarPaciente() {
    console.log("Paciente registrado en el sistema");
}
registrarPaciente();

console.log("Forma con Parámetros y Retorno");

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
let imc = calcularIMC(80, 1.72);
console.log("El IMC es:", imc);

console.log("Función Flecha");

const diferenciaEdad = (edad1, edad2) => {
    return edad1 - edad2;
}
let resultadoEdades = diferenciaEdad(45, 30);
console.log("Diferencia de edades:", resultadoEdades);

console.log("Función Retorno Directo");
const calcularDosis = mg => mg * 2;
console.log("Dosis final:", calcularDosis(5));

console.log("Función con Parámetros por Defecto");

function agendar(nombre, mensaje = "Cita agendada para") {
    return mensaje + " " + nombre;
}
let c1 = agendar("Ana");
let c2 = agendar("Luis", "Recordatorio de cita para");
console.log(c1);
console.log(c2);

console.log("Cálculo de frecuencia cardíaca");
function frecuenciaCardiaca(latidos, segundos) {
    let total = (latidos / segundos) * 60;
    return total;
}

let latidos = 40;
let tiempo = 30;
console.log("Frecuencia cardíaca:", frecuenciaCardiaca(latidos, tiempo));

console.log("Array de pacientes");
let pacientes = ["Ana", "Luis", "Carlos", "María"];
let listaVacia = new Array();
let listaVacia2 = [];

console.log("Lista original:", pacientes);
console.log(listaVacia);
console.log(listaVacia2);
console.log("Acceso a elementos:");
console.log(pacientes[0]);
console.log(pacientes[3]);

console.log("Modificar elementos");
pacientes[0] = "Paciente A";
console.log(pacientes);

console.log("Agregar paciente");
pacientes.push("Paciente Nuevo");
console.log(pacientes);

console.log("Agregar al inicio");
pacientes.unshift("Emergencia");
console.log(pacientes);

console.log("Eliminar último");
pacientes.pop();
console.log(pacientes);

console.log("Eliminar primero");
pacientes.shift();
console.log(pacientes);

console.log("Iteración con While");
let indice = 0;
while (indice < pacientes.length) {
    console.log("Paciente", indice, ":", pacientes[indice]);
    indice++;
}

console.log("Iteración con For");
for (let i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
}
