import { UPDATE_GUESS } from "./types";
import { GET_GUESS } from "./types";

export const updateGuess = (guessLetter) => ({
  type: "UPDATE_GUESS",
  payload: guessLetter
});

export const getGuess = word => ({
  type: "GET_GUESS",
  payload: word
});
