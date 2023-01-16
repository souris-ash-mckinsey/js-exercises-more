/**
 * Checks if all the digits of a number are same. Expects a number.
 * @param {Number} num 
 * @returns true if all the digits in num are same, oherwise false.
 */
const checkSameDigits = (num = 0) => {
  let numString = num.toString();

  for (let i = 1; i < numString.length; i++) {
    if (numString.charAt(i) != numString.charAt(i - 1)) {
      return false;
    }
  }

  return true;
};


/**
 * Checks if all the digits of a number are same. Expects a number.
 * @param {Number} num 
 * @returns true if all the digits in num are same, oherwise false.
 */
function checkSameDigitsFn(num = 0) {
  let numString = num.toString();

  for (let i = 1; i < numString.length; i++) {
    if (numString.charAt(i) != numString.charAt(i - 1)) {
      return false;
    }
  }

  return true;
}

module.exports = { checkSameDigits, checkSameDigitsFn };