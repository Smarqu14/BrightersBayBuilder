import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import ReviewCard from './ReviewCard';
import '../css/HomeReviews.css';

const HomeReviews = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: '#f4f4f4' }}>
        <div className='section__title'>
          <h2>Customer Reviews</h2>
          <h4>Learn why customers choose Brighter Bay Builders, Inc.</h4>
        </div>

        <Container>
          <Row className='justify-content-center'>
            <ReviewCard />
          </Row>
          <Row className='justify-content-center'>
            {/* <Button
              className='btn__reviews'
              variant='outline-danger'
              target='_blank'
            >
              READ ALL REVIEWS
            </Button>{' '} */}
            <div className='btn__reviews' />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default React.memo(HomeReviews);
