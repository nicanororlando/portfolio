import React, { useEffect, useRef } from "react";
import { useLanguage } from "hooks/useLanguage";
import { FiSend } from "react-icons/fi";
import Typed from "typed.js";
import "./styles.css";

const HomeData: React.FC = () => {
  const { language } = useLanguage();
  const description = useRef(null);

  useEffect(() => {
    let typed = new Typed(description.current, {
      strings: [
        language.home.data.home_subtitle_frontend,
        language.home.data.home_subtitle_backend,
        language.home.data.home_subtitle_fullstack,
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [language]);

  return (
    <div className="home__data mt-3">
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
          {language.home.data.home_subtitle}
        </span>
        <span ref={description} className="home__subtitle-2" />
      </div>
      <p className="home__description animate-left">
        {language.home.data.home_description}
      </p>
      <a href="#contact" className="button button--flex animate-top">
        <p className="mr-10 mb-0">{language.home.data.hello_button}</p>
        <FiSend />
      </a>
    </div>
  );
};

export default HomeData;
