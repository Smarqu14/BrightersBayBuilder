import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from 'react-bootstrap';
import Project from '../components/projectspage/Project';
import { projects } from '../data';

const ProjectScreen = ({ match }) => {
  // this gets the id on the url
  const project = projects.find((project) => project._id === match.params.id);

  return (
    <>
      <Container>
        <h2>Hello world</h2>

        <Link className='btn btn-light my-5' to='/'>
          Go Back
        </Link>
        <h2>{project.name}</h2>
        <Image src={project.image} fluid />
      </Container>
    </>
  );
};

export default ProjectScreen;
