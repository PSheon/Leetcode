/**
 * Given an integer array inputs sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array inputs. More formally, if there are k elements after removing the duplicates, then the first k elements of inputs should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of inputs.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * @param {number[]} numbers
 * @return {number}
 */
function removeDuplicates(inputs: number[]): number {
  const set = new Set();

  inputs.forEach((input, i) => {
    if (set.has(input)) {
      inputs[i] = undefined;
    } else {
      set.add(input);
    }
  });

  inputs.sort((a: number, b: number) => a - b);

  return set.size;
}

export default removeDuplicates;
