import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  return (
    <Card className='hover-effect'>
      <Link to={`/projects/${project._id}`} style={{ textDecoration: 'none' }}>
        <Card.Img src={project.image} className='img-card' />
        <Card.Body>
          <Card.Title as='h5'>
            <strong>{project.name}</strong>
          </Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Project;
