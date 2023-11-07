/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const finalWords = [];
  for (let i = 0; i <= words.length - 1; i++) {
    finalWords.push((words[i] += suffix));
  }
  return finalWords;
}
