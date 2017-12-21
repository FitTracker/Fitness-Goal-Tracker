import React, { Component } from "react";
import * as V from "victory";
import { VictoryBar } from "victory";

import Badges from "../Badges/Badges";
import Friends from "../Friends/Friends";
import Goals from "../Goals/Goals";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Friends />

        <Goals />
        <Badges />
      </div>
    );
  }
}
