import React from 'react';
import { Container } from 'react-bootstrap';
import ServiceItem from './ServiceItem';

const Services = React.memo(({ services }) => {
  return (
    <Container className='mb-5' fluid>
      <p className='p-5 paragraph__text'>
        Whether it's a multimillion-dollar technical facility or the renovation
        of a single office, <strong>Brighter Bay Builders, Inc.</strong> is
        committed to exceeding our clients' expectations through a proactive and
        progressive approach to every project. Our general construction services
        are performed by seasoned staff veterans who share a commitment to
        excellence. <strong>Brighter Bay Builders, Inc.</strong> uses cutting
        edge construction technology to execute the work and deliver more
        excellent value through meticulous planning and conscientious execution.
      </p>
      <ServiceItem services={services} />
    </Container>
  );
});

export default Services;
