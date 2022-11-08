/**
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the staircase you will build.
 *
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n: number): number {
  let currentRow = 0;

  for (let i = 1; i <= n; i++) {
    if (n - i >= 0) {
      currentRow++;
    }
    n -= i;
  }

  return currentRow;
}

export default arrangeCoins;
