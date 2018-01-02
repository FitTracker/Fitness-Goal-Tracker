import React, { Component } from "react";
import moment from "moment";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";
import TimerConfig from "./TimerConfig";
import * as timerStates from "../timerStates";

const timerAudio = document.getElementById("timerAudio");

class TimerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment.duration(1, "seconds"),
      baseTime: moment.duration(1, "seconds"),
      timerState: timerStates.NOT_SET,
      timer: null,
      playSound: false
    };

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime
    });
  }

  startTimer() {
    if (
      this.state.currentTime.get("hours") === 0 &&
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      return;
    }
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime),
      playSound: false
    });
    if (this.state.playSound) {
      timerAudio.pause();
    }
  }

  reduceTimer() {
    if (
      this.state.currentTime.get("hours") === 0 &&
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "second");

    this.setState({
      currentTime: newTime
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
      playSound: true
    });

    if (this.state.playSound) {
      timerAudio.play();
    }
  }

  render() {
    return (
      <div className="timer-container">
        <TimerDisplay
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
        />
        <hr />
        <br />
        <TimerButton
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
        />

        {this.state.timerState === timerStates.NOT_SET && (
          <TimerConfig
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
          />
        )}

        <br />
      </div>
    );
  }
}

export default TimerComponent;
