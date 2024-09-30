import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Jumbo.css';

const Jumbo = React.memo(({ info }) => (
  <div className='jumbo'>
    <div className='jumbo__image'>
      <div className='jumbo__overlay' />
      <Container className='jumbo__content'>
        <h1 className='jumbo__header'>{info.title}</h1>
        <h5 className='jumbo__subheader'>{info.subTitle}</h5>
      </Container>
    </div>
  </div>
));

export default Jumbo;
