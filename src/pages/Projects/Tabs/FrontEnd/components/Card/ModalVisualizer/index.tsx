import React, { useEffect, useLayoutEffect, useRef } from "react";

import Slider from "./Slider";

import { Modal } from "./styles";
import { IFrontendProjects } from "models/FrontEnd";
import ImageZoom from "./ImgZoom";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let zoomLevel = 1;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const delta = Math.max(-1, Math.min(1, event.deltaY));
      const zoomStep = 0.1;

      if (delta < 0) {
        zoomLevel += zoomStep;
      } else {
        zoomLevel -= zoomStep;
      }

      if (zoomLevel < 1) {
        zoomLevel = 1;
      }

      if (container)
        container.querySelector("img")!.style.transform = `scale(${zoomLevel})`;
    };

    container?.addEventListener("wheel", handleWheel);

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
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
                // <div className="ImageContainer" ref={containerRef}>
                //   <img
                //     src={require(`assets/frontend/${image}`)}
                //     alt={String(image)}
                //   />
                // </div>
                // ))
                <ImageZoom
                  src="https://www.cdc-carpi.com/wp-content/uploads/2020/12/image-placeholder-400x266.jpg"
                  alt={String(project)}
                />
              )}
            </Slider>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="buttons-group">
            <button type="button" className="btn-cancel me-2" onClick={onHide}>
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalVisualizer;
