/**
 * A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.
 *
 * Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.
 *
 * The hour must not contain a leading zero.
 *  - For example, "01:00" is not valid. It should be "1:00".
 * The minute must be consist of two digits and may contain a leading zero.
 *  - For example, "10:2" is not valid. It should be "10:02".
 *
 * @param {number} turnedOn
 * @return {string[]}
 */
function readBinaryWatch(turnedOn: number): string[] {
  if (turnedOn === 0) return ['0:00'];

  const output: string[] = [];

  const getBinaryNumber = (binaryPattern: string): number => {
    let total = 0;

    for (let i = 0; i < binaryPattern.length; i++) {
      if (binaryPattern[i] === '1') total++;
    }
    return total;
  };

  for (let i = 1; i < 1024; i++) {
    const current = i.toString(2).padStart(10, '0');
    let pattern = '';

    if (getBinaryNumber(current) !== turnedOn) {
      continue;
    }

    const prePattern = current.slice(0, 4);
    const lastPattern = current.slice(-6);

    const hours = parseInt(prePattern, 2);
    const minutes = parseInt(lastPattern, 2);

    if (hours > 11 || minutes > 59) {
      continue;
    }

    pattern += `${hours.toString()}:${minutes.toString().padStart(2, '0')}`;

    output.push(pattern);
  }

  return output;
}

export default readBinaryWatch;
