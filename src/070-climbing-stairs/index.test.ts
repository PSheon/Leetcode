import climbStairs from './index.js';

describe('070. Climbing Stairs', () => {
  it('should pass test case - 01', () => {
    const result = climbStairs(2);
    expect(result).toEqual(2);
  });

  it('should pass test case - 02', () => {
    const result = climbStairs(3);
    expect(result).toEqual(3);
  });

  it('should pass test case - 03', () => {
    const result = climbStairs(4);
    expect(result).toEqual(5);
  });

  it('should pass test case - 04', () => {
    const result = climbStairs(40);
    expect(result).toEqual(165580141);
  });
});
