import React from 'react';

function TodoForm() {
  return (
    <div className='todo-form'>
         
         <h2>Criar Tarefa:</h2>
          
          <form>
             <input type='text' placeholder='Digite o titulo' />
             <select>
                  <option value="">Selecione um categoria</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Pessoal">Pessoal</option>
                  <option value="Estudos">Estudos</option>
             </select>

             <button type='submit'>Criar Tarefa</button>
          </form>

    </div>
  )
}

export default TodoForm
