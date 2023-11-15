import { useState } from 'react'

import './App.css';


function App() {
       const [todos, setTodos]  = useState ([
           {
            id: 1,
            text: "cirar funcionalida X no sistema",
            Category: "Trabalho",
            isCompleted: false,
           },

           {
            id: 2,
            text: "Ir para academia",
            Category: "Pessoal",
            isCompleted: false,
           },
           {
            id: 3,
            text: "Estudar React",
            Category: "Estudos",
            isCompleted: false,
           },
       ]);

  return (
    <div className='app'>
        <h1>Lista de Tarefas</h1>

        <div className='todo-list'>
           {todos.map((todo) => (
            <div className='todo'>
                  <div className='content'>
                     <p>{todo.text}</p> 
                     <p className='category'>({todo.Category})</p>
                  </div>
                  <div>
                    <button>Completar</button>
                    <button>x</button>
                  </div>
            </div>
           ))}
        </div>
    </div>
  );
}

export default App