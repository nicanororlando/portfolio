import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./styles.css";

const Social: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <a
        href="https://github.com/nicanororlando"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nicanororlando"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.instagram.com/nicanororlando"
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default Social;
