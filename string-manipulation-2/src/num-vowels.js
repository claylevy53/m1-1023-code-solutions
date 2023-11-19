/* exported numVowels */

function numVowels(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        sum += 1;
    }
  }
  return sum;
}
