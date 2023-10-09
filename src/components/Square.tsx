import React, { Dispatch, SetStateAction, useState } from "react";

interface SquareProps {
  value: number;
  square: () => void;
}

export const Square = ({ value, square }: SquareProps) => {
  return (
    <>
      <button className="square" onClick={square}>
        {value}
      </button>
    </>
  );
};
