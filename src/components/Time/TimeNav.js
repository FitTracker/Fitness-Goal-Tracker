import React from "react";

// MATERIAL-UI
import { Tabs, Tab } from "material-ui/Tabs";

// ICONS
import IconHourglassEmpty from "material-ui/svg-icons/action/hourglass-empty";
import IconTimer from "material-ui/svg-icons/image/timer";
// import IconTimeLapse from "material-ui/svg-icons/image/timelapse";

// COMPONENTS
import TimerComponent from "./TimerComponent/TimerComponent";
import StopwatchComponent from "./StopwatchComponent/StopwatchComponent";

const styles = {
  backgroundColor: "#2F2F2F"
};

const TimeNav = () => (
  <Tabs>
    <Tab style={styles} icon={<IconHourglassEmpty />} label="Timer">
      <div>
        <TimerComponent />
      </div>
    </Tab>
    <Tab style={styles} icon={<IconTimer />} label="Stopwatch">
      <div>
        <StopwatchComponent />
      </div>
    </Tab>
  </Tabs>
);

export default TimeNav;
