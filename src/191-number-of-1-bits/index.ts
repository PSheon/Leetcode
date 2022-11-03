/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n: number): number {
  const string = n.toString(2);
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '1') {
      total++;
    }
  }

  return total;
}

export default hammingWeight;
