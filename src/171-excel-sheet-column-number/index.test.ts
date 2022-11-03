import titleToNumber from './index.js';

describe('171. Excel Sheet Column Number', () => {
  it('should pass test case - 01', () => {
    const result = titleToNumber('A');
    expect(result).toEqual(1);
  });

  it('should pass test case - 02', () => {
    const result = titleToNumber('AB');
    expect(result).toEqual(28);
  });

  it('should pass test case - 03', () => {
    const result = titleToNumber('ZY');
    expect(result).toEqual(701);
  });
});
