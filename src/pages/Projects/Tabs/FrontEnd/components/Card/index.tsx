import React, { useCallback, useState } from "react";
import { FaRegImages } from "react-icons/fa";
import Slider from "./Slider";
import Modal from "./ModalVisualizer";
import { CardContainer } from "./styles";
import { IFrontend } from "models/FrontEnd";

const Card: React.FC<IFrontend> = ({
  id,
  images,
  title,
  description,
  languajeImages,
  linkRedirect,
}) => {
  const [show, setShow] = useState(false);
  // Se crea un link embedido de youtube para mostrar en el slider con los links de los videos que llegan suponiendo que todos son de youtube
  const handleClickProject = useCallback(() => {
    setShow(true);
  }, []);

  const handleClickRedirect = () => {
    window.open(linkRedirect, "_blank");
  };

  return (
    <CardContainer>
      <div className="card border-0">
        <Slider>
          {images.length > 0 ? (
            images.map((image) => {
              return <img src={image} alt={String(id)} />;
            })
          ) : (
            <img
              src="https://www.cdc-carpi.com/wp-content/uploads/2020/12/image-placeholder-400x266.jpg"
              alt={String(id)}
            />
          )}
        </Slider>
        <div className="card_body ">
          <span className="title_body">
            <button
              type="button"
              className="border-0 button_redirect"
              onClick={() => handleClickRedirect()}
            >
              <span>Projeto: {id}</span>
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
  );
};

export default Card;

{
  /* <Modal
  show={show}
  medias={images}
  linkBase={LINK_BASE_YOUTUBE}
  project={String(projectId)}
  onHide={() => setShow(false)}
/> */
}
