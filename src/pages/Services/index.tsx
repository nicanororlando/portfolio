import React from "react";
import { useLanguage } from "hooks/useLanguage";
import "./styles.css";
import { useState } from "react";

const Services: React.FC = () => {
  const { language } = useLanguage();
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: number) => setToggleState(index);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{language.services.section_title}</h2>
      <span className="section__subtitle">
        {language.services.section_subtitle}
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <i className="uil uil-web-grid services__icon"></i>
          <h3 className="services__title">
            {language.services.service_1.services_title_1} <br />
            {language.services.service_1.services_title_2}
          </h3>

          <span className="services__button" onClick={() => toggleTab(1)}>
            <i className="uil uil-arrow-right services__button-icon">
              {language.services.view_more}
            </i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">
                {language.services.service_1.modal.title}
              </h3>

              <p className="services__modal-description">
                {language.services.service_1.modal.description}
              </p>

              <h6 className="services__grid-title">
                {language.services.service_1.modal.grid_title}
              </h6>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_1.modal.ul.p1}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_1.modal.ul.p2}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_1.modal.ul.p3}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">
            {language.services.service_2.services_title_1} <br />
            {language.services.service_2.services_title_2}
          </h3>

          <span className="services__button" onClick={() => toggleTab(2)}>
            <i className="uil uil-arrow-right services__button-icon">
              {language.services.view_more}
            </i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">
                {language.services.service_2.modal.title}
              </h3>

              <p className="services__modal-description">
                {language.services.service_2.modal.description}
              </p>

              <h6 className="services__grid-title">
                {language.services.service_2.modal.grid_title}
              </h6>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_2.modal.ul.p1}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_2.modal.ul.p2}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_2.modal.ul.p3}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-brackets-curly services__icon"></i>
          <h3 className="services__title">
            {language.services.service_3.services_title_1} <br />
            {language.services.service_3.services_title_2}
          </h3>

          <span className="services__button" onClick={() => toggleTab(3)}>
            <i className="uil uil-arrow-right services__button-icon">
              {language.services.view_more}
            </i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">
                {language.services.service_3.modal.title}
              </h3>

              <p className="services__modal-description">
                {language.services.service_3.modal.description}
              </p>

              <h6 className="services__grid-title">
                {language.services.service_3.modal.grid_title}
              </h6>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_3.modal.ul.p1}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {language.services.service_3.modal.ul.p2}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
