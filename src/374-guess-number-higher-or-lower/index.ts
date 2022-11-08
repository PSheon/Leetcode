/**
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns three possible results:
 *  - -1: Your guess is higher than the number I picked (i.e. num > pick).
 *  - 1: Your guess is lower than the number I picked (i.e. num < pick).
 *  - 0: your guess is equal to the number I picked (i.e. num == pick).
 *
 * Return the number that I picked.
 *
 * @param {number} n
 * @return {number}
 */
function guessNumber(n: number): number {
  let min = 1;
  let max = n;
  let output: number;

  while (min <= max) {
    const guessNumber = Math.floor((min + max) / 2);
    const result = guess(guessNumber);

    if (result === 0) {
      output = guessNumber;
      break;
    }

    if (result === 1) {
      min = guessNumber + 1;
    } else {
      max = guessNumber - 1;
    }
  }

  return output;
}

const guess = (guessNumber: number): number => {
  if (guessNumber < 6) return 1;
  if (guessNumber > 6) return -1;

  return 0;
};

export default guessNumber;
