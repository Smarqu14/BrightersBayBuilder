import React from 'react';
import { Image, Container } from 'react-bootstrap';
import InfoList from './InfoList';
import Form from '../contactpage/Form';

const ServicesInformation = ({ service }) => {
  return (
    <Container fluid>
      <h1>{service.name}</h1>
      <Image src={service.image} className='img-card' />
      <p className='p-5'>{service.information}</p>
      <h3>Quality With Every Inch Of Space</h3>
      <InfoList service={service} />
      <Container className='m-5'>
        <Form />
      </Container>
    </Container>
  );
};

export default ServicesInformation;
