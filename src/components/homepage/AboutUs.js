import React, { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/AboutUs.css';
import noe1 from '../../images/noe2.webp';

const AboutUs = () => {
  const services = [
    {
      icon: 'fas fa-hammer',
      title: 'Renovations',
      description: 'Transforming spaces to meet modern standards.',
    },
    {
      icon: 'fas fa-home',
      title: 'Residential',
      description: 'Building dream homes with quality craftsmanship.',
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial',
      description: 'Creating functional and appealing workspaces.',
    },
    {
      icon: 'fas fa-tools',
      title: 'Maintenance',
      description: 'Providing upkeep and repair services.',
    },
  ];

  return (
    <Container className='about-us' fluid>
      <Row>
        <Col>
          <h2 className='about-us-title'>About Us</h2>
          <p>
            Brighter Bay Builders, Inc. is your go-to contracting firm and
            professional general contractor in the San Francisco Bay Area. We
            specialize in offering satisfactory residential and commercial
            remodels at cost-effective rates.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className='image-column'>
          <img src={noe1} alt='About Us' className='about-us-image' />
        </Col>
        <Col md={8} className='icon-column'>
          {services.map(({ icon, title, description }, index) => (
            <div key={index} className='icon-item'>
              <div className='icon-content'>
                <i className={icon}></i>
                <div className='icon-text'>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default memo(AboutUs);
