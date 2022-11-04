/**
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 *
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n: number): boolean {
  if (n < 1) return false;

  const bin = (n >>> 0).toString(2);
  let oneCount = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      oneCount++;
    }
    if (oneCount === 2) {
      return false;
    }
  }

  return true;
}

export default isPowerOfTwo;
