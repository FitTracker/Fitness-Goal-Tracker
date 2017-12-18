import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing/Landing.js";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
);
