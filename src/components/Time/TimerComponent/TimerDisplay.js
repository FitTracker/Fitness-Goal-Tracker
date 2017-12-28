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
        <div>
          <iframe
            width="100%"
            height="150"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/375915629&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
          />
          <h1>Time is up</h1>
        </div>
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
