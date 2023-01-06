import { Hand, Send } from "assets/Svg";
// import { useLanguage } from "hooks/useLanguage";
import React from "react";
// import "./styles.css";

const Data: React.FC = () => {
  // const { language } = useLanguage();

  return (
    <div className="home__data">
      <h1 className="home__title">
        Nicanor Orlando <Hand />
      </h1>
      <h3 className="home__subtitle">Junior Full Stack Developer</h3>
      <p className="home_description">
        I'm creative developer based in Argentina, and I'm very passionate and
        dedicated to my work.
      </p>
      <a href="#contact" className="button button--flex">
        Say hello <Send />
      </a>
    </div>
  );
};

export default Data;
