const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorPacientes');
let pacientes = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const diagnostico = document.getElementById('diagnostico').value.trim();
    const costo = parseFloat(document.getElementById('costo').value.trim());

    if (nombre && diagnostico && !isNaN(costo)) {
        const nuevoPaciente = { id: Date.now(), nombre, diagnostico, costo };
        pacientes.push(nuevoPaciente);
        renderizarPaciente(nuevoPaciente);
        formulario.reset();
    }
});

function renderizarPaciente({ id, nombre, diagnostico, costo }) {
    const div = document.createElement('div');
    div.className = 'paciente';
    div.setAttribute('data-id', id);
    div.innerHTML = `
        <h3>${nombre}</h3>
        <p>${diagnostico}</p>
        <p><strong>Costo: $${costo.toFixed(2)}</strong></p>
        <div class="acciones"><button class="eliminar">Eliminar</button></div>
    `;
    contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
        const tarjeta = e.target.closest('.paciente');
        const id = parseInt(tarjeta.getAttribute('data-id'));
        pacientes = pacientes.filter(p => p.id !== id);
        tarjeta.remove();
    }
});
