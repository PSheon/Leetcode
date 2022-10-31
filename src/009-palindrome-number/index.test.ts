import isPalindrome from './index.js';

describe('009. Palindrome Number', () => {
  it('should pass test case - 01', () => {
    const result = isPalindrome(121);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isPalindrome(-121);
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isPalindrome(10);
    expect(result).toEqual(false);
  });
});
