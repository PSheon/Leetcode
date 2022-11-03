import reverseBits from './index.js';

describe('190. Reverse Bits', () => {
  it('should pass test case - 01', () => {
    const result = reverseBits(0b00000010100101000001111010011100);
    expect(result).toEqual(964176192);
  });

  it('should pass test case - 02', () => {
    const result = reverseBits(0b11111111111111111111111111111101);
    expect(result).toEqual(3221225471);
  });
});
