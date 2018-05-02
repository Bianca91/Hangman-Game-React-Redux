import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createGame } from "../actions/game";

export class CreateGameButton extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired,
    label: PropTypes.string
  };

  handleClick = () => {
    this.props.createGame();
  };

  render() {
    return (
      <button style={{margin: 10}} onClick={this.handleClick} className="CreateGameButton">
        {this.props.label || "New Game"}
      </button>
    );
  }
}

export default connect(null, { createGame })(CreateGameButton);
