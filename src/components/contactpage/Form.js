import React from 'react';
import { Container } from 'react-bootstrap';
import bbbLogo from '../../bbb-logo.png';

const Form = () => {
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
                <a href='mailto:brightBuilder@gmail.com'>
                  brightBuilder@gmail.com
                </a>
              </li>
              <li>
                <i className={'fas fa-link'}></i>
                <a href='http://localhost:3000'>brightBuilder.com</a>
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
          <p>
            Get in touch with our representative at any time you please use our
            contact form on our website or one of our contact numbers. Let us
            build your future together. You can always visit us at our HQ, we
            have a friendly staff and a mean cup of coffee.
          </p>
        </div>
        <form className='form'>
          <ul className='form__outer'>
            <li>
              <label htmlFor='first-name'>First Name</label>
              <input
                type='text'
                id='first-name'
                required
                placeholder='Enter your first name here'
              />
            </li>
            <li>
              <label htmlFor='last-name'>Last Name</label>
              <input
                required
                type='text'
                id='last-name'
                placeholder='Enter your last name here'
              />
            </li>
            <li>
              <label htmlFor='email'>Email</label>
              <input
                required
                type='email'
                id='email'
                placeholder='Enter your email here'
              />
            </li>
            <li>
              <label htmlFor='phone'>Phone</label>
              <input
                required
                type='tel'
                id='phone'
                placeholder='Enter your phone here'
              />
            </li>
            <li>
              <label htmlFor='message'>Message</label>
              <textarea
                rows='6'
                required
                id='message'
                placeholder='Tell us about your project'
              ></textarea>
            </li>
            <li>
              <button type='submit'>Submit</button>
            </li>
          </ul>
        </form>
      </div>
    </Container>
  );
};

export default Form;
