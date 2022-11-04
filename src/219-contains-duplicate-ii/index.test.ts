import containsNearbyDuplicate from './index.js';

describe('219. Contains Duplicate II', () => {
  it('should pass test case - 01', () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1], 3);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = containsNearbyDuplicate([1, 0, 1, 1], 1);
    expect(result).toEqual(true);
  });

  it('should pass test case - 03', () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
    expect(result).toEqual(false);
  });
});
