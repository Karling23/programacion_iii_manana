const productos = [
    { nombre: "Guantes", descripcion: "Látex talla M", precio: 8, existencia: 50, ubicacion: "Bodega A" },
    { nombre: "Mascarillas", descripcion: "KN95", precio: 1.5, existencia: 200, ubicacion: "Bodega B" },
    { nombre: "Alcohol 70%", descripcion: "Botella 1L", precio: 4, existencia: 30, ubicacion: "Bodega C" },
    { nombre: "Jeringas", descripcion: "5 ml", precio: 0.8, existencia: 150, ubicacion: "Bodega D" },
    { nombre: "Termómetro", descripcion: "Digital", precio: 12, existencia: 20, ubicacion: "Bodega E" },
    { nombre: "Gasas", descripcion: "Esterilizadas", precio: 5, existencia: 100, ubicacion: "Bodega F" },
    { nombre: "Tensiometro", descripcion: "Automático", precio: 45, existencia: 10, ubicacion: "Bodega G" },
    { nombre: "Estetoscopio", descripcion: "Profesional", precio: 35, existencia: 8, ubicacion: "Bodega H" },
    { nombre: "Medicamento A", descripcion: "Tabletas", precio: 18, existencia: 40, ubicacion: "Bodega I" },
    { nombre: "Medicamento B", descripcion: "Jarabe 120ml", precio: 9, existencia: 25, ubicacion: "Bodega J" }
];

const tabla = document.getElementById('cuerpoTabla');

productos.forEach(p => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.descripcion}</td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>${p.existencia}</td>
        <td>${p.ubicacion}</td>
    `;
    tabla.appendChild(fila);
});
