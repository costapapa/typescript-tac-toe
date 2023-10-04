import React, { useState } from "react";
import Square from "./Square";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} square={setSquares} />
        <Square value={squares[1]} square={setSquares} />
        <Square value={squares[2]} square={setSquares} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} square={setSquares} />
        <Square value={squares[4]} square={setSquares} />
        <Square value={squares[5]} square={setSquares} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} square={setSquares} />
        <Square value={squares[7]} square={setSquares} />
        <Square value={squares[8]} square={setSquares} />
      </div>
    </>
  );
};
