import checkPerfectNumber from './index.js';

describe('507. Perfect Number', () => {
  it('should pass test case - 01', () => {
    const result = checkPerfectNumber(28);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = checkPerfectNumber(7);
    expect(result).toEqual(false);
  });
});
