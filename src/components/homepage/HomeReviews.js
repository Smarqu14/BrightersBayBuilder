import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { reviews } from '../../data';
import ReviewCard from './ReviewCard';

const HomeReviews = ({ images }) => {
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
              href='https://www.yelp.com/'
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
