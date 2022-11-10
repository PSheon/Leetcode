/**
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 *
 * You are given two distinct 0-indexed integer arrays numbers1 and numbers2, where numbers1 is a subset of numbers2.
 *
 * For each 0 <= i < numbers1.length, find the index j such that numbers1[i] == numbers2[j] and determine the next greater element of numbers2[j] in numbers2. If there is no next greater element, then the answer for this query is -1.
 *
 * Return an array ans of length numbers1.length such that ans[i] is the next greater element as described above.
 *
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number[]}
 */
function nextGreaterElement(numbers1: number[], numbers2: number[]): number[] {
  const table: Record<number, number> = {};
  const output = [];

  for (let i = 0; i < numbers2.length; i++) {
    table[numbers2[i]] = i;
  }

  for (let i = 0; i < numbers1.length; i++) {
    const startIndex = table[numbers1[i]];
    let greaterIndex = -1;

    for (let j = startIndex; j < numbers2.length; j++) {
      if (numbers2[j] > numbers1[i]) {
        greaterIndex = numbers2[j];
        break;
      }
    }

    output.push(greaterIndex);
  }

  return output;
}

export default nextGreaterElement;
