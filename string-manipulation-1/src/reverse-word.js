/* exported reverseWord */

// Psuedocode
// Declare a function called reverseWord that takes one parameter named word
// declare a variable in this function with a empty string, name it whatever you prefer, this will store our reversed word
// Now start a for loop, the initialization will be i, setting this equal to the length of our word parameter minus 1.
// The condition will be that i is greater than or equal to zero
// The afterthought will minus 1 from i with the (--) operator
// Now in the loop we want to use the (+=) minus to add the word parameter at index i to our empty string variable
// Ending the loop, and at the end of the function, we want to return this variable that stores our now reveresed word.

function reverseWord(word) {
  let reverseTheWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseTheWord += word[i];
  }
  return reverseTheWord;
}
