import NavBar from "components/NavBar";
import React, { useEffect, useState } from "react";
import { useTheme } from "hooks/useTheme";
import Home from "pages/Home";
import About from "pages/About";
import Skills from "pages/Skills";
import Services from "pages/Services";
import Travel from "pages/Travel";
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
    // triggerOnce: true,
  };
  const { ref: refHome, inView: inViewHome } = useInView(options);
  const { ref: refAbout, inView: inViewAbout } = useInView(options);
  const { ref: refSkills, inView: inViewSkills } = useInView(options);
  const { ref: refProjects, inView: inViewProjects } = useInView(options);
  const { ref: refServices, inView: inViewServices } = useInView(options);
  const { ref: refTravel, inView: inViewTravel } = useInView(options);
  const { ref: refContact, inView: inViewContact } = useInView(options);

  useEffect(() => {
    if (inViewHome) setActiveElement("#home");
    if (inViewAbout) setActiveElement("#about");
    if (inViewSkills) setActiveElement("#skills");
    if (inViewProjects) setActiveElement("#projects");
    if (inViewServices) setActiveElement("#services");
    if (inViewTravel) setActiveElement("#travel");
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
    <div id={theme}>
      <NavBar activeElement={activeElement} />
      <main>
        <div className="container">
          <div ref={refHome} className={inViewHome ? "animate" : "opacity-0"}>
            <Home />
          </div>
          <div ref={refAbout} className={inViewAbout ? "animate" : "opacity-0"}>
            <About />
          </div>
          <div
            ref={refSkills}
            className={inViewSkills ? "animate" : "opacity-0"}
          >
            <Skills />
          </div>
          <div
            ref={refProjects}
            className={inViewProjects ? "animate" : "opacity-0"}
          >
            <Projects />
          </div>
          <div
            ref={refServices}
            className={inViewServices ? "animate" : "opacity-0"}
          >
            <Services />
          </div>
          <div
            ref={refTravel}
            className={inViewTravel ? "animate" : "opacity-0"}
          >
            <Travel />
          </div>
          <div
            ref={refContact}
            className={inViewContact ? "animate" : "opacity-0"}
          >
            <Contact />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Default;
