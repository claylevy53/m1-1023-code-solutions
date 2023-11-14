/* exported getWords */

function getWords(string) {
  const wordArray = string.split(' ');
  if (string.length === 0) {
    return [];
  }
  return wordArray;
}
