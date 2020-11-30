import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const GalleryItem = ({ project, showModal }) => {
  return (
    <>
      <Row className='py-5'>
        <Col className='hover-effect mx-3' onClick={() => showModal()}>
          <Image src={project.image} className='img-card' />
        </Col>
        <Col className='hover-effect mx-3' onClick={() => showModal()}>
          <Image src={project.image} className='img-card' />
        </Col>
        <Col className='hover-effect mx-3' onClick={() => showModal()}>
          <Image src={project.image} className='img-card' />
        </Col>
      </Row>
    </>
  );
};

export default GalleryItem;
