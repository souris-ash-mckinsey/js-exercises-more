const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVowels = (theStr = '') => {
  let counter = 0;
  [...theStr].forEach((ch) => counter += vowels.includes(ch) ? 1 : 0);

  return counter;
};

function countVowelsFn(theStr = '') {
  let counter = 0;
  [...theStr].forEach((ch) => counter += vowels.includes(ch) ? 1 : 0);

  return counter;
}

module.exports = { countVowels, countVowelsFn };