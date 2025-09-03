import React, { useState } from "react";

export default function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputValue.trim() !== "") {
                setTodos([...todos, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="What needs to be done?"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <span
              className="delete-btn"
              onClick={() =>
                setTodos(todos.filter((_, currentIndex) => index !== currentIndex))
              }
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>
      <div>{todos.length} item left</div>
    </div>
  );
}