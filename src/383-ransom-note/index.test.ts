import canConstruct from './index.js';

describe('383. Ransom Note', () => {
  it('should pass test case - 01', () => {
    const result = canConstruct('a', 'b');
    expect(result).toEqual(false);
  });

  it('should pass test case - 02', () => {
    const result = canConstruct('aa', 'ab');
    expect(result).toEqual(false);
  });

  it('should pass test case - 03', () => {
    const result = canConstruct('aa', 'aab');
    expect(result).toEqual(true);
  });

  it('should pass test case - 04', () => {
    const result = canConstruct('aab', 'baa');
    expect(result).toEqual(true);
  });
});
