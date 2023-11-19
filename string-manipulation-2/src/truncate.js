/* exported truncate */

function truncate(length, string) {
  let slicedString = '';
  if (string.length === 0) {
    return '...';
  }
  if (string.length < length) {
    return string + '...';
  }
  for (let i = 0; i < length; i++) {
    slicedString += string[i];
  }
  return slicedString + '...';
}
