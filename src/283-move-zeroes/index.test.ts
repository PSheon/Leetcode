import moveZeroes from './index.js';

describe('283. Move Zeroes', () => {
  it('should pass test case - 01', () => {
    const numbers = [0, 1, 0, 3, 12];
    moveZeroes(numbers);
    expect(numbers).toEqual([1, 3, 12, 0, 0]);
  });

  it('should pass test case - 02', () => {
    const numbers = [0];
    moveZeroes(numbers);
    expect(numbers).toEqual([0]);
  });

  it('should pass test case - 03', () => {
    const numbers = [0, 0, 1];
    moveZeroes(numbers);
    expect(numbers).toEqual([1, 0, 0]);
  });
});
