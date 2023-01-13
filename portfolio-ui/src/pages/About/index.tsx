import { useLanguage } from "hooks/useLanguage";
import React from "react";
import CV from "../../assets/my-resume.pdf";
import Info from "./Info";
import { Files } from "assets/Svg";

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{language.about.section_title}</h2>
      <span className="section__subtitle">{language.about.section_title}</span>
      <div className="about__container container grid">
        <div className="about__img"></div>
        <div className="about__data">
          <Info />
          <p className="about__description">
            {language.about.about_data.about_description}
          </p>
          <a download="" href={CV} className="button button--flex">
            {language.about.about_data.download}
            <Files />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
