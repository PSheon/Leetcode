import isPerfectSquare from './index.js';

describe('367. Valid Perfect Square', () => {
  it('should pass test case - 01', () => {
    const result = isPerfectSquare(16);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isPerfectSquare(14);
    expect(result).toEqual(false);
  });
});
