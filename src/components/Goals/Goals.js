import React, { Component } from "react";
import "./Goals.scss";
import { connect } from "react-redux";
import * as V from "victory";
import { VictoryPie, VictoryLabel } from "victory";

import { getCurrentGoalsAndData } from "../../ducks/reducer.js";
import AddGoal from "../AddGoal/AddGoal";

class Goals extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentGoalsAndData();
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
              { x: "Goal Steps", y: this.props.goals_end },
              { x: "Test Steps cause we get 0 now", y: this.props.testSteps }
              // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
            ]}
            theme={V.VictoryTheme.material}
          />
        </div>
        <div className="pie-two">
          <VictoryPie
            animate={{ duration: 1000 }}
            data={[
              // { x: "Current steps", y: this.props.currentSteps },
              { x: "Goal Steps", y: this.props.goals_end },
              { x: "Test Steps cause we get 0 now", y: this.props.testSteps }
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
              data={[{ y: this.props.goals_end }, { y: this.props.testSteps }]}
            />
          </V.VictoryChart>
          <AddGoal />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCurrentGoalsAndData })(Goals);
