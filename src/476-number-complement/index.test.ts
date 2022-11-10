import findComplement from './index.js';

describe('476. Number Complement', () => {
  it('should pass test case - 01', () => {
    const result = findComplement(5);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = findComplement(1);
    expect(result).toEqual(0);
  });
});
