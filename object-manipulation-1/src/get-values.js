/* exported getValues */

function getValues(object) {
  const valuesArray = [];
  for (const keys in object) {
    valuesArray.push(object[keys]);
  }
  return valuesArray;
}
