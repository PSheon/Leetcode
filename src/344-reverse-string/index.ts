/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * @param {string[]} s
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    const back = s.length - i - 1;

    if (s[i] !== s[back]) {
      [s[i], s[back]] = [s[back], s[i]];
    }
  }
}

export default reverseString;
