import hammingDistance from './index.js';

describe('461. Hamming Distance', () => {
  it('should pass test case - 01', () => {
    const result = hammingDistance(1, 4);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = hammingDistance(3, 1);
    expect(result).toEqual(1);
  });
});
