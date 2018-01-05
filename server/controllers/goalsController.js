module.exports = {
  createGoal: (req, res, next) => {
    const ID = req.session.passport ? req.session.passport.user.id : 3;
    req.app
      .get("db")
      .getLatestFitbitLifetimeStats([ID])
      .then(stats => {
        req.app
          .get("db")
          .createNewGoal([
            ID,
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
                  res.status(201).json(goals);
                })
                .catch(console.log);
            } else {
              res.status(201).json(goals);
            }
          })
          .catch(error => {
            console.log(error);
            res.status(500).json(error);
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  },
  friendGoals: (req, res, next) => {
    const ID = req.session.passport ? req.session.passport.user.id : 3;
    req.app
      .get("db")
      .getFriendsGoals([ID])
      .then(goals => {
        res.status(200).json(goals);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  },
  addUpvote: (req, res, next) => {
    const ID = req.session.passport ? req.session.passport.user.id : 3;
    req.app
      .get("db")
      .addUpvote([req.body.id, ID])
      .then(goals => {
        res.status(200).json(goals);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  },
  addComplGoal: (req, res, next) => {
    const ID = req.session.passport ? req.session.passport.user.id : 3;
    req.app
      .get("db")
      .addCompletedGoal([req.body.goal_id, ID])
      .then(goals => {
        if (goals.length === 1) {
          req.app
            .get("db")
            .addFirstCompletionBadge([ID])
            .then(badges => {
              res.status(200).json(badges);
            })
            .catch(error => {
              console.log(error);
              res.status(500).json(error);
            });
        } else {
          req.app
            .get("db")
            .getUserBadges([ID])
            .then(badges => {
              res.status(200).json(badges);
            })
            .catch(error => {
              console.log(error);
              res.status(500).json(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  }
};
