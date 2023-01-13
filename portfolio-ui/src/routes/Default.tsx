import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import Home from "pages/Home";
import About from "pages/About";

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/about`} exact component={About} />
    </Switch>
  );
};

export default routes;
