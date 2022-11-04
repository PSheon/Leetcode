import isPowerOfTwo from './index.js';

describe('231. Power of Two', () => {
  it('should pass test case - 01', () => {
    const result = isPowerOfTwo(1);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isPowerOfTwo(16);
    expect(result).toEqual(true);
  });

  it('should pass test case - 03', () => {
    const result = isPowerOfTwo(3);
    expect(result).toEqual(false);
  });

  it('should pass test case - 04', () => {
    const result = isPowerOfTwo(82);
    expect(result).toEqual(false);
  });
});
