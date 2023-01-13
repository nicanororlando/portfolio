import React from "react";
import Social from "./Social";
import HomeData from "./HomeData";
import ScrollDown from "./ScrollDown";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <HomeData />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
