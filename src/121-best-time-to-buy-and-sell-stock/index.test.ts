import maxProfit from './index.js';

describe('121. Best Time to Buy and Sell Stock', () => {
  it('should pass test case - 01', () => {
    const result = maxProfit([7, 1, 5, 3, 6, 4]);
    expect(result).toEqual(5);
  });

  it('should pass test case - 02', () => {
    const result = maxProfit([7, 6, 4, 3, 1]);
    expect(result).toEqual(0);
  });
});
