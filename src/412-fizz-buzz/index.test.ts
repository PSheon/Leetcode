import fizzBuzz from './index.js';

describe('412. Fizz Buzz', () => {
  it('should pass test case - 01', () => {
    const result = fizzBuzz(3);
    expect(result).toEqual(['1', '2', 'Fizz']);
  });

  it('should pass test case - 02', () => {
    const result = fizzBuzz(5);
    expect(result).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });

  it('should pass test case - 03', () => {
    const result = fizzBuzz(15);
    expect(result).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
