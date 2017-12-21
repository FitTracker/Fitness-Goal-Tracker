import React, { Component } from "react";
import * as V from "victory";
import { VictoryBar } from "victory";

import Badges from "../Badges/Badges";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Badges />
        <Badges />
        <Badges />
      </div>
    );
  }
}
