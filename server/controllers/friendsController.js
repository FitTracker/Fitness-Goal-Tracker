module.exports = {
  unfollow: (req, res, next) => {
    req.app
      .get("db")
      .unfollowUser([req.session.passport.user.id, req.body.id])
      .then(goals => {
        res.status(200).json(goals);
      })
      .catch(console.log);
  }
};
