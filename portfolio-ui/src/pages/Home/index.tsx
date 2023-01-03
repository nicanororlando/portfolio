import React from "react";
import "./styles.css";
import Social from "fragments/Social";
import Data from "fragments/HomeData";
import { useTheme } from "hooks/useTheme";
import { useLanguage } from "hooks/useLanguage";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section id={theme} className="home pb-5">
      <div className="home__container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
