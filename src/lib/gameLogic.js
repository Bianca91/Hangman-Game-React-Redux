function wrongGuessCount(word, guesses) {
  var total = 0;
  for (let i = 0; i < guesses.length; i++) {
    if (word.indexOf(guesses[i]) == -1) {
      total += 1;
    }
  }
  console.log(total);
}

export function showGuess(words, guesses) {
  return words
    .split("")
    .map(char => (guesses.includes(char) ? char : "_"))
    .joint(" ");
}

function isWinner(word, guesses) {
  let newWord = showGuess(word, guesses);
  if (newWord.indexOf("_") == -1) {
    return true;
  }
}
