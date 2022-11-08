import reverseVowels from './index.js';

describe('345. Reverse Vowels of a String', () => {
  it('should pass test case - 01', () => {
    const result = reverseVowels('hello');
    expect(result).toEqual('holle');
  });

  it('should pass test case - 02', () => {
    const result = reverseVowels('leetcode');
    expect(result).toEqual('leotcede');
  });

  it('should pass test case - 03', () => {
    const result = reverseVowels('psheon');
    expect(result).toEqual('pshoen');
  });
});
