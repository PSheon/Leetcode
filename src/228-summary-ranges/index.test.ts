import summaryRanges from './index.js';

describe('228. Summary Ranges', () => {
  it('should pass test case - 01', () => {
    const result = summaryRanges([0, 1, 2, 4, 5, 7]);
    expect(result).toEqual(['0->2', '4->5', '7']);
  });

  it('should pass test case - 02', () => {
    const result = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
    expect(result).toEqual(['0', '2->4', '6', '8->9']);
  });

  it('should pass test case - 03', () => {
    const result = summaryRanges([]);
    expect(result).toEqual([]);
  });

  it('should pass test case - 04', () => {
    const result = summaryRanges([1]);
    expect(result).toEqual(['1']);
  });

  it('should pass test case - 05', () => {
    const result = summaryRanges([1, 3]);
    expect(result).toEqual(['1', '3']);
  });
});
