import findTheDifference from './index.js';

describe('389. Find the Difference', () => {
  it('should pass test case - 01', () => {
    const result = findTheDifference('abcd', 'abcde');
    expect(result).toEqual('e');
  });

  it('should pass test case - 02', () => {
    const result = findTheDifference('', 'y');
    expect(result).toEqual('y');
  });

  it('should pass test case - 03', () => {
    const result = findTheDifference('iuwehrkjwenfjdsnc', 'yiuwehrkjwenfjdsnc');
    expect(result).toEqual('y');
  });
});
