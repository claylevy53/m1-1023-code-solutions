/* exported capitalizeWords */

function capitalizeWords(string) {
  let newString = '';
  const splitArray = string.split(' ');
  for (let i = 0; i < splitArray.length; i++) {
    const word = splitArray[i];
    const firstLetter = word[0].toUpperCase();
    const restOfLetter = word.slice(1).toLowerCase();
    newString += firstLetter + restOfLetter;
    if (i < splitArray.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
