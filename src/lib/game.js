const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

export const fillWord = (word, guesses) => {
  let splitWord = word.split('')
  let joinGuesses = guesses.join('')

  for (let i = 0; i < splitWord.length; i ++) {
    if (joinGuesses.indexOf(splitWord[i]) === -1)
    {splitWord = new Array(splitWord[i].fill(0))
  }
}
  return [splitWord, fillWord(joinGuesses)]
}
