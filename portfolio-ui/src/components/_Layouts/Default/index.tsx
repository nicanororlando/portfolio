import NavBar from "components/NavBar";
import React from "react";
import { useTheme } from "hooks/useTheme";

interface Props {
  children: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div id={theme}>
      <NavBar />
      <main>
        <div className="container mt-100 mt-sm-10">{children}</div>
      </main>
    </div>
  );
};

export default Default;
