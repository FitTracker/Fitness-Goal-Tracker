import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { getFriendsGoals, handleUpvote } from "../../ducks/reducer";
import FriendCard from "../FriendCard/FriendCard";

class Friends extends Component {
  componentDidMount() {
    this.props.getFriendsGoals();
  }

  render() {
    const { friendsGoals } = this.props;
    const goalsDisplay = friendsGoals
      .sort((a, b) => b.upvotes - a.upvotes)
      .map(goal => {
        let units = goal.goal_type === "distance" ? "km" : "steps";
        let startTime = moment(goal.starting_date);
        let endTime = moment(goal.end_date);
        let time = endTime.from(startTime);
        return (
          <FriendCard
            key={Math.random()}
            title={`${goal.first_name} walked ${
              goal.goal_value
            } ${units} ${time}!`}
            avatar={goal.avatar}
            count={goal.upvotes}
            id={goal.goal_id}
            firstName={goal.first_name}
            lastName={goal.last_name}
            city={goal.city}
            state={goal.us_state}
            userID={goal.id}
          />
        );
      });

    return (
      <div className="badges-container">
        <h1>Friends</h1>
        {goalsDisplay}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getFriendsGoals })(Friends);
