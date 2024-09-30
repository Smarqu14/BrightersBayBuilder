import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import '../css/HomeServices.css';

const HomeServices = memo(({ images }) => {
  return (
    <Container fluid className='p-0'>
      <div className='about-section'>
        <h2 className='underline'>
          <strong className='company-name'>Brighter Bay Builders, Inc.</strong>
        </h2>
        <p>
          Welcome to <strong>Brighter Bay Builders, Inc.</strong>, your trusted
          partner in the San Francisco Bay Area for exceptional remodeling
          services. As a leading construction company, we specialize in
          transforming residential and commercial spaces to reflect your unique
          vision.
        </p>
        <p>
          Our dedicated team prioritizes quality craftsmanship and customer
          satisfaction. We believe that every project should be a seamless
          experience, and we communicate openly to ensure your expectations are
          not just met, but exceeded.
        </p>
        <p>
          With Brighter Bay Builders, you’re not just hiring a contractor;
          you’re gaining a reliable partner committed to bringing your ideas to
          life with high-quality materials and expert skills. Let us help you
          create the space of your dreams!
        </p>
      </div>
      <div className='gallery'>
        {images.map((img) => (
          <ServiceItem img={img} key={img.id} />
        ))}
      </div>
      <div className='allservices-button text-center'>
        <Link to='/services'>
          <button className='slider__btn slider__btn-effect'>
            View all Services
          </button>
        </Link>
      </div>
    </Container>
  );
});

const ServiceItem = memo(({ img }) => (
  <div className={`${img.class} gallery__listing`}>
    <Link to='/projects'>
      <p className='gallery__title'>{img.title}</p>
    </Link>
    <Image
      src={img.src}
      alt={img.title}
      className='gallery__img'
      loading='lazy'
    />
  </div>
));

export default HomeServices;
