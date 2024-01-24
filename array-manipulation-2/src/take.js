/* exported take */

function take(array, count) {
  const newArray = [];
  for (let i = 0; i < count; i++) {
    newArray.push(array[i]);

    if (array.length < count) {
      return [];
    }
  }
  return newArray;
}
