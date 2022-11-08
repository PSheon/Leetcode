import readBinaryWatch from './index.js';

describe('401. Binary Watch', () => {
  it('should pass test case - 01', () => {
    const result = readBinaryWatch(1);
    expect(result).toEqual([
      '0:01',
      '0:02',
      '0:04',
      '0:08',
      '0:16',
      '0:32',
      '1:00',
      '2:00',
      '4:00',
      '8:00',
    ]);
  });

  it('should pass test case - 02', () => {
    const result = readBinaryWatch(9);
    expect(result).toEqual([]);
  });
});
