import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { projects } from '../data';

import GalleryList from '../components/projectspage/GalleryList';
import IndexList from '../components/reusable/IndexList';
import NoMatch from '../components/NoMatch';

const ProjectDetailScreen = ({ match }) => {
  // this gets the id on the url
  const project = projects.find((project) => project._id === match.params.id);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!project) {
    return <NoMatch />;
  }

  return (
    <>
      <Container fluid className='mt-5'>
        <Button as={Link} className='btn btn-light m-5' to='/projects'>
          Go Back
        </Button>
        <Button id='menu_btn' onClick={toggleMenu}>
          Show Menu
        </Button>
        <Row>
          {showMenu ? (
            <Col md='auto' className='mx-5'>
              <IndexList data={projects} />
            </Col>
          ) : (
            ''
          )}
          <Col>
            <GalleryList project={project} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetailScreen;
