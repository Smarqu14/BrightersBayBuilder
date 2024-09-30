import React from 'react';
import { Container } from 'react-bootstrap';
import Form from './Form';
import '../css/Contact.css';

const Contact = () => {
  return (
    <Container>
      <div className='contact__information'>
        <h2>Feel free to contact us!</h2>
        <p className='paragraph__text'>
          Get in touch with our representative at any time you please use our
          contact form on our website or one of our contact numbers. Let us
          build your future together. You can always visit us at our HQ; we have
          a friendly staff and a mean cup of coffee.
        </p>
      </div>
      <Form />
      <div className='map-container'>
        <iframe
          title='Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3621983868754!2d-122.44195758468184!3d37.64656897975735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c95d0728c01%3A0x50bcb07a7c218f16!2s10%20Altura%20Way%2C%20South%20San%20Francisco%2C%20CA%2094080!5e0!3m2!1sen!2sus!4v1632442855556!5m2!1sen!2sus'
          width='100%'
          height='450'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
        ></iframe>
      </div>
    </Container>
  );
};

export default React.memo(Contact);
