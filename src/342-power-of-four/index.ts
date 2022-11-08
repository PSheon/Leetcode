/**
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 *
 * An integer n is a power of four, if there exists an integer x such that n == 4x.
 *
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfFour(n: number): boolean {
  if (n < 1) return false;

  let count = 1;

  while (count < n) {
    count *= 4;
  }

  return count === n;
}

export default isPowerOfFour;
