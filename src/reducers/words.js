import { GET_GUESS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_GUESS:
      return [].concat(action.payload);
    default:
      return state;
  }
}
