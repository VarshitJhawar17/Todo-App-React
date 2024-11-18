import React from 'react';

function TodoList({ todos, onDeleteTodo, onEditTodo  }) {
  return (
    <ul className='w-64'>
      {todos.map((todo, index) => (
        <li
          key={index}
          className='border-b border-emerald-300 py-2 text-gray-700'
        >
          {todo}
          <div>
            <button
              className='text-emerald-500 hover:text-emerald-700 ml-2'
              onClick={() => onEditTodo(index)}
            >
              Edit
            </button>
            <button
              className='text-red-500 hover:text-red-700 ml-2'
              onClick={() => onDeleteTodo(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
