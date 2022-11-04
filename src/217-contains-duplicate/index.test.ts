import containsDuplicate from './index.js';

describe('217. Contains Duplicate', () => {
  it('should pass test case - 01', () => {
    const result = containsDuplicate([1, 2, 3, 1]);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = containsDuplicate([1, 2, 3, 4]);
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(result).toEqual(true);
  });
});
