/**
 * You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
 *
 * The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
 *  - The 1st place athlete's rank is "Gold Medal".
 *  - The 2nd place athlete's rank is "Silver Medal".
 *  - The 3rd place athlete's rank is "Bronze Medal".
 *  - For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
 *
 * Return an array answer of size n where answer[i] is the rank of the ith athlete.
 *
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(score: number[]): string[] {
  const scoreList: number[] = [...score].sort((a, b) => b - a);

  const scoreMap: Record<number, number> = {};
  const output: string[] = [];

  for (let i = 0; i < scoreList.length; i++) {
    scoreMap[scoreList[i]] = i;
  }

  for (let i = 0; i < score.length; i++) {
    const level = scoreMap[score[i]];
    if (level === 0) {
      output.push('Gold Medal');
    } else if (level === 1) {
      output.push('Silver Medal');
    } else if (level === 2) {
      output.push('Bronze Medal');
    } else {
      output.push((level + 1).toString());
    }
  }

  return output;
}

export default findRelativeRanks;
