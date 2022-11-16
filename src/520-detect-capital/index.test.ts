import detectCapitalUse from './index.js';

describe('520. Detect Capital', () => {
  it('should pass test case - 01', () => {
    const result = detectCapitalUse('USA');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = detectCapitalUse('FlaG');
    expect(result).toEqual(false);
  });
});
