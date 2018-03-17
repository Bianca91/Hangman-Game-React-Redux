import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { words } from "../lib/words";

const word = words[Math.floor(Math.random() * words.length)];

class HangMan extends PureComponent {
  static propTypes = {
    word: PropTypes.arrayOf(
      PropTypes.shape({
        guessLetters: PropTypes.string.isRequired
      })
    ),
  //  wrongGuessCount: PropTypes.func.isRequired
  };

  // wrongGuessCount(word, guesses) {
  //   var total = 0;
  //   for (let i = 0; i < guesses.length; i++) {
  //     if (words.indexOf(guesses[i]) === -1) {
  //       total += 1;
  //     }
  //   }
  //   console.log(total);
  //   return wrongGuessCount;
  // }

  // isWinner(word, guesses) {
  //   const showGuess = this.props;
  //   let newWord = showGuess(word, guesses);
  //   if (newWord.indexOf("_") === 1) {
  //     return true;
  //   }
  // }
  render() {
    const { guessLetters } = this.props;
    console.log(word)
    console.log(guessLetters)
    return (
      <div className="Game">
        <p>
          {word
            .toLowerCase()
            .split("")
            .map(char => (guessLetters.includes(char) ? char : "_"))}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ guessLetters }) => ({ guessLetters });

export default connect(mapStateToProps)(HangMan);
