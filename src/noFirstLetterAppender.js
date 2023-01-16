const appendWithoutFirstLetter = (theStrArr = []) => 
  theStrArr.map((elem) => elem.substring(1)).reduce((prev, curr) => prev + curr, '');

function appendWithoutFirstLetterFn(theStrArr = []) {
  return theStrArr.map((elem) => elem.substring(1)).reduce((prev, curr) => prev + curr, '');
}

console.log(appendWithoutFirstLetter(['code', 'academy']));
module.exports = { appendWithoutFirstLetter, appendWithoutFirstLetterFn };