import React, { Component } from "react";
import "./App.css";
import Guesses from "./components/Guesses";
import HangMan from "./components/HangMan";
import Button from './components/Button'
import Title from "./components/Title"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="HangMan"/>
        <Guesses />
        <HangMan />
        <Button />
      </div>
    );
  }
}

export default App;
