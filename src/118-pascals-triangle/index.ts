/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const output = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const newRow = [1];

    for (let j = 1; j < output[i - 1].length; j++) {
      newRow.push(output[i - 1][j] + output[i - 1][j - 1]);
    }

    newRow.push(1);

    output.push(newRow);
  }

  return output;
}

export default generate;
