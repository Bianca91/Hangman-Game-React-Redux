import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import guessWords from './components/guessWords'
import GuessingTheWord from '.components/guessInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">The Hangman</h1>
        <div className = "guessWords"/>
        <div>
          <button onClick className="GuessingTheWord">
          </button>
          <input type= "text" id="nextGuess" onChange/>
        </div>
      </div>
    );
  }
}

export default App;
