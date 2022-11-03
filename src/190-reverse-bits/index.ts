/**
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * @param {string} n
 * @return {number}
 */
function reverseBits(n: number): number {
  const number = n.toString(2).padStart(32, '0');
  const reversedNumber = number.split('').reverse().join('');

  return parseInt(reversedNumber, 2);
}

export default reverseBits;
