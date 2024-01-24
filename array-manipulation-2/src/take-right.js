/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    }
    if (count > array.length) {
      return array;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
