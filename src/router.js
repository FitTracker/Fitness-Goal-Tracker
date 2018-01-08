import React from "react";
import { Route, Switch } from "react-router-dom";

// COMPONENTS
import Landing from "./components/Landing/Landing.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Time from "./components/Time/Time.js";
import NotFound from "./components/NotFound/NotFound.js";
import AddProfile from "./components/AddProfile/AddProfile";

//FOOTER COMPONENTS
import About from "./components/Footer/About/About";
import Mobile from "./components/Footer/Mobile/Mobile";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/timer" component={Time} />
    <Route path="/create-profile" component={AddProfile} />
    <Route path="/about" component={About} />
    <Route path="/mobile" component={Mobile} />
    <Route path="*" component={NotFound} />
  </Switch>
);
