import React from 'react';
import { aboutData } from '../../data';
import { Container, Image, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container fluid className='mt-5'>
        <Row className="col-responsive">
          <Col sm={true}>
            <div className='about__image'>
              <Image src={aboutData[0].src} alt={aboutData[0].alt} />
            </div>
          </Col>
          <Col sm={true}>
            <div className='about__story-text'>
              <h4>{aboutData[0].aboutHeader}</h4>
              <p>{aboutData[0].aboutSubheader}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
