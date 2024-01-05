const array = [
  {
    isbn: '1234',
    title: 'Grapes of Wrath',
    author: 'John Steinbeck',
  },
  {
    isbn: '12345',
    title: 'The Great Gatsby',
    author: 'Scott F. Fitzgerald',
  },
  {
    isbn: '123456',
    title: 'It Ends With Us',
    author: 'Colleen Hooper',
  },
];

console.log('Array', array);
console.log('Typeof Array:', typeof array);

const JSONstring = JSON.stringify(array);
console.log('JSON Stringify:', JSONstring);
console.log('Type of JSON Stringify:', typeof JSONstring);

const JSONstudent = '{"StudentID": 1, "Name": "Clay Levy"}';

console.log('JSON Student String:', JSONstudent);
console.log('Type of JSON Student:', typeof JSONstudent);

const JSONParse = JSON.parse(JSONstudent);

console.log('JSON Parse Object', JSONParse);
console.log('JSON Parse Typeof:', typeof JSONParse);
