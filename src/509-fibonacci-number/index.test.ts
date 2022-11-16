import fib from './index.js';

describe('509. Fibonacci Number', () => {
  it('should pass test case - 01', () => {
    const result = fib(2);
    expect(result).toEqual(1);
  });

  it('should pass test case - 02', () => {
    const result = fib(3);
    expect(result).toEqual(2);
  });

  it('should pass test case - 03', () => {
    const result = fib(4);
    expect(result).toEqual(3);
  });
});
