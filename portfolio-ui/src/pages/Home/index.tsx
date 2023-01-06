import React from "react";
import "./styles.css";
import Social from "fragments/Social";
import Data from "fragments/HomeData";

const Home: React.FC = () => {
  return (
    <section className="home pb-5">
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
