/**
 * Given an integer input, return true if input is a palindrome, and false otherwise.
 *
 * @param {number} input
 * @return {boolean}
 */
function isPalindrome(input: number): boolean {
  if (input < 0) return false;

  const inputString = input.toString();
  const reversed = inputString.split('').reverse().join('');

  if (inputString === reversed) return true;

  return false;
}

export default isPalindrome;
