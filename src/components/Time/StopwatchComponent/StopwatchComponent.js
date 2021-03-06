import React, { Component } from "react";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import StopIcon from "material-ui/svg-icons/av/stop";
import ResetIcon from "material-ui/svg-icons/av/replay";
import * as stopwatchStates from "../stopwatchStates";

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + sec % 60).slice(-2);

class StopwatchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null,
      stopwatchState: stopwatchStates.NOT_RUNNING
    };
    this.incrementer = null;
    this.startStopwatch = this.startStopwatch.bind(this);
    this.stopStopwatch = this.stopStopwatch.bind(this);
    this.handleLapClick = this.handleLapClick.bind(this);
  }

  startStopwatch() {
    this.setState({ stopwatchState: stopwatchStates.RUNNING });

    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        }),
      1000
    );
  }

  stopStopwatch() {
    clearInterval(this.incrementer);
    this.setState({
      stopwatchState: stopwatchStates.NOT_RUNNING,
      secondsElapsed: 0,
      laps: []
    });
  }

  handleLapClick() {
    this.setState({
      laps: this.state.laps.concat([this.state.secondsElapsed])
    });
  }

  render() {
    return (
      <div className="stopwatch-wrapper">
        <h1 className="stopwatch-header">
          {formattedSeconds(this.state.secondsElapsed)}
        </h1>
        {this.state.stopwatchState === 0 ||
        this.incrementer === this.state.lastClearedIncrementer ? (
          <button
            className="buttonDefaults startButton"
            onClick={this.startStopwatch}
          >
            <PlayIcon />
          </button>
        ) : (
          <button
            className="buttonDefaults stopButton"
            onClick={this.stopStopwatch}
          >
            <StopIcon style={{ backgroundColor: "#d75452" }} />
          </button>
        )}

        {this.state.secondsElapsed !== 0 &&
        this.incrementer !== this.state.lastClearedIncrementer ? (
          <button className="buttonDefaults" onClick={this.handleLapClick}>
            <ResetIcon />
          </button>
        ) : null}

        <ul className="stopwatch-laps">
          {this.state.laps.map((lap, i) => (
            <li className="stopwatch-lap">
              <strong>{i + 1}</strong>/ {formattedSeconds(lap)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StopwatchComponent;
