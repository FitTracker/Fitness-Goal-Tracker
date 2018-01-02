import React from "react";
import * as timerStates from "../timerStates";

const leftPad = val => {
  if (val < 10) return `0${val}`;

  return `${val}`;
};

const TimerDisplay = props => (
  <div>
    <div>
      {props.timerState === timerStates.COMPLETE && (
        <div>
          <h1>Time is up</h1>
        </div>
      )}
    </div>
    <div>
      <h2 className="text-center">
        {`${leftPad(props.currentTime.get("hours"))}:${leftPad(
          props.currentTime.get("minutes")
        )}:${leftPad(props.currentTime.get("seconds"))}`}
      </h2>
    </div>
  </div>
);

export default TimerDisplay;
