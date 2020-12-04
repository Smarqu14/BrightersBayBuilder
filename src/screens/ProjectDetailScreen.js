import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { projects } from '../data';

import GalleryList from '../components/projectspage/GalleryList';
import IndexList from '../components/reusable/IndexList';
import NoMatch from '../components/NoMatch';

const ProjectDetailScreen = ({ match }) => {
  const project = projects.find((project) => project._id === match.params.id);

  if (!project) {
    return <NoMatch />;
  }

  return (
    <>
      <Container fluid className='p-5' style={{ marginTop: '120px' }}>
        <Row>
          <Col md='auto' className='mx-0'>
            <IndexList data={projects} />
          </Col>
          <Col>
            <GalleryList project={project} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetailScreen;
