import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import { reviews } from '../../data';

const ReviewsCard = () => {
  const reviewsCard = reviews.map((review, idx) => {
    return (
      <Col key={idx} sm={4} md={4} lg={4} xl={4}>
        <Card className='card-body-reviews'>
          <Card.Body>
            <Card.Title>{review.name}</Card.Title>
            <div>
              <span>
                <i style={{ color: 'red' }} className={'fas fa-star'}></i>
              </span>
              <span>
                <i style={{ color: 'red' }} className={'fas fa-star'}></i>
              </span>
              <span>
                <i style={{ color: 'red' }} className={'fas fa-star'}></i>
              </span>
              <span>
                <i style={{ color: 'red' }} className={'fas fa-star'}></i>
              </span>
              <span>
                <i style={{ color: 'red' }} className={'fas fa-star'}></i>
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
    );
  });
  return <>{reviewsCard}</>;
};

export default ReviewsCard;
