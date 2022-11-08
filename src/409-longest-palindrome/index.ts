/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s: string): number {
  const table: Record<string, number> = {};
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i);
    if (table[currentChar] === 1) {
      output += 2;
      delete table[currentChar];
    } else {
      table[currentChar] = 1;
    }
  }

  if (Object.values(table).length) {
    output++;
  }

  return output;
}

export default longestPalindrome;
