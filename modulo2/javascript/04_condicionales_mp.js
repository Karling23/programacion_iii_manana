let temperatura_paciente = 38;

if (temperatura_paciente > 37.5) {
    console.log("El paciente tiene fiebre");
}

let clave_medico = "dr2025";

if (clave_medico == "dr2025") {
    console.log("Médico autenticado");
} else {
    console.log("Acceso denegado");
}

let resultado_glucosa = 130;

if (resultado_glucosa >= 180) {
    console.log("Glucosa muy alta (posible diabetes)");
} else if (resultado_glucosa >= 100) {
    console.log("Glucosa elevada");
} else {
    console.log("Glucosa normal");
}

let edad_paciente = 16;
let tiene_autorizacion_padre = true;

if (edad_paciente >= 18) {
    console.log("El paciente puede autorizar el procedimiento");
} else {
    if (tiene_autorizacion_padre) {
        console.log("Autorización válida por el representante");
    } else {
        console.log("Se requiere autorización del representante");
    }
}

let tipo_consulta = "general";

switch (tipo_consulta) {
    case "general":
        console.log("Consulta general asignada");
        break;
    case "odontologia":
        console.log("Dirigir al consultorio odontológico");
        break;
    case "emergencia":
        console.log("Atender inmediatamente");
        break;
    default:
        console.log("Área no especificada");
}

let p1 = 120;
let p2 = 135;
let p3 = 110;
let mayor_presion = 0;

if (p1 > mayor_presion) {
    mayor_presion = p1;
}
if (p2 > mayor_presion) {
    mayor_presion = p2;
}
if (p3 > mayor_presion) {
    mayor_presion = p3;
}

console.log("La presión más alta registrada es:", mayor_presion);
