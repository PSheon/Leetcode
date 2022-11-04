/**
 * Given an integer array numbers and an integer k, return true if there are two distinct indices i and j in the array such that numbers[i] == numbers[j] and abs(i - j) <= k.
 *
 * @param {number[]} numbers
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(numbers: number[], k: number): boolean {
  if (numbers.length < 2) return false;

  const map: Record<number, number> = {};
  let output = false;

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];

    if (map[current] && Math.abs(i - map[current]) < k) {
      output = true;
      break;
    }

    map[current] = i + 1;
  }

  return output;
}

export default containsNearbyDuplicate;
