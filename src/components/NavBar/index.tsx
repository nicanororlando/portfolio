/* eslint-disable react/style-prop-object */
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "hooks/useTheme";
import Dropdown from "components/Dropdown";
import { useLanguage } from "hooks/useLanguage";
import { Container, Header, Nav, NavMenu, NavList } from "./styles";
import DarkLightToggler from "components/DarkLightToggler";

interface IProps {
  activeElement: string;
}

const NavBar: React.FC<IProps> = ({ activeElement }) => {
  const [ToggleMenu, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const { themeChecked, handleTheme } = useTheme();
  const { language, handleSelectIdiom, idiom } = useLanguage();

  useEffect(() => {
    setActiveNav(activeElement);
  }, [activeElement]);

  const onSelectOption = useCallback(
    (idiom: string) => {
      handleSelectIdiom(idiom);
    },
    [handleSelectIdiom]
  );

  return (
    <Container className="d-flex flex-column p-10">
      <Header>
        <Nav className="container">
          {/* <a href="/portfolio" className="nav__logo">
            Nica Orlando
          </a> */}
          <NavMenu active={ToggleMenu}>
            <NavList className="container">
              <ul className="nav__list">
                <li style={{ "--i": 1 } as React.CSSProperties}>
                  <a
                    href="#home"
                    className={
                      activeNav === "#home"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => setActiveNav("#home")}
                  >
                    <i className="uil uil-estate nav__icon"></i>
                    <div>{language.navBar.home}</div>
                  </a>
                </li>
                <li style={{ "--i": 2 } as React.CSSProperties}>
                  <a
                    href="#about"
                    className={
                      activeNav === "#about"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => setActiveNav("#about")}
                  >
                    <i className="uil uil-user nav__icon"></i>
                    <div>{language.navBar.about}</div>
                  </a>
                </li>
                <li style={{ "--i": 3 } as React.CSSProperties}>
                  <a
                    href="#skills"
                    className={
                      activeNav === "#skills"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => setActiveNav("#skills")}
                  >
                    <i className="uil uil-file-alt nav__icon"></i>
                    <div>{language.navBar.skills}</div>
                  </a>
                </li>
                <li style={{ "--i": 4 } as React.CSSProperties}>
                  <a
                    href="#projects"
                    className={
                      activeNav === "#projects"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => setActiveNav("#projects")}
                  >
                    <i className="uil uil-briefcase-alt nav__icon"></i>
                    <div>{language.navBar.projects}</div>
                  </a>
                </li>
                <li
                  style={{ "--i": 5 } as React.CSSProperties}
                  className="hide-sm"
                >
                  <a
                    href="#services"
                    className={
                      activeNav === "#services"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => setActiveNav("#services")}
                  >
                    <i className="uil uil-briefcase-alt nav__icon"></i>
                    <div>{language.navBar.services}</div>
                  </a>
                </li>
                <li style={{ "--i": 6 } as React.CSSProperties}>
                  <a
                    href="#travel"
                    className={
                      activeNav === "#travel"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => setActiveNav("#travel")}
                  >
                    <i className="uil uil-scenery nav__icon"></i>
                    <div>{language.navBar.travel}</div>
                  </a>
                </li>
                <li
                  style={{ "--i": 7 } as React.CSSProperties}
                  className="mr-20"
                >
                  <a
                    href="#contact"
                    className={
                      activeNav === "#contact"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => setActiveNav("#contact")}
                  >
                    <i className="uil uil-message nav__icon"></i>
                    <div>{language.navBar.contact}</div>
                  </a>
                </li>
                <Dropdown
                  options={["es", "en"]}
                  onSelect={onSelectOption}
                  value={idiom}
                />
                <DarkLightToggler
                  className="hide-sm ml--10"
                  checked={themeChecked}
                  onChange={handleTheme}
                />
              </ul>
              <div className="d-flex flex-row justify-content-between">
                <DarkLightToggler
                  className="toggler ml--10"
                  checked={themeChecked}
                  onChange={handleTheme}
                />
                {/* <Dropdown
                  options={["es", "en"]}
                  onSelect={onSelectOption}
                  value={idiom}
                /> */}
                <i
                  className="uil uil-times nav__close"
                  onClick={() => showMenu(!ToggleMenu)}
                ></i>
              </div>
            </NavList>
          </NavMenu>

          <div className="nav__toggle" onClick={() => showMenu(!ToggleMenu)}>
            <i className="uil uil-apps"></i>
          </div>
        </Nav>
      </Header>
    </Container>
  );
};

export default NavBar;
