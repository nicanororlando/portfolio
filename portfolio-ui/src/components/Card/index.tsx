import React from "react";
import "./styles.css";

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
    <div className="card-container">
      <i className={"bx card-icon " + icon}></i>
      <h3 className="card-title">{cardTitle}</h3>
      <span className="card-data">{cardData}</span>
      <a href={href} target="_blank" rel="noreferrer" className="card-button">
        {cardButton} <i className="bx bx-right-arrow-alt button-icon"></i>
      </a>
    </div>
  );
};

export default Card;
