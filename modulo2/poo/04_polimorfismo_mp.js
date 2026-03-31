class Empleado {
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar(){
        console.log(`${this.nombre} atendiendo en el consultorio...`);
    }

    calcularVacaciones(){
        return this.salario * 0.15;
    }

    horasExtra(horas){
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Doctor extends Empleado {
    calcularVacaciones(){
        return this.salario * 0.25;
    }

    horasExtra(horas){
        return ((this.salario / 30) / 8) * horas * 4;
    }

    diagnosticar(){
        console.log(`${this.nombre} está realizando un diagnóstico.`);
    }
}

class Enfermera extends Empleado {
    calcularVacaciones(){
        return this.salario * 0.12;
    }

    asistirDoctor(){
        console.log(`${this.nombre} está asistiendo al doctor.`);
    }
}

const docAna = new Doctor("Dra. Evelyn", 3000);
const enfLuis = new Enfermera("Luis", 1500);

docAna.trabajar();
enfLuis.trabajar();

docAna.diagnosticar();
enfLuis.asistirDoctor();

console.log(docAna.calcularVacaciones());
console.log(enfLuis.calcularVacaciones());

console.log(docAna.horasExtra(5));
console.log(enfLuis.horasExtra(4));
