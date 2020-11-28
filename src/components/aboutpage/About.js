import React from 'react';
import { aboutData } from '../../data';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Container>
              <div className='about__image'>
                <img src={aboutData[0].imgSrc} alt={aboutData[0].slogan} />
              </div>
            </Container>
          </Col>
          <Col>
            <Container className='about__story'>
              <div className='about__story-text'>
                <h4>
                  Based in San Francisco Bay Area, Bright Bay Builders, Inc. has
                  earned a reputation as a high quality, competitive firm that
                  completes projects on time and within budget. The company’s
                  diverse portfolio includes new construction, state-of the-art
                  renovation and historic restoration.
                </h4>
                <p>
                  Bright Bay Builders, Inc. offers a full range of project
                  planning, construction management and general construction
                  services. All of our technicians and trades are fully licensed
                  and insured. Incorporating the highest quality materials and
                  state-of-the-art construction techniques in conjunction with
                  superior project coordination and construction supervision,
                  Bright Bay Builders sees a project through from conception to
                  completion paying rigorous attention to project details while
                  maintaining our impeccable safety and quality assurance
                  record. Our clientele can be assured of this because our
                  workers are highly skilled professionals who are recognized
                  artisans in their trades.
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
