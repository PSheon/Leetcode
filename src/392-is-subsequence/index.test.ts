import isSubsequence from './index.js';

describe('392. Is Subsequence', () => {
  it('should pass test case - 01', () => {
    const result = isSubsequence('abc', 'ahbgdc');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isSubsequence('axc', 'ahbgdc');
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isSubsequence('asdjkjfnevlmclsdkmc', 'asdjkjsfnevlmclsdkmc');
    expect(result).toEqual(true);
  });

  it('should pass test case - 04', () => {
    const result = isSubsequence('asdasfqweadcdfv', 'asdasfqweadcdfasdv');
    expect(result).toEqual(true);
  });
});
