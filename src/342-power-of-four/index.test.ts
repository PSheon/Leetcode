import isPowerOfThree from './index.js';

describe('342. Power of Four', () => {
  it('should pass test case - 01', () => {
    const result = isPowerOfThree(16);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isPowerOfThree(5);
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isPowerOfThree(1);
    expect(result).toEqual(true);
  });

  it('should pass test case - 04', () => {
    const result = isPowerOfThree(-1);
    expect(result).toEqual(false);
  });

  it('should pass test case - 05', () => {
    const result = isPowerOfThree(82);
    expect(result).toEqual(false);
  });
});
