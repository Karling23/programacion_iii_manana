console.log("Objetos");

let paciente = {
    nombre: "Evelyn",
    edad: 30,
    ciudad: "Quito"
};
console.log(paciente);

console.log(paciente.nombre);
console.log(paciente.ciudad);

console.log(paciente["edad"]);

console.log("Modificación del objeto");
paciente.nombre = "Juan";
console.log(paciente);

paciente.diagnostico = "Gripe";
console.log(paciente);

console.log("Eliminar clave al objeto");
delete paciente.diagnostico;
console.log(paciente);

console.log("Recorrer un Objeto");
for (let clave in paciente) {
    console.log(clave);
}

console.log("Mostrar claves con Object Keys");
console.log(Object.keys(paciente));

console.log("Mostrar valores con Object.values");
console.log(Object.values(paciente));

console.log("Objetos Anidados");

let historiaClinica = {
    nombre: "Luis",
    apellido: "García",
    contacto: {
        correo: "luis@gmail.com",
        telefono: "022334455",
        celular: "098112233"
    },
    signos_vitales: [
        {
            tipo: "Presión arterial",
            valor: "120/80"
        },
        {
            tipo: "Temperatura",
            valor: "37.2°C"
        }
    ]
};

console.log("Historia Clínica:", historiaClinica);
