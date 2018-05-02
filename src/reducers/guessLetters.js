import { UPDATE_GUESS } from "../actions/types";
import { NEW_GAME } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_GUESS:
      return state.concat(action.payload);
    case NEW_GAME:
      return [].concat(action.payload)
    default:
      return state;
  }
};
