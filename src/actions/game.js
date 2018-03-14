import { UPDATE_GUESS } from "./types";
import { GET_GUESS } from "./types";
import { showGuess } from "./gameLogice"

export const updateGuess = guessLetter => ({
  type: "UPDATE_GUESS",
  payload: guessLetter
});

export const getGuess = () => {
  const [words] = showGuess();
  return {
    type: "GET_GUESS",
    payload: words
  };
};
