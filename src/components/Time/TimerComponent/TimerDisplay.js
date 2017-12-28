import React from "react";
import * as timerStates from "../timerStates";

const leftPad = val => {
  if (val < 10) return `0${val}`;

  return `${val}`;
};

const IntervalDisplay = props => (
  <div>
    <div className="center-block">
      {props.timerState === timerStates.COMPLETE && (
        // <iframe
        //   className="center-block youtube-responsive-width"
        //   height="315"
        //   src="https://www.youtube.com/embed/nrAgK0S9hx4?autoplay=1&start=104&controls=0&showinfo=0"
        // />
        <h1>Time is up</h1>
      )}
    </div>
    <div className="row">
      <h2 className="text-center">
        {`${leftPad(props.currentTime.get("hours"))}:${leftPad(
          props.currentTime.get("minutes")
        )}:${leftPad(props.currentTime.get("seconds"))}`}
      </h2>
    </div>
  </div>
);

export default IntervalDisplay;
