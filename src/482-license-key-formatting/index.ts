/**
 * You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.
 *
 * We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
 *
 * Return the reformatted license key.
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function licenseKeyFormatting(s: string, k: number): string {
  let counter = 0;
  let output = '';

  for (let i = s.length - 1; i > -1; i--) {
    const currentChar = s.charAt(i);

    if (currentChar === '-') {
      continue;
    }

    if (counter === k) {
      counter = 1;
      output = `${currentChar.toUpperCase()}-${output}`;
    } else {
      counter++;
      output = `${currentChar.toUpperCase()}${output}`;
    }
  }

  return output;
}

export default licenseKeyFormatting;
