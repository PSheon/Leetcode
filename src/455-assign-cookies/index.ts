/**
 * Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
 *
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.
 *
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g: number[], s: number[]): number {
  const childTable: number[] = g.sort((a, b) => a - b);
  const cookieTable: number[] = s.sort((a, b) => a - b);

  let childFlag = 0;
  let cookieFlag = 0;

  while (childFlag < childTable.length && cookieFlag < cookieTable.length) {
    if (childTable[childFlag] <= cookieTable[cookieFlag]) {
      childFlag++;
      cookieFlag++;
    } else {
      cookieFlag++;
    }
  }

  return childFlag;
}

export default findContentChildren;
