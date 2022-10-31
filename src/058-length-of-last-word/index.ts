/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * @param {string} input
 * @return {number}
 */
function lengthOfLastWord(input: string): number {
  const separateWords = input.split(' ');
  let lastWordLength = 0;

  for (let i = separateWords.length - 1; i >= 0; i--) {
    if (separateWords[i] !== '') {
      lastWordLength = separateWords[i].length;
      break;
    }
  }

  return lastWordLength;
}

export default lengthOfLastWord;
