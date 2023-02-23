import React, { FC, ComponentType, useMemo } from "react";
import Default from "components/_Layouts/Default";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps,
  // Redirect,
} from "react-router-dom";

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const Layout = useMemo(() => {
    return isPrivate ? Default : Default;
  }, [isPrivate]);

  return (
    <ReactDOMRoute
      render={({ location }) => {
        let lang = location.pathname.slice(11, 13);

        if (lang !== "en" && lang !== "es") {
          lang = "en";
        }

        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export default Route;
