import React, { Component } from "react";
import { connect } from "react-redux";

import { getBadges } from "../../ducks/reducer.js";

import BadgeCard from "../BadgeCard/BadgeCard";

class Badges extends Component {
  componentDidMount() {
    this.props.getBadges();
  }

  render() {
    console.log(this.props);
    const { userBadges } = this.props;
    const badgeDisplay = userBadges.map(badge => (
      <BadgeCard
        key={Math.random()}
        title={badge.title}
        subtitle={badge.subtitle}
        avatar={badge.avatar}
      />
    ));

    return <div className="badges-container">{badgeDisplay}</div>;
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getBadges })(Badges);
