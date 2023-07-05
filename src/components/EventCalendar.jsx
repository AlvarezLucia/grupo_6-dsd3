import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [event, setEvent] = useState('');
    const [events, setEvents] = useState([]);

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleEventChange = (e) => {
        setEvent(e.target.value);
    };

    const handleAddEvent = () => {
        const newEvent = {
            id: new Date().getTime(), // Se agrega una propiedad "id" única para cada evento
            date: date,
            event: event,
            color: getRandomColor(), // Se asigna un color aleatorio al evento
        };
        setEvents([...events, newEvent]);
        setEvent('');
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div>
            <Calendar value={date} onChange={handleDateChange} />
            <div>
                <input
                    type="text"
                    placeholder="Ingresa el evento"
                    value={event}
                    onChange={handleEventChange}
                />
                <button onClick={handleAddEvent}>Agregar Evento</button>
            </div>
            <div>
                <h3>Eventos:</h3>
                {events.map((ev) => (
                    <p key={ev.id} style={{ color: ev.color }}>
                        {ev.date.toLocaleDateString()}: {ev.event}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;