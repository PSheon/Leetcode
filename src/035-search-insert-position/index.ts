/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} inputs
 * @param {number} target
 * @return {number}
 */
function searchInsert(inputs: number[], target: number): number {
  if (inputs[0] > target) return 0;

  let flag = inputs.length;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] >= target) {
      flag = i;
      break;
    }
  }

  return flag;
}

export default searchInsert;
