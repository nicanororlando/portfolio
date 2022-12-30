import React, { FC, ComponentType, useMemo } from "react";
import { RouteProps as ReactDOMRouterProps } from "react-router-dom";
import Default from "components/_Layouts/Default";

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const { user } = useAuth();

  const Layout = useMemo(() => {
    return isPrivate ? Default : Default;
  }, [isPrivate]);

  return (
    <Layout>
      <Component />
    </Layout>
    // <ReactDOMRoute
    // {...rest}
    // render={({ location }) => {
    //   let lang = location.pathname.slice(1, 3);
    //   if (lang !== "/en" && lang !== "/es") {
    //     lang = "";
    //   }

    // return isPrivate === !!user ? (
    //   <Layout>
    //     <Component />
    //   </Layout>
    // ) : (
    //   <Redirect
    //     to={{
    //       pathname: isPrivate ? `${lang}/` : `${lang}/dashboard`,
    //       state: location,
    //     }}
    //   />
    // );
    // }}
    // />
  );
};

export default Route;
