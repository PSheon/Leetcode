import wordPattern from './index.js';

describe('290. Word Pattern', () => {
  it('should pass test case - 01', () => {
    const result = wordPattern('abba', 'dog cat cat dog');
    expect(result).toEqual(true);
  });

  it('should pass test case - 02', () => {
    const result = wordPattern('abba', 'dog cat cat fish');
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = wordPattern('aaaa', 'dog cat cat dog');
    expect(result).toEqual(false);
  });
});
