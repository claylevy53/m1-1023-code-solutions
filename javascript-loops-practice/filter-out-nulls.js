/* exported filterOutNulls */

function filterOutNulls(values) {
  const returnArray = [];
  for (let i = 0; i <= values.length - 1; i++) {
    if (values[i] !== null) {
      returnArray.push(values[i]);
    }
  }
  return returnArray;
}
