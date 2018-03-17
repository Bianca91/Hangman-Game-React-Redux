import { GET_GUESS } from "../actions/types";

const words = ["Hello"];

export default (state = words, payload) => {
  switch (payload.type) {
    case GET_GUESS:
      return words;

    default:
      return state;
  }
};
