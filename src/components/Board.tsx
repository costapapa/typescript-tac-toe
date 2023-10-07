import React, { useState } from "react";
import Square from "./Square";

export const Board = () => {
  const [xisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares: any[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player: " + (xisNext ? "X" : "0");
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xisNext ? "X" : "O";
    setSquares(nextSquares);
    setXisNext(!xisNext);
  }

  return (
    <>
      <div className="status">{status}</div>
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
