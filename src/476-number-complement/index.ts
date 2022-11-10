/**
 * The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
 *  - The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
 *
 * Given an integer num, return its complement.
 *
 * @param {number} num
 * @return {number}
 */
function findComplement(num: number): number {
  const numberPattern = num.toString(2);
  let complement = '';
  let output = 0;

  for (let i = 0; i < numberPattern.length; i++) {
    if (numberPattern.charAt(i) === '0') {
      complement += '1';
    } else {
      complement += '0';
    }
  }

  output = parseInt(complement, 2);

  return output;
}

export default findComplement;
