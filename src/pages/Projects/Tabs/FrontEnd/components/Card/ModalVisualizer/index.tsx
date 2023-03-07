import React from "react";

import Slider from "./Slider";

import { Modal } from "./styles";
import { IFrontendProjects } from "models/FrontEnd";
import ImageZoom from "./ImgZoom";
import { useLanguage } from "hooks/useLanguage";

interface IModalVisualizerProps {
  show: boolean;
  project: IFrontendProjects;
  onHide: () => void;
}

const ModalVisualizer: React.FC<IModalVisualizerProps> = ({
  show,
  project,
  onHide,
}) => {
  const { language } = useLanguage();

  const handleClickRedirect = () => {
    window.open(project.linkRedirect, "_blank");
  };

  return (
    <Modal show={show} onHide={onHide} close size="xl">
      <Modal.Header className="border-0" closeButton>
        <b>Projeto: {project.title}</b>
      </Modal.Header>
      <Modal.Body className="border-0">
        <div className="row border-0">
          <Slider>
            {project.images.length > 0 ? (
              project.images.map((image) => (
                <ImageZoom
                  src={require(`assets/frontend/${image}`)}
                  alt={String(image)}
                />
              ))
            ) : (
              <ImageZoom
                src="https://www.cdc-carpi.com/wp-content/uploads/2020/12/image-placeholder-400x266.jpg"
                alt={String(project)}
              />
            )}
          </Slider>
        </div>
        <div className="mt-3 small">{project.description}</div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="buttons-group">
          <button
            type="button"
            className="me-2"
            onClick={handleClickRedirect}
            disabled={!project.linkRedirect}
          >
            {language.projects.btn_visit}
          </button>
          <button type="button" className="me-2" onClick={onHide}>
            {language.projects.btn_close}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalVisualizer;
