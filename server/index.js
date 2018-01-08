require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const FitBitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const request = require("request");
let fitbitToken;

// IMPORT CONTROLLERS

const goalsController = require("./controllers/goalsController");
const friendsController = require("./controllers/friendsController");
const profileController = require("./controllers/profileController");
const badgesController = require("./controllers/badgesController");

// BEGIN SERVER

const app = express();

// SERVE FRONTEND

app.use(express.static(`${__dirname}/../build`));

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

// GOALS ENDPOINTS

app.post("/api/goals", goalsController.createGoal);
app.get("/api/friendgoals", goalsController.friendGoals);
app.post("/api/upvotes", goalsController.addUpvote);
app.post("/api/completedgoal", goalsController.addComplGoal);

// FRIENDS ENDPOINTS

app.post("/api/unfollow", friendsController.unfollow);
app.post("/api/follow", friendsController.follow);
app.get("/api/search/:name", friendsController.searchFriends);
app.get("/api/followers", friendsController.getFollowers);

// PROFILE ENDPOINTS

app.put("/api/profileInfo", profileController.editUserProfile);
app.get("/api/userInfo", profileController.getUserProfile);
app.get("/api/logout", profileController.logout);

// BADGES ENDPOINTS

app.get("/api/badges", badgesController.getUsersCurrentBadges);

// FITBIT ENDPOINTS

app.get("/api/fitbit/currentdata", getCurrentFitbitData);

// FITBIT STRATEGY AND LOGIN

passport.use(
  new FitBitStrategy(
    {
      clientID: process.env.FITBIT_CLIENT,
      clientSecret: process.env.FITBIT_SECRET,
      callbackURL: "/api/fitbit/callback"
    },
    getOrCreatUserFitbit
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

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
    successRedirect: "/dashboard"
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

// --------------------- Separating for readability---------------------------

function getOrCreatUserFitbit(
  accessToken,
  refreshToken,
  extraParams,
  profile,
  done
) {
  fitbitToken = accessToken;
  app
    .get("db")
    .getUserByFitbitId([profile.id])
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .createUserFromFitbitLogin([
            profile.id,
            profile._json.user.firstName,
            profile._json.user.lastName,
            profile._json.user.avatar,
            profile._json.user.dateOfBirth,
            profile._json.user.height,
            profile._json.user.weight
          ])
          .then(created => {
            app
              .get("db")
              .addWelcomeBadge([created[0].id])
              .then(results => {
                return done(null, created[0]);
              })
              .catch(console.log);
          })
          .catch(console.log);
      } else {
        return done(null, response[0]);
      }
    });
}

function getCurrentFitbitData(req, res) {
  request.get(
    {
      url: `https://api.fitbit.com/1/user/-/activities.json`,
      headers: { Authorization: "Bearer " + fitbitToken },
      json: true
    },
    (error, response, body) => {
      if (error) {
        res.status(500).json("we messed up");
      }
      app
        .get("db")
        .addCurrentDataToLifetimeStatsTable([
          Math.floor(body.lifetime.total.distance),
          body.lifetime.total.steps,
          req.session.passport.user.id
        ])
        .then(currentstats => {
          app
            .get("db")
            .getAllGoalsForUser([req.session.passport.user.id])
            .then(goals => {
              res.status(200).json({ currentstats, goals });
            });
        })
        .catch(console.log);
    }
  );
}
