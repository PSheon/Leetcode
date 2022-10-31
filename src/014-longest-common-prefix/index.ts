/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @param {string[]} inputs
 * @return {string}
 */
function longestCommonPrefix(inputs: string[]): string {
  const minLength = Math.min(...inputs.map((item) => item.length));
  let prefix = '';

  for (let i = 0; i < minLength; i++) {
    const currentChar = inputs[0].charAt(i);

    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j][i] !== currentChar) {
        return prefix;
      }
    }

    prefix += currentChar;
  }

  return prefix;
}

export default longestCommonPrefix;
