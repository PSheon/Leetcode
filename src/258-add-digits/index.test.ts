import addDigits from './index.js';

describe('258. Add Digits', () => {
  it('should pass test case - 01', () => {
    const result = addDigits(38);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = addDigits(11);
    expect(result).toEqual(2);
  });

  it('should pass test case - 03', () => {
    const result = addDigits(0);
    expect(result).toEqual(0);
  });

  it('should pass test case - 04', () => {
    const result = addDigits(57);
    expect(result).toEqual(3);
  });
});
