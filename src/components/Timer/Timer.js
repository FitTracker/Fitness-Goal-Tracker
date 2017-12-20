import React, { Component } from "react";
import FontIcon from "material-ui/FontIcon";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";

import IconHourglassEmpty from "material-ui/svg-icons/action/hourglass-empty";
import IconTimer from "material-ui/svg-icons/image/timer";
import IconTimeLapse from "material-ui/svg-icons/image/timelapse";

import TimerComponent from "./TimerComponent";
import StopwatchComponent from "./StopwatchComponent";
import IntervalComponent from "./IntervalComponent";

const timerIcon = <IconHourglassEmpty />;
const stopwatchIcon = <IconTimer />;
const timelapseIcon = <IconTimeLapse />;

const recentsIcon = (
  <FontIcon className="material-icons">(hourglass i)</FontIcon>
);
const favoritesIcon = (
  <FontIcon className="material-icons">(timer icon)</FontIcon>
);

class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0
  };

  select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <div>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="timer"
              icon={timerIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="stopwatch"
              icon={stopwatchIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="interval"
              icon={timelapseIcon}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
        <h2> (Views below will swap out when clicking menu icons) </h2>
        <br />
        <TimerComponent />
        <br />
        <StopwatchComponent />
        <br />
        <IntervalComponent />
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;
