import isHappy from './index.js';

describe('202. Happy Number', () => {
  it('should pass test case - 01', () => {
    const result = isHappy(19);
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isHappy(2);
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isHappy(1111111);
    expect(result).toEqual(true);
  });
});
