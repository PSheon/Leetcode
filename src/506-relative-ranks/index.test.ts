import findRelativeRanks from './index.js';

describe('506. Relative Ranks', () => {
  it('should pass test case - 01', () => {
    const result = findRelativeRanks([5, 4, 3, 2, 1]);
    expect(result).toEqual([
      'Gold Medal',
      'Silver Medal',
      'Bronze Medal',
      '4',
      '5',
    ]);
  });

  it('should pass test case - 02', () => {
    const result = findRelativeRanks([10, 3, 8, 9, 4]);
    expect(result).toEqual([
      'Gold Medal',
      '5',
      'Bronze Medal',
      'Silver Medal',
      '4',
    ]);
  });
});
