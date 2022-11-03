/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const table = [[1], [1, 1]];

  for (let i = 2; i < rowIndex + 1; i++) {
    const newRow = [1];

    for (let j = 1; j < table[i - 1].length; j++) {
      newRow.push(table[i - 1][j] + table[i - 1][j - 1]);
    }

    newRow.push(1);

    table.push(newRow);
  }

  return table[table.length - 1];
}

export default getRow;
