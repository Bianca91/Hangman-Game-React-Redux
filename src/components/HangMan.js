import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class HangMan extends PureComponent {
  static propTypes = {
    word: PropTypes.arrayOf(
      PropTypes.shape({
        guessLetters: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const { guessLetters, word } = this.props;
    const wrongGuessCount = guessLetters.filter(
      guess => word.indexOf(guess) === -1
    ).length;

    var guessCount = [];
    for (var i = 0; i < this.props.guessLetters.length; i++) {
      guessCount.push(this.props.guessLetters[i]);
    }

    const showGuessWord = word
      .toLowerCase()
      .split("")
      .map(char => (guessLetters.includes(char) ? char : " _ "));

    const guessWord = showGuessWord.join("");
    console.log(guessWord);
    console.log(wrongGuessCount);
    console.log(word);

    if (wrongGuessCount < 6) {
      if (guessWord.toLowerCase() === word.toLowerCase())
        return <p> You won!! </p>
      return (
        <div className="Game">
          <div>
            <p> {`Guess ${showGuessWord.length} letters`}</p>
            <p>{showGuessWord.map(x => x.toUpperCase())}</p>
            <p>Guesses: {guessCount}</p>
            <img
              alt=""
              style={{ height: 100 }}
              src={(() => {
                switch (wrongGuessCount) {
                  case 1:
                    return "http://dinder.de/images/hangman/1.png";
                  case 2:
                    return "http://dinder.de/images/hangman/2.png";
                  case 3:
                    return "http://dinder.de/images/hangman/3.png";
                  case 4:
                    return "http://dinder.de/images/hangman/4.png";
                  case 5:
                    return "http://dinder.de/images/hangman/5.png";
                  case 6:
                    return "http://dinder.de/images/hangman/6.png";
                  case 7:
                    return "http://dinder.de/images/hangman/7.png";
                  default:
                    return "";
                }
              })()}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="lost">
        <p> You lost!!! </p>
        <p> {`The word was ${word}`} </p>
        <img alt="Oeps"
          style={{ height: 150 }}
          src="http://dinder.de/images/hangman/7.png"
        />
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    guessLetters: state.guessLetters,
    word: state.word
  };
};

export default connect(mapStateToProps)(HangMan);
