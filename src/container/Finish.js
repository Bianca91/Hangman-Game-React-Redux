import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { words } from "../lib/words";
import { getGuess } from "../actions/game";

const word = words[Math.floor(Math.random() * words.length)];
const rigthGuesses = [];
const wrongGuesses = [];

class Finish extends PureComponent {
  static propTypes = {
    showRightGuess: PropTypes.func.isRequired,
    words: PropTypes.arrayOf(
      PropTypes.shape({
        guessLetters: PropTypes.string.isRequired
      })
    ),
    rigthGuesses: PropTypes.arrayOf(
      PropTypes.shape({
        guessLetters: PropTypes.string.isRequired
      })
    ),
    wrongGuesses: PropTypes.arrayOf(
      PropTypes.shape({
        guessLetters: PropTypes.string.isRequired
      })
    ),
    wrongGuessCount: PropTypes.func.isRequired,
    isWinner: PropTypes.func.isRequired,
    showGuess: PropTypes.func.isRequired
  };

  // wrongGuessCount(word, guesses) {
  //   return guesses.filter(guess => word.indexOf(guess) === -1).length;
  // }

  showRightGuess = () => {
    if (words.indexOf(this.props.guessLetters) > -1) {
      rigthGuesses.push(this.props.guessLetters);
      console.log(this.props.showRightGuess);
    } else {
      wrongGuesses.push(this.props.guessLetters);
    }
    console.log(this.props.showRightGuess);
  };

  // console.log(showGuess())
  //   handleClick = () => {
  //     this.props.isWinner();
  //   };

  render() {
    const showRightGuess = this.props;
    return <h1>{showRightGuess.props}</h1>;
  }
}

const mapStateToProps = ({ words, guessLetters }) => ({
  words,
  guessLetters
});

export default connect(mapStateToProps, { getGuess })(Finish);
