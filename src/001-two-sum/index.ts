/**
 * Given an array of integers numbers and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers: number[], target: number): number[] {
  const map = {};
  let output = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (map[target - number] >= 0) {
      output = [map[target - number], i];
      break;
    } else {
      map[number] = i;
    }
  }

  return output;
}

export default twoSum;
