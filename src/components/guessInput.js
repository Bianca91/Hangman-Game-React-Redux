import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { nextGuess} from './Actions/game'
import './GuessingTheWord.css'


export class GuessingTheWord extends PureComponent {
  static propTypes = {
    nextGuess: PropTypes.func.isRequired = this.handleClick.bind(this),
    input: this.updateInputValue = this.updateInputValue.bind(this)
  }

  handleClick = () => {
    console.log("Enter your next guess");
    console.log("Your guess is: "+ this.state.nextGuess(" "));
  }

  updateInputValue(guess){
    this.prop={inputfield: guess.target.value};

  }

    render() {
      return (
        <div>
          <button
            onClick={this.handleClick} className="GuessingTheWord">
            { this.props.updateInputValue }
          </button>
          <input type= "text" id="nextGuess" onChange= {this.updateInputValue}/>
        </div>
      )
    }

const mapDispatchtoProps = ({ GuessingTheWord }) => ({
    nextGuess: handleClick(nextGuess),
    input: updateInputValue(guess),
  })
}

  export default connect(mapDispatchtoProps)(GuessingTheWord)
