import React, { Component } from "react";
import "./Goals.scss";

import { connect } from "react-redux";
import * as V from "victory";

import { getCurrentGoalsAndData } from "../../ducks/reducer.js";
import AddGoal from "../AddGoal/AddGoal";

class Goals extends Component {
  componentDidMount() {
    this.props.getCurrentGoalsAndData();
  }

  render() {
    const stepGoals = this.props.goals.map((element, index) => {
      if (element.goal_type === "steps")
        return (
          <div className="pie-steps" key={index}>
            <V.VictoryPie
              animate={{ duration: 1000 }}
              height={150}
              data={[
                { x: "Goal Steps", y: element.goal_value },
                { x: "Test Steps cause we get 0 now", y: this.props.testSteps }
                // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
              ]}
              theme={V.VictoryTheme.material}
            />
          </div>
        );
    });
    const distGoals = this.props.goals.map((element, index) => {
      if (element.goal_type === "distance")
        return (
          <div className="pie-steps" key={index}>
            {console.log(element.goal_value, this.props.goals)}
            <V.VictoryPie
              animate={{ duration: 1000 }}
              height={150}
              data={[
                { x: "Goal Distance", y: element.goal_value },
                { x: "Current Distance", y: this.props.testSteps }
                // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
              ]}
              theme={V.VictoryTheme.material}
            />
          </div>
        );
    });
    return (
      <div className="all-pies">
        <div>
          Steps:
          {stepGoals}
        </div>
        <div>
          Distance:
          {distGoals}
        </div>
        <div>
          <AddGoal />
        </div>
        {/* </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCurrentGoalsAndData })(Goals);
