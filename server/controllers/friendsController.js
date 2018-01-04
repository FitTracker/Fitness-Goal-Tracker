module.exports = {
  unfollow: (req, res, next) => {
    const ID = req.session.passport ? req.session.passport.user.id : 3;
    req.app
      .get("db")
      .unfollowUser([ID, req.body.id])
      .then(goals => {
        res.status(200).json(goals);
      })
      .catch(console.log);
  },
  searchFriends: (req, res, next) => {
    req.app
      .get("db")
      .friendsSearch([req.params.name])
      .then(results => {
        res.status(200).json(results);
      })
      .catch(console.log);
  },
  follow: (req, res, next) => {
    const ID = req.session.passport ? req.session.passport.user.id : 3;
    req.app
      .get("db")
      .followUser([ID, req.body.id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(console.log);
  }
};
