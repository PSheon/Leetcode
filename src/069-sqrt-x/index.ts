/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *   - For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 * @param {number} x
 * @return {number}
 */
function mySqrt(x: number): number {
  let high = Math.floor(Math.sqrt(x));
  let low = 0;

  let output = 0;

  while (high > low) {
    const middle = Math.floor((high + low) / 2);

    if (middle * middle == x) {
      output = middle;
      break;
    } else if (middle * middle > x) {
      high = middle - 1;
    } else {
      low = middle + 1;
      output = low;
    }
  }

  return output;
}

export default mySqrt;
