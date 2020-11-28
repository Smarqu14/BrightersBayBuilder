import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Rating from './Rating';

const Project = ({ project }) => {
  return (
    <Card className='my-3 p-3 rounded justify-content-center'>
      <Link to={`/projects/${project._id}`}>
        <Card.Img src={project.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/projects/${project._id}`}>
          <Card.Title as='div'>
            <strong>{project.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Project;
