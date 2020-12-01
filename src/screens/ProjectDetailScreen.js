import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { projects } from '../data';

import GalleryList from '../components/projectspage/GalleryList';
import IndexList from '../components/projectspage/IndexList';
import NoMatch from '../components/NoMatch';

const ProjectDetailScreen = ({ match }) => {
  // this gets the id on the url
  const project = projects.find((project) => project._id === match.params.id);

  if (!project) {
    return <NoMatch />;
  }

  return (
    <>
      <Container fluid className='mt-5'>
        <Link className='btn btn-light m-5' to='/projects'>
          Go Back
        </Link>
        <Row>
          <Col md='auto' className='m-5'>
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
