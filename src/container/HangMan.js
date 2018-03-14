import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { updateGuess } from "../actions/game";
import { connect } from "react-redux";
import { words } from "../lib/words.js";
const guessWords = words[Math.floor(Math.random() * words.length)];

class HangMan extends PureComponent {
  static propTypes = {
    showGuess: PropTypes.func.isRequired
  };

  // showGuess(words, guesses) {
  //   return words
  //     .split("")
  //     .map(char => (guesses.includes(char) ? char : "_"))
  //     .joint(" ");
  // }

  render() {
    return <li> {this.props.showGuess} </li>;
  }
}

const mapStateToProps = ({ showGuess }) => ({ showGuess });

export default connect(mapStateToProps)(HangMan);
