export const showGuess = (word, guess) => {

  let splitWord = word.split('')
  let joinGuesses = guess.join('')

  for (let i = 0; i < splitWord.length; i ++) {
    if (joinGuesses.indexOf(splitWord[i]) === -1)
    {splitWord = new Array(splitWord[i].fill(0))
  }
}
  return [splitWord, (joinGuesses)]
}
