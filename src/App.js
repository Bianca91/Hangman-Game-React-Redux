import React, { Component } from "react";
import "./App.css";
import Guesses from "./components/Guesses";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Guesses />

      </div>
    );
  }
}

export default App;
