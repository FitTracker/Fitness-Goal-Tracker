import React, { Component } from "react";
import "./Goals.scss";
import { Card } from "material-ui/Card";
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
          // <div className="pie" key={index}>
          <Card key={index} className="pie">
            <V.VictoryPie
              animate={{ duration: 1000 }}
              height={200}
              data={[
                { x: "Remaining", y: element.goal_value },
                { x: "Progress", y: this.props.testSteps }
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
      if (element.goal_type === "distance")
        return (
          <Card key={index} className="pie">
            {console.log(element.goal_value, this.props.currentStats[0].steps)}
            <V.VictoryPie
              animate={{ duration: 1000 }}
              height={200}
              data={[
                { x: "Goal Distance", y: element.goal_value },
                { x: "Current Distance", y: this.props.testSteps }
                // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
              ]}
              theme={V.VictoryTheme.material}
            />
          </Card>
        );
    });
    return (
      <div>
        <div className="all-pies">
          <AddGoal />
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
