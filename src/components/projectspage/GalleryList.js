import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const GalleryList = ({ project }) => {
  return (
    <>
      <h2>{project.name}</h2>
      <Image src={project.image} className='img-card' />
      <Row className='py-5'>
        <Col className='hover-effect mx-3'>
          <Image src={project.image} className='img-card' />
        </Col>
        <Col className='hover-effect mx-3'>
          <Image src={project.image} className='img-card' />
        </Col>
        <Col className='hover-effect mx-3'>
          <Image src={project.image} className='img-card' />
        </Col>
      </Row>
    </>
  );
};

export default GalleryList;
