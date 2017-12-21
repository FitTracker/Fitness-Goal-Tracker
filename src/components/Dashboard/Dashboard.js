import React, { Component } from "react";
import * as V from "victory";
import { VictoryBar } from "victory";

import Badges from "../Badges/Badges";
import Goals from "../Goals/Goals";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Badges />
<<<<<<< HEAD
        <Badges />
=======
        <Goals />
>>>>>>> 276ce28ff1fd8899c206d3ca8ee9658ea15f7680
        <Badges />
      </div>
    );
  }
}
