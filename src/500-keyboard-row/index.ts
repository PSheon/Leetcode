/**
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
 *
 * In the American keyboard:
 *  - the first row consists of the characters "qwertyuiop",
 *  - the second row consists of the characters "asdfghjkl", and
 *  - the third row consists of the characters "zxcvbnm".
 *
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words: string[]): string[] {
  const firstRow = new RegExp(/(q|w|e|r|t|y|u|i|o|p)/, 'g');
  const secondRow = new RegExp(/(a|s|d|f|g|h|j|k|l)/, 'g');
  const thirdRow = new RegExp(/(z|x|c|v|b|n|m)/, 'g');

  const output: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i].toLowerCase();
    if (
      currentWord.replace(firstRow, '') === '' ||
      currentWord.replace(secondRow, '') === '' ||
      currentWord.replace(thirdRow, '') === ''
    ) {
      output.push(words[i]);
    }
  }

  return output;
}

export default findWords;
