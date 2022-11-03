/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s: string): boolean {
  const pattern = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();

  return pattern === pattern.split('').reverse().join('');
}

export default isPalindrome;
