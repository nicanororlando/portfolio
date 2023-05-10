import { useLanguage } from "hooks/useLanguage";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Card from "components/Card";
import { Container, Content, Info, Section } from "./styles";
import { FiSend } from "react-icons/fi";

const FORM_INITIAL = {
  name: "",
  email: "",
  project: "",
};

interface IMsg {
  class: string;
  msg: string;
}

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formMsg, setFormMsg] = useState<IMsg>();
  const formRef = useRef<HTMLFormElement>(null);
  const [formValue, setFormValue] = useState(FORM_INITIAL);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { name, email, project } = formValue;

  const handleClear = () => {
    setFormValue(FORM_INITIAL);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && email && project) {
      emailjs
        .sendForm(
          "service_vfg3u5r",
          "template_o4o8kdh",
          formRef.current as HTMLFormElement,
          "1l3sWdyLzHRhcmwkT"
        )
        .then(
          (result) => {
            setFormMsg({
              class: "success",
              msg: language.contact.form.form_msg.success,
            });
          },
          (error) => {
            setFormMsg({
              class: "error",
              msg: language.contact.form.form_msg.API_Error,
            });
          }
        );
    } else {
      setFormMsg({
        class: "error",
        msg: language.contact.form.form_msg.fields_error,
      });
    }

    handleClear();
  };

  return (
    <Section className="contact section" id="contact">
      <h2 className="section__title">{language.contact.section_title}</h2>
      <span className="section__subtitle">
        {language.contact.section_subtitle}
      </span>

      <Container className="container grid">
        <Content>
          <h3 className="contact__title">{language.contact.h3_title}</h3>

          <Info>
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
          </Info>
        </Content>

        <Content>
          <h3 className="contact__title">{language.contact.h3_title_form}</h3>
          <form ref={formRef} onSubmit={sendEmail} className="form" id="form">
            <div className="form-div">
              <label className="form-tag">{language.contact.form.name}</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-input"
                placeholder={language.contact.form.name_placeholder}
                onChange={handleChange}
              />
            </div>
            <div className="form-div">
              <label className="form-tag">{language.contact.form.mail}</label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-input"
                placeholder={language.contact.form.mail_placeholder}
                onChange={handleChange}
              />
            </div>
            <div className="form-div form-area">
              <label className="form-tag">
                {language.contact.form.project}
              </label>
              <textarea
                name="project"
                value={project}
                className="form-input"
                placeholder={language.contact.form.project_placeholder}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="button button--flex">
              <p className="mr-10 mb-0">{language.home.data.hello_button}</p>
              <FiSend width="30px" />
            </button>
            {formMsg && <p className={formMsg.class}>{formMsg.msg}</p>}
          </form>
        </Content>
      </Container>
    </Section>
  );
};

export default Contact;
