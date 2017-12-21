import React, { Component } from "react";
import Stopwatch from "react-stopwatch";
import ReactSimpleTimer from "react-simple-timer";
import FloatingActionButton from "material-ui/FloatingActionButton";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import PauseIcon from "material-ui/svg-icons/av/pause";
import ResetIcon from "material-ui/svg-icons/av/loop";

const style = {
  margin: 12
};

const buttonStyle = {
  marginRight: 20
};

class StopwatchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countingDown: false,
      secondsElapsed: 120
    };
  }

  getSeconds = () => `0${this.state.secondsElapsed % 60}`.slice(-2);

  getMinutes = () => Math.floor(this.state.secondsElapsed / 60);

  handleStartClick = () => {
    setInterval(() => {
      this.setState(() => {
        secondsElapsed: 1;
      });
    }),
      1000;
  };

  handleStopClick = () => {
    console.log(`Pressed the stop button`);
  };

  render() {
    return (
      <div>
        <h1>
          {this.getMinutes()}:{this.getSeconds()}
        </h1>
        <Stopwatch
          seconds={0}
          minutes={0}
          hours={0}
          withLoop={
            true //   limit={"00:00:10"}
          }
          onCallback={() => console.log("Finish")}
        />
        <FloatingActionButton
          style={buttonStyle}
          onClick={this.handleStartClick}
        >
          <PlayIcon />
        </FloatingActionButton>
        <FloatingActionButton style={buttonStyle} onClick={this.pauseTimer}>
          <PauseIcon />
        </FloatingActionButton>
      </div>
    );
  }
}

export default StopwatchComponent;
