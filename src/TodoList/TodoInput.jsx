import React from "react";
import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return; // 공백만 입력됐을 경우 무시
    onAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleSubmit}>입력</button>
    </div>
  );
}
