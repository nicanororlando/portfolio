import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import Home from "pages/Home";

const routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path={`http://nicanororlando.github.io/portfolio`}
        exact
        component={Home}
      />
    </Switch>
  );
};

export default routes;
