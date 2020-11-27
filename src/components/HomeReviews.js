import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { reviews } from '../data';
import Rating from './Rating';

const HomeReviews = ({ images }) => {
  return (
    <>
      <Container fluid className='mt-5 py-5'>
        <div className='reviews__title'>
          <h1>Customers Reviews</h1>
          <p>Learn why customers choose Bright Bay Builders</p>
        </div>

        <Container className='my-auto'>
          <Row>
            {reviews.map((review, idx) => (
              <Col key={idx} sm={4} md={4} lg={4} xl={4}>
                <Card className='card-body-reviews'>
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <div>
                      <span>
                        <i
                          style={{ color: 'red' }}
                          className={'fas fa-star'}
                        ></i>
                      </span>
                      <span>
                        <i
                          style={{ color: 'red' }}
                          className={'fas fa-star'}
                        ></i>
                      </span>
                      <span>
                        <i
                          style={{ color: 'red' }}
                          className={'fas fa-star'}
                        ></i>
                      </span>
                      <span>
                        <i
                          style={{ color: 'red' }}
                          className={'fas fa-star'}
                        ></i>
                      </span>
                      <span>
                        <i
                          style={{ color: 'red' }}
                          className={'fas fa-star'}
                        ></i>
                      </span>
                    </div>
                    <br />
                    <Card.Text>
                      <span>
                        <i className={'fas fa-quote-left'}></i>
                      </span>{' '}
                      {review.review}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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
