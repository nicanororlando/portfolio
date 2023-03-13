import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Container } from "./styles.ts";

function ContentCompact({ title, images, disabled }) {
  return (
    <>
      <motion.h3
        layoutId="title"
        className="title"
        style={{ opacity: disabled ? 0.2 : 1 }}
      >
        <div className="title-comp">{title}</div>
      </motion.h3>
      <motion.div layoutId="image">
        {images &&
          images.map((image) => (
            <img
              src={require(`assets/${image}`)}
              alt={image}
              width="28px"
              className="mt-2"
            />
          ))}
      </motion.div>
    </>
  );
}

function Content({ title, description, images, linkRedirect, disabled }) {
  const handleClickRedirect = () => {
    window.open(linkRedirect, "_blank");
  };

  return (
    <>
      <motion.h1
        layoutId="title"
        className="title"
        style={{ opacity: disabled ? 0.2 : 1 }}
      >
        <div>{title}</div>
      </motion.h1>
      <motion.div layoutId="description" className="description">
        {description &&
          description.map((p) => <p className="description">{p}</p>)}
      </motion.div>
      <motion.div layoutId="foot" className="foot">
        <div>
          {images &&
            images.map((image) => (
              <img
                src={require(`assets/${image}`)}
                alt={image}
                width="28px"
                className="me-2"
              />
            ))}
        </div>
        {linkRedirect !== "" && (
          <button
            type="button"
            className="button_redirect"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Open link"
            disabled={!linkRedirect !== null}
            onClick={() => handleClickRedirect()}
          >
            Visit
          </button>
        )}
      </motion.div>
    </>
  );
}

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className="card expanded exp-card"
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </motion.div>
      <motion.p
        className="card expanded secondary"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: "6rem" }}
        animate={{ opacity: 1, top: "3rem" }}
      >
        X
      </motion.p>
    </>
  );
}

function CompactCard({ children, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </motion.div>
  );
}

function DateButton({ card, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandCard = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className="card-container">
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} card={card}>
            <Content
              title={card.title}
              description={card.description}
              images={card.images}
              disabled={disabled}
            />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandCard} disabled={disabled} card={card}>
            <ContentCompact
              title={card.title}
              images={card.images}
              disabled={disabled}
            />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

const AnimatedCards = ({ cards }) => {
  const [expandedCard, setCollapsedCard] = useState();

  return (
    <Container>
      <div className="cards">
        {cards &&
          cards.map((card, index) => (
            <DateButton
              key={index.toString()}
              card={card}
              disabled={
                expandedCard !== card.title && expandedCard !== undefined
              }
              onExpand={() => setCollapsedCard(card.title)}
              onCollapse={() => setCollapsedCard()}
            />
          ))}
      </div>
    </Container>
  );
};

export default AnimatedCards;
