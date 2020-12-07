import React from 'react';
import { Container } from 'react-bootstrap';
import bbbLogo from '../../logos/logo-white.png';
import Form from './Form';

const Contact = () => {
  return (
    <Container>
      <div className='contact__container'>
        <div className='contact__details'>
          <div className='contact__details-info'>
            <ul>
              <li>
                <strong>Bright Bay Builder, Inc</strong>
              </li>
              <li>
                10 Altura Way, <br /> South San Francisco, CA, 94080
              </li>
              <li>
                <i className={'fas fa-phone-volume'}></i>
                <a href='tel:415-225-8732'>415-225-8732</a>
              </li>
              <li>
                <i className={'fas fa-envelope'}></i>
                <a href='mailto:andres.brighterbay@gmail.com?subject=Interested in services'>
                  andres.brighterbay@gmail.com
                </a>
              </li>
              <li>
                <i className={'fas fa-link'}></i>
                <a href='https://brighterbaybuilders.web.app/'>
                  wwww.brighterbaybuilders.com
                </a>
              </li>
              <li>
                <i className='fas fa-map-marked-alt'></i>
                <a href='https://goo.gl/maps/buXhjEiwSP6B6JtP7'>
                  {`Maps & directions`}
                </a>
              </li>
            </ul>
          </div>
          <div className='contact__details-logo'>
            <img src={bbbLogo} className='logo contact_logo' alt='BBB logo' />
          </div>
        </div>
        <div className='contact__information'>
          <h2>Feel free to contact us!</h2>
          <p className='pb-5 paragraph__text'>
            Get in touch with our representative at any time you please use our
            contact form on our website or one of our contact numbers. Let us
            build your future together. You can always visit us at our HQ, we
            have a friendly staff and a mean cup of coffee.
          </p>
        </div>
        <Form />
      </div>
    </Container>
  );
};

export default Contact;
