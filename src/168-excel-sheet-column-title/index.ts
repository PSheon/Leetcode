/**
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 *
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber: number): string {
  let output = '';

  while (columnNumber > 0) {
    const rest = columnNumber % 26;

    if (rest > 0) {
      output += String.fromCharCode(rest + 64);
      columnNumber -= rest;
    } else {
      output += 'Z';
      columnNumber -= 26;
    }

    columnNumber /= 26;
  }

  return output.split('').reverse().join('');
}

export default convertToTitle;
