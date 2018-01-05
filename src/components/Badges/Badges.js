import React, { Component } from "react";

import { connect } from "react-redux";
import { getBadges } from "../../ducks/reducer.js";

import BadgeCard from "../BadgeCard/BadgeCard";

class Badges extends Component {
  componentDidMount() {
    this.props.getBadges();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.goals !== nextProps.goals) {
      this.props.getBadges();
    }
  }

  render() {
    const { userBadges, goals } = this.props;

    const badgeDisplay = userBadges.map(badge => (
      <BadgeCard
        className="cards"
        key={Math.random()}
        title={badge.title}
        subtitle={badge.subtitle}
        avatar={badge.avatar}
        // style={{ backgroundColor: "white" }}
      />
    ));

    return (
      <div className="badges-container">
        <h1 className="badges-header">Badges</h1>
        {badgeDisplay}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goals: state.goals,
    userBadges: state.userBadges
  };
}
export default connect(mapStateToProps, { getBadges })(Badges);
