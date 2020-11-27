import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const HomeServices = ({ images }) => {
  const imgs = images.map((img, idx) => {
    return (
      <div className={`${img.class} gallery__listing`} key={idx}>
        <Link to={`/projects`}>
          <p className='gallery__title'>{img.title}</p>
        </Link>
        <img src={img.src} alt={img.title} className='gallery__img' />
      </div>
    );
  });
  return (
    <Container fluid className='p-0'>
      <div className='section__title'>
        <h1>Remodeling</h1>
        <p>This is what we do. </p>
      </div>
      <div className='gallery'>{imgs}</div>
    </Container>
  );
};

export default HomeServices;
