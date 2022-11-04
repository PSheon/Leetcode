/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s: string, t: string): boolean {
  const sTable = {};
  const tTable = {};
  let output = true;

  for (let i = 0; i < s.length; i++) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);
    if (sTable[sChar]) {
      if (sTable[sChar] !== tChar) {
        output = false;
        break;
      }
    } else {
      sTable[sChar] = tChar;
    }

    if (tTable[tChar]) {
      if (tTable[tChar] !== sChar) {
        output = false;
        break;
      }
    } else {
      tTable[tChar] = sChar;
    }
  }

  return output;
}

export default isIsomorphic;
