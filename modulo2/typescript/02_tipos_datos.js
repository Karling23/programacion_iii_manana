var edad = 30;
var nombre = "Maria";
var activo = true;
var valor = 6;
if (edad > 18 && activo) {
    console.log('Trabajador activo');
}
else {
    console.log('No trabaja');
}
var frutas = ['manzana', 'banana', 'orange'];
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["Entregado"] = 1] = "Entregado";
    Estado[Estado["Enviado"] = 2] = "Enviado";
})(Estado || (Estado = {}));
console.log(Estado);
console.log(Estado.Entregado);
