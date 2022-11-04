/**
 * You are given a sorted unique integer array numbers.
 *
 * A range [a,b] is the set of all integers from a to b (inclusive).
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of numbers is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in numbers.
 *
 * Each range [a,b] in the list should be output as:
 *  - "a->b" if a != b
 *  - "a" if a == b
 *
 * @param {number[]} numbers
 * @return {string[]}
 */
function summaryRanges(numbers: number[]): string[] {
  if (numbers.length < 2) return numbers.map((number) => number.toString());

  let stack: number[] = [numbers[0]];

  const output = [];

  for (let i = 1; i < numbers.length; i++) {
    if (stack[stack.length - 1] + 1 === numbers[i]) {
      stack.push(numbers[i]);
    } else {
      if (stack.length === 1) {
        output.push(`${stack[0]}`);
      } else {
        output.push(`${stack[0]}->${stack[stack.length - 1]}`);
      }

      stack = [numbers[i]];
    }
  }

  if (stack.length === 1) {
    output.push(`${stack[0]}`);
  } else {
    output.push(`${stack[0]}->${stack[stack.length - 1]}`);
  }

  return output;
}

export default summaryRanges;
