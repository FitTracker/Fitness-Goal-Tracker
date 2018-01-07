import React, { Component } from "react";

import Badges from "../Badges/Badges";
import Friends from "../Friends/Friends";
import Goals from "../Goals/Goals";
import DashProfile from "../DashProfile/DashProfile";
import moment from "moment";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color_grey: true
    };
  }

  toggleDash() {
    this.setState({ color_grey: !this.state.color_grey });
  }

  render() {
    let bgColor = this.state.color_grey ? "#dddbf1" : "#2C3F43";
    return (
      <div style={{ backgroundColor: bgColor }} className="dashboard-container">
        <div className="dashboard-rows">
          <div className="dashboard-row1">
            <p>
              <span>Today</span> {moment().format("MMMM Do YYYY")}
            </p>
            <button type="button" onClick={this.toggleDash.bind(this)}>
              Toggle Night Mode
            </button>
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
