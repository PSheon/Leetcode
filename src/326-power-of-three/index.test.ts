import isPowerOfThree from './index.js';

describe('326. Power of Three', () => {
  it('should pass test case - 01', () => {
    const result = isPowerOfThree(27);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isPowerOfThree(0);
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isPowerOfThree(-1);
    expect(result).toEqual(false);
  });

  it('should pass test case - 04', () => {
    const result = isPowerOfThree(81);
    expect(result).toEqual(true);
  });

  it('should pass test case - 05', () => {
    const result = isPowerOfThree(82);
    expect(result).toEqual(false);
  });
});
