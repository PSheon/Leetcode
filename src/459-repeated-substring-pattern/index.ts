/**
 * Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 *
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s: string): boolean {
  const regex = new RegExp(`^(.+)\\1+$`, 'i');
  const result = s.match(regex);

  return Boolean(result);
}

export default repeatedSubstringPattern;
