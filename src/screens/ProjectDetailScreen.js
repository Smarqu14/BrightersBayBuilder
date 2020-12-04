import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Button } from 'react-bootstrap';
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
      <Container fluid className='mt-5'>
        <Link to='/projects'>
          <i
            className='fas fa-chevron-left m-5'
            style={{ color: 'transparent', fontSize: '2rem' }}
          />
        </Link>
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
