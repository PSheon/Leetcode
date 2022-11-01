import mySqrt from './index.js';

describe('069. Sqrt(x)', () => {
  it('should pass test case - 01', () => {
    const result = mySqrt(4);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = mySqrt(8);
    expect(result).toEqual(2);
  });

  it('should pass test case - 03', () => {
    const result = mySqrt(32);
    expect(result).toEqual(5);
  });

  it('should pass test case - 04', () => {
    const result = mySqrt(41232131);
    expect(result).toEqual(6421);
  });
});
