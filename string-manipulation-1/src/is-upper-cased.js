/* exported isUpperCased */

// Psuedocode
// Define a function names isUpperCased, taking one parameter named word. This will take a string
// Start a for loop within this function, the initialization where you let i equal 0, setting the condition to i less than the length of the word parameter, and finally incrementing i by 1
// Within this for loop, write an if statement where you check if the index of the word at i, is not equal the uppercase of the word at index i. Use the .toUpperCase() method for this comparison. Return false if this is the case, as we want only all letters in this string to be uppercase.
// exiting the if statement, return True for the function. This will return True for the entire function if every letter is uppercase.

function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
