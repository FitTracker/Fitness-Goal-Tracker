import React, { Component } from "react";
import * as timerStates from "../timerStates";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import StopIcon from "material-ui/svg-icons/av/stop";

class TimerButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <button
          className="buttonDefaults startButton"
          onClick={this.props.startTimer}
        >
          <PlayIcon />
        </button>
      );

    if (this.props.timerState === timerStates.RUNNING)
      return (
        <button
          className="buttonDefaults stopButton"
          onClick={this.props.stopTimer}
        >
          <StopIcon />
        </button>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <button
          className="buttonDefaults resetButton"
          onClick={this.props.stopTimer}
        >
          Reset
        </button>
      );
  }

  render() {
    return <div>{this.getButton()}</div>;
  }
}

export default TimerButton;
