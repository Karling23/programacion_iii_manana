let parrafo = null;

document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Nota médica generada dinámicamente";
    document.getElementById('contenedor').appendChild(parrafo);
});

document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert("Bienvenido al consultorio");
}

document.getElementById('parrafo')
.addEventListener('dblclick', () => {
    alert("Información médica abierta");
});

document.getElementById('nombre')
.addEventListener('input', (e) => {
    console.log("Paciente:", e.target.value);
});
