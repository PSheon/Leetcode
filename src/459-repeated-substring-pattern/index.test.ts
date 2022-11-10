import repeatedSubstringPattern from './index.js';

describe('459. Repeated Substring Pattern', () => {
  it('should pass test case - 01', () => {
    const result = repeatedSubstringPattern('ababab');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = repeatedSubstringPattern('aba');
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = repeatedSubstringPattern('abcabcabcabc');
    expect(result).toEqual(true);
  });

  it('should pass test case - 04', () => {
    const result = repeatedSubstringPattern('abcabcabcabcdededede');
    expect(result).toEqual(false);
  });

  it('should pass test case - 05', () => {
    const result = repeatedSubstringPattern('ababba');
    expect(result).toEqual(false);
  });
});
