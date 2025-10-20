console.log("Consultorio Medico");

console.log("OPERADORES ARITMÉTICOS");

pacientesAtendidos = 20;
pacientesNuevos = 5;

console.log("Suma (total de pacientes hoy):");
totalPacientes = pacientesAtendidos + pacientesNuevos;
console.log("Resultado:", totalPacientes);

console.log("Resta (pacientes que faltan por atender):");
faltan = totalPacientes - pacientesAtendidos;
console.log("Resultado:", faltan);

console.log("Multiplicación (número de medicinas entregadas por paciente):");
medicinasPorPaciente = 3;
totalMedicinas = totalPacientes * medicinasPorPaciente;
console.log("Resultado:", totalMedicinas);

console.log("División (promedio de pacientes por hora):");
horasDeTrabajo = 5;
promedioPacientes = totalPacientes / horasDeTrabajo;
console.log("Resultado:", promedioPacientes);

console.log("Módulo (resto de pacientes para completar grupos de 4):");
resto = totalPacientes % 4;
console.log("Resultado:", resto);

console.log("Potencia (crecimiento estimado de pacientes en 2 días):");
proyeccion = pacientesNuevos ** 2;
console.log("Resultado:", proyeccion);

console.log("\nOPERADORES DE COMPARACIÓN");

edadPaciente = 45;
edadRequerida = "45";

console.log("Igualdad débil (==):", edadRequerida == edadPaciente);
console.log("Igualdad estricta (===):", edadRequerida === edadPaciente);
console.log("Desigualdad débil (!=):", edadRequerida != edadPaciente);
console.log("Desigualdad estricta (!==):", edadRequerida !== edadPaciente);
console.log("Mayor que (>):", edadPaciente > 50);
console.log("Menor que (<):", edadPaciente < 50);
console.log("Mayor o igual que (>=):", edadPaciente >= 45);
console.log("Menor o igual que (<=):", edadPaciente <= 45);

console.log("\nOPERADORES LÓGICOS");

tieneSeguro = true;
tieneCita = false;

console.log("AND (&&) → ¿Tiene seguro y cita?:", tieneSeguro && tieneCita);
console.log("OR (||) → ¿Tiene seguro o cita?:", tieneSeguro || tieneCita);
console.log("NOT (!) → Negación de tener cita:", !tieneCita);
