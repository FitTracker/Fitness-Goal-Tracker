require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");

const FitBitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const request = require("request");
let token;

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

passport.use(
  new FitBitStrategy(
    {
      clientID: process.env.FITBIT_CLIENT,
      clientSecret: process.env.FITBIT_SECRET,
      callbackURL: "http://localhost:3001/api/callback"
    },

    getOrCreatUser
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

//testing auth stuff
app.get("/api/test", (req, res) => {
  request.get(
    {
      url: `https://api.fitbit.com/1/user/-/profile.json`,
      headers: { Authorization: "Bearer " + token },
      json: true
    },
    (error, response, body) => {
      console.log(body);
      res.json(body);
    }
  );
});

// Redirect To FITBIT
app.get(
  "/api/fitbit/login",
  passport.authenticate("fitbit", {
    scope: [
      "activity",
      "heartrate",
      "location",
      "nutrition",
      "profile",
      "sleep",
      "social",
      "weight"
    ]
  })
);

app.get(
  "/api/callback",
  passport.authenticate("fitbit", {
    successRedirect: "http://localhost:3000"
  })
);
// CATCH-ALL TO SERVE FRONT END FILES
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

//--------------------- Separating for readability

function getOrCreatUser(accessToken, refreshToken, extraParams, profile, done) {
  token = accessToken;
  return done(null, profile);
}
