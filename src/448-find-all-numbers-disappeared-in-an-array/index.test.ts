import findDisappearedNumbers from './index.js';

describe('448. Find All Numbers Disappeared in an Array', () => {
  it('should pass test case - 01', () => {
    const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
    expect(result).toEqual([5, 6]);
  });

  it('should pass test case - 02', () => {
    const result = findDisappearedNumbers([1, 1]);
    expect(result).toEqual([2]);
  });
});
