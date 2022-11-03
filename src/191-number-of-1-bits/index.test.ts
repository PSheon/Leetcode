import hammingWeight from './index.js';

describe('191. Number of 1 Bits', () => {
  it('should pass test case - 01', () => {
    const result = hammingWeight(0b00000000000000000000000000001011);
    expect(result).toEqual(3);
  });

  it('should pass test case - 02', () => {
    const result = hammingWeight(0b00000000000000000000000010000000);
    expect(result).toEqual(1);
  });

  it('should pass test case - 03', () => {
    const result = hammingWeight(0b11111111111111111111111111111101);
    expect(result).toEqual(31);
  });
});
