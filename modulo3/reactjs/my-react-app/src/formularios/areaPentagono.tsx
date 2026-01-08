import { useState } from 'react';

export default function AreaPentagono() {
    const [perimetro, setPerimetro] = useState<number>(0);
    const [apotema, setApotema] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const area = (perimetro * apotema) / 2;

        alert(`El área del pentágono es: ${area.toFixed(2)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Perímetro"
                value={perimetro}
                onChange={e => setPerimetro(Number(e.target.value))}
                required
            />
            <br />

            <input
                type="number"
                placeholder="Apotema"
                value={apotema}
                onChange={e => setApotema(Number(e.target.value))}
                required
            />
            <br />

            <button type="submit">Calcular área</button>
        </form>
    );
}
