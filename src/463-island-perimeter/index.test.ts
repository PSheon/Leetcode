import islandPerimeter from './index.js';

describe('463. Island Perimeter', () => {
  it('should pass test case - 01', () => {
    const result = islandPerimeter([
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ]);
    expect(result).toEqual(16);
  });

  it('should pass test case - 02', () => {
    const result = islandPerimeter([[1]]);
    expect(result).toEqual(4);
  });

  it('should pass test case - 03', () => {
    const result = islandPerimeter([[1, 0]]);
    expect(result).toEqual(4);
  });

  it('should pass test case - 04', () => {
    const result = islandPerimeter([
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 0],
    ]);
    expect(result).toEqual(16);
  });
});
