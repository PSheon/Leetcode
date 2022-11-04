import isUgly from './index.js';

describe('263. Ugly Number', () => {
  it('should pass test case - 01', () => {
    const result = isUgly(6);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isUgly(1);
    expect(result).toEqual(true);
  });

  it('should pass test case - 03', () => {
    const result = isUgly(14);
    expect(result).toEqual(false);
  });
});
