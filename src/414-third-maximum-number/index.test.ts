import thirdMax from './index.js';

describe('414. Third Maximum Number', () => {
  it('should pass test case - 01', () => {
    const result = thirdMax([3, 2, 1]);
    expect(result).toEqual(1);
  });

  it('should pass test case - 02', () => {
    const result = thirdMax([1, 2]);
    expect(result).toEqual(2);
  });

  it('should pass test case - 03', () => {
    const result = thirdMax([12, 1, 2]);
    expect(result).toEqual(1);
  });

  it('should pass test case - 04', () => {
    const result = thirdMax([2, 2, 3, 1]);
    expect(result).toEqual(1);
  });

  it('should pass test case - 05', () => {
    const result = thirdMax([-2147483648, 1, 1]);
    expect(result).toEqual(1);
  });
});
