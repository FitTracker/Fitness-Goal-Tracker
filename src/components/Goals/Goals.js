import React, { Component } from "react";
import "./Goals.scss";
import { Card } from "material-ui/Card";
import { connect } from "react-redux";
import moment from "moment";
import * as V from "victory";

import {
  getCurrentGoalsAndData,
  completeGoal,
  getBadges
} from "../../ducks/reducer.js";

import AddGoal from "../AddGoal/AddGoal";
import BadgeCard from "../BadgeCard/BadgeCard";

class Goals extends Component {
  componentDidMount() {
    this.props.getCurrentGoalsAndData();
    this.props.getBadges();
  }

  render() {
    console.log(this.props);
    const stepGoals =
      this.props.goals.length > 0 &&
      this.props.goals.map((element, index) => {
        if (
          element.goal_type === "steps" &&
          element.goal_value < this.props.testSteps
        )
          return (
            <Card key={index} className="pie">
              <h3>{`You have walked ${
                this.props.testSteps
              } km out of your goal of ${element.goal_value}`}</h3>
              <V.VictoryPie
                animate={{ duration: 1000 }}
                height={200}
                data={[
                  { x: "Goal Steps", y: Number(element.goal_value) },
                  { x: "Current", y: this.props.testSteps }
                ]}
                theme={V.VictoryTheme.material}
                colorScale="blue"
              />
              <p>
                {" "}
                You have {moment(element.end_date).fromNow(true)} left to
                accomplish this goal!{" "}
              </p>
            </Card>
          );
        else if (
          element.goal_type === "steps" &&
          element.goal_value >= this.props.testSteps
        )
          return (
            <BadgeCard
              key={index}
              title={element.goal_type}
              subtitle={`you have completed your goal to walk  ${
                element.goal_value
              }  steps`}
              avatar={
                "https://static0.fitbit.com/images/badges_new/300px/badge_daily_steps30k.png"
              }
              // onClick={this.props.completeGoal(element.goal_id)}
            />
          );
        // </div>
      });
    const distGoals =
      this.props.goals.length > 0 &&
      this.props.goals.map((element, index) => {
        if (
          element.goal_type === "distance" &&
          element.goal_value != this.props.testSteps
        )
          return (
            <Card key={index} className="pie">
              <h3>{`You have walked ${
                this.props.testSteps
              } km out of your goal of ${element.goal_value}`}</h3>
              <V.VictoryPie
                // innerRadius={68} // style={{ labels: { fontSize: 12, fill: "white" } }}
                // labelRadius={100}
                height={200}
                data={
                  [
                    {
                      x: `Goal Distance: ${element.goal_value}`,
                      y: Number(element.goal_value),
                      label: "Goal"
                    },
                    {
                      x: `Current Distance: ${this.props.testSteps}`,
                      y: this.props.testSteps,
                      label: "Progress"
                    }
                  ]
                  // added test steps since we dont have access to actual fitbit user who would bother to walk and update current steps in db
                }
                theme={V.VictoryTheme.material}
                colorScale="blue"
                cornerRadius={10}
                innerRadius={25}
                labelRadius={60}
                padAngle={2}
              />
              <p>
                {" "}
                You have {moment(element.end_date).fromNow(true)} left to
                accomplish this goal!{" "}
              </p>
            </Card>
          );
        else if (
          element.goal_type === "distance" &&
          element.goal_value >= this.props.testSteps
        )
          return (
            <BadgeCard
              key={index}
              title={element.goal_type}
              subtitle={`you have completed your goal to walk a distance of ${
                element.goal_value
              }  km`}
              avatar={
                "https://static0.fitbit.com/images/badges_new/300px/badge_daily_steps30k.png"
              }
            />
          );
      });
    return (
      <div className="goals-container">
        <h1> Goals </h1>
        <div className="all-pies">
          {stepGoals}
          {distGoals}
          <div className="goal">
            <AddGoal />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goals: state.goals,
    testSteps: state.testSteps,
    goal_id: state.goal_id,
    userBadges: state.userBadges
  };
}

export default connect(mapStateToProps, {
  getCurrentGoalsAndData,
  completeGoal,
  getBadges
})(Goals);
