import React, { Component } from "react";
import Stopwatch from "react-stopwatch";

class StopwatchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 120,
      counting: false
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
        <Stopwatch
          seconds={0}
          minutes={0}
          hours={0} //   limit={"00:00:10"}
          withLoop={true}
          onCallback={() => console.log("Finish")}
        />
        <p>Stopwatch Component (under construction)</p>
        <h1>
          {this.getMinutes()}:{this.getSeconds()}
        </h1>
        <button type="button" onClick={this.handleStartClick}>
          Start
        </button>
        <button type="button" onClick={this.handleStopClick}>
          Stop
        </button>
      </div>
    );
  }
}

export default StopwatchComponent;
