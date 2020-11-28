import React from 'react';
import Jumbo from '../components/reusable/Jumbo';
import Project from '../components/projectspage/Project';
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '../data';

const ProjectsScreen = () => {
  const info = {
    title: 'Projects',
    subTitle: 'We can build anything for you.',
  };

  return (
    <>
      <Jumbo info={info} />
      <Container>
        <Row>
          {projects.map((project) => (
            <Col key={project._id} sm={12} md={6} xl={6}>
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProjectsScreen;
