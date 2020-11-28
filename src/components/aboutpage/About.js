import React from 'react';
import { aboutData } from '../../data';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container fluid className='mb-5'>
        <Row>
          <Col>
            <Container>
              <div className='about__image'>
                <img src={aboutData[0].src} alt={aboutData[0].alt} />
              </div>
            </Container>
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
