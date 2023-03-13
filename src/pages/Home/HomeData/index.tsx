import React from "react";
import { useLanguage } from "hooks/useLanguage";
import { FiSend } from "react-icons/fi";
import "./styles.css";

const HomeData: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="home__data">
      <h3 className="home__hello animate-bottom">
        {language.home.data.hello}
        {/* <Hand /> */}
      </h3>
      <h1 className="home__title animate-right">
        Nicanor Orlando
        {/* <Hand /> */}
      </h1>
      <div className="home__subtitle animate-top">
        <span className="home__subtitle-1">
          {language.home.data.home_subtitle_1}
        </span>
        <span className="home__subtitle-2">
          {language.home.data.home_subtitle_2}
        </span>
      </div>
      <p className="home__description animate-left">
        {language.home.data.home_description}
      </p>
      <a href="#contact" className="button button--flex">
        <p className="mr-10 mb-0">{language.home.data.hello_button}</p>
        <FiSend />
      </a>
    </div>
  );
};

export default HomeData;
