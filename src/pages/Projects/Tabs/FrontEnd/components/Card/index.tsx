import React, { useCallback, useState } from "react";
import { FaRegImages } from "react-icons/fa";
import Modal from "./ModalVisualizer";
import { CardContainer } from "./styles";
import { IFrontendProjects } from "models/FrontEnd";

const Card: React.FC<{ project: IFrontendProjects }> = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClickProject = useCallback(() => {
    setShow(true);
  }, []);

  const handleClickRedirect = () => {
    window.open(project.linkRedirect, "_blank");
  };

  return (
    <>
      <CardContainer>
        <div className="card border-0">
          {project.images.length > 0 ? (
            <img
              src={require(`assets/frontend/${project.images[0]}`)}
              alt={String(project.images[0])}
            />
          ) : (
            <img
              src="https://www.cdc-carpi.com/wp-content/uploads/2020/12/image-placeholder-400x266.jpg"
              alt={String(project.id)}
            />
          )}
          <div className="card_body ">
            <span className="title_body">
              <button
                type="button"
                className="border-0 button_redirect"
                onClick={() => handleClickRedirect()}
              >
                <span>Projeto: {project.id}</span>
              </button>
              <button
                type="button"
                className="border-0 view"
                onClick={() => handleClickProject()}
              >
                <FaRegImages className="icon" />
              </button>
            </span>

            <div className="d-flex gap-3 card_body_items">
              <p>
                Dormitórios <span>{}</span>
              </p>
            </div>
          </div>
        </div>
      </CardContainer>
      <Modal show={show} project={project} onHide={() => setShow(false)} />
    </>
  );
};

export default Card;
