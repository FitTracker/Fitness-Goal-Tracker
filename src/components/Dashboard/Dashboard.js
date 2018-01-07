import React, { Component } from "react";

import Badges from "../Badges/Badges";
import Friends from "../Friends/Friends";
import Goals from "../Goals/Goals";
import DashProfile from "../DashProfile/DashProfile";
import moment from "moment";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-rows">
          <div className="dashboard-row1">
            <p>
              <span>Today</span> {moment().format("MMMM Do YYYY")}
            </p>
          </div>
          <div className="dashboard-cols">
            <div className="dashboard-col-1">
              <DashProfile />
              <Friends />
            </div>
            <div className="dashboard-col-2">
              <Goals />
            </div>
            <div className="dashboard-col-3">
              <Badges />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
