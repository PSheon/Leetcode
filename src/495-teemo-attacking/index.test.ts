import findPoisonedDuration from './index.js';

describe('495. Teemo Attacking', () => {
  it('should pass test case - 01', () => {
    const result = findPoisonedDuration([1, 4], 2);
    expect(result).toEqual(4);
  });

  it('should pass test case - 02', () => {
    const result = findPoisonedDuration([1, 2], 2);
    expect(result).toEqual(3);
  });
});
