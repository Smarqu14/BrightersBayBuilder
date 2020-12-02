import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Jumbo = ({ info, match }) => {
  return (
    <>
      <Jumbotron fluid className='jumbo__image'>
        <div className='jumbo__overlay' />
        <Container className='p-5'>
          <h1 className='jumbo__header'>{info.title}</h1>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Jumbo;
