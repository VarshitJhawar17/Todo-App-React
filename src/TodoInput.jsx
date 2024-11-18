import React, { useEffect, useState } from 'react';


function TodoInput({onAddTodo , onEditTodo, editIndex, todos}) {

    const [todo, setTodo] = useState('');

    useEffect(() => {
        if (editIndex !== null) {
          setTodo(todos[editIndex]);  // Pre-fill input if editing
        }
      }, [editIndex, todos]);

      const handleAddTodo = () => {
        if (editIndex === null) {
          onAddTodo(todo);  // Add new todo
        } else {
          onEditTodo(editIndex, todo);  // Edit existing todo
        }
        setTodo('');
      };

  return (
    <div className='flex justify-center items-center mt-20 gap-2'>
      <input 
        className='border border-gray-300 p-2 w-64 h-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' 
        type='text' 
        placeholder='Enter Todo' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button 
        className='bg-emerald-400 h-10 px-4 border rounded-xl text-gray-100 hover:bg-blue-500 transition'
        onClick={handleAddTodo}
      >
        {editIndex === null ? 'Add Todo' : 'Edit Todo'}
      </button>
      
    </div>
  );
}

export default TodoInput;
