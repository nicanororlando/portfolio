import React from "react";
import { useLanguage } from "hooks/useLanguage";

const Frontend = () => {
  const { language } = useLanguage();

  return (
    <div className="skills__content">
      <h3 className="skills__title">{language.skills.frontend_title}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">
                {language.skills.levels.professional}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">
                {language.skills.levels.advanced}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">
                {language.skills.levels.professional}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">
                {language.skills.levels.professional}
              </span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">
                {language.skills.levels.advanced}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">
                {language.skills.levels.advanced}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Reactjs</h3>
              <span className="skills__level">
                {language.skills.levels.professional}
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Angularjs</h3>
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

export default Frontend;
