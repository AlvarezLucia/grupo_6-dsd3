import React, { useState } from 'react';

const ExpenseCalculator = () => {
    const [sueldoTotal, setSueldoTotal] = useState('');
    const [gastoLuz, setGastoLuz] = useState('');
    const [gastoAgua, setGastoAgua] = useState('');
    const [gastoGas, setGastoGas] = useState('');
    const [gastoComida, setGastoComida] = useState('');
    const [gastoInternet, setGastoInternet] = useState('');
    const [otrosGastos, setOtrosGastos] = useState('');
    const [totalGastos, setTotalGastos] = useState('');
    const [restante, setRestante] = useState('');

    const calcularGastos = () => {
        const sueldo = parseFloat(sueldoTotal);
        const luz = parseFloat(gastoLuz) || 0;
        const agua = parseFloat(gastoAgua) || 0;
        const gas = parseFloat(gastoGas) || 0;
        const comida = parseFloat(gastoComida) || 0;
        const internet = parseFloat(gastoInternet) || 0;
        const otros = parseFloat(otrosGastos) || 0;

        const total = luz + agua + gas + comida + internet + otros;
        const restante = sueldo - total;

        setTotalGastos(total.toFixed(2));
        setRestante(restante.toFixed(2));
    };

    return (
        <div>
            <label htmlFor="sueldo-total">Ingrese su sueldo total:</label>
            <input
                type="number"
                id="sueldo-total"
                value={sueldoTotal}
                onChange={(e) => setSueldoTotal(e.target.value)}
            />

            <h3>Gastos personales:</h3>

            <div>
                <label htmlFor="gasto-luz">Gasto de luz:</label>
                <input
                    type="number"
                    id="gasto-luz"
                    value={gastoLuz}
                    onChange={(e) => setGastoLuz(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor="gasto-agua">Gasto de agua:</label>
                <input
                    type="number"
                    id="gasto-agua"
                    value={gastoAgua}
                    onChange={(e) => setGastoAgua(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor="gasto-gas">Gasto de gas:</label>
                <input
                    type="number"
                    id="gasto-gas"
                    value={gastoGas}
                    onChange={(e) => setGastoGas(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor="gasto-comida">Gasto de comida:</label>
                <input
                    type="number"
                    id="gasto-comida"
                    value={gastoComida}
                    onChange={(e) => setGastoComida(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor="gasto-internet">Gasto de Internet:</label>
                <input
                    type="number"
                    id="gasto-internet"
                    value={gastoInternet}
                    onChange={(e) => setGastoInternet(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor="otros-gastos">Otros gastos:</label>
                <input
                    type="number"
                    id="otros-gastos"
                    value={otrosGastos}
                    onChange={(e) => setOtrosGastos(e.target.value)}
                />
            </div>
            <br />
            <button onClick={calcularGastos}>Calcular gastos</button>
            <p>Total de gastos: {totalGastos}</p>
            <p>Restante: {restante}</p>

        </div>
    );
};

export default ExpenseCalculator;
