import React, { useState } from "react";

interface SquareProps {
  buttonText: string;
}

export default function Square(props: SquareProps) {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue(value === "X" ? "O" : "X");
  }
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value || props.buttonText}
      </button>
    </>
  );
}
