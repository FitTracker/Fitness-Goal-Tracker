import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TimerComponent from "./TimerComponent/TimerComponent";
import StopwatchComponent from "./StopwatchComponent";
import IntervalComponent from "./IntervalComponent";
import TimeNav from "./TimeNav";

class Time extends Component {
  render() {
    return (
      <div>
        <TimeNav />
      </div>
    );
  }
}

export default Time;
