/* exported includesSeven */

function includesSeven(array) {
  for (const item of array) {
    if (item === 7) {
      return true;
    }
  }
  return false;
}
