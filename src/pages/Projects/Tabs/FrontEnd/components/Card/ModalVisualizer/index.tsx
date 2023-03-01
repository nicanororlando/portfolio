import React from 'react';

import Slider from './Slider';

import { Modal } from './styles';

interface IMedias {
  source: string;
  title: string;
  description: string;
}

interface IModalVisualizerProps {
  show: boolean;
  medias: IMedias[];
  project: string;
  linkBase: string;
  onHide: () => void;
}

const ModalVisualizer: React.FC<IModalVisualizerProps> = ({
  show,
  medias,
  project,
  linkBase,
  onHide,
}) => {
  return (
    <>
      <Modal show={show} onHide={onHide} close size="xl">
        <Modal.Header className="border-0" closeButton>
          <b>Projeto: {project}</b>
        </Modal.Header>
        <Modal.Body className="border-0">
          <div className="row border-0">
            <Slider>
              {/* Esta solucion esta escrita suponiendo que los links de los videos siempre vendran y perteneceran a la plataforma de youtube */}
              {medias.length > 0 ? (
                medias.map((media) => {
                  return media.source.includes('jpg') ? (
                    <img src={media.source} alt={String(project)} />
                  ) : (
                    <iframe
                      style={{
                        height: '244',
                      }}
                      src={linkBase + media.source.split('=')[1].split('&')[0]}
                      title={String(project)}
                      allowFullScreen
                    />
                  );
                })
              ) : (
                <img
                  src="https://www.cdc-carpi.com/wp-content/uploads/2020/12/image-placeholder-400x266.jpg"
                  alt={String(project)}
                />
              )}
              {/* Solucion anterior */}
              {/* {medias[0].source.split('.')[
                medias[0].source.split('.').length - 1
              ] === 'jpg' ? (
                medias.map((media) =>
                  media.source === '' ? (
                    <img
                      src="https://www.cdc-carpi.com/wp-content/uploads/2020/12/image-placeholder-400x266.jpg"
                      alt={String(project)}
                    />
                  ) : (
                    <img src={media.source} alt={String(project)} />
                  )
                )
              ) : (
                <img
                  src="https://www.cdc-carpi.com/wp-content/uploads/2020/12/image-placeholder-400x266.jpg"
                  alt={String(project)}
                />
              )} */}
            </Slider>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="buttons-group">
            <button type="button" className="btn-cancel me-2" onClick={onHide}>
              Fechar
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalVisualizer;
