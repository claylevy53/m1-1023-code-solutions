/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const splitString = string.split('');

  const temp = splitString[firstIndex];
  splitString[firstIndex] = splitString[secondIndex];
  splitString[secondIndex] = temp;

  return splitString.join('');
}
