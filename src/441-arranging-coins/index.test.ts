import arrangeCoins from './index.js';

describe('441. Arranging Coins', () => {
  it('should pass test case - 01', () => {
    const result = arrangeCoins(5);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = arrangeCoins(8);
    expect(result).toEqual(3);
  });

  it('should pass test case - 03', () => {
    const result = arrangeCoins(1);
    expect(result).toEqual(1);
  });

  it('should pass test case - 04', () => {
    const result = arrangeCoins(3);
    expect(result).toEqual(2);
  });
});
