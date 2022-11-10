/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Given two integers x and y, return the Hamming distance between them.
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x: number, y: number): number {
  const xPattern = x.toString(2).padStart(32, '0');
  const yPattern = y.toString(2).padStart(32, '0');

  let output = 0;

  for (let i = 0; i < xPattern.length; i++) {
    if (xPattern[i] !== yPattern[i]) output++;
  }

  return output;
}

export default hammingDistance;
