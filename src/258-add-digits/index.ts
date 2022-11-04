/**
 * Given an integer number, repeatedly add all its digits until the result has only one digit, and return it.
 *
 * @param {number} number
 * @return {number}
 */
function addDigits(number: number): number {
  const pattern = number.toString(10);

  const sumPattern = (pattern: string): number => {
    let total = 0;
    for (let i = 0; i < pattern.length; i++) {
      total += parseInt(pattern[i]);
    }

    const totalPattern = total.toString();

    if (total > 9) {
      return sumPattern(totalPattern);
    }

    return total;
  };

  return sumPattern(pattern);
}

export default addDigits;
