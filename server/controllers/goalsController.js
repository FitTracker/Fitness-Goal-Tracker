module.exports = {
  createGoal: (req, res, next) => {
    req.app
      .get("db")
      .getLatestFitbitLifetimeStats([req.session.passport.user.id])
      .then(stats => {
        req.app
          .get("db")
          .createNewGoal([
            req.session.passport.user.id,
            req.body.goalType,
            req.body.goalType === "distance"
              ? Number(stats[0].distance_km) + req.body.goalAmount
              : Number(stats[0].steps) + req.body.goalAmount,
            req.body.goalType === "distance"
              ? Number(stats[0].distance_km)
              : Number(stats[0].steps),
            req.body.goalStartDate,
            req.body.goalEndDate
          ])
          .then(goals => {
            if (goals.length === 1) {
              req.app
                .get("db")
                .addFirstGoalBadge([goals[0].user_id])
                .then(badges => {
                  res.status(200).json(goals);
                })
                .catch(console.log);
            } else {
              res.status(200).json(goals);
            }
          })
          .catch(console.log);
      })
      .catch(console.log);
  },
  friendGoals: (req, res, next) => {
    req.app
      .get("db")
      .getFriendsGoals([req.session.passport.user.id])
      .then(goals => {
        res.status(200).json(goals);
      })
      .catch(console.log);
  },
  addUpvote: (req, res, next) => {
    req.app
      .get("db")
      .addUpvote([req.body.id, req.session.passport.user.id])
      .then(goals => {
        res.status(200).json(goals);
      });
  },
  addComplGoal: (req, res, next) => {
    console.log("hit hit hit hit ");
    req.app
      .get("db")
      .addCompletedGoal([req.body.goal_id])
      .then(goals => {
        res.status(200).json(goals);
      })
      .catch(console.log);
  }
};
