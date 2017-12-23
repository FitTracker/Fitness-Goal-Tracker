module.exports = {
  editUserProfile: (req, res) => {
    const { firstName, lastName, city, us_state, email, avatarURL } = req.body;

    req.app
      .get("db")
      .addProfileInfo([
        firstName,
        lastName,
        city,
        us_state,
        email,
        avatarURL,
        req.session.passport.user.fitbit_id
      ])
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(() => res.status(500).json());
  },
  getUserProfile: (req, res) => {
    req.app
      .get("db")
      .getUserByFitbitId([req.session.passport.user.fitbit_id])
      .then(user => {
        res.status(200).json(user);
      })
      .catch(console.log);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};