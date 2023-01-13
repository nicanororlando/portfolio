import NavBar from "components/NavBar";
import React from "react";
import { useTheme } from "hooks/useTheme";
import Home from "pages/Home";
import About from "pages/About";

interface Props {
  children: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div id={theme}>
      <NavBar />
      <main>
        <div className="container mt-100 mt-sm-10">
          {/* {children} */}
          <Home />
          <About />
        </div>
      </main>
    </div>
  );
};

export default Default;
