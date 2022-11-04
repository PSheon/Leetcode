import isAnagram from './index.js';

describe('242. Valid Anagram', () => {
  it('should pass test case - 01', () => {
    const result = isAnagram('anagram', 'nagaram');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isAnagram('rat', 'car');
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isAnagram('anagrsam', 'nagarasm');
    expect(result).toEqual(true);
  });
});
