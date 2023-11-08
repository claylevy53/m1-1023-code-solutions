/* exported compact */
// Psuedocoode
// Define a function named compact, that takes one parameter named array
// Within the function define a empty array to a variable of whatever name you prefer
// After, being a for loop that starts at index (i) of 0, a condition of (i) being < the length of the array parameter, then incrementing i by one each iteration
// within this for loop we want to check if the array parameter at index i is Boolean true, if this is the case, we want to push this to the empty array at the specified index.
// Outside of the for loop, we then want to return our array variable we declared at the beginning. Closing out our function.

function compact(array) {
  const compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
