function wrongGuessCount(word, guesses) {
  var total = 0;
  for (let i = 0; i < guesses.length; i++) {
    if (word.indexOf(guesses[i]) == -1) {
      total += 1;
    }
  }
  console.log(total);
}

function showGuess(word, guesses) {
  let splitWord = word.split("");
  let joinGuesses = guesses.join("");

  for (let i = 0; i < splitWord.length; i++) {
    if (joinGuesses.indexOf(splitWord[i]) === -1) {
      splitWord[i] = "_";
    }
  }
  return splitWord.join(" ");
}

function isWinner(word, guesses) {
  let newWord = showGuess(word, guesses);
  if (newWord.indexOf("_") == -1) {
    return true;
  }
}
