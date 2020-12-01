import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = ({ services }) => {
  return (
    <>
      <Container>
        <p className='p-5'>
          Whether it's a multimillion-dollar technical facility or the
          renovation of a single office, <strong>Brighter Bay Builders </strong>
          is committed to exceeding our clients' expectations through a
          proactive and progressive approach to every project. Our general
          construction services are performed by a staff seasoned veterans who
          share a commitment to excellence.
          <strong> Brighter Bay Builders </strong>
          uses cutting edge construction technology in executing the work and
          delivers greater value through meticulous planning and conscientious
          execution.
        </p>
        <ServiceItem services={services} />
      </Container>
    </>
  );
};

export default Services;
