import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  return (
    <Card className='hover-effect'>
      <Link to={`/projects/${project._id}`}>
        <Card.Img src={project.image} />
      </Link>
      <Card.Body>
        <Link to={`/projects/${project._id}`}>
          <Card.Title as='h4'>
            <strong>{project.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Project;
