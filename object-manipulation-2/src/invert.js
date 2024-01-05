/* exported invert */
// Psuedocode
// Create a function named invert that takes one parameter named source (This will be an object)
// Within this function first create a an empty object, then after begin a for in loop, declaring a const value and looping thru our source object
// Within this for loop, create a variable which will store our value of the source object.
// From here we then want to call our empty object we declared earlier, setting the index of this object to the variable defined earlier that stores the value of the source object, and setting this equal to the key variable that was declared during our for in loop.
// We then want tp close out our for in loop, and then outside of it, return our object we declared earlier

function invert(source) {
  const newObject = {};
  for (const key in source) {
    const value = source[key];
    newObject[value] = key;
  }
  return newObject;
}
