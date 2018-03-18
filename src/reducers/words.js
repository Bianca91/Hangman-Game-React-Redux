import { GET_GUESS } from "../actions/types";
import { words } from "../lib/words";

export default (state = words, action) => {
  switch (action.type) {
    case GET_GUESS:
      return state.payload;

    default:
      return state;
  }
};
