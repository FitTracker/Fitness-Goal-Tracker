module.exports = {
  getUsersCurrentBadges: (req, res) => {
    const ID = req.session.passport ? req.session.passport.user.id : 3;
    req.app
      .get("db")
      .getUserBadges([ID])
      .then(badges => {
        res.status(200).json(badges);
      })
      .catch(console.log);
  }
};
