require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const StravaStrategy = require("passport-strava-oauth2").Strategy;
const FitBitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const request = require("request");
let fitbitToken;
let stravaToken;
let stravaId;

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

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// STRAVA STRATEGY

passport.use(
  new StravaStrategy(
    {
      clientID: process.env.STRAVA_CLIENT,
      clientSecret: process.env.STRAVA_SECRET,
      callbackURL: "http://localhost:3001/api/strava/callback"
    },
    getOrCreatUserStrava
  )
);

// FITBIT STRATEGY
passport.use(
  new FitBitStrategy(
    {
      clientID: process.env.FITBIT_CLIENT,
      clientSecret: process.env.FITBIT_SECRET,
      callbackURL: "http://localhost:3001/api/fitbit/callback"
    },
    getOrCreatUserFitbit
  )
);

// testing auth stuff for FITBIT
app.get("/api/fitbit/currentdata", (req, res) => {
  request.get(
    {
      url: `https://api.fitbit.com/1/user/-/profile.json`,
      headers: { Authorization: "Bearer " + fitbitToken },
      json: true
    },
    (error, response, body) => {
      console.log(body);
      res.json(body);
    }
  );
});

app.get("/api/strava/test", (req, res) => {
  request.get(
    {
      url: `https://www.strava.com/api/v3/athletes/${stravaId}/stats`,
      headers: { Authorization: "Bearer " + stravaToken },
      json: true
    },
    (error, response, body) => {
      console.log(req.session);
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
  "/api/fitbit/callback",
  passport.authenticate("fitbit", {
    successRedirect: "http://localhost:3000/dashboard"
  })
);

// STRAVA ENDPOINTS

app.get(
  "/api/strava/login",
  passport.authenticate("strava", {
    scope: ["public"]
  })
);

app.get(
  "/api/strava/callback",
  passport.authenticate("strava", {
    successRedirect: "http://localhost:3000/"
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

// --------------------- Separating for readability

function getOrCreatUserFitbit(
  accessToken,
  refreshToken,
  extraParams,
  profile,
  done
) {
  fitbitToken = accessToken;
  console.log("token", fitbitToken);
  console.log("profile", profile);
  return done(null, profile);
}

function getOrCreatUserStrava(
  accessToken,
  refreshToken,
  extraParams,
  profile,
  done
) {
  stravaId = profile._json.id;
  stravaToken = accessToken;
  console.log("stravaId", stravaId);
  console.log("token", accessToken);
  console.log("profile", profile);
  return done(null, profile);
}
// what is the problem
