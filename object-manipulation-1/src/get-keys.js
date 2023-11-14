/* exported getKeys */
// Psuedocode
// Define a function named getKeys with one paramater, object
// Within this function, define a variable, setting it to an empty array
// After this, begin a for loop that will loop thru the object parameter. With this for of loop, declare the keys variable, of our object parameter
// take our empty array and then push the keys variable to it.
//  Outside of our loop, we then want to return our array defined earlier, then closing this function out.

function getKeys(object) {
  const keysArray = [];
  for (const keys in object) {
    keysArray.push(keys);
  }
  return keysArray;
}
