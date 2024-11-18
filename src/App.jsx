import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (todo) => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, updatedTodo) => {
    const newTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
    setTodos(newTodos);
    setEditIndex(null);  // Reset edit index after saving the edit
  };

  return (
    <div className='flex flex-col items-center mt-20'>
      {/* <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} /> */}
      <TodoInput onAddTodo={addTodo} onEditTodo={editTodo} editIndex={editIndex} todos={todos}  />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onEditTodo={setEditIndex} />
    </div>
  );
}

export default App;
