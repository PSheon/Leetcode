/**
 * Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
 *
 * @param {string} columnTitle
 * @return {number}
 */
function titleToNumber(columnTitle: string): number {
  let total = 0;
  let factor = 0;

  while (columnTitle) {
    const current = columnTitle.slice(-1);
    columnTitle = columnTitle.slice(0, -1);

    if (factor === 0) {
      total += current.charCodeAt(0) - 64;
    } else {
      total += (current.charCodeAt(0) - 64) * 26 ** factor;
    }

    factor++;
  }

  return total;
}

export default titleToNumber;
