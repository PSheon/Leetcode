/**
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Follow up: Do not use any built-in library function such as sqrt.
 *
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num: number): boolean {
  for (let i = 1; num > 0; i += 2) {
    num -= i;
  }

  return num === 0;
}

export default isPerfectSquare;
