import { GUESS } from '../Actions/types'
import { showGuess } from '../lib/game'

const guessingWords = [
  ["Welcome"],
  ["to"],
  ["Codaisseur"],

]

export default (state = guessingWords, { type } = {}) => {
  switch (type) {
    case GUESS :
      return [].concat(showGuess.guess)

      default :
    return state
}
}
