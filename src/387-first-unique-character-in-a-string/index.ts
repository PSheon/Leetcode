/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 *
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s: string): number {
  const table: Record<number, number> = {};
  let output = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (table[char] > 0) {
      table[char]++;
    } else {
      table[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (table[s.charAt(i)] === 1) {
      output = i;
      break;
    }
  }

  return output;
}

export default firstUniqChar;
