import longestPalindrome from './index.js';

describe('409. Longest Palindrome', () => {
  it('should pass test case - 01', () => {
    const result = longestPalindrome('abccccdd');
    expect(result).toEqual(7);
  });

  it('should pass test case - 02', () => {
    const result = longestPalindrome('a');
    expect(result).toEqual(1);
  });

  it('should pass test case - 03', () => {
    const result = longestPalindrome('asdasdasdvjkdnfwedewd');
    expect(result).toEqual(15);
  });
});
