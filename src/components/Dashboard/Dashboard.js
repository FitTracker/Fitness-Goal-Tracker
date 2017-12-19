import React, { Component } from "react";
import "./Dashboard.scss";
import axios from "axios";
import * as V from "victory";
import { VictoryBar } from "victory";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: [],
      lifetime: [],
      current: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/fitbit/currentdata")
      .then(response => {
        console.log(response);
        this.setState({
          activity: response,
          lifetime: response.data.lifetime.total.caloriesOut,
          current: response.data.lifetime.tracker.caloriesOut
        });
      })
      .catch(console.log);
  }
  render() {
    const data = [
      {
        lifetime: this.state.lifetime,
        current: this.state.current
      }
    ];
    return (
      <div>
        I am a dashboard{console.log(
          this.state.activity,
          this.state.lifetime,
          this.state.current
        )}{" "}
        <div>
          <VictoryBar data={data} x="lifetime" y="current" />
        </div>
      </div>
    );
  }
}
