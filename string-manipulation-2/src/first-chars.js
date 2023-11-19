/* exported firstChars */

function firstChars(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    if (string.length === 0) {
      return '';
    }
    if (length >= string.length) {
      return string;
    }
    newString += string[i];
  }
  return newString;
}
