import React, { Component } from "react";
import "./Dashboard.scss";
import axios from "axios";
import * as V from "victory";
import { VictoryBar } from "victory";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStats: [],
      goals: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/fitbit/currentdata")
      .then(response => {
        console.log(response);
        this.setState({
          currentStats: response.data.currentstats,
          goals: response.data.goals
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        I am a dashboard{console.log(
          this.state.activity,
          this.state.lifetime,
          this.state.current
        )}{" "}
        <div>
          <p>this is where the rest of stuff will go</p>
        </div>
      </div>
    );
  }
}
