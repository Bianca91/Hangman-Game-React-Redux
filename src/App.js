import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import guessWords from './components/guessWords'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="Title">The Hangman</h1>
      <div className = "guessWords"/>
      </div>
    );
  }
}

export default App;
