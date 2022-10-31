import longestCommonPrefix from './index.js';

describe('013. Roman to Integer', () => {
  it('should pass test case - 01', () => {
    const result = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(result).toEqual('fl');
  });

  it('should pass test case - 02', () => {
    const result = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(result).toEqual('');
  });
});
