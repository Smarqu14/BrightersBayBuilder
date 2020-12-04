import React from 'react';
import { Carousel } from 'react-bootstrap';

const ModalCarousel = ({ project }) => {
  return (
    <>
      <Carousel>
        {project.imagesList.map((img, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img className='modal__image' src={img} alt={`Slide idx`} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ModalCarousel;
