import toHex from './index.js';

describe('392. Is Subsequence', () => {
  it('should pass test case - 01', () => {
    const result = toHex(26);
    expect(result).toEqual('1a');
  });

  it('should pass test case - 02', () => {
    const result = toHex(-1);
    expect(result).toEqual('ffffffff');
  });
});
