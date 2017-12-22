import React, { Component } from "react";
import Timer from "react.timer";
// MATERIAL-UI
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import PauseIcon from "material-ui/svg-icons/av/pause";
import ResetIcon from "material-ui/svg-icons/av/loop";

// COMPONENTS
import { clearInterval } from "timers";

const buttonStyle = {
  marginRight: 20
};

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + sec % 60).slice(-2);
class TimerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsRemaining: 0,
      countingDown: false
    };
    this.decrementer = null;
  }

  inputDigit(digit) {
    const { secondsRemaining } = this.state;

    this.setState({
      secondsRemaining: String(digit)
    });
  }

  startTimer = () => {
    console.log(`Clicked Start`);
    setInterval(() => {
      var newCount = this.state.secondsRemaining - 1;
      newCount >= 0
        ? this.setState({ secondsRemaining: newCount })
        : clearInterval(this.state.secondsRemaining);
    }, 1000);
  };

  pauseTimer = () => {
    console.log(`Clicked Pause`);
    this.setState({
      countingDown: false
    });
  };

  resetTimer = () => {
    console.log(`Clicked Reset`);
    this.setState({
      countingDown: false
    });
  };

  render() {
    // console.log(this.state.secondsRemaining);
    let buttons;
    const { secondsRemaining } = this.state;
    const { countingDown } = this.state;

    if (countingDown) {
      buttons = (
        <div>
          <FloatingActionButton style={buttonStyle} onClick={this.pauseTimer}>
            <PauseIcon />
          </FloatingActionButton>

          <FloatingActionButton style={buttonStyle} onClick={this.resetTimer}>
            <ResetIcon />
          </FloatingActionButton>
        </div>
      );
    } else {
      buttons = (
        <div>
          <FloatingActionButton style={buttonStyle} onClick={this.startTimer}>
            <PlayIcon />
          </FloatingActionButton>
        </div>
      );
    }

    return (
      <div className="timer-wrapper">
        <p className="timer-title"> {secondsRemaining} </p>
        <hr />
        <div className="NumInput">
          <span className="top" />
          <div className="keys">
            <button
              className="timer-key key-1"
              onClick={() => this.inputDigit(1)}
            >
              1
            </button>
            <button
              className="timer-key key-2"
              onClick={() => this.inputDigit(2)}
            >
              2
            </button>
            <button
              className="timer-key key-3"
              onClick={() => this.inputDigit(3)}
            >
              3
            </button>
            <button
              className="timer-key key-4"
              onClick={() => this.inputDigit(4)}
            >
              4
            </button>
            <button
              className="timer-key key-5"
              onClick={() => this.inputDigit(5)}
            >
              5
            </button>
            <button
              className="timer-key key-6"
              onClick={() => this.inputDigit(6)}
            >
              6
            </button>
            <button
              className="timer-key key-7"
              onClick={() => this.inputDigit(7)}
            >
              7
            </button>
            <button
              className="timer-key key-8"
              onClick={() => this.inputDigit(8)}
            >
              8
            </button>
            <button
              className="timer-key key-9"
              onClick={() => this.inputDigit(9)}
            >
              9
            </button>
            <button className="empty-button" />
            <button
              className="timer-key key-0"
              onClick={() => this.inputDigit(0)}
            >
              0
            </button>
            <button className="timer-key key-delete">X</button>
          </div>
        </div>
        {/*
        <Timer countDown startTime={60} />
        <br />
        <TextField hintText="Hint Text" />
*/}
        <div className="play-buttons">{buttons}</div>
      </div>
    );
  }
}

export default TimerComponent;
