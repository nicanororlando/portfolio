import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Slider from "./components/Slider";
import { Container, ContainerOut } from "./styles";
import { fakeFrontEndProjectsData } from "./FakeData/FrontEndData";
import { IFrontend as IFrontendProjects } from "models/FrontEnd";

const FrontEnd: React.FC = () => {
  const [projects, setProjects] = useState([] as IFrontendProjects[]);

  useEffect(() => {
    setProjects(fakeFrontEndProjectsData);
  }, []);

  return (
    <ContainerOut>
      <Container className="container card-dashboard col-11 cl-md-12 pt-5 pb-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h6 mb-0">Projetos com base no seu resultado</h2>
        </div>
        <div className="col-12">
          <Slider>
            {projects.map((project) => (
              <Card
                id={project.id}
                images={project.images}
                title={project.title}
                languajeImages={project.languajeImages}
                linkRedirect={project.linkRedirect}
              />
            ))}
          </Slider>
        </div>
        <div className="pb-5" />
      </Container>
    </ContainerOut>
  );
};

export default FrontEnd;
