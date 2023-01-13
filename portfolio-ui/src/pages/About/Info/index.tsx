import { useLanguage } from "hooks/useLanguage";
import React from "react";

const Info = () => {
  const { language } = useLanguage();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <h3 className="about__title">{language.about.about_data.experience}</h3>
        <span className="about_subtitle">
          {language.about.about_data.years}
        </span>
      </div>
      <div className="about__box">
        <h3 className="about__title">{language.about.about_data.completed}</h3>
        <span className="about_subtitle">
          {language.about.about_data.proyects_amount}
        </span>
      </div>
      <div className="about__box">
        <h3 className="about__title"></h3>
        <span className="about_subtitle"></span>
      </div>
    </div>
  );
};

export default Info;
