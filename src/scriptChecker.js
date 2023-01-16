const isEndingWithScript 
  = (theStr = '') => theStr.length >= 6 && /.*Script/.test(theStr);

function isEndingWithScriptFn(theStr = '') {
  return theStr.length >= 6 && /.*Script/.test(theStr);
}

module.exports = { isEndingWithScript, isEndingWithScriptFn };