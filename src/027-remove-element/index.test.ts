import removeElement from './index.js';

describe('027. Remove Element', () => {
  it('should pass test case - 01', () => {
    const result = removeElement([3, 2, 2, 3], 3);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
    expect(result).toEqual(5);
  });
});
