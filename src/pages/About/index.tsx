import React from "react";
import { useLanguage } from "hooks/useLanguage";
import CV from "../../assets/my-resume.pdf";
import Info from "./Info";
import { CgFileDocument } from "react-icons/cg";
// import { Files } from "assets/Svg";
import "./styles.css";

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="about section" id="about">
      <h2 className="section__title animate-bottom">
        {language.about.section_title}
      </h2>
      <span className="section__subtitle animate-bottom">
        {language.about.section_subtitle}
      </span>
      <div className="about__container container grid animate-right">
        <div className="about__img"></div>
        <div className="about__data">
          <Info />
          <p className="about__description animate-left">
            {language.about.about_data.about_description}
          </p>
          <a download="" href={CV} className="button button--flex">
            <p className="mr-10 mb-0">{language.about.about_data.download}</p>
            <CgFileDocument width="2rem" height="2rem" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
