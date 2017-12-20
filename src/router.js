import React from "react";
import { Route, Switch } from "react-router-dom";

// COMPONENTS
import Landing from "./components/Landing/Landing.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Badges from "./components/Badges/Badges.js";
import Friends from "./components/Friends/Friends.js";
import Goals from "./components/Goals/Goals.js";
import Time from "./components/Time/Time.js";
import NotFound from "./components/NotFound/NotFound.js";
import AddProfile from "./components/AddProfile/AddProfile";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/friends" component={Friends} />
    <Route path="/goals" component={Goals} />
    <Route path="/badges" component={Badges} />
    <Route path="/time" component={Time} />
    <Route path="/create-profile" component={AddProfile} />
    <Route path="*" component={NotFound} />
  </Switch>
);
