const student = { firstName: 'Clay', lastName: 'Levy', age: 28 };

const fullName = student.firstName + ' ' + student.lastName;

console.log('My full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Map Editor';

console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of Student Object', student);

const vehicle = {
  make: 'Ferrari',
  model: 'sf90',
  year: 2023,
};

vehicle['color'] = 'Red';
vehicle['isConvertible'] = true;

console.log('Value of vehicle["color"]:', vehicle['color']);
console.log('Value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('Value of Vehicle Object', vehicle);

const pet = {
  name: 'Piper',
  type: 'Dog',
};

delete pet.name;
delete pet.type;
console.log('Value of Pet Object', pet);
