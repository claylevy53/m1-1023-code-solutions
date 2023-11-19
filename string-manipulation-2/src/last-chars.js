/* exported lastChars */

// Psuedocode
// Define a function named lastChars that takes two parameters named length and string
// Within this function, create a variable and assign to a empty string
// Then, we want to create an if statement that checks if the length parameter is greater than or equal to the length property of our string parameter. If this is true, we want to return the string in our if statement
// Outside of this if statement, we want to create another if statement where we check if the length property of our string is equal to zero. If this is true, we want to return an empty string in our if statement
// Outside of this if statement, we want to call our empty string variable made earlier and use the addition and assignment operator, after this operator we want to use the slice method of our string parameter, and within the slice method, take an argument of the length parameter times -1.
// On a new line we then want to return our new string variable we declared at the start of the function

function lastChars(length, string) {
  let newString = '';
  if (length >= string.length) {
    return string;
  }
  if (string.length === 0) {
    return '';
  }
  newString += string.slice(length * -1);
  return newString;
}
