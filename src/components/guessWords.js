import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../components/guessWords.css'
import { connect } from 'react-redux'

export class guessWords extends PureComponent {
  static propTypes = {
    value: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    ).isRequired,
}
  render() {
    return (
      <div className= "guessWords">{ this.props.guessWords }</div>
    )
  }
}

export default connect (guessWords)
