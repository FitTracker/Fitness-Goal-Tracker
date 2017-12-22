import React, { Component } from "react";
import "./Goals.scss";
import { Card } from "material-ui/Card";
import { connect } from "react-redux";
import * as V from "victory";

import { getCurrentGoalsAndData, updateGoals } from "../../ducks/reducer.js";
import AddGoal from "../AddGoal/AddGoal";

class Goals extends Component {
  componentDidMount() {
    this.props.getCurrentGoalsAndData();
  }

  render() {
    const stepGoals = this.props.goals.map((element, index) => {
      if (
        element.goal_type === "steps" &&
        element.goal_value !== this.props.testSteps
      )
        return (
          // <div className="pie" key={index}>
          <Card key={index} className="pie">
            <V.VictoryPie
              animate={{ duration: 1000 }}
              height={200}
              data={[
                { x: "Goal Steps", y: element.goal_value },
                { x: "Current", y: this.props.testSteps }
                // {
              ]}
              // labels={d => d.x}
              // labelComponent={<V.VictoryLabel dy={30} />}
              theme={V.VictoryTheme.material}
            />
          </Card>
          // </div>
        );
    });
    const distGoals = this.props.goals.map((element, index) => {
      if (
        element.goal_type === "distance" &&
        element.goal_value !== this.props.testSteps
      )
        return (
          <Card key={index} className="pie">
            {console.log(element.goal_value, this.props.currentStats[0].steps)}

            <V.VictoryPie
              // standalone={false}
              animate={{ duration: 500, onLoad: { duration: 500 } }}
              // style={{ labels: { fontSize: 12, fill: "white" } }}
              // innerRadius={68}
              // labelRadius={100}
              height={200}
              data={[
                { x: "Goal Distance", y: element.goal_value },
                { x: "Current Distance", y: this.props.testSteps }
                // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
              ]}
              theme={V.VictoryTheme.material}
            />
            {/* <V.VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={200}
                y={200}
                text={element.goal_type}
              /> */}
          </Card>
        );
    });
    return (
      <div>
        <div className="goal">
          <AddGoal />
        </div>
        <div className="all-pies">
          {stepGoals}
          {distGoals}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getCurrentGoalsAndData })(Goals);
