import convertToTitle from './index.js';

describe('168. Excel Sheet Column Title', () => {
  it('should pass test case - 01', () => {
    const result = convertToTitle(1);
    expect(result).toEqual('A');
  });

  it('should pass test case - 02', () => {
    const result = convertToTitle(28);
    expect(result).toEqual('AB');
  });

  it('should pass test case - 03', () => {
    const result = convertToTitle(701);
    expect(result).toEqual('ZY');
  });
});
