import canWinNim from './index.js';

describe('292. Nim Game', () => {
  it('should pass test case - 01', () => {
    const result = canWinNim(4);
    expect(result).toEqual(false);
  });

  it('should pass test case - 02', () => {
    const result = canWinNim(1);
    expect(result).toEqual(true);
  });

  it('should pass test case - 03', () => {
    const result = canWinNim(2);
    expect(result).toEqual(true);
  });
});
