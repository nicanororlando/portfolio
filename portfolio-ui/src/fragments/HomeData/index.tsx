import { Hand, Send } from "assets/Svg";
import React from "react";
// import "./styles.css";

const Data: React.FC = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Nicanor Orlando <Hand />
      </h1>
      <h3 className="home__subtitle">Web developer</h3>
      <p className="home_description">
        I'm creative designer based in Argentina, and I'm very passionate and
        dedicated to my work.
      </p>
      <a href="#contact" className="button button--flex">
        Say hello <Send />
      </a>
    </div>
  );
};

export default Data;
