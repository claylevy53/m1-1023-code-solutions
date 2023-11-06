/* exported filterOutStrings */

function filterOutStrings(values) {
  const newValues = [];
  for (let i = 0; i <= values.length - 1; i++) {
    if (typeof values[i] !== 'string') {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
