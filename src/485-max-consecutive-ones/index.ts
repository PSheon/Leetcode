/**
 * Given a binary array numbers, return the maximum number of consecutive 1's in the array.
 *
 * @param {number[]} numbers
 * @return {number}
 */
function findMaxConsecutiveOnes(numbers: number[]): number {
  const list: string[] = numbers.join('').split('0');
  let maxLength = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].length > maxLength) {
      maxLength = list[i].length;
    }
  }

  return maxLength;
}

export default findMaxConsecutiveOnes;
