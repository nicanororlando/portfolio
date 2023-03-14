import React from "react";
import { useLanguage } from "hooks/useLanguage";
import CV from "../../assets/my-resume.pdf";
import Info from "./Info";
import { CgFileDocument } from "react-icons/cg";
// import { Files } from "assets/Svg";
import { MdElderly } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
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
          <p className="m-0 animate-left">
            {language.about.about_data.about_description_1}
          </p>
          <p className="m-0 animate-left">
            {language.about.about_data.about_description_2}
          </p>
          <p className="m-0 animate-left">
            {language.about.about_data.about_description_3}
          </p>
          <div className="d-flex flew-row mt-3 mb-4 animate-left">
            <span className="me-5">
              <MdElderly />
              <div>{language.about.about_data.age}</div>
              <h5>{language.about.about_data.age_number}</h5>
            </span>
            <span>
              <BsPersonWorkspace />
              <div>{language.about.about_data.work}</div>
              <h6 className="mt-05">{language.about.about_data.work_status}</h6>
            </span>
          </div>

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
