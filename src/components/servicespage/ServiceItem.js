import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceItem = ({ services }) => {
  const servicesOptions = services.map((service) => {
    return (
      <Col sm={true} md={4} key={service._id}>
        <Link to={`/services/${service._id}`}>
          <Image
            src={service.image}
            rounded
            className='img-rounded hover-effect'
          />
          <h4 className='pt-3 text-center image-rounded-title'>
            {service.name}
          </h4>
        </Link>
      </Col>
    );
  });

  return (
    <>
      <Row className='justify-content-center pr-5'>{servicesOptions}</Row>
    </>
  );
};

export default ServiceItem;
