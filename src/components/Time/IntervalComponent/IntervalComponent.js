import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";

const style = {
  marginRight: 20
};

class IntervalComponent extends Component {
  render() {
    return (
      <div>
        <p>Interval Component (under construction)</p>
        <FloatingActionButton style={style}>
          <PlayArrow />
        </FloatingActionButton>
      </div>
    );
  }
}

export default IntervalComponent;
