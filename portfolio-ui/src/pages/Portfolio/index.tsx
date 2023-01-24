import React from "react";
import "./styles.css";
import { useLanguage } from "hooks/useLanguage";
import { useState } from "react";

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => setToggleState(index);

  return (
    <section className="qualification section" id="portfolio">
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
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  Argentina - By myself
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - Present</i>
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
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Argentina - By myself
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  Argentina - By myself
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - Present</i>
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
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Argentina - By myself
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - Present</i>
                </div>
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
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  Argentina - By myself
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - Present</i>
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
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Argentina - By myself
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  Argentina - By myself
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - Present</i>
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

export default Portfolio;
