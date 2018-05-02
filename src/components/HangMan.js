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
    )
  };

  render() {
    const { guessLetters } = this.props;
    var guessCount = [];
    for (var i = 0; i < this.props.guessLetters.length; i++) {
      guessCount.push(this.props.guessLetters[i]);
    }
    const showGuessWord = word
      .toLowerCase()
      .split("")
      .map(char => (guessLetters.includes(char) ? char : "_"));

    console.log(word);
    console.log(guessCount);

    while (guessCount.length < word.length || guessCount.length < 7)
      return (
        <div className="Game">
          <p>{showGuessWord}</p>
          <p>Guesses: {guessCount}</p>
        </div>
      );

    let guessWord = showGuessWord.join("");
    console.log(showGuessWord);
    console.log(guessWord);
    if (guessWord === word) return <p> You won!! </p>;
    else return <p> You lost !! </p>;
  }
}

const mapStateToProps = ({ guessLetters }) => ({ guessLetters });

export default connect(mapStateToProps)(HangMan);
