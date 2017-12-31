import React, { Component } from "react";
import "./Goals.scss";
import { Card } from "material-ui/Card";
import { connect } from "react-redux";
import moment from "moment";
import * as V from "victory";
import FlatButton from "material-ui/FlatButton";

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
    this.props.completeGoal();
  }

  render() {
    const currentSteps =
      this.props.currentStats[0] && this.props.currentStats[0].steps;
    const distanceKm =
      this.props.currentStats[0] && this.props.currentStats[0].distance_km;

    const stepGoals =
      this.props.goals.length > 0 &&
      this.props.goals.map((element, index) => {
        let endVal = Number(element.goal_value - element.starting_value);

        if (element.goal_type === "steps" && element.goal_value > currentSteps)
          return (
            <Card key={index} className="pie">
              <h3>{`You have walked ${(
                currentSteps - element.starting_value
              ).toLocaleString()} steps out of your goal of ${endVal.toLocaleString()}`}</h3>
              <V.VictoryPie
                animate={{ duration: 1000 }}
                height={200}
                data={[
                  { x: "Goal Steps", y: Number(element.goal_value) },
                  { x: "Current", y: this.props.currentStats[0].steps }
                ]}
                theme={V.VictoryTheme.material}
                colorScale="blue"
              />
              <p>
                {" "}
                You have {moment(element.end_date).fromNow(true)} left to
                accomplish this goal!
              </p>
            </Card>
          );
        else if (
          element.goal_type === "steps" &&
          element.goal_value <= currentSteps
        )
          return (
            <BadgeCard
              key={index}
              title={element.goal_type}
              subtitle={`you have completed your goal to walk  ${Number(
                endVal
              ).toLocaleString()} steps by ${moment(element.end_date).format(
                "MMMM Do, YY"
              )}`}
              avatar={
                "https://static0.fitbit.com/images/badges_new/300px/badge_daily_steps30k.png"
              }
              onLoad={completeGoal(element.goal_id)}
              // ^ this is supposed to set goal completion status to true in db
            />
          );
      });
    const distGoals =
      this.props.goals.length > 0 &&
      this.props.goals.map((element, index) => {
        let endVal = Number(element.goal_value - element.starting_value);

        if (element.goal_type === "distance" && element.goal_value > distanceKm)
          return (
            <Card key={index} className="pie">
              <h3>{`You have walked ${(
                distanceKm - element.starting_value
              ).toLocaleString()} km out of your goal of ${endVal.toLocaleString()}`}</h3>
              <V.VictoryPie
                // innerRadius={68} // style={{ labels: { fontSize: 12, fill: "white" } }}
                // labelRadius={100}
                height={200}
                data={[
                  {
                    x: `Goal Distance: ${element.goal_value}`,
                    y: Number(element.goal_value),
                    label: "Goal"
                  },
                  {
                    x: `Current Distance: ${
                      this.props.currentStats[0].distance_km
                    }`,
                    y: this.props.currentStats[0].distance_km,
                    label: "Progress"
                  }
                ]}
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
          element.goal_value <= distanceKm
        )
          return (
            <BadgeCard
              key={index}
              title={element.goal_type}
              subtitle={`you have completed your goal to walk a distance of ${endVal.toLocaleString()} km by ${moment(
                element.end_date
              ).format("MMMM Do, YY")}`}
              avatar={
                "https://static0.fitbit.com/images/badges_new/300px/badge_daily_steps30k.png"
              }
              onLoad={completeGoal(element.goal_id)}
              // ^ this is supposed to set goal completion status to true in db
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
    // goal_id: state.goal_id,
    userBadges: state.userBadges,
    currentStats: state.currentStats
  };
}

export default connect(mapStateToProps, {
  getCurrentGoalsAndData,
  completeGoal,
  getBadges
})(Goals);
