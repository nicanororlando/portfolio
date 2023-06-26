import { useLanguage } from "hooks/useLanguage";
import React from "react";
import "./styles.css";

const Info = () => {
  const { language } = useLanguage();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">
          {language.about.about_data.box.exp_title}
        </h3>
        <span className="about_subtitle">
          {new Date().getFullYear() - 2022}
          {" + "}
          {language.about.about_data.box.exp_subtitle}
        </span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">
          {language.about.about_data.box.completed_title}
        </h3>
        <span className="about_subtitle">
          {language.about.about_data.box.completed_subtitle}
        </span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">
          {language.about.about_data.box.support_title}
        </h3>
        <span className="about_subtitle">
          {language.about.about_data.box.support_subtitle}
        </span>
      </div>
    </div>
  );
};

export default Info;
