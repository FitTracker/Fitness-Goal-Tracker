import React, { Component } from "react";

import Badges from "../Badges/Badges";
import Friends from "../Friends/Friends";
import Goals from "../Goals/Goals";
import DashProfile from "../DashProfile/DashProfile";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Friends />
        <Goals />
        <div>
          <DashProfile />
          <Badges />
        </div>
      </div>
    );
  }
}
