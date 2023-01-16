/**
 * Returns the largest even number in an array of numbers. Returns -1 if there is no
 * even number in the array.
 * Expects an array of numbers.
 * @param {Array<Number>} arr 
 * @returns the largest even number in given array of numbers; returns -1 if array has no even number.
 */
const getLargestEvenNumberInArray = (arr = []) => {
  arr = arr.sort().filter((elem) => elem % 2 == 0);
  return arr.length > 0 ? arr[arr.length - 1] : -1;
};


/**
 * Returns the largest even number in an array of numbers. Returns -1 if there is no
 * even number in the array.
 * Expects an array of numbers.
 * @param {Array<Number>} arr 
 * @returns the largest even number in given array of numbers; returns -1 if array has no even number.
 */
function getLargestEvenNumberInArrayFn(arr = []) {
  arr = arr.sort().filter((elem) => elem % 2 == 0);
  return arr.length > 0 ? arr[arr.length - 1] : -1;
}

module.exports = { getLargestEvenNumberInArray, getLargestEvenNumberInArrayFn };