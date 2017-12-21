import React, { Component } from "react";

// MATERIAL-UI
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import FloatingActionButton from "material-ui/FloatingActionButton";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import PauseIcon from "material-ui/svg-icons/av/pause";
import ResetIcon from "material-ui/svg-icons/av/loop";

// COMPONENTS
import NumInput from "../TimerComponent/NumInput/NumInput";

const style = {
  margin: 12
};

const buttonStyle = {
  marginRight: 20
};

// const paperStyle = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: "center",
//   display: "inline-block"
// };

class TimerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countingDown: false,
      initialDuration: `00:01:00`
    };
  }

  startTimer = () => {
    console.log(`Clicked Start`);
    this.setState({
      countingDown: true
    });
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
      initialDuration: `00:00:00`,
      countingDown: false
    });
  };

  render() {
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
        <p className="timer-title"> {this.state.initialDuration} </p>
        <hr />
        {/* <TextField floatingLabelText="Enter Duration" /> */}
        <NumInput />
        <br />
        {/* Need to keep reset on screen when on pause */}
        {buttons}
      </div>
    );
  }
}

export default TimerComponent;
