import twoSum from './index.js';

describe('001. Two Sum', () => {
  it('should pass test case - 01', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  it('should pass test case - 02', () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  it('should pass test case - 03', () => {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual([0, 1]);
  });
});
