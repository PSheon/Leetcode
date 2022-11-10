import findMaxConsecutiveOnes from './index.js';

describe('485. Max Consecutive Ones', () => {
  it('should pass test case - 01', () => {
    const result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
    expect(result).toEqual(3);
  });

  it('should pass test case - 02', () => {
    const result = findMaxConsecutiveOnes([1, 0, 0, 1, 1, 0, 1]);
    expect(result).toEqual(2);
  });
});
