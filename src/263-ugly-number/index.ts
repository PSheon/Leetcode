/**
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 *
 * Given an integer n, return true if n is an ugly number.
 *
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n: number): boolean {
  if (n <= 0) return false;
  if (n <= 6) return true;

  while (n > 2) {
    if (n % 2 !== 0) {
      break;
    }
    n /= 2;
  }

  while (n > 3) {
    if (n % 3 !== 0) {
      break;
    }
    n /= 3;
  }

  while (n > 5) {
    if (n % 5 !== 0) {
      break;
    }
    n /= 5;
  }

  return n % 2 === 0 || n % 3 === 0 || n % 5 === 0;
}

export default isUgly;
