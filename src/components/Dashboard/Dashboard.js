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
      color_grey: true,
      color_black: true,
      night_mode: false
    };
  }

  toggleDash() {
    this.setState({ color_grey: !this.state.color_grey });
    this.setState({ color_black: !this.state.color_black });
    this.setState({ night_mode: !this.state.night_mode });
  }

  render() {
    let bgColor = this.state.color_grey ? "#f7f7ff" : "#2C3F43";
    let fontColor = this.state.color_black ? "black" : "white";
    let nightText = this.state.night_mode ? "Day Mode" : "Night Mode";
    return (
      <div
        style={{ backgroundColor: bgColor, color: fontColor }}
        className="dashboard-container"
      >
        <div className="dashboard-rows">
          <div className="dashboard-row1">
            <div>
              <span className="dashboard-today">Today</span>
              <span className="dashboard-date">
                {moment().format("MMMM Do YYYY")}
              </span>
            </div>
            <button type="button" onClick={this.toggleDash.bind(this)}>
              {nightText}
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
