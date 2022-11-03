/**
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *  - Starting with any positive integer, replace the number by the sum of the squares of its digits.
 *  - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 *  - Those numbers for which this process ends in 1 are happy.
 *
 * Return true if n is a happy number, and false if not.
 *
 * @param {number} number
 * @return {boolean}
 */
function isHappy(number: number): boolean {
  const table = {};

  while (!table[number] && number !== 1) {
    table[number] = 1;

    number
      .toString()
      .split('')
      .forEach((v, i) => {
        if (i === 0) number = 0;
        number += Math.pow(parseInt(v), 2);
      });
  }

  return number === 1;
}

export default isHappy;
