import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import StopIcon from "material-ui/svg-icons/av/stop";
import ResetIcon from "material-ui/svg-icons/av/replay";

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + sec % 60).slice(-2);

class StopwatchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleLapClick = this.handleLapClick.bind(this);
  }

  handleStartClick = () => {
    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        }),
      1000
    );
  };

  handleStopClick = () => {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  };

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
        {this.state.secondsElapsed === 0 ||
        this.incrementer === this.state.lastClearedIncrementer ? (
          <FloatingActionButton
            onClick={this.handleStartClick}
            style={{ margin: 12 }}
          >
            <PlayIcon />
          </FloatingActionButton>
        ) : (
          <FloatingActionButton
            onClick={this.handleStopClick}
            style={{ margin: 12 }}
          >
            <StopIcon />
          </FloatingActionButton>
        )}

        {this.state.secondsElapsed !== 0 &&
        this.incrementer !== this.state.lastClearedIncrementer ? (
          <FloatingActionButton
            onClick={this.handleLapClick}
            style={{ margin: 12 }}
          >
            <ResetIcon />
          </FloatingActionButton>
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

const Button = props => (
  <button type="button" {...props} className={"btn " + props.className} />
);

export default StopwatchComponent;
