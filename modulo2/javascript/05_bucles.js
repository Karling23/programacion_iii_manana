for (let i = 1; i <= 10; i++) {
    console.log("Numero ", i);
}

suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Sumatoria de indices: ", suma);

let nombre = "francisco";
for (let i=0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

for (let i = 1; i <= 10; i++){
    console.log("cuadrado de", i, "es", i**2);
}

console.log("Bucle while");
let i=1;
while (i <=6){
    console.log("numero", i);
    i++;
}

let miArreglo=[-2,3,1,2,3];
let indice=1;
while(indice<miArreglo.length){
    console.log("valor", indice, "es", miArreglo[indice]);
    indice++;
}

let numero=1;
while (numero<=100){
    if (numero % 2 ==0)
    console.log("Numero", numero, "es par");
    numero++;
}

let x=5;
do {
    console.log(x, "es", x);
    x--;
} while (x!=0);

let mult = 1;    
while (mult <= 10) {
    console.log(mult, "*5=", mult*5);
    mult++; 
}


let Arreglo = [8, 15, 3, 27, 10];
let indic = 0;
let mayor = 0; 

while (indic < Arreglo.length) {
    if (Arreglo[indic] > mayor) {
        mayor = Arreglo[indic];
    }
    indic++;
}
console.log("El número mayor es:", mayor);