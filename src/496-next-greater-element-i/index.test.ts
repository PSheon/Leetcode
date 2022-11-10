import nextGreaterElement from './index.js';

describe('496. Next Greater Element I', () => {
  it('should pass test case - 01', () => {
    const result = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
    expect(result).toEqual([-1, 3, -1]);
  });

  it('should pass test case - 02', () => {
    const result = nextGreaterElement([2, 4], [1, 2, 3, 4]);
    expect(result).toEqual([3, -1]);
  });

  it('should pass test case - 03', () => {
    const result = nextGreaterElement([4, 1, 2], [1, 2, 3, 4]);
    expect(result).toEqual([-1, 2, 3]);
  });
});
