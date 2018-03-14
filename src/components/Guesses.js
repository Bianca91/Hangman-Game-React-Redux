import React, { PureComponent } from "react";
import { updateGuess } from "../actions/game";
import { connect } from "react-redux";
import "./Guesses.css";
import uuidv1 from "uuid";

class Guesses extends PureComponent {
  constructor() {
    super();
    this.state = [];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { guessLetters } = this.state;
    this.props.updateGuess({ guessLetters, id });
    const id = uuidv1();
    this.setState({ guessLetters });
  }

  render() {
    // const hangWords = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    // const guessWords = hangWords[Math.floor(Math.random() * hangWords.length)];
    // const guessLetters = [];
    //
    // for (let i = 0; i < guessWords.length; i++) {
    //   guessLetters[i] = "_";
    // }
    // const toGuess = guessWords.length;
    //
    // if (guessLetters !== null) {
    //   return updateGuess();
    // }
    //
    // for (let l = 0; l < guessWords.length; l++) {
    //   if (guessWords[l] === guessLetters) return updateGuess();
    // }
    const guessLetters = this.state
    return (
      <form onKeyUp={this.handleSubmit}>
        <h1 class="center-align">HangMan </h1>
        <h3 class="center-align">Type in your guess: </h3>
        <div class="input-field col s6">
          <label htmlFor="guessLetter" />
          <input
            className="form-control"
            type="text"
            placeholder="Guess"
            id="guessLetters"
            value={guessLetters}
            onchange={this.handleChange}
            class="validate"
          />
          <label for="guessLetter" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { guessLetters: state.guessLetters };
};

const mapDispatchToProps = dispatch => {
  return {
    updateGuess: guessLetter => dispatch(updateGuess(guessLetter))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Guesses);
