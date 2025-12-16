import React, { useState } from 'react';

function Todolist() {
  const [todos, setTodos] = useState(["Uma", "Pravallika", "Manashvi"]);
  const [todo, setTodo] = useState("");

  function delTodo(index=0) {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <div className="border border-2 m-3 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">TODOLIST</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border px-2 py-1 rounded"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={() => setTodos([...todos, todo])}
          className="bg-blue-500 text-white px-3 rounded"
        >
          AddTodo
        </button>
      </div>

      <ul className="w-full max-w-sm">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center  py-2"
          >
            <span>{todo}</span>
            <button
              onClick={() => delTodo(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
