import React, { memo } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ModalCarousel = memo(({ project }) => {
  return (
    <Carousel>
      {project.imagesList.map((img, idx) => (
        <Carousel.Item key={idx} size='xl'>
          <Image className='modal__image' src={img} alt={`Slide ${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
});

export default ModalCarousel;
