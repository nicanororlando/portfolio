import React from "react";
import { Container, ContainerOut } from "./styles";
import AnimatedCards from "../../../../components/AnimatedCards";
import { useBackEndProjectsData } from "data/BackEndData";

const BackEnd: React.FC = () => {
  const { projects } = useBackEndProjectsData();

  return (
    <ContainerOut>
      <Container className="container card-dashboard col-12 pt-5 pb-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <AnimatedCards cards={projects} />
        </div>
        <div className="pb-5" />
      </Container>
    </ContainerOut>
  );
};

export default BackEnd;
