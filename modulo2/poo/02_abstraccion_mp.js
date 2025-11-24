class Paciente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    puedeAutorizar() {
        if (this.edad >= 18) {
            console.log("Puede autorizar procedimientos");
        } else {
            console.log("Requiere autorización de un representante");
        }
    }
    mostrar() {
        console.log(this.nombre, this.edad);
    }
}

const paciente1 = new Paciente("Pedro", 17);
paciente1.mostrar();
paciente1.puedeAutorizar();
