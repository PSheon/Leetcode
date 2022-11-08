import firstUniqChar from './index.js';

describe('387. First Unique Character in a String', () => {
  it('should pass test case - 01', () => {
    const result = firstUniqChar('leetcode');
    expect(result).toEqual(0);
  });

  it('should pass test case - 02', () => {
    const result = firstUniqChar('loveleetcode');
    expect(result).toEqual(2);
  });

  it('should pass test case - 03', () => {
    const result = firstUniqChar('aabb');
    expect(result).toEqual(-1);
  });
});
