import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceItem = ({ services }) => {
  const servicesOptions = services.map((service) => {
    return (
      <Col xs={6} md={4}>
        <Link to={`/services/${service._id}`}>
          <Image
            src={service.image}
            roundedCircle
            className='img-circle hover-effect'
          />
          <h4 className='pt-3 text-center'>{service.name}</h4>
        </Link>
      </Col>
    );
  });

  return (
    <>
      <Row className='p-5'>{servicesOptions}</Row>
    </>
  );
};

export default ServiceItem;
