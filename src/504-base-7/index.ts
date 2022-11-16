/**
 * Given an integer num, return a string of its base 7 representation.
 *
 * @param {number} num
 * @return {string}
 */
function convertToBase7(num: number): string {
  if (num === 0) return '0';

  let positiveNumber = Math.abs(num);
  let output = '';

  while (positiveNumber > 0) {
    const remainder = positiveNumber % 7;
    positiveNumber = (positiveNumber - remainder) / 7;

    output = `${remainder.toString()}${output}`;
  }

  if (num < 0) {
    output = `-${output}`;
  }

  return output;
}

export default convertToBase7;
