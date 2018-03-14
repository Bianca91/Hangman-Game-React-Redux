import { UPDATE_GUESS } from "./types";

export const updateGuess = guessLetter => ({
  type: "UPDATE_GUESS",
  payload: {
    guessLetter
  }
});
