import React from "react";
import { Container, Foot } from "./styles";
import { useLanguage } from "hooks/useLanguage";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Tooltip } from "react-tooltip";

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Foot>
      <Container>
        <h1 className="title">
          Portfolio <small className="text-small">v.2.2</small>
        </h1>
        <h6 className="col-4 mx-auto small text-center">
          {language.footer.page_languages}
        </h6>
        <ul className="list">
          <li>
            <a href="#about" className="link">
              {language.navBar.about}
            </a>
          </li>
          <li className="hide-sm">
            <a href="#projects" className="link">
              {language.navBar.projects}
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              {language.navBar.contact}
            </a>
          </li>
        </ul>
        <div className="social">
          <a
            href="https://github.com/nicanororlando"
            className="social-icon github"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nicanororlando"
            className="social-icon linkedin"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/nicanororlando"
            className="social-icon instagram"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <AiFillInstagram />
          </a>
          <Tooltip anchorSelect=".github" place="bottom">
            Github
          </Tooltip>
          <Tooltip anchorSelect=".linkedin" place="bottom">
            Linkedin
          </Tooltip>
          <Tooltip anchorSelect=".instagram" place="bottom">
            Instagram
          </Tooltip>
        </div>
        <span className="copy">&#169; CanorCode. All rigths reserved</span>
      </Container>
    </Foot>
  );
};

export default Footer;
