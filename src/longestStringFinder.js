/**
 * Finds the longest string in an array of strings. Expects an array of strings.
 * If two strings have same length, the one which is lexicographically lower is returned.
 * @param {Array<String>} theStrArr
 * @returns longest string in an array of strings. If two strings have same length, 
 *          the lexicographically lower one is used.
 */
const findLongestString = (theStrArr = []) => {
  theStrArr.sort((firstStr, secondStr) => 
    firstStr.length != secondStr.length ? 
      (secondStr.length - firstStr.length) : (firstStr > secondStr ? -1 : 1)
  );

  console.log(theStrArr);
  return theStrArr[0];
};


/**
 * Finds the longest string in an array of strings. Expects an array of strings.
 * If two strings have same length, the one which is lexicographically lower is returned.
 * @param {Array<String>} theStrArr
 * @returns longest string in an array of strings. If two strings have same length, 
 *          the lexicographically lower one is used.
 */
function findLongestStringFn(theStrArr = []) {
  theStrArr.sort((firstStr, secondStr) => 
    firstStr.length != secondStr.length ? 
      (secondStr.length - firstStr.length) : (firstStr > secondStr ? -1 : 1)
  );

  console.log(theStrArr);
  return theStrArr[0];
}

module.exports = { findLongestString, findLongestStringFn };