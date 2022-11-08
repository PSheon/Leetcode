import countSegments from './index.js';

describe('434. Number of Segments in a String', () => {
  it('should pass test case - 01', () => {
    const result = countSegments('Hello, my name is John');
    expect(result).toEqual(5);
  });

  it('should pass test case - 02', () => {
    const result = countSegments('Hello');
    expect(result).toEqual(1);
  });

  it('should pass test case - 03', () => {
    const result = countSegments('     ');
    expect(result).toEqual(0);
  });
});
