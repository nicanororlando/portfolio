import React from "react";
import { Switch, Route } from "react-router-dom";

import Default from "./Default";
import En from "./En";
import Es from "./Es";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/en`} component={En} />
      <Route path={`${process.env.PUBLIC_URL}/es`} component={Es} />
      <Route path={`${process.env.PUBLIC_URL}/`} component={Default} />
    </Switch>
  );
};

export default Routes;
