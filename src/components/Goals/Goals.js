import React, { Component } from "react";
import "./Goals.scss";
import axios from "axios";
import * as V from "victory";
import { VictoryPie, VictoryLabel } from "victory";

export default class Goals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSteps: [],
      goals_end: [],
      goals_start: [],
      testSteps: 50000
    };
  }
  componentDidMount() {
    axios
      .get("/api/fitbit/currentdata")
      .then(response => {
        console.log(response);
        this.setState({
          currentSteps: response.data.currentstats[0].steps,
          goals_end: response.data.goals[0].goal_value,
          goals_start: response.data.goals[0].starting_value
        });
        // data being pulled from fitbit users login and set to state, then used to update the charts and graphs
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        This is goals view
        <div className="pie">
          <VictoryPie
            animate={{ duration: 1000 }}
            data={[
              // { x: "Current steps", y: this.state.currentSteps },
              { x: "Goal Steps", y: this.state.goals_end },
              { x: "Test Steps cause we get 0 now", y: this.state.testSteps }
              // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
            ]}
            theme={V.VictoryTheme.material}
          />
        </div>
        <div className="pie-two">
          <VictoryPie
            animate={{ duration: 1000 }}
            data={[
              // { x: "Current steps", y: this.state.currentSteps },
              { x: "Goal Steps", y: this.state.goals_end },
              { x: "Test Steps cause we get 0 now", y: this.state.testSteps }
              // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
            ]}
            colorScale={["pink", "purple"]}
            innerRadius={100}
          />
        </div>
        <div className="bar">
          <V.VictoryChart theme={V.VictoryTheme.material} domainPadding={10}>
            <V.VictoryBar
              style={{ data: { fill: "#c43a31" } }}
              data={[{ y: this.state.goals_end }, { y: this.state.testSteps }]}
            />
          </V.VictoryChart>
        </div>
      </div>
    );
  }
}
