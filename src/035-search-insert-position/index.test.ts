import searchInsert from './index.js';

describe('035. Search Insert Position', () => {
  it('should pass test case - 01', () => {
    const result = searchInsert([1, 3, 5, 6], 5);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = searchInsert([1, 3, 5, 6], 2);
    expect(result).toEqual(1);
  });

  it('should pass test case - 03', () => {
    const result = searchInsert([1, 3, 5, 6], 7);
    expect(result).toEqual(4);
  });
});
