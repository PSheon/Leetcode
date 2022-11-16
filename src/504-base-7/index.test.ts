import convertToBase7 from './index.js';

describe('504. Base 7', () => {
  it('should pass test case - 01', () => {
    const result = convertToBase7(100);
    expect(result).toEqual('202');
  });

  it('should pass test case - 02', () => {
    const result = convertToBase7(-7);
    expect(result).toEqual('-10');
  });
});
