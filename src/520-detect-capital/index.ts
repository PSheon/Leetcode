/**
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 *  - All letters in this word are capitals, like "USA".
 *  - All letters in this word are not capitals, like "leetcode".
 *  - Only the first letter in this word is capital, like "Google".
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word: string): boolean {
  if (word.toLowerCase() === word) return true;
  if (word.toUpperCase() === word) return true;
  const pattern = `${word[0].toUpperCase()}${word.toLowerCase().slice(1)}`;
  const output = word === pattern;

  return output;
}

export default detectCapitalUse;
