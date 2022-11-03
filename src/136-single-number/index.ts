/**
 * Given a non-empty array of integers numbers, every element appears twice except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * @param {number[]} numbers
 * @return {number}
 */
function singleNumber(numbers: number[]): number {
  const table = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (table.has(numbers[i])) {
      table.delete(numbers[i]);
    } else {
      table.add(numbers[i]);
    }
  }

  return table.values().next().value;
}

export default singleNumber;
