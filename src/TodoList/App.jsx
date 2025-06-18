import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = (newTodo) => {
    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo.title }),
    })
      .then((res) => res.json())
      .then((createdTodo) => {
        setTodos([...todos, createdTodo]);
      });
  };

  const handleDelete = (id) => {
    fetch(`/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(todos.filter((todo) => todo.id !== data.id));
      });
  };

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
