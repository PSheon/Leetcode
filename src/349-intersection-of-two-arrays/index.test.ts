import reverseString from './index.js';

describe('349. Intersection of Two Arrays', () => {
  it('should pass test case - 01', () => {
    const result = reverseString([1, 2, 2, 1], [2, 2]);
    expect(result).toEqual([2]);
  });

  it('should pass test case - 02', () => {
    const result = reverseString([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(result).toEqual([4, 9]);
  });
});
