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
          <div className="pie" key={index}>
            <V.VictoryPie
              standAlone={false}
              animate={{ duration: 1000 }}
              height={150}
              data={[
                { x: "Remaining", y: element.goal_value },
                { x: "Progress", y: this.props.testSteps }
                // {
                //   x: this.props.testSteps,
                //   y: element.goal_value,
                //   label: "steps"
                // },
                // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
              ]}
              labels={d => d.x}
              labelComponent={<V.VictoryLabel dy={30} />}
              style={{
                labels: { fill: "white", fontSize: 12 }
              }}
              // theme={V.VictoryTheme.material}
              colorScale={["navy", "orange"]}
            />
          </div>
        );
    });
    const distGoals = this.props.goals.map((element, index) => {
      if (element.goal_type === "distance")
        return (
          <div className="pie-dist" key={index}>
            {console.log(element.goal_value, this.props.currentStats[0].steps)}
            <V.VictoryPie
              animate={{ duration: 1000 }}
              height={150}
              data={[
                { x: "Goal Distance", y: element.goal_value },
                { x: "Current Distance", y: this.props.testSteps }
                // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
              ]}
              // theme={V.VictoryTheme.material}
              colorScale={["cyan", "gold"]}
            />
          </div>
        );
    });
    return (
      <div>
        <div>
          <AddGoal />
        </div>
        <div className="all-pies">
          <div className="pie-steps">
            Steps:
            {stepGoals}
          </div>
          <div className="distance">
            Distance:
            {distGoals}
          </div>

          {/* </div> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCurrentGoalsAndData })(Goals);
