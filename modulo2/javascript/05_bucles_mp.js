for (let i = 1; i <= 10; i++) {
    console.log("Paciente número", i);
}

let total_pacientes = 0;
for (let i = 1; i <= 10; i++) {
    total_pacientes += i;
}
console.log("Total de pacientes atendidos:", total_pacientes);

let doctor = "cardiologo";
for (let i = 0; i < doctor.length; i++) {
    console.log(doctor[i]);
}

for (let i = 1; i <= 10; i++){
    console.log("Dosis número", i, "equivale a", i**2, "mg");
}

console.log("Lista de turnos");
let i = 1;
while (i <= 6){
    console.log("Turno", i);
    i++;
}

let lista_temperaturas = [36, 38, 37, 39, 36];
let indice = 1;
while(indice < lista_temperaturas.length){
    console.log("Temperatura del paciente", indice, "es", lista_temperaturas[indice]);
    indice++;
}

let numero = 1;
while (numero <= 100){
    if (numero % 2 == 0)
    console.log("Habitación", numero, "está disponible");
    numero++;
}

let x = 5;
do {
    console.log("Quedan", x, "medicamentos");
    x--;
} while (x != 0);

let mult = 1;    
while (mult <= 10) {
    console.log("Día", mult, ": se aplicaron", mult * 5, "vacunas");
    mult++; 
}

let presiones = [120, 140, 110, 160, 130];
let indic = 0;
let mayor = 0; 

while (indic < presiones.length) {
    if (presiones[indic] > mayor) {
        mayor = presiones[indic];
    }
    indic++;
}
console.log("La presión más alta registrada es:", mayor);
