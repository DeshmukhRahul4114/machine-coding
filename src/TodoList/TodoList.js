import React, { useState } from 'react';
import './TodoList.styled.css';

const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, Title: "Todo 1" },
    { id: 2, Title: "Todo 2" }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleAddTodo = () => {
    if (newTitle.trim() === '') return;
    const newTodo = {
      id: todo.length ? todo[todo.length - 1].id + 1 : 1,
      Title: newTitle
    };
    setTodo([...todo, newTodo]);
    setNewTitle('');
  };

  const handleDeleteTodo = (id) => {
    const newTodo = todo.filter(item => item.id !== id);
    setTodo(newTodo);
  };

  const handleEditTodo = (id) => {
    const itemToEdit = todo.find(item => item.id === id);
    setEditId(id);
    setEditTitle(itemToEdit.Title);
  };

  const handleUpdateTodo = () => {
    if (editTitle.trim() === '') return;
    const updatedTodo = todo.map(item =>
      item.id === editId ? { ...item, Title: editTitle } : item
    );
    setTodo(updatedTodo);
    setEditId(null);
    setEditTitle('');
  };

  return (
    <div className='container'>
      <div className='add-section'>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className='todo-list'>
        {todo.map((item) => (
          <div key={item.id} className='box'>
            {editId === item.id ? (
              <div className='tile'>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update</button>
              </div>
            ) : (
              <div className='tile'>
                <div>{item.Title}</div>
                <button onClick={() => handleEditTodo(item.id)}>Edit</button>
                <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
