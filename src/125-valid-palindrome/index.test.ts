import isPalindrome from './index.js';

describe('125. Valid Palindrome', () => {
  it('should pass test case - 01', () => {
    const result = isPalindrome('A man, a plan, a canal: Panama');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isPalindrome('race a car');
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isPalindrome(' ');
    expect(result).toEqual(true);
  });

  it('should pass test case - 04ˋ', () => {
    const result = isPalindrome('0P');
    expect(result).toEqual(false);
  });

  it('should pass test case - 05ˋ', () => {
    const result = isPalindrome('ab_a"');
    expect(result).toEqual(true);
  });
});
