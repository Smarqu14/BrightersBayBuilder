import React from 'react';
import { Container, CardDeck, Row, Col } from 'react-bootstrap';

const HomeReviews = ({ images }) => {
  return (
    <>
      <Container fluid className='mt-5'>
        <Row>
          {images.map((img, idx) => (
            <Col key={idx} sm={12} md={6} lg={4} xl={3}>
              <CardDeck>
                {/* <HomeServicesItem img={img} className='effect-scale' /> */}
              </CardDeck>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeReviews;
