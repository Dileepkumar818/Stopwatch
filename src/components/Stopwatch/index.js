// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isTimerStarted: false}

  onStart = () => {
    const {isTimerStarted} = this.state
    if (!isTimerStarted) {
      this.timerId = setInterval(this.tick, 1000)
      this.setState({isTimerStarted: true})
    }
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prev => ({minutes: prev.minutes + 1, seconds: 0}))
    } else {
      this.setState(prev => ({seconds: prev.seconds + 1}))
    }
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({isTimerStarted: false})
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0, isTimerStarted: false})
  }

  render() {
    const {minutes, seconds} = this.state
    const sec = seconds < 10 ? `0${seconds}` : seconds
    const minu = minutes < 10 ? `0${minutes}` : minutes
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <div className="logo-container">
              <img
                src="
https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="watch-image"
              />
              <p>Timer</p>
            </div>
            <h1>
              {minu}:{sec}
            </h1>
            <div className="button-container">
              <button
                onClick={this.onStart}
                className="button-start"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onStop}
                className="button-stop"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onReset}
                className="button-reset"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
