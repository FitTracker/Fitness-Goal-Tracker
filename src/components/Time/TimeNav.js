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

const TimeNav = () => (
  <Tabs>
    <Tab icon={<IconHourglassEmpty />} label="Timer">
      <div>
        <TimerComponent />
      </div>
    </Tab>
    <Tab icon={<IconTimer />} label="Stopwatch">
      <div>
        <StopwatchComponent />
      </div>
    </Tab>
    {
      //   <Tab icon={<IconTimeLapse />} label="Interval">
      //   <div>
      //     <h2>Coming soon...</h2>
      //   </div>
      // </Tab>
    }
  </Tabs>
);

export default TimeNav;
