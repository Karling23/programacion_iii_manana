const corazon = document.getElementById('corazon');

function cambiarColor() {
    const colores = ['#e63946', '#ff7f50', '#ff006e', '#fb5607', '#ffbe0b'];
    const random = colores[Math.floor(Math.random() * colores.length)];
    corazon.style.backgroundColor = random;
    corazon.style.setProperty("--extra", random);
    corazon.style.setProperty("--color", random);
    corazon.style.backgroundColor = random;
}

function latido() {
    corazon.style.transform = "rotate(-45deg) scale(1.3)";
    setTimeout(() => {
        corazon.style.transform = "rotate(-45deg) scale(1)";
    }, 300);
}

function reiniciar() {
    corazon.style.width = "100px";
    corazon.style.height = "100px";
    corazon.style.transform = "rotate(-45deg) scale(1)";
    corazon.style.backgroundColor = "#e63946";
}
