/**
 * Takes a string and changes lowercase characters to uppercase ones and vice-versa.
 * @param {String} theStr 
 * @returns A new string in which the cases are inverted. Does not alter passed string.
 */
const toggleCaseOfString = (theStr = '') => {
  let newString = '';

  for (let i = 0; i < theStr.length; i++) {
    let thisChar = theStr.charAt(i);

    newString 
      += thisChar == thisChar.toLowerCase() 
        ? thisChar.toUpperCase() : thisChar.toUpperCase();
  }

  return newString;
};


/**
 * Takes a string and changes lowercase characters to uppercase ones and vice-versa.
 * @param {String} theStr 
 * @returns A new string in which the cases are inverted. Does not alter passed string.
 */
function toggleCaseOfStringFn(theStr = '') {
  let newString = '';

  for (let i = 0; i < theStr.length; i++) {
    let thisChar = theStr.charAt(i);

    newString 
      += thisChar == thisChar.toLowerCase() 
        ? thisChar.toUpperCase() : thisChar.toLowerCase();
  }

  return newString;
}

console.log(toggleCaseOfStringFn('mm Mo'));

module.exports = { toggleCaseOfString, toggleCaseOfStringFn };