/**
 * Given two non-negative integers, number1 and number2 represented as string, return the sum of number1 and number2 as a string.
 *
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 *
 * @param {string} number1
 * @param {string} number2
 * @return {string}
 */
function addStrings(number1: string, number2: string): string {
  const length = Math.max(number1.length, number2.length);
  const number1Pattern = number1.padStart(length, '0');
  const number2Pattern = number2.padStart(length, '0');

  let output = '';
  let carry = false;

  for (let i = length - 1; i >= 0; i--) {
    let currentNumber = carry ? 1 : 0;
    currentNumber +=
      parseInt(number1Pattern.charAt(i)) + parseInt(number2Pattern.charAt(i));

    if (currentNumber > 9) {
      currentNumber -= 10;
      carry = true;
    } else {
      carry = false;
    }

    output += currentNumber.toString();
  }

  if (carry) output += '1';

  return output.split('').reverse().join('');
}

export default addStrings;
