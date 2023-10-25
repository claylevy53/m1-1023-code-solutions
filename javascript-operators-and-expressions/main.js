const width = 144;
const height = 121;

const area = width * height;

console.log('Area:', area);
console.log('typeof Area:', typeof area);

const bill = 500;
const payment = 600;

const change = payment - bill;

console.log('Change:', change);
console.log('typeof Change:', typeof change);

const quizzes = 87;
const midterm = 84;
const final = 94;

const grade = (quizzes + midterm + final) / 3;

console.log('Final Grade:', grade.toFixed(1));
console.log('typeof Grade:', typeof grade);

const firstName = 'Clay';
const lastName = 'Levy';

const fullName = firstName + ' ' + lastName;

console.log('My full name:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH = 5;

const isAcidic = pH < 7;
console.log('Is this acidic?:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount = 500;

const isSparta = headCount === 300;

console.log('Is this Sparta?:', isSparta);
console.log('typeof isSparta', typeof isSparta);

const motto = fullName + ' is the GOAT!!';
console.log('Am I the GOAT?:', motto);
console.log('tyepof motto:', typeof motto);
