import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import SearchBar from "material-ui-search-bar";

import { getFriendsGoals, searchFriends } from "../../ducks/reducer";

import FriendCard from "../FriendCard/FriendCard";
import FriendSearchCard from "../FriendSearchCard/FriendSearchCard";

class Friends extends Component {
  componentDidMount() {
    this.props.getFriendsGoals();
  }

  render() {
    const { friendsGoals, searchResults } = this.props;

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

    const searchDisplay =
      searchResults.length > 0 &&
      searchResults.map(profile => {
        let friendIds = friendsGoals.map(friend => friend.id);
        let following = friendIds.includes(profile.id);

        return (
          <FriendSearchCard
            key={Math.random()}
            title={`${profile.first_name} ${profile.last_name}`}
            avatar={profile.avatar}
            city={profile.city}
            state={profile.us_state}
            userID={profile.id}
            firstName={profile.first_name}
            lastName={profile.last_name}
            following={following}
          />
        );
      });
    return (
      <div className="badges-container">
        <h1>Friends</h1>
        <SearchBar
          onChange={value => this.props.searchFriends(value)}
          style={{ margin: "0 auto", width: "95%" }}
          onRequestSearch={() => console.log("search")}
        />
        {searchDisplay || goalsDisplay}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendsGoals: state.friendsGoals,
    searchResults: state.searchResults
  };
}

export default connect(mapStateToProps, { getFriendsGoals, searchFriends })(
  Friends
);
