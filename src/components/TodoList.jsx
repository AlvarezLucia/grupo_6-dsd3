import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now(),
        description: task,
      };

      setTodoList([...todoList, newTask]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedList = todoList.filter((task) => task.id !== taskId);
    setTodoList(updatedList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Agregar tarea"
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      {todoList.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {todoList.map((task) => (
            <li key={task.id}>
              {task.description}
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
