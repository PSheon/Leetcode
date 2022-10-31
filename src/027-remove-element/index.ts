/**
 * Given an integer array inputs and an integer target, remove all occurrences of target in inputs in-place. The relative order of the elements may be changed.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array inputs. More formally, if there are k elements after removing the duplicates, then the first k elements of inputs should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of inputs.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * @param {number[]} inputs
 * @param {number} target
 * @return {number}
 */
function removeElement(inputs: number[], target: number): number {
  let flag = 0;

  inputs.forEach((_, i) => {
    if (inputs[i] === target) {
      inputs[i] = undefined;
    } else {
      flag++;
    }
  });

  inputs.sort((a: number, b: number) => a - b);

  return flag;
}

export default removeElement;
