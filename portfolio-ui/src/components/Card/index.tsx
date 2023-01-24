import React from "react";
import { Container } from "./styles";

interface Info {
  cardTitle: string;
  cardData: string;
  cardButton: string;
  icon: string;
  href: string;
}

const Card: React.FC<Info> = ({
  cardTitle,
  cardData,
  cardButton,
  icon,
  href,
}) => {
  return (
    <Container>
      <i className={"bx card-icon " + icon}></i>
      <h3 className="card-title">{cardTitle}</h3>
      <span className="card-data">{cardData}</span>
      <a href={href} target="_blank" rel="noreferrer" className="card-button">
        {cardButton} <i className="bx bx-right-arrow-alt button-icon"></i>
      </a>
    </Container>
  );
};

export default Card;
