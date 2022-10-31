import removeDuplicates from './index.js';

describe('026. Remove Duplicates from Sorted Array', () => {
  it('should pass test case - 01', () => {
    const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
    expect(result).toEqual(5);
  });

  it('should pass test case - 02', () => {
    const result = removeDuplicates([1, 1, 2]);
    expect(result).toEqual(2);
  });
});
