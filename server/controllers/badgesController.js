module.exports = {
  getUsersCurrentBadges: (req, res) => {
    req.app
      .get("db")
      .getUserBadges([req.session.passport.user.id])
      .then(badges => {
        res.status(200).json(badges);
      })
      .catch(console.log);
  }
};
