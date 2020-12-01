import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NoMatch = () => {
  return (
    <>
      <Container style={{ margin: '13rem' }}>
        <h1>404 - Not Found</h1>
        <Link className='btn btn-dark' to='/'>
          Go Back
        </Link>
      </Container>
    </>
  );
};
export default NoMatch;
