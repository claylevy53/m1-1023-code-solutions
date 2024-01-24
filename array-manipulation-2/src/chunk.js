/* exported chunk */
// Psuedocode
// Declare a function named chunk that takes two parameters, an array and the size of that array.
// Declare a variable with an appropriate name that will hold an empty array
// Begin a for loop with an initializer of i=0 , a conditional statement to check if i is less the result of the length method of our array, and with a final expression setting i with the addition assignment operator to the size parameter
// Within this for loop, declare a variable named chunk, this will store our sliced array
// In chunk, slice the array parameter using the slice method taking the index i as he first argument, then the second argument being i plus our size parameter
// Then use the push method on empty array we declared outside of the loop and push the chunk variable, close out the for loop
// Outside of the for loop and within the chunk function, return the array declared outside of the loop we just pushed into.

function chunk(array, size) {
  const chunkArray = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunkArray.push(chunk);
  }
  return chunkArray;
}
