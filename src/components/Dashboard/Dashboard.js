import React, { Component } from "react";

import Badges from "../Badges/Badges";
import Friends from "../Friends/Friends";
import Goals from "../Goals/Goals";
import DashProfile from "../DashProfile/DashProfile";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-container">
          <div className="response-dash">
            <div>
              <DashProfile />
              <Badges />
            </div>
            <Friends />
          </div>
          <Goals />
        </div>
      </div>
    );
  }
}
