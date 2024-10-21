import React, { memo } from 'react';
import Jumbo from '../components/reusable/Jumbo';
import Project from '../components/projectspage/Project';
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '../data';
import ContactJumbo from '../components/reusable/ContactJumbo';

const ProjectsScreen = () => {
  const info = React.useMemo(
    () => ({
      title: 'Projects',
      subTitle: 'We can build anything for you.',
    }),
    []
  );

  return (
    <>
      <Jumbo info={info} />
      <Container fluid style={{ backgroundColor: '#f2f2f2' }}>
        <Row fluid>
          {projects.map((project) => (
            <Col key={project._id} sm={12} md={6} xl={6} className='p-4'>
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </Container>
      <ContactJumbo />
    </>
  );
};

export default memo(ProjectsScreen);
