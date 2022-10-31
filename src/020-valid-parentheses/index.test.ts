import isValid from './index.js';

describe('020. Valid Parentheses', () => {
  it('should pass test case - 01', () => {
    const result = isValid('()');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isValid('()[]{}');
    expect(result).toEqual(true);
  });

  it('should pass test case - 03', () => {
    const result = isValid('(]');
    expect(result).toEqual(false);
  });
});
