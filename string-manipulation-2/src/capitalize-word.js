/* exported capitalizeWord */

function capitalizeWord(word) {
  let newWord = '';
  newWord = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      newWord += word[i].toLowerCase();
    } else if (word[i] === word[i].toLowerCase()) {
      newWord += word[i];
    }
    if (newWord[4] === 's' && newWord.slice(0, 4) === 'Java') {
      return 'JavaScript';
    }
  }
  return newWord;
}
