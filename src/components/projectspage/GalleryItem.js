import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const GalleryItem = React.memo(({ project, showModal }) => {
  return (
    <Row className='py-5'>
      {project.imagesList.slice(2).map((img, idx) => (
        <Col key={idx + 2} className='hover-effect' onClick={showModal}>
          <Image src={img} className='img-card-small' />
        </Col>
      ))}
    </Row>
  );
});

export default GalleryItem;
