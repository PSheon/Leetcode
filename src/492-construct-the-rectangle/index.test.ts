import constructRectangle from './index.js';

describe('492. Construct the Rectangle', () => {
  it('should pass test case - 01', () => {
    const result = constructRectangle(4);
    expect(result).toEqual([2, 2]);
  });

  it('should pass test case - 02', () => {
    const result = constructRectangle(37);
    expect(result).toEqual([37, 1]);
  });

  it('should pass test case - 03', () => {
    const result = constructRectangle(122122);
    expect(result).toEqual([427, 286]);
  });
});
