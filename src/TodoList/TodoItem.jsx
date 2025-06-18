import React from "react";

export default function TodoItem({ todo, onDelete }) {
  const handleDelete = () => {
    fetch(`/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        onDelete(todo.id); // App에서 삭제 처리
      });
  };

  return (
    <li>
      {todo.title}
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
