import React, { useState } from "react";
import "./styles.css";

interface Props {
  children: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ children }) => {
  const [ToggleMenu, showMenu] = useState(false);

  return (
    <div className="container d-flex flex-column p-10">
      <header className="header">
        <nav className="header__nav container">
          <a href="index.html" className="nav__logo">
            Nicanor
          </a>
          <div className={ToggleMenu ? "nav__menu show-menu" : "nav__menu"}>
            <div className="container">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    <i className="uil uil-estate nav__icon"></i> Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="uil uil-user nav__icon"></i> About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <i className="uil uil-file-alt nav__icon"></i> Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#services" className="nav__link">
                    <i className="uil uil-briefcase-alt nav__icon"></i> Services
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="uil uil-message nav__icon"></i> Contact
                  </a>
                </li>
                <div className="toggle-switch">
                  <label>
                    <input type="checkbox" />
                    <span className="slider" />
                  </label>
                </div>
              </ul>
              <i
                className="uil uil-times nav__close"
                onClick={() => showMenu(!ToggleMenu)}
              ></i>
            </div>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!ToggleMenu)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
      <main className="mt-100 mt-sm-10">{children}</main>
    </div>
  );
};

export default NavBar;
