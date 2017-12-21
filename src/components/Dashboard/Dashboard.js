import React, { Component } from "react";
import * as V from "victory";
import { VictoryBar } from "victory";

import Badges from "../Badges/Badges";
import Friends from "../Friends/Friends";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Friends />
        <Badges />
        <Badges />
      </div>
    );
  }
}
