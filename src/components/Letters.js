import React from "react";
import { connect } from "react-redux";

const Letters = ({ guessLetters }) => (
  <ul className="list-group list-group-flush">
    {guessLetters.fill(l => (
      <li className="list-group-item" key={l.id}>
        {l.title}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { guessLetters: state.guessLetters };
};

export default connect(mapStateToProps)(Letters);
