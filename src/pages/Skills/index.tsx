import React, { useState } from "react";
import { useLanguage } from "hooks/useLanguage";
import Frontend from "./Front-Back/frontend";
import Backend from "./Front-Back/backend";
import FrontendCharts from "./Front-Back Charts/frontend";
import BackendCharts from "./Front-Back Charts/backend";
import "./styles.css";

const Skills = () => {
  const { language } = useLanguage();
  const [showCharts, setShowCharts] = useState(true);

  const handleSwitch = () => {
    setShowCharts((curr) => (curr === false ? true : false));
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{language.skills.section_title}</h2>
      <span className="section__subtitle">
        {language.skills.section_subtitle}
      </span>

      <div className="d-flex flex-column justify-content-center">
        <div className="form-check form-switch m-auto mb-3">
          <input
            className="form-check-input color-red"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked={showCharts}
            onChange={handleSwitch}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Show charts
          </label>
        </div>

        {showCharts ? (
          <div className="d-flex flex-row flex-wrap justify-content-center gap-3">
            <FrontendCharts />
            <BackendCharts />
          </div>
        ) : (
          <div className="skills__container container grid">
            <Frontend />
            <Backend />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
