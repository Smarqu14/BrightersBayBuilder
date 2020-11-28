import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Jumbo = ({ info, match }) => {
  return (
    <>
      <Jumbotron fluid className='jumbo__image'>
        <div className='jumbo__overlay' />
        <Container>
          <h1>{info.title}</h1>
          <p>{info.subTitle}</p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Jumbo;
