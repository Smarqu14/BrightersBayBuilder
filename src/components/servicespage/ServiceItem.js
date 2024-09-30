import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceItem = React.memo(({ services }) => {
  var makeUpperCase = (serviceName) => {
    return serviceName
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  };

  return (
    <Row className='justify-content-center pr-5'>
      {services.map((service) => (
        <Col sm={true} md={4} key={service._id}>
          <Link to={`/services/${service._id}`}>
            <Image
              src={service.image}
              className='img-rounded hover-effect'
              loading='lazy'
            />
            <h2
              className='pt-3 text-center image-rounded-title'
              style={{ color: '#0056b3' }}
            >
              {makeUpperCase(service.name)}
            </h2>
          </Link>
        </Col>
      ))}
    </Row>
  );
});

export default ServiceItem;
