import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;

    // 서버에 POST 요청 보내기
    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: input }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        onAdd(newTodo); // App에서 state 업데이트
        setInput(""); // 입력창 비우기
      });
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleSubmit}>입력</button>
    </div>
  );
}
