/**
 * Given an integer array numbers, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
 *
 * @param {number[]} numbers
 * @return {number}
 */
function thirdMax(numbers: number[]): number {
  const set = new Set(numbers.sort((a, b) => a - b));
  const distinctList = Array.from(set);

  let output: number;

  if (distinctList.length > 2) {
    output = distinctList[distinctList.length - 3];
  } else {
    output = distinctList[distinctList.length - 1];
  }

  return output;
}

export default thirdMax;
