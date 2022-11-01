import addBinary from './index.js';

describe('067. Add Binary', () => {
  it('should pass test case - 01', () => {
    const result = addBinary('11', '1');
    expect(result).toEqual('100');
  });

  it('should pass test case - 02', () => {
    const result = addBinary('1010', '1011');
    expect(result).toEqual('10101');
  });

  it('should pass test case - 03', () => {
    const result = addBinary('100000000000', '1011');
    expect(result).toEqual('100000001011');
  });
});
