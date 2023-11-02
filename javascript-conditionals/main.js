/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'Neutral';
  } else if (pH < 7 && pH > 0) {
    return 'Acid';
  } else if (pH < 14 && pH > 7) {
    return 'Base';
  } else {
    return 'Invalid pH';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'dot':
      return "I'm cute~";
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Casino Royale';
    case 'comedy':
      return 'Step Brothers';
    case 'horror':
      return 'The Ring';
    case 'drama':
      return 'Se7en';
    case 'musical':
      return 'High School Musical';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
