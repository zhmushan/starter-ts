import { expect, test } from "vitest";
import fib from "./fib";

test("fib", () => {
  expect(() => fib(NaN)).toThrow("Invalid input. Please provide a positive integer.");
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
  expect(fib(20)).toBe(6765);
});
