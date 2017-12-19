import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing/Landing.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
