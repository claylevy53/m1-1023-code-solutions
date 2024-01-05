/* exported defaults */

// Psuedocode
// Define a function called defaults that takes two parameters, target and source.
// Within the function begin a for in loop, looping thru the const keys in our source object
// within the for loop we want to then check if the keys are not in the target object using the ! logical not operator
// If this is true, we then want the target object to be called and defined at the keys index being set equal to the source object at the keys index
// From here we then want to end the function, with no return value

function defaults(target, source) {
  for (const keys in source) {
    if (!(keys in target)) {
      target[keys] = source[keys];
    }
  }
}
