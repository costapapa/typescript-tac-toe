import { calculateWinner } from "./calculateWinner";

test("checks if there isnt a winner", () => {
  //mock data
  const losingSquares = ["X", "O", "X", null, "X", null, "O", "X", "O"];
  const result = calculateWinner(losingSquares);
  expect(result).toBeNull();
});

test("checks if there is a winner", () => {
  const winnerSquares = ["X", "X", "X", null, null, null, null, "O", "O"];
  const result = calculateWinner(winnerSquares);
  expect(result).toBe("X");
});
