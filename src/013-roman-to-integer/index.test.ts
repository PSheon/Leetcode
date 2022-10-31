import romanToInt from './index.js';

describe('013. Roman to Integer', () => {
  it('should pass test case - 01', () => {
    const result = romanToInt('III');
    expect(result).toEqual(3);
  });

  it('should pass test case - 02', () => {
    const result = romanToInt('LVIII');
    expect(result).toEqual(58);
  });

  it('should pass test case - 03', () => {
    const result = romanToInt('MCMXCIV');
    expect(result).toEqual(1994);
  });
});
