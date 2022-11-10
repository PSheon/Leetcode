/**
 * You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 *
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid: number[][]): number {
  const height = grid.length + 2;
  const width = grid[0].length + 2;
  const map: number[][] = [];

  map.push(new Array(width).fill(0));
  for (let i = 0; i < height - 2; i++) {
    const row = grid[i];
    row.unshift(0);
    row.push(0);

    map.push(row);
  }
  map.push(new Array(width).fill(0));

  let output = 0;

  for (let i = 1; i < height - 1; i++) {
    for (let j = 1; j < width - 1; j++) {
      if (map[i][j] === 1) {
        output += 4;
        if (map[i - 1][j] === 1) output--;
        if (map[i][j - 1] === 1) output--;
        if (map[i][j + 1] === 1) output--;
        if (map[i + 1][j] === 1) output--;
      }
    }
  }

  return output;
}

export default islandPerimeter;
