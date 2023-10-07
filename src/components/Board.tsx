import React, { useState } from "react";
import Square from "./Square";

export const Board = () => {
  const [xisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    nextSquares[i] = xisNext ? "X" : "O";
    setSquares(nextSquares);
    setXisNext(!xisNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} square={() => handleClick(0)} />
        <Square value={squares[1]} square={() => handleClick(1)} />
        <Square value={squares[2]} square={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} square={() => handleClick(3)} />
        <Square value={squares[4]} square={() => handleClick(4)} />
        <Square value={squares[5]} square={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} square={() => handleClick(6)} />
        <Square value={squares[7]} square={() => handleClick(7)} />
        <Square value={squares[8]} square={() => handleClick(8)} />
      </div>
    </>
  );
};
