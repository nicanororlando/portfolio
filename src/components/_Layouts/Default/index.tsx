import NavBar from "components/NavBar";
import React from "react";
import { useTheme } from "hooks/useTheme";
import Home from "pages/Home";
import About from "pages/About";
import Skills from "pages/Skills";
import Services from "pages/Services";
import Qualification from "pages/Qualification";
import Contact from "pages/Contact";
import Footer from "pages/Footer";
import Projects from "pages/Projects";

interface Props {
  children: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div id={theme}>
      <NavBar />
      <main>
        <div className="container">
          {/* {children} */}
          <Home />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Qualification />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Default;
