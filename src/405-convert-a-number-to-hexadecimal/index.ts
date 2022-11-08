/**
 * Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
 *
 * All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
 *
 * Note: You are not allowed to use any built-in library method to directly solve this problem.
 *
 * @param {number} num
 * @return {string}
 */
function toHex(num: number): string {
  if (num === 0) return '0';

  const hexTable = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  let output = '';

  while (num !== 0) {
    const count = num & 0xf;
    output += hexTable[count];
    num >>>= 4;
  }

  return output.split('').reverse().join('');
}

export default toHex;
