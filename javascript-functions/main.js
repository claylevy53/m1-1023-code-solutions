function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log(
  'Testing convertMinutesToSeconds function:',
  convertMinutesToSeconds(5)
);

function greet(name) {
  return 'How are you doing ' + name + '?';
}

console.log('Testing greet function:', greet('Clay'));

function getArea(width, height) {
  return width * height;
}

console.log('Testing getArea function:', getArea(5, 5));

function getFirstName(person) {
  return person.firstName;
}

console.log(
  'Testing getFirstName function:',
  getFirstName({ firstName: 'Clay', lastName: 'Levy' })
);

function getLastElement(array) {
  const lastItem = array.length - 1;
  return array[lastItem];
}

console.log(
  'Testing getLastElement function:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
