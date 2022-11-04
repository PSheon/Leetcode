/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 *
 * @param {number} n
 * @return {number[]}
 */
function countBits(n: number): number[] {
  if (n === 0) return [0];

  const output = [0, 1];

  for (let i = 2; i <= n; i++) {
    output.push(output[Math.floor(i / 2)] + output[i % 2]);
    console.log('output, ', output);
  }

  return output;
}

export default countBits;
