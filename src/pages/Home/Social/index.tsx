import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Social: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <a
        href="https://github.com/nicanororlando"
        style={{ "--i": 8 } as React.CSSProperties}
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nicanororlando"
        style={{ "--i": 9 } as React.CSSProperties}
        className="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.instagram.com/nicanororlando"
        style={{ "--i": 10 } as React.CSSProperties}
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
