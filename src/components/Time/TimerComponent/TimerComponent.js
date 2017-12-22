import React, { Component } from "react";
import Timer from "react.timer";
// MATERIAL-UI
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import PauseIcon from "material-ui/svg-icons/av/pause";
import ResetIcon from "material-ui/svg-icons/av/loop";

// COMPONENTS
import NumInput from "../TimerComponent/NumInput/NumInput";
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
      secondsRemaining: 11,
      countingDown: false
      // initialDuration: `00:01:00`
    };
    this.decrementer = null;
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
      // initialDuration: `00:00:00`,
      countingDown: false
    });
  };

  render() {
    // console.log(this.state.secondsRemaining);
    let buttons;
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
        <p className="timer-title"> {this.state.secondsRemaining} </p>
        <hr />
        {/*
        <Timer countDown startTime={60} />
        <br />
        <TextField hintText="Hint Text" />
*/}
        <NumInput />
        {/* Need to keep reset on screen when on pause */}
        <div className="play-buttons">{buttons}</div>
      </div>
    );
  }
}

export default TimerComponent;
