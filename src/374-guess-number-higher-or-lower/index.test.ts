import guessNumber from './index.js';

describe('374. Guess Number Higher or Lower', () => {
  it('should pass test case - 01', () => {
    const result = guessNumber(10);
    expect(result).toEqual(6);
  });
});
