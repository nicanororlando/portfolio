import { Hand, Send } from "assets/Svg";
import { useLanguage } from "hooks/useLanguage";
import React from "react";
import "./styles.css";

const HomeData: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="home__data">
      <h1 className="home__title">
        Nicanor Orlando <Hand />
      </h1>
      <h3 className="home__subtitle">{language.home.data.home_subtitle}</h3>
      <p className="home__description">{language.home.data.home_description}</p>
      <a href="#contact" className="button button--flex">
        {language.home.data.hello_button} <Send />
      </a>
    </div>
  );
};

export default HomeData;
