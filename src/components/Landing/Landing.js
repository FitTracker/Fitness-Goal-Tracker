import React, { Component } from "react";

import RaisedButton from "material-ui/RaisedButton";
import woman from "./woman.jpg";
import runner from "./runner.jpg";
import axios from "axios";

import Paper from "material-ui/Paper";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.Login = this.Login.bind(this);
  }

  componentDidMount() {
    axios.get("/api/userInfo").then(response => {
      this.setState({
        name:
          "Welcome, " +
          response.data[0].first_name +
          " " +
          response.data[0].last_name
      });
    });
  }

  Login() {
    window.location.href = "http://localhost:3001/api/fitbit/login";
  }

  logout() {
    axios.get("/api/logout").then(response => response.data);
    window.location.href = "/";
  }
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
            <h1 className="banner">
              Fittr: challenge yourself and your friends
            </h1>
          </div>
          <div className="button-front">
            {this.state.name === "" ? (
              <RaisedButton
                label="Login / Sign up with Fitbit"
                labelposition="before"
                containerElement="label"
                primary={true}
                onClick={() => {
                  this.Login();
                }}
              />
            ) : (
              <div>
                <RaisedButton
                  label="Log Out"
                  onClick={this.logout}
                  labelposition="before"
                  containerElement="label"
                  primary={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
