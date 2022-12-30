import NavBar from "components/NavBar";
import React from "react";
// import { useLocation } from "react-router-dom";

// import api from '~/services/api';
// import { useAuth } from '~/hooks/Auth';

interface Props {
  children: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => {
  // const { signOut } = useAuth();
  // const location = useLocation();

  // useEffect(() => {
  //   api.get('sessions/check-login').catch(() => {
  //     signOut();
  //   });
  // }, [signOut, location.pathname]);

  return (
    <>
      <NavBar>{children}</NavBar>
    </>
  );
};

export default Default;
