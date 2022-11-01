/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * # Climbing to stage N means climbing to stage [N-1] and then walking one more step plus climbing to stage [N-2] and then walking two steps.
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n: number): number {
  if (n < 4) return n;

  const stepMap = [1, 2];

  for (let i = 2; i < n; i++) {
    stepMap[i] = stepMap[i - 1] + stepMap[i - 2];
  }

  return stepMap[n - 1];
}

export default climbStairs;
