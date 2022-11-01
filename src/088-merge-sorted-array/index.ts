/**
 * You are given two integer arrays numbers1 and numbers2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in numbers1 and numbers2 respectively.
 *
 * Merge numbers1 and numbers2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array numbers1. To accommodate this, numbers1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. numbers2 has a length of n.
 *
 * @param {number[]} numbers1
 * @param {number} m
 * @param {number[]} numbers2
 * @param {number} n
 */
function merge(
  numbers1: number[],
  m: number,
  numbers2: number[],
  n: number,
): void {
  for (let i = 0; i < n; i++) {
    numbers1[m + i] = numbers2[i];
  }

  numbers1.sort((a: number, b: number) => a - b);
}

export default merge;
