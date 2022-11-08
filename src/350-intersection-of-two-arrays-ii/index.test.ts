import intersect from './index.js';

describe('350. Intersection of Two Arrays II', () => {
  it('should pass test case - 01', () => {
    const result = intersect([1, 2, 2, 1], [2, 2]);
    expect(result).toEqual([2, 2]);
  });

  it('should pass test case - 02', () => {
    const result = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(result).toEqual([9, 4]);
  });
});
