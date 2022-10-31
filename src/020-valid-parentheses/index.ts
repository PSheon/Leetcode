/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 *  3. Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} input
 * @return {boolean}
 */
function isValid(input: string): boolean {
  const removeParentheses = (originString: string): boolean => {
    const originLength = originString.length;
    const trimString = originString.replace(/(\(\)|\[\]|\{\})/g, '');
    const newLength = trimString.length;

    if (newLength === 0) return true;
    if (originLength === newLength) return false;

    return removeParentheses(trimString);
  };

  return removeParentheses(input);
}

export default isValid;
