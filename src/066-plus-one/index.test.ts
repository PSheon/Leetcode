import plusOne from './index.js';

describe('066. Plus One', () => {
  it('should pass test case - 01', () => {
    const result = plusOne([1, 2, 3]);
    expect(result).toEqual([1, 2, 4]);
  });

  it('should pass test case - 02', () => {
    const result = plusOne([4, 3, 2, 1]);
    expect(result).toEqual([4, 3, 2, 2]);
  });

  it('should pass test case - 03', () => {
    const result = plusOne([9]);
    expect(result).toEqual([1, 0]);
  });
});
