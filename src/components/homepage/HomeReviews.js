import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import ReviewCard from './ReviewCard';

const HomeReviews = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: '#f4f4f4' }}>
        <div className='section__title'>
          <h1>Customers Reviews</h1>
          <h4>Learn why customers choose Bright Bay Builders</h4>
        </div>

        <Container>
          <Row className='justify-content-center'>
            <ReviewCard />
          </Row>
          <Row className='justify-content-center '>
            <Button
              href='https://www.yelp.com/biz/brighter-bay-builders-inc-south-san-francisco'
              className='btn__reviews'
              variant='outline-danger'
              target='_blank'
            >
              READ ALL REVIEWS
            </Button>{' '}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HomeReviews;
