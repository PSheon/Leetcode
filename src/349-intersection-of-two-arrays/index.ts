/**
 * Given two integer arrays numbers1 and numbers, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * @param {number[]} numbers1
 * @param {number[]} numbers
 * @return {number[]}
 */
function intersection(numbers1: number[], numbers: number[]): number[] {
  return [...new Set(numbers1.filter((num) => numbers.includes(num)))];
}

export default intersection;
