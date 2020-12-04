import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const GalleryItem = ({ project, showModal }) => {
  return (
    <>
      <Row className='py-5'>
        {project.imagesList.map((img, idx) => {
          const cols = [];
          if (idx > 1) {
            cols.push(
              <Col
                key={idx}
                className='hover-effect'
                onClick={() => showModal()}
              >
                <Image src={img} className='img-card-small' />
              </Col>
            );
          }
          return cols;
        })}
      </Row>
    </>
  );
};

export default GalleryItem;
