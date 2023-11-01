const num1 = 11;
const num2 = 22;
const num3 = 33;

const maximumValue = Math.max(num1, num2, num3);

console.log('The max value here is:', maximumValue);

const heroes = ['Superman', 'Spiderman', 'The Hulk', 'King Kong'];

let randomNumber = Math.random();

randomNumber = heroes.length * randomNumber;

const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

const library = [
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    title: 'We',
    author: 'Yevgeny Zamyatin',
  },
];

const lastBook = library.pop();

console.log('lastBook:', lastBook);

const firstBook = library.shift();

console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('Libraray:', library);

const fullName = 'Clay Levy';

const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
