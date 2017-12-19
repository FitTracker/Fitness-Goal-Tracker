import React, { Component } from "react";
import "./Landing.scss";

import woman from "./woman.jpg";

import Paper from "material-ui/Paper";
import BottomNav from "./BottomNav";
import AppBar from "material-ui/AppBar";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="top-nav">
          <AppBar
            style={{
              background: `grey`
            }}
            title="Fit Tracker"
            // cant get it to read sass colors
          />
        </div>
        <div className="splash">
          <div className="splash-main">
            <img className="main" src={woman} alt="main" />
          </div>
        </div>
        <div className="mid-card">
          <h1>FITNESS TRACKER</h1>

          <p className="card-p">All your fitness apps in one place</p>
        </div>
        <div className="middle-container">
          <Paper
            style={{
              height: "auto",
              width: "60%",
              margin: "20",
              textAlign: "center",
              zIndex: "5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
            zDepth={3}
          >
            <h1 className="banner">Challenge yourself and your friends</h1>
          </Paper>
        </div>
        <div>
          <BottomNav />
        </div>
      </div>
    );
  }
}
