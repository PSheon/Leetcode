import missingNumber from './index.js';

describe('268. Missing Number', () => {
  it('should pass test case - 01', () => {
    const result = missingNumber([3, 0, 1]);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = missingNumber([0, 1]);
    expect(result).toEqual(2);
  });

  it('should pass test case - 03', () => {
    const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
    expect(result).toEqual(8);
  });
});
