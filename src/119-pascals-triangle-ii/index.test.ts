import getRow from './index.js';

describe("119. Pascal's Triangle II", () => {
  it('should pass test case - 01', () => {
    const result = getRow(3);
    expect(result).toEqual([1, 3, 3, 1]);
  });

  it('should pass test case - 02', () => {
    const result = getRow(0);
    expect(result).toEqual([1]);
  });

  it('should pass test case - 03', () => {
    const result = getRow(1);
    expect(result).toEqual([1, 1]);
  });
});
