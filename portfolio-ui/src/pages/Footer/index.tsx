import React from "react";
import { Container, Foot } from "./styles";
import { useLanguage } from "hooks/useLanguage";

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Foot>
      <Container>
        <h1 className="title">Nicanor</h1>
        <ul className="list">
          <li>
            <a href="#about" className="link">
              {language.navBar.about}
            </a>
          </li>
          <li>
            <a href="#portfolio" className="link">
              {language.navBar.portfolio}
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
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nicanororlando"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/nicanororlando"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>
        <span className="copy">&#169; CanorCode. All rigths reserved</span>
      </Container>
    </Foot>
  );
};

export default Footer;
