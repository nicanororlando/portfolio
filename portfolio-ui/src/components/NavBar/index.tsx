import React, { useState } from "react";
import "./styles.css";
import { useTheme } from "hooks/useTheme";
import Dropdown from "components/Dropdown";

// interface Props {
//   children: React.ReactNode;
// }

const NavBar: React.FC = () => {
  const [ToggleMenu, showMenu] = useState(false);
  const { themeChecked, handleTheme } = useTheme();

  return (
    <div className="d-flex flex-column p-10">
      <header className="header">
        <nav className="header__nav container">
          <a href="index.html" className="nav__logo">
            Nicanor
          </a>
          <div className={ToggleMenu ? "nav__menu show-menu" : "nav__menu"}>
            <div className="container nav__list-container">
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
                <li className="nav__item mr-20">
                  <a href="#contact" className="nav__link">
                    <i className="uil uil-message nav__icon"></i> Contact
                  </a>
                </li>
                <Dropdown options={["English", "Spanish"]} />
                <div className="toggle-switch nav__item ml--10">
                  <label>
                    <input
                      type="checkbox"
                      checked={!themeChecked}
                      onChange={handleTheme}
                    />
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
    </div>
  );
};

export default NavBar;
