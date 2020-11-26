import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeServicesItem = ({ img }) => {
  return (
    <Card className='my-0 p-0'>
      <h3 className='card__title'>{img.title}</h3>
      <Link to={`/projects`}>
        <Card.Img src={img.src} variant='top' />
      </Link>
    </Card>
  );
};

export default HomeServicesItem;
