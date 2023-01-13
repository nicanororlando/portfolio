import React from "react";
import { useLanguage } from "hooks/useLanguage";
import Frontend from "./Front-Back/frontend";
import Backend from "./Front-Back/backend";
import "./styles.css";

const Skills = () => {
  const { language } = useLanguage();

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{language.skills.title}</h2>
      <span className="section__subtitle">{language.skills.subtitle}</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
