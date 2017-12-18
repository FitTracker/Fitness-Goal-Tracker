require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
// IMPORT CONTROLLERS
// BEGIN SERVER
const app = express();
// SERVE FRONTEND
// app.use(express.static(`${__dirname}/../build`));
// INITIALIZE SESSION
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
// CONNECT TO DATABASE
massive(process.env.DATABASE_URL)
  .then(db => app.set("db", db))
  .catch(console.log);
app.use(json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
// passport.use(
//   new Auth0Strategy(
//     {
//       domain: process.env.AUTH0_DOMAIN,
//       clientID: process.env.AUTH0_CLIENTID,
//       clientSecret: process.env.AUTH0_CLIENTSECRET,
//       callbackURL: "/api/login"
//     },
//     getOrCreatUser
//   )
// );
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
// CATCH-ALL TO SERVE FRONT END FILES
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
