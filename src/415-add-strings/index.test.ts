import addStrings from './index.js';

describe('415. Add Strings', () => {
  it('should pass test case - 01', () => {
    const result = addStrings('11', '123');
    expect(result).toEqual('134');
  });

  it('should pass test case - 02', () => {
    const result = addStrings('456', '77');
    expect(result).toEqual('533');
  });

  it('should pass test case - 03', () => {
    const result = addStrings('0', '0');
    expect(result).toEqual('0');
  });

  it('should pass test case - 04', () => {
    const result = addStrings('1', '9');
    expect(result).toEqual('10');
  });

  it('should pass test case - 05', () => {
    const result = addStrings('1231123123213', '1283719276643516745');
    expect(result).toEqual('1283720507766639958');
  });
});
