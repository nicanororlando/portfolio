import NavBar from "components/NavBar";
import React, { useEffect, useState } from "react";
import { useTheme } from "hooks/useTheme";
import Home from "pages/Home";
import About from "pages/About";
import Skills from "pages/Skills";
import Contact from "pages/Contact";
import Footer from "pages/Footer";
import Projects from "pages/Projects";
import { useInView } from "react-intersection-observer";

interface Props {
  children?: React.ReactNode;
}

const Default: React.FC<Props> = () => {
  const { theme } = useTheme();
  const [activeElement, setActiveElement] = useState("#");

  const options = {
    rootMargin: "-200px",
  };
  const { inView: inViewHome } = useInView(options);
  const { inView: inViewAbout } = useInView(options);
  const { inView: inViewSkills } = useInView(options);
  const { inView: inViewProjects } = useInView(options);
  const { inView: inViewServices } = useInView(options);
  const { inView: inViewTravel } = useInView(options);
  const { inView: inViewContact } = useInView(options);

  useEffect(() => {
    if (inViewHome) setActiveElement("#home");
    if (inViewAbout) setActiveElement("#about");
    if (inViewSkills) setActiveElement("#skills");
    if (inViewProjects) setActiveElement("#projects");
    if (inViewServices) setActiveElement("#services");
    if (inViewContact) setActiveElement("#contact");
  }, [
    inViewAbout,
    inViewContact,
    inViewHome,
    inViewProjects,
    inViewTravel,
    inViewServices,
    inViewSkills,
  ]);

  return (
    <div id={theme} className="overflow-hidden">
      <NavBar activeElement={activeElement} />
      <main className="container">
        <Home />
        <About />
        <Skills />
        <div className="hide-sm">
          <Projects />
        </div>
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Default;
