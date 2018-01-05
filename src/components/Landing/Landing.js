import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";

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
      <div className="landing">
        <div className="landing-info">
          <h1>Fittr</h1>
          <p>Set goals, achieve them, become a better you.</p>
          <p>Join us.</p>
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
                  onLoad={(window.location.href = "/dashboard")}
                />
              </div>
            )}
          </div>
        </div>
        <div className="crossfade">
          <figure />
          <figure />
          <figure />
          <figure />
          <figure />
        </div>
      </div>
    );
  }
}
