/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 *
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 *
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n: number): boolean {
  while (n > 2) {
    if (n % 3 !== 0) return false;
    n /= 3;
  }

  return n == 1;
}

export default isPowerOfThree;
