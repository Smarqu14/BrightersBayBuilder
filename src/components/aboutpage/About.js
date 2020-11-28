import React from 'react';
import { aboutData } from '../../data';
import { Container, Image, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xl={6} lg={6} md={6}>
            <Image
              src={aboutData[0].src}
              alt={aboutData[0].alt}
              className='about__image'
            />
          </Col>
          <Col>
            <Container className='about__story'>
              <div className='about__story-text'>
                <h4>{aboutData[0].aboutHeader}</h4>
                <p>{aboutData[0].aboutSubheader}</p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
