import React, { Component } from "react";

// MATERIAL-UI
import { Tabs, Tab } from "material-ui/Tabs";
import Slider from "material-ui/Slider";
// ICONS
import IconHourglassEmpty from "material-ui/svg-icons/action/hourglass-empty";
import IconTimer from "material-ui/svg-icons/image/timer";
import IconTimeLapse from "material-ui/svg-icons/image/timelapse";

// COMPONENTS
import TimerComponent from "./TimerComponent";
import StopwatchComponent from "./StopwatchComponent";
import IntervalComponent from "./IntervalComponent";

// VARIABLES
const timerIcon = <IconHourglassEmpty />;
const stopwatchIcon = <IconTimer />;
const timelapseIcon = <IconTimeLapse />;

// const recentsIcon = (
//   <FontIcon className="material-icons">(hourglass i)</FontIcon>
// );
// const favoritesIcon = (
//   <FontIcon className="material-icons">(timer icon)</FontIcon>
// );

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

function handleActive(tab) {
  alert(
    `A tab with this route property ${tab.props["data-route"]} was activated.`
  );
}

const TimeNav = () => (
  <Tabs>
    <Tab label="Timer">
      <div>
        <h2 style={styles.headline}>Timer</h2>
        <TimerComponent />
      </div>
    </Tab>
    <Tab label="Stopwatch">
      <div>
        <h2 style={styles.headline}>Stopwatch</h2>
        <StopwatchComponent />
      </div>
    </Tab>
    <Tab label="Interval">
      <div>
        <h2 style={styles.headline}>Interval</h2>
        <IntervalComponent />
      </div>
    </Tab>
  </Tabs>
);

export default TimeNav;
