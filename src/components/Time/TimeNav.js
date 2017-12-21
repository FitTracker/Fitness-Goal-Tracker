import React, { Component } from "react";

// MATERIAL-UI
import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";
import MapsPersonPin from "material-ui/svg-icons/maps/person-pin";
// ICONS
import IconHourglassEmpty from "material-ui/svg-icons/action/hourglass-empty";
import IconTimer from "material-ui/svg-icons/image/timer";
import IconTimeLapse from "material-ui/svg-icons/image/timelapse";

// COMPONENTS
import TimerComponent from "./TimerComponent/TimerComponent";
import StopwatchComponent from "./StopwatchComponent/StopwatchComponent";
import IntervalComponent from "./IntervalComponent/IntervalComponent";

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
    <Tab icon={<IconHourglassEmpty />} label="Timer">
      <div>
        <TimerComponent
          style={{
            width: "50%",
            margin: "0 auto",
            border: "2px solid #FF9800",
            backgroundColor: "#ffd699"
          }}
        />
      </div>
    </Tab>
    <Tab icon={<IconTimer />} label="Stopwatch">
      <div>
        <StopwatchComponent />
      </div>
    </Tab>
    <Tab icon={<IconTimeLapse />} label="Interval">
      <div>
        <IntervalComponent />
      </div>
    </Tab>
  </Tabs>
);

export default TimeNav;
