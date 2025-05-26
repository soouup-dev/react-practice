import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(), // 간단한 고유 ID
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
      <div style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '2rem' }}>
        <h2>📝 Todo List</h2>

        <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="할 일 입력"
        />
        <button onClick={handleAdd}>추가</button>

        <ul>
          {todos.length === 0 && <li>할 일이 없습니다.</li>}
          {todos.map(({ id, text }) => (
              <li key={id}>
                {text}
                <button onClick={() => handleDelete(id)}>삭제</button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoList;
