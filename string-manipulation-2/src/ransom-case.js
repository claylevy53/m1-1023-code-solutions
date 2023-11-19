/* exported ransomCase */

// Psuedocode
// Declare a function named ransomCase that takes one parameter named string
// Within this function declare a variable and assign it to a empty string
// Begin a for loop and initialize i equal to zero, check for the condition that i is less than the length method of string parameter, incrementing i by one each iteration
// within the for loop, write a if statement where you check if i modulo 2 is strictly equal to 0 to see if i is even, also checking if i is strictly equal to zero
// Within the if statement, set the new empty string with the addition assignment operator to the string parameter at index i, while also using the toLowerCase method on this parameter
// Outside of this if statement, write an else statement where we set our string defined earlier to the addition assigment operator to the string parameter at index i, while also using the toIpperCase method on this parameter

function ransomCase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0 || i === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
