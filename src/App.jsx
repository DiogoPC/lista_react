import { useState } from 'react'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


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
             <Todo key={todo.id} todo = {todo} />
           ))}
        </div>

        <TodoForm />
        
    </div>
  );
}

export default App
