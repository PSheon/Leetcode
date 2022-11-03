import generate from './index.js';

describe("118. Pascal's Triangle.", () => {
  it('should pass test case - 01', () => {
    const result = generate(5);
    expect(result).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  it('should pass test case - 02', () => {
    const result = generate(1);
    expect(result).toEqual([[1]]);
  });
});
