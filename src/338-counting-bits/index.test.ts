import countBits from './index.js';

describe('338. Counting Bits', () => {
  it('should pass test case - 01', () => {
    const result = countBits(2);
    expect(result).toEqual([0, 1, 1]);
  });

  it('should pass test case - 02', () => {
    const result = countBits(5);
    expect(result).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
