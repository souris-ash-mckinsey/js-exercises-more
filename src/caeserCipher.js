const alphabetsLower = {}; // code => char
const alphabetsLowerReverse = {}; // char => code

const alphabetsUpper = {};
const alphabetsUpperReverse = {};

let areAlphabetsInit = false;

const initAlphabets = () => {
  for (let codeLower = 97, codeUpper = 65; 
    codeLower <= 122, codeUpper <= 90; 
    codeLower++, codeUpper++) {

    let lowerChar = String.fromCharCode(codeLower);
    let upperChar = String.fromCharCode(codeUpper);

    alphabetsLower[codeLower] = lowerChar;
    alphabetsLower[codeUpper] = upperChar;
    
    alphabetsUpperReverse[lowerChar] = codeLower;
    alphabetsLowerReverse[upperChar] = codeUpper;
  }

  areAlphabetsInit = true;
};

const nextAlphabet = (ch = 'a') => {
  return ch == ch.toLowerCase() ? alphabetsLower[(alphabetsLowerReverse[ch] + 1) % 26] 
    : alphabetsUpper[(alphabetsUpperReverse[ch] + 1) % 26];
};

const doCaeserCipher = (theStr = '') => {
  if (!areAlphabetsInit) {
    initAlphabets();
  }

  let newString = '';

  [...theStr].forEach((ch) => {
    if (/[a-zA-Z]/.test(ch)) {
      newString += nextAlphabet(ch);
    }
  });

  return newString;
};

function doCaeserCipherFn(theStr = '') {
  if (!areAlphabetsInit) {
    initAlphabets();
  }

  let newString = '';

  [...theStr].forEach((ch) => {
    if (/[a-zA-Z]/.test(ch)) {
      newString += nextAlphabet(ch);
    }
  });

  return newString;
}

module.exports = { doCaeserCipher, doCaeserCipherFn };