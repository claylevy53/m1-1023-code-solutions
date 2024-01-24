/* exported drop */
// Psuedocode
// Define a function called drop that takes two parameters, array and count
// Declare a variable within this function and set it equal to an empty array
// Begin a for let with the intial value equal to the count parameter, checking the condition that the initial value is less than the length property of our array parameter, ending the loop with iterating the inital by one each iteration,
// Within the for loop, write an if statement where we check if the count parameter is > the length property of our array parameter. If this expression is true, return an empty array
// Outside of this if statement, but within our for loop, push the array parameter at index i to the empty array variable we created earlier.
// Outside of the for loop, return our array variable we declared at the beginning

function drop(array, count) {
  const newArray = [];
  for (let i = count; i < array.length; i++) {
    if (count > array.length) {
      return [];
    }
    newArray.push(array[i]);
  }
  return newArray;
}
