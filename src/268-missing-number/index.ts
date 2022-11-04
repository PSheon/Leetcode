/**
 * Given an array numbers containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 *
 * @param {number[]} numbers
 * @return {number}
 */
function missingNumber(numbers: number[]): number {
  let output = numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    output += i;
    output -= numbers[i];
  }

  return output;
}

export default missingNumber;
