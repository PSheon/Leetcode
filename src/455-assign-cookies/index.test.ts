import findContentChildren from './index.js';

describe('455. Assign Cookies', () => {
  it('should pass test case - 01', () => {
    const result = findContentChildren([1, 2, 3], [1, 1]);
    expect(result).toEqual(1);
  });

  it('should pass test case - 02', () => {
    const result = findContentChildren([1, 2], [1, 2, 3]);
    expect(result).toEqual(2);
  });

  it('should pass test case - 03', () => {
    const result = findContentChildren([1, 2, 4, 4], [1, 2, 4, 5]);
    expect(result).toEqual(4);
  });
});
