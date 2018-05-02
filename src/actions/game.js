import { NEW_GAME, UPDATE_GUESS, GET_GUESS } from "./types"
import {words}  from "../lib/words"

export const updateGuess = (guessLetter) => ({
  type: UPDATE_GUESS,
  payload: guessLetter
});

export const createGame = () => ({
  type: NEW_GAME,
  payload: words[Math.floor(Math.random() * words.length)]
})
