import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/ContactJumbo.css';

const ContactJumbo = () => {
  const contactDetails = [
    {
      icon: 'fas fa-phone',
      label: 'Call Us',
      value: '415-225-8732',
      link: 'tel:4152258732',
    },
    {
      icon: 'far fa-envelope',
      label: 'Email Us',
      value: 'info.brighterbay@gmail.com',
      link: 'mailto:info.brighterbay@gmail.com',
    },
    {
      icon: 'far fa-map', // Thinner map icon
      label: 'Find Us',
      value: 'Maps & Directions',
      link: 'https://goo.gl/maps/buXhjEiwSP6B6JtP7',
    },
  ];

  return (
    <Container fluid className='contact-jumbo'>
      <Row>
        {contactDetails.map((contact, index) => (
          <Col key={index} className='contact-column text-center'>
            <i className={`${contact.icon} contact-icon`}></i>
            <h5>{contact.label}</h5>
            <a href={contact.link} className='contact-link'>
              {contact.value}
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContactJumbo;
