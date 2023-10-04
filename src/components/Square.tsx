import React, { Dispatch, SetStateAction, useState } from "react";

interface SquareProps {
  value: number;
  square: Dispatch<SetStateAction<any[]>>;
}

export default function Square({ value, square }: SquareProps) {
  function squareClick() {}
  return (
    <>
      <button className="square" onClick={squareClick}>
        {value}
      </button>
    </>
  );
}
