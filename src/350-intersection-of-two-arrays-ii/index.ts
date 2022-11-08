/**
 * Given two integer arrays numbers1 and numbers2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 *
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number[]}
 */
function intersect(numbers1: number[], numbers2: number[]): number[] {
  const map: Record<number, number> = {};
  const output: number[] = [];

  for (let i = 0; i < numbers1.length; i++) {
    if (map[numbers1[i]] > 0) {
      map[numbers1[i]]++;
    } else {
      map[numbers1[i]] = 1;
    }
  }

  for (let i = 0; i < numbers2.length; i++) {
    if (map[numbers2[i]] > 0) {
      map[numbers2[i]]--;
      output.push(numbers2[i]);
    }
  }

  return output;
}

export default intersect;
