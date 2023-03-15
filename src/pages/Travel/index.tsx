import React from "react";
import "./styles.css";
import { useLanguage } from "hooks/useLanguage";
import { useState } from "react";

const Travel: React.FC = () => {
  const { language } = useLanguage();
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index: number) => setToggleState(index);

  return (
    <section className="qualification section" id="travel">
      <h2 className="section__title">{language.portfolio.section_title}</h2>
      <span className="section__subtitle">
        {language.portfolio.section_subtitle}
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {language.portfolio.education.first.title}
                </h3>
                <span className="qualification__subtitle">
                  {language.portfolio.education.first.subtitle}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                    {language.portfolio.education.first.date}
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {language.portfolio.education.second.title}
                </h3>
                <span className="qualification__subtitle">
                  {language.portfolio.education.second.subtitle}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                    {language.portfolio.education.second.date}
                  </i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {language.portfolio.education.third.title}
                </h3>
                <span className="qualification__subtitle">
                  {language.portfolio.education.third.subtitle}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                    {language.portfolio.education.third.date}
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {language.portfolio.experience.first.title}
                </h3>
                <span className="qualification__subtitle">
                  {language.portfolio.experience.first.subtitle}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                    {language.portfolio.experience.first.date}
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {language.portfolio.experience.second.title}
                </h3>
                <span className="qualification__subtitle">
                  {language.portfolio.experience.second.subtitle}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                    {language.portfolio.experience.second.date}
                  </i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {language.portfolio.experience.third.title}
                </h3>
                <span className="qualification__subtitle">
                  {language.portfolio.experience.third.subtitle}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                    {language.portfolio.experience.third.date}
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
