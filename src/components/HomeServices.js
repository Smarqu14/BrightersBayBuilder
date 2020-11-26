import React from 'react';
import { Row, Col, Container, CardDeck } from 'react-bootstrap';
import HomeServicesItem from './HomeServicesItem';

const HomeServices = ({ images }) => {
  return (
    <>
      <Container fluid className='mt-5'>
        >
        <Row>
          {images.map((img, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} xl={3}>
              <CardDeck>
                <HomeServicesItem img={img} />
              </CardDeck>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeServices;
