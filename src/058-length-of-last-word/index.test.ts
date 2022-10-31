import lengthOfLastWord from './index.js';

describe('058. Length of Last Word', () => {
  it('should pass test case - 01', () => {
    const result = lengthOfLastWord('Hello World');
    expect(result).toEqual(5);
  });

  it('should pass test case - 02', () => {
    const result = lengthOfLastWord('   fly me   to   the moon  ');
    expect(result).toEqual(4);
  });

  it('should pass test case - 03', () => {
    const result = lengthOfLastWord('luffy is still joyboy');
    expect(result).toEqual(6);
  });

  it('should pass test case - 04', () => {
    const result = lengthOfLastWord('a');
    expect(result).toEqual(1);
  });
});
