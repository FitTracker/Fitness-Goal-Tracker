import React, { Component } from "react";

class TimerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counting: false,
      initialDuration: `00:01:00`
    };
  }

  startTimer = () => {
    console.log(`Clicked Start`);
    this.setState({
      counting: true
    });
  };

  stopTimer = () => {
    console.log(`Clicked Stop`);
    this.setState({
      counting: false
    });
  };

  reset = () => {
    console.log(`Clicked reset`);
    this.setState({
      initialDuration: 0
    });
  };

  render() {
    return (
      <div>
        <p>Timer Component (under construction)</p>
        <h1> {this.state.initialDuration} </h1>
        <input type="text" placeholder="Enter duration" />
        <button type="input" onClick={this.startTimer}>
          Start
        </button>
        <button type="button" onClick={this.stopTimer}>
          Stop
        </button>
        <button type="button" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default TimerComponent;
