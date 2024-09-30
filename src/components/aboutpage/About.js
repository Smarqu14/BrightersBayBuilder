import React from 'react';
import { aboutData } from '../../data';
import { Container, Image, Row, Col } from 'react-bootstrap';
import '../css/About.css';
import team from '../../images/team.webp';

const About = React.memo(() => {
  const { src, alt, aboutHeader, aboutSubheader } = aboutData[0];

  const paragraphs = aboutSubheader
    .trim()
    .split('\n')
    .map((p) => p.trim())
    .filter((p) => p);

  const features = [
    {
      icon: 'far fa-check-circle',
      title: 'Quality',
      description:
        'We lead our industry by delivering exceptional quality in every project. Our commitment to using the finest materials ensures durable, beautiful results, all while providing an outstanding customer experience that fosters trust and satisfaction.',
    },
    {
      icon: 'far fa-clock',
      title: 'Reliability',
      description:
        'Our clients appreciate our friendly and courteous team, dedicated to providing exceptional service with a personal touch and unwavering reliability.',
    },
    {
      icon: 'far fa-paper-plane',
      title: 'Accuracy',
      description:
        'We approach your projects with precision and a strong focus on timeliness, ensuring that we deliver on schedule without compromising accuracy.',
    },
    {
      icon: 'far fa-user-circle',
      title: 'Expertise',
      description:
        'Our trusted professionals are always available to provide exceptional support, delivering valuable services that distinguish us from our competitors in the industry.',
    },
  ];

  return (
    <Container fluid className='mt-2'>
      <Row className='col-responsive'>
        <Col sm>
          <div className='about__image'>
            <Image src={src} alt={alt} className='image' loading='lazy' />
          </div>
          <div className='about__image'>
            <Image src={team} alt={alt} className='image' loading='lazy' />
          </div>
        </Col>
        <Col sm>
          <div className='about__story-text'>
            <h5>{aboutHeader}</h5>
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </Col>
      </Row>
      <Row className='features-section'>
        {features.map((feature, index) => (
          <Col key={index} sm={3} className='feature'>
            <i className={feature.icon + ' feature-icon'}></i>
            <div className='feature-content'>
              <h6>{feature.title}</h6>
              <p>{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default About;
