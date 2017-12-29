import React, { Component } from "react";
import * as timerStates from "../timerStates";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";
import StopIcon from "material-ui/svg-icons/av/stop";

class IntervalButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <button
          className="startButton buttonDefaults"
          onClick={this.props.startTimer}
        >
          <PlayArrow />
        </button>
      );

    if (this.props.timerState === timerStates.RUNNING)
      return (
        <button
          className="stopButton buttonDefaults"
          onClick={this.props.stopTimer}
        >
          <StopIcon />
        </button>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <button
          className="resetButton buttonDefaults"
          onClick={this.props.stopTimer}
        >
          Reset
        </button>
      );
  }

  render() {
    return <div className="row">{this.getButton()}</div>;
  }
}

export default IntervalButton;
