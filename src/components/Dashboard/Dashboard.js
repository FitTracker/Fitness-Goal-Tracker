import React, { Component } from "react";
import "./Dashboard.scss";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/fitbit/currentdata")
      .then(response => {
        console.log(response);
        this.setState({
          activity: response
        });
      })
      .catch(console.log);
  }

  render() {
    return <div> I am a dashboard{console.log(this.state.activity)} </div>;
  }
}
