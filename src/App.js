import React, { Component } from "react";
import "./App.css";
import Guesses from "./components/Guesses";
import HangMan from "./container/HangMan";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Guesses />
        <HangMan />
      </div>
    );
  }
}

export default App;
