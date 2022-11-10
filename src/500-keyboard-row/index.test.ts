import findWords from './index.js';

describe('500. Keyboard Row', () => {
  it('should pass test case - 01', () => {
    const result = findWords(['Hello', 'Alaska', 'Dad', 'Peace']);
    expect(result).toEqual(['Alaska', 'Dad']);
  });

  it('should pass test case - 02', () => {
    const result = findWords(['omk']);
    expect(result).toEqual([]);
  });

  it('should pass test case - 03', () => {
    const result = findWords(['adsdf', 'sfd']);
    expect(result).toEqual(['adsdf', 'sfd']);
  });
});
