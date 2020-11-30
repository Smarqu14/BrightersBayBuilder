import React, { useState } from 'react';
import { Carousel, Image, Button, Modal, Row, Col } from 'react-bootstrap';

const ModalImages = ({ modal, setModal, project }) => {
  // console.log(project.imagesList);
  return (
    <>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        // dialogClassName='modal-screen-bg'
        className='modal-screen-bg'
        // aria-labelledby='modal-screen'
      >
        <Carousel>
          <Carousel.Item>
            <img
              className='modal-screen-image'
              src={project.imagesList[0]}
              alt='First slide'
              style={{ width: '100%' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='modal-screen-image'
              src={project.imagesList[1]}
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='modal-screen-image'
              src={project.imagesList[2]}
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </Modal>
    </>
  );
};

export default ModalImages;
