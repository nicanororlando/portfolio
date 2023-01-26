import React from "react";
import { useLanguage } from "hooks/useLanguage";

const Backend = () => {
  const { language } = useLanguage();

  return (
    <div className="skills__content">
      <h3 className="skills__title">{language.skills.backend_title}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">
                {language.skills.levels.intermediate}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Spring Boot</h3>
              <span className="skills__level">
                {language.skills.levels.intermediate}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Nodejs</h3>
              <span className="skills__level">
                {language.skills.levels.basic}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level">
                {language.skills.levels.intermediate}
              </span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">C#</h3>
              <span className="skills__level">
                {language.skills.levels.intermediate}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">.NET</h3>
              <span className="skills__level">
                {language.skills.levels.basic}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">
                {language.skills.levels.basic}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Mongodb</h3>
              <span className="skills__level">
                {language.skills.levels.intermediate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
