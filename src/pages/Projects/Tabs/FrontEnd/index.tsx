import React from "react";
import Card from "./components/Card";
import Slider from "./components/Slider";
import { useFrontEndProjectsData } from "data/FrontEndData";
import { Container, ContainerOut } from "./styles";

const FrontEnd: React.FC = () => {
  const { projects } = useFrontEndProjectsData();

  return (
    <ContainerOut>
      <Container className="container card-dashboard cl-12 pt-5 pb-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h6 mb-0">{}</h2>
        </div>
        <Slider>
          {projects.length > 0 &&
            projects.map((project) => <Card project={project} />)}
        </Slider>
        <div className="pb-5" />
      </Container>
    </ContainerOut>
  );
};

export default FrontEnd;
