import merge from './index.js';

describe('088. Merge Sorted Array', () => {
  it('should pass test case - 01', () => {
    const numbers1 = [1, 2, 3, 0, 0, 0];
    const numbers2 = [2, 5, 6];
    merge(numbers1, 3, numbers2, 3);
    expect(numbers1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('should pass test case - 02', () => {
    const numbers1 = [1];
    const numbers2 = [];
    merge(numbers1, 1, numbers2, 0);
    expect(numbers1).toEqual([1]);
  });

  it('should pass test case - 03', () => {
    const numbers1 = [0];
    const numbers2 = [1];
    merge(numbers1, 0, numbers2, 1);
    expect(numbers1).toEqual([1]);
  });
});
