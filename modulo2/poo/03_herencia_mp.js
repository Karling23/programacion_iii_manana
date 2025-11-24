class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    accion() {
        console.log(`${this.nombre} realiza una acción`);
    }
}

class Doctor extends Persona {}

const doctor1 = new Doctor("Dr. Ramírez");
const persona1 = new Persona("Paciente Juan");

doctor1.accion();
persona1.accion();
