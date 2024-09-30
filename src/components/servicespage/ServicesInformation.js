import React from 'react';
import { Image, Container } from 'react-bootstrap';
import InfoList from './InfoList';

const ServicesInformation = React.memo(({ service }) => {
  return (
    <Container fluid className='my-5'>
      <h1 className='image__header'>{service.name}</h1>
      <Image src={service.image} className='img-card' alt={service.name} />
      <p className='p-5 paragraph__text paragraph__text-pad'>
        {service.information}
      </p>
      <h3 className='service__subheader'>Quality With Every Inch Of Space</h3>
      <InfoList service={service} />
    </Container>
  );
});

export default ServicesInformation;
