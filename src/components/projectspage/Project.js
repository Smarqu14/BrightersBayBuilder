import React, { memo } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = memo(({ project }) => {
  return (
    <Card className='hover-effect'>
      <Link to={`/projects/${project._id}`} style={{ textDecoration: 'none' }}>
        <Card.Img src={project.image} className='img-card' />
        <Card.Body>
          <Card.Title as='h7' style={{ color: '#0056b3' }}>
            <strong>{project.name}</strong>
          </Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
});

export default Project;
