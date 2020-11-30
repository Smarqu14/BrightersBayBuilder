import React from 'react';
import { Carousel } from 'react-bootstrap';

const ModalCarousel = ({ project }) => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='modal__image'
            src={project.imagesList[0]}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='modal__image'
            src={project.imagesList[1]}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='modal__image'
            src={project.imagesList[2]}
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ModalCarousel;
