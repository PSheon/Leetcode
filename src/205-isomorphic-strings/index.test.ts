import isIsomorphic from './index.js';

describe('205. Isomorphic Strings', () => {
  it('should pass test case - 01', () => {
    const result = isIsomorphic('egg', 'add');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = isIsomorphic('foo', 'bar');
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = isIsomorphic('paper', 'title');
    expect(result).toEqual(true);
  });

  it('should pass test case - 04', () => {
    const result = isIsomorphic('baser', 'title');
    expect(result).toEqual(false);
  });
});
