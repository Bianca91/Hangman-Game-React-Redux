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
    wrongGuessCount: PropTypes.number.isRequired
  };

  wrongGuessCount = (word, guessLetters) => {
    var total = 0;
    for (let i = 0; i < word.length; i++) {
      if (word.indexOf(this.props.guessLetters[i]) === -1) {
        total += 1;
      }
    }
    return total;
  };

  // isWinner(word, guesses) {
  //   const showGuess = this.props;
  //   let newWord = showGuess(word, guesses);
  //   if (newWord.indexOf("_") === 1) {
  //     return true;
  //   }
  // }
  render() {
    const { guessLetters, wrongGuessCount } = this.props;
    console.log(word);
    console.log(guessLetters);
    console.log(wrongGuessCount);
    if (this.props.wrongGuessCount >= 6) return null;
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
