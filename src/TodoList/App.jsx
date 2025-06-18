import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, text]);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TodoInput onAdd={handleAddTodo} />

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
}
