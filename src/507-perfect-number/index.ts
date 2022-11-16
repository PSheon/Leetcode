/**
 * A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
 *
 * Given an integer n, return true if n is a perfect number, otherwise return false.
 *
 * @param {number} num
 * @return {boolean}
 */
function checkPerfectNumber(num: number): boolean {
  if (num === 1) return false;

  const max = Math.sqrt(num);
  let total = 1;
  let output = false;

  for (let i = 2; i < max; i++) {
    if (num % i === 0) {
      total += i + num / i;
    }
  }

  output = total === num;

  return output;
}

export default checkPerfectNumber;
