const { 
  getLargestEvenNumberInArray, 
  getLargestEvenNumberInArrayFn 
} = require('../src/largestEvenNumberFinder');

describe('Finding largest even number (Q1)', () => {
  it('should return largest even number in array', () => {
    expect(getLargestEvenNumberInArray([1, 2, 3, 4, 5])).toBe(4);
    expect(getLargestEvenNumberInArrayFn([1, 2, 3, 4, 5])).toBe(4);
  })

  it('should return -1 if no even element in array', () => {
    expect(getLargestEvenNumberInArray([1, 3, 5, 7])).toBe(-1);
    expect(getLargestEvenNumberInArrayFn([1, 3, 5, 7])).toBe(-1);
  })

  it('should return -1 if empty array is passed', () => {
    expect(getLargestEvenNumberInArray([])).toBe(-1);
    expect(getLargestEvenNumberInArrayFn([])).toBe(-1);
  })
})