import reverseString from './index.js';

describe('344. Reverse String', () => {
  it('should pass test case - 01', () => {
    const input = ['h', 'e', 'l', 'l', 'o'];
    reverseString(input);
    expect(input).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('should pass test case - 02', () => {
    const input = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(input);
    expect(input).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
