import React, { Component } from "react";
import "./Landing.scss";
import RaisedButton from "material-ui/RaisedButton";
import woman from "./woman.jpg";
import runner from "./runner.jpg";

import Paper from "material-ui/Paper";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div
          className="middle-container"
          style={{
            backgroundImage: `url(${runner})`
          }}
        >
          <div>
            <h1 className="banner">Challenge yourself and your friends</h1>
          </div>
          <div>
            <RaisedButton
              label="Login with Fitbit"
              labelposition="before"
              containerElement="label"
              primary={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
