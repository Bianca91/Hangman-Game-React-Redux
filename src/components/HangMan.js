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
    hangImg: PropTypes.string.isRequired
  };

  render() {
    const { guessLetters } = this.props;
    const wrongGuessCount = guessLetters.filter(
      guess => word.indexOf(guess) === -1
    ).length;

    console.log(guessLetters);

    console.log(wrongGuessCount);

    var guessCount = [];
    console.log(guessCount);
    for (var i = 0; i < this.props.guessLetters.length; i++) {
      guessCount.push(this.props.guessLetters[i]);
    }

    const showGuessWord = word
      .toLowerCase()
      .split("")
      .map(char => (guessLetters.includes(char) ? char : "_"));

    while (guessCount.length < 8)
      return (
        <div className="Game">
          <div>
            <p>{showGuessWord}</p>
            <p>Guesses: {guessCount}</p>
            <img
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
                    return "http://dinder.de/images/hangman/7.png"
                }
              })()}
            />
          </div>
        </div>
      );

    let guessWord = showGuessWord.join("");

    if (guessWord === word) return <p> You won!! </p>;
    else return <img alt={"You lost!!!"} style={{height: 150}} src="http://dinder.de/images/hangman/7.png" />

  }
}
const mapStateToProps = function(state) {
  return {
    guessLetters: state.guessLetters
  };
};

export default connect(mapStateToProps)(HangMan);
