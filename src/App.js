import React, { Component } from "react";
import "./App.css";
import Guesses from "./components/Guesses";
import HangMan from "./components/HangMan";
import Finish from "./container/Finish"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Guesses />
        <HangMan />
        <Finish />
      </div>
    );
  }
}

export default App;
