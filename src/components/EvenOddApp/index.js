// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const {number} = this.state
    this.setState(prevState => ({
      number: prevState.number + Math.ceil(Math.random() * 100 - number),
    }))
  }

  render() {
    const {number} = this.state
    const evenOrOddNumber = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="x">
        <div className="bgColor">
          <h1>Count is {number}</h1>
          <p>Count is {evenOrOddNumber}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
