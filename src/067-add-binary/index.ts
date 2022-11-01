/**
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a: string, b: string): string {
  const length = Math.max(a.length, b.length);
  a = a.padStart(length, '0');
  b = b.padStart(length, '0');

  let carry = false;
  let output = '';

  for (let i = length - 1; i >= 0; i--) {
    let pending = Number(a[i]) + Number(b[i]);
    if (carry) pending += 1;
    if (pending < 2) {
      carry = false;
      output += pending.toString();
    }
    if (pending > 1) {
      carry = true;
      output += (pending % 2).toString();
    }
  }

  if (carry) {
    output += '1';
  }

  return output.split('').reverse().join('');
}

export default addBinary;
