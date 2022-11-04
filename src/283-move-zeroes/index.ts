/**
 * Given an integer array numbers, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * @param {number[]} numbers
 */
function moveZeroes(numbers: number[]): void {
  let pointer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      if (pointer !== i) {
        numbers[pointer] = numbers[i];
        numbers[i] = 0;
      }
      pointer++;
    }
  }
}

export default moveZeroes;
