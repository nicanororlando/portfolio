import React from "react";
import { Scroll } from "assets/Svg";
import "./styles.css";
import { useLanguage } from "hooks/useLanguage";

const ScrollDown: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <Scroll />
        <span className="home__scroll-name">{language.home.scrollDown}</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
