import React, { useState } from "react";

import "./App.css";
import Square from "./components/Square";

function App() {
  return (
    <div className="App">
      <div className="board-row">
        <Square buttonText={"x"} />
        <Square buttonText={"x"} />
        <Square buttonText={"x"} />
      </div>
      <div className="board-row">
        <Square buttonText={"x"} />
        <Square buttonText={"x"} />
        <Square buttonText={"x"} />
      </div>
      <div className="board-row">
        <Square buttonText={"x"} />
        <Square buttonText={"x"} />
        <Square buttonText={"x"} />
      </div>
    </div>
  );
}

export default App;
