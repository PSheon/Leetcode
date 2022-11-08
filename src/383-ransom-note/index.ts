/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;

  const table: Record<number, number> = {};
  let output = true;

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine.charAt(i);

    if (table[char] > 0) {
      table[char]++;
    } else {
      table[char] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote.charAt(i);

    if (table[char] > 0) {
      table[char]--;
    } else {
      output = false;
      break;
    }
  }

  return output;
}

export default canConstruct;
