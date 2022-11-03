import singleNumber from './index.js';

describe('136. Single Number', () => {
  it('should pass test case - 01', () => {
    const result = singleNumber([2, 2, 1]);
    expect(result).toEqual(1);
  });

  it('should pass test case - 02', () => {
    const result = singleNumber([4, 1, 2, 1, 2]);
    expect(result).toEqual(4);
  });

  it('should pass test case - 03', () => {
    const result = singleNumber([1]);
    expect(result).toEqual(1);
  });
});
