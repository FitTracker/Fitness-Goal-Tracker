import React, { Component } from "react";
import moment from "moment";
import IntervalDisplay from "./IntervalDisplay";
import IntervalButton from "./IntervalButton";
import IntervalConfig from "./IntervalConfig";
import * as timerStates from "../timerStates";

import FloatingActionButton from "material-ui/FloatingActionButton";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";

class IntervalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment.duration(25, "minutes"),
      baseTime: moment.duration(25, "minutes"),
      timerState: timerStates.NOT_SET,
      timer: null
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
      currentTime: moment.duration(this.state.baseTime)
    });
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
      timer: null
    });
  }

  render() {
    return (
      <div className="interval-container">
        <IntervalDisplay
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
        />
        <IntervalButton
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
        />

        {this.state.timerState !== timerStates.RUNNING && (
          <IntervalConfig
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
          />
        )}

        <br />
      </div>
    );
  }
}

export default IntervalComponent;
