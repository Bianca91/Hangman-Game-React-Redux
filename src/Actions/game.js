import { GUESS } from './types'
import { showGuess } from '../lib/game'

export const nextGuess = ( guessWords = " ") => {
  const [guess] = showGuess()
  return {
    type: GUESS

    }
  }
