import { UPDATE_GUESS } from "../actions/types";

const initialState = {
  guessLetters: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GUESS:
      return {...state, guessLetters:
        state.guessLetters.concat(action.payload)};
    default:
      return state;
  }
}
