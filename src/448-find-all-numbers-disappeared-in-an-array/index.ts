/**
 * Given an array numbers of n integers where numbers[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in numbers.
 *
 * @param {number[]} numbers
 * @return {number[]}
 */
function findDisappearedNumbers(numbers: number[]): number[] {
  const set: Set<number> = new Set(numbers);
  const output: number[] = [];

  for (let i = 1; i <= numbers.length; i++) {
    if (!set.has(i)) output.push(i);
  }

  return output;
}

export default findDisappearedNumbers;
