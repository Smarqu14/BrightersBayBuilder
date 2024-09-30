import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import '../css/Lead.css';
import bbbEPA from '../../images/bbbEPA.webp';

const Lead = React.memo(() => {
  return (
    <Container fluid className='mt-2'>
      <Row className='align-items-center'>
        <Col md={6}>
          <Image
            src={bbbEPA}
            alt={'lead based paint image'}
            fluid
            className='lead-image'
          />
        </Col>
        <Col md={6}>
          <h2 className='lead-header'>LEAD BASED PAINT SERVICES</h2>
          <p className='lead-paragraph'>
            At Brighter Bay Builders, Inc., serving the San Francisco Bay Area,
            we understand the critical importance of Lead-Based Paint services
            for the safety and well-being of our clients. Lead-Based Paint poses
            significant health risks, especially in older homes, and while it is
            no longer used in production, its legacy remains in many properties.
            Our expert team is licensed by the EPA as a Renovation, Repair, and
            Painting (RRP) contractor, ensuring that we can effectively manage
            and remediate lead-based paint hazards through safe repairs,
            renovations, and painting.
          </p>
          <p className='lead-paragraph'>
            This service is particularly vital for families with young children,
            as children are more vulnerable to the harmful effects of lead
            exposure, which can impact their nervous systems and hinder their
            development. If you're in the San Francisco Bay Area and require
            assistance with a lead paint project, our experienced professionals
            are here to help. We are dedicated to providing you with the
            necessary support to ensure a safe living environment and to
            eliminate lead-related risks in your home.
          </p>
        </Col>
      </Row>
    </Container>
  );
});

export default Lead;
