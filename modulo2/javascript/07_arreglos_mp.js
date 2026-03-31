console.log("arrays o arreglos");

let pacientes = ["Evelyn", "Carlos", "Juan", "Enrique"];
let listaVacia = new Array();
let listaVacia2 = [];
console.log("Lista de pacientes original", pacientes);
console.log(listaVacia);
console.log(listaVacia2);

console.log("Acceso a elementos del array");
console.log(pacientes[0]);
console.log(pacientes[3]);

console.log("Modificar elemento");
pacientes[0] = "Paciente Urgente";
console.log(pacientes);

console.log("Agregar paciente al final");
pacientes.push("Paciente Nuevo");
console.log(pacientes);

console.log("Agregar paciente al inicio");
pacientes.unshift("Emergencia");
console.log(pacientes);

console.log("Eliminar el último paciente");
pacientes.pop();
console.log(pacientes);

console.log("Eliminar el primer paciente");
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

console.log("Iteración con For ... of");
for (let persona of pacientes) {
    console.log(persona);
}

console.log("Iteración con For Each");
pacientes.forEach(function(persona, i) {
    console.log(i, persona);
});
