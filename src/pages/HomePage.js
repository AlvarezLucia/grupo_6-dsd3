import React from 'react';
import ActionCard from '../components/ActionCard';
import Calculator from '../components/CalculadorIVA';
import ExpenseCalculator from '../components/ExpenseCalculator';
import EventCalendar from '../components/EventCalendar';
import TotalSalaryCalculator from '../components/TodoList';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Acciones disponibles:</h1>
            <div className="action-cards-container">
                <ActionCard title="Calculadora de costos de impuestos (IVA)">
                    <Calculator />
                </ActionCard>
                <ActionCard title="Calculadora de gastos personales">
                    <ExpenseCalculator />
                </ActionCard>
                <ActionCard title="Anotador de eventos personales">
                    <EventCalendar />
                </ActionCard>
                <ActionCard title="Lista de tareas">
                    <TotalSalaryCalculator />
                </ActionCard>
            </div>
        </div>
    );
};

export default HomePage;
