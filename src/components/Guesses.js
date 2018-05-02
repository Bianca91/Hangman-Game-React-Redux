import React, { PureComponent } from "react";
import { updateGuess } from "../actions/game";
import { connect } from "react-redux";
import "./Guesses.css";

class Guesses extends PureComponent {
  constructor() {
    super();
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ guess: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateGuess(this.state.guess.split(""));
    this.setState({ guess: "" });
  }

  render() {
    console.log(this.state);
    return (
      <form onKeyUp={this.handleSubmit}>
        <h1 class="center-align">HangMan </h1>
        <h3 class="center-align">Type in your guess: </h3>

        <label htmlFor="guessLetter" />
        <input
          className="form-control"
          type="text"
          placeholder="Guess"
          value={this.state.guess}
          onChange={this.handleChange}
          class="validate"
        />
        <label for="guessLetter" />
      </form>
    );
  }
}

export default connect(null, { updateGuess })(Guesses);
