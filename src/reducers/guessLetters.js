import { UPDATE_GUESS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_GUESS:
      return state.concat(action.payload);

    default:
      return state;
  }
};
