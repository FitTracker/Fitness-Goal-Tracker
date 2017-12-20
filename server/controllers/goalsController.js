module.exports = {
  createGoal: (req, res, next) => {
    req.app
      .get("db")
      .getLatestFitbitLifetimeStats([req.session.passport.user.id])
      .then(stats => {
        console.log(stats);
        req.app
          .get("db")
          .createNewGoal([
            req.session.passport.user.id,
            req.body.goalType,
            req.body.goalType === "distance"
              ? Number(stats[0].distance_km) + req.body.goalAmount
              : stats[0].steps + req.body.goalAmount,
            req.body.goalType === "distance"
              ? stats[0].distance_km
              : stats[0].steps,
            req.body.goalStartDate,
            req.body.goalEndDate
          ])
          .then(goals => {
            res.status(200).json(goals);
          })
          .catch(console.log);
      })
      .catch(console.log);
  }
};
