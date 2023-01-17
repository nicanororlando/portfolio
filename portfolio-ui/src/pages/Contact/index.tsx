import React from "react";
import { useLanguage } from "hooks/useLanguage";
import Card from "components/Card";
import "./styles.css";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{language.contact.section_title}</h2>
      <span className="section__subtitle">
        {language.contact.section_subtitle}
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{language.contact.h3_title}</h3>

          <div className="contact__info">
            <Card
              cardTitle={language.contact.card_1.title}
              cardData={language.contact.card_1.data}
              cardButton={language.contact.card_1.write_me}
              icon="bx-mail-send"
              href={language.contact.mail}
            />
            <Card
              cardTitle={language.contact.card_2.title}
              cardData={language.contact.card_2.data}
              cardButton={language.contact.card_2.write_me}
              icon="bxl-whatsapp"
              href={language.contact.wpp}
            />
            <Card
              cardTitle={language.contact.card_3.title}
              cardData={language.contact.card_3.data}
              cardButton={language.contact.card_3.write_me}
              icon="bxl-instagram"
              href={language.contact.instagram}
            />
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{language.contact.h3_title}</h3>
          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                {language.contact.form.name}
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder={language.contact.form.name}
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                {language.contact.form.mail}
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder={language.contact.form.mail_placeholder}
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                {language.contact.form.mail}
              </label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact__form-input"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
