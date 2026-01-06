import { useState } from 'react';

export default function AreaTriangulo() {
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [area, setArea] = useState(0);

    const calcularArea = () => {
        setArea((base * altura) / 2);
    };

    return (
        <div>
        <input
            type="number"
            placeholder="Base"
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
        />
        <br />

        <input
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(Number(e.target.value))}
        />
        <br />

        <button onClick={calcularArea}>
            Calcular area
        </button>

        <p>area del triangulo: {area}</p>
        </div>
    );
}