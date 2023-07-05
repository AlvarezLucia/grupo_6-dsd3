import React, { useState } from 'react';

const CalculadorIVA = () => {
    const [salarioTotal, setSalarioTotal] = useState('');
    const [impuesto, setImpuesto] = useState('');
    const [totalConImpuesto, setTotalConImpuesto] = useState('');

    const calcularImpuesto = () => {
        const salario = parseFloat(salarioTotal);
        const impuestoCalculado = salario * 0.21;
        const totalCalculado = salario - impuestoCalculado;

        setImpuesto(impuestoCalculado.toFixed(2));
        setTotalConImpuesto(totalCalculado.toFixed(2));
    };

    return (
        <div>
            <label htmlFor="salario-total">Ingrese su salario total:</label>
            <input
                type="number"
                id="salario-total"
                value={salarioTotal}
                onChange={(e) => setSalarioTotal(e.target.value)}
            />
            <button onClick={calcularImpuesto}>Calcular impuesto</button>
            <p>El impuesto a pagar es: {impuesto}</p>
            <p>El salario total después del impuesto es: {totalConImpuesto}</p>
        </div>
    );
};

export default CalculadorIVA;