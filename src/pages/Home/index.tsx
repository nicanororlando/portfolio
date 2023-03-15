import React from "react";
import Social from "./Social";
import HomeData from "./HomeData";
import ScrollDown from "./ScrollDown";
import { Section } from "./styles";

interface IProps {}

const Home: React.FC = () => {
  return (
    <Section className="home section" id="home">
      <div className="home__container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <HomeData />
        </div>
        <ScrollDown />
      </div>
    </Section>
  );
};

export default Home;
