function crazyCase(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++)
  if (i % 2 === 1) {
    newStr += str[i].toUpperCase();
  } else {
    newStr += str[i].toLowerCase();
  }
  return newStr;
}

function ciEmailify() {
}

function exclaim() {
}

function reverse() {
}

function crazyCase2ReturnOfCrazyCase() {
}

function titleCase() {
}

function onlyVowels() {
}

function crazyCase3SonOfCrazyCase() {
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}