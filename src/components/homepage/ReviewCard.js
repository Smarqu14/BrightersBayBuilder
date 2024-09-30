import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { reviews } from '../../data';
import '../css/ReviewCard.css';

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, idx) => (
        <span key={idx}>
          <i style={{ color: 'red' }} className={'fas fa-star'}></i>
        </span>
      ))}
    </div>
  );
};

const ReviewsCard = () => {
  return (
    <>
      {reviews.map(({ id, name, review }) => (
        <Col key={id} sm={8} md={4} lg={4} xl={4}>
          <Card className='card-body-reviews my-3'>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <StarRating />
              <br />
              <Card.Text>
                <span>
                  <i className={'fas fa-quote-left'}></i>
                </span>{' '}
                {review}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default React.memo(ReviewsCard);
