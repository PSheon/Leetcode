/**
 * Given an integer array numbers, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * @param {number[]} numbers
 * @return {boolean}
 */
function containsDuplicate(numbers: number[]): boolean {
  const map: Record<number, number> = {};

  let output = false;

  for (let i = 0; i < numbers.length; i++) {
    if (map[numbers[i]]) {
      output = true;
      break;
    }
    map[numbers[i]] = 1;
  }

  return output;
}

export default containsDuplicate;
