import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render the H1", () => {
  render(<App />);
  const headingOne = screen.getByRole("heading", { level: 1 });
  expect(headingOne).toBeInTheDocument();
  expect(headingOne.textContent).toBe("Tic-Tac-Toe");
});

test("Renders X as first go", () => {
  render(<App />);
  const xPlayerGo = screen.getByText("Next Player: X");
  expect(xPlayerGo.textContent).toBe("Next Player: X");
});
