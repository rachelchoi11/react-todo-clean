import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="red, blue, green, yellow, purple, orange, pink, brown, gray, black, white, etc."
        />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
