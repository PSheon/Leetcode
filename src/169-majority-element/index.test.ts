import majorityElement from './index.js';

describe('169. Majority Element', () => {
  it('should pass test case - 01', () => {
    const result = majorityElement([3, 2, 3]);
    expect(result).toEqual(3);
  });

  it('should pass test case - 02', () => {
    const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
    expect(result).toEqual(2);
  });
});
