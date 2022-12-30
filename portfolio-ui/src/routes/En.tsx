import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import Home from "pages/Home";

const En: React.FC = () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/en`} exact component={Home} />
    </Switch>
  );
};

export default En;
