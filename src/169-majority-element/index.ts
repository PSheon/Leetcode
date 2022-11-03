/**
 * Given an array numbers of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * @param {number[]} numbers
 * @return {number}
 */
function majorityElement(numbers: number[]): number {
  const map = new Map();
  let maxTimes = 0;
  let output = 0;

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    if (map.has(current)) {
      map.set(current, map.get(current) + 1);
    } else {
      map.set(current, 1);
    }

    if (map.get(current) > maxTimes) {
      maxTimes = map.get(current);
      output = current;
    }
  }

  return output;
}

export default majorityElement;
