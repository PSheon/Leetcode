/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s: string, t: string): boolean {
  let cFlag = 0;

  for (let i = 0; i < t.length; i++) {
    if (cFlag === s.length) return true;

    if (s.charAt(cFlag) === t.charAt(i)) {
      cFlag++;
    }
  }

  return cFlag === s.length;
}

export default isSubsequence;
