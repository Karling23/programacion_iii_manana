class Paciente {
    constructor(nombre, diagnostico) {
        this.nombre = nombre;
        this.diagnostico = diagnostico;
    }
    registrar() {
        console.log(`${this.nombre} ha sido registrado`);
    }
    atender() {
        console.log(`${this.nombre} está siendo atendido`);
    }
    darAlta() {
        console.log(`${this.nombre} ha sido dado de alta`);
    }
}

const paciente1 = new Paciente("Luis", "Fiebre");
paciente1.registrar();
paciente1.atender();
paciente1.darAlta();

console.log(paciente1.nombre);
console.log(paciente1.diagnostico);
