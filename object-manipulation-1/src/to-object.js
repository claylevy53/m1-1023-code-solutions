/* exported toObject */
// Psuedocode
// define a function named toObject that takes one parameter named keyValuePair
// within this function declare a variable named whatever you prefer that will be assinged to an empty object
// call this newly declared variable at the index of the keyvaluePair at the zeroth index
// set this expression equal to the keyvaluePair at the first index, this expression will add the key value pairs to our object
// after this expression, on a new line, return the variable we created at the beginning of the code, that now stores our object

function toObject(keyValuePair) {
  const returnObject = {};
  returnObject[keyValuePair[0]] = keyValuePair[1];
  return returnObject;
}
