/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 *  - F(0) = 0, F(1) = 1
 *  - F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 * Given n, calculate F(n).
 *
 * @param {number} n
 * @return {number}
 */
function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const table: number[] = [0, 1];
  let output = 0;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
    output = table[i];
  }

  return output;
}

export default fib;
