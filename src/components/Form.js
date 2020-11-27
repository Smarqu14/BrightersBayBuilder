import React from 'react';
import { Container } from 'react-bootstrap';

const Form = () => {
  return (
    <Container fluid>
      <div className='form__container'>
        <form className='form'>
          <ul className='form__flex-outer'>
            <li>
              <label for='first-name'>First Name</label>
              <input
                type='text'
                id='first-name'
                required
                placeholder='Enter your first name here'
              />
            </li>
            <li>
              <label for='last-name'>Last Name</label>
              <input
                required
                type='text'
                id='last-name'
                placeholder='Enter your last name here'
              />
            </li>
            <li>
              <label for='email'>Email</label>
              <input
                required
                type='email'
                id='email'
                placeholder='Enter your email here'
              />
            </li>
            <li>
              <label for='phone'>Phone</label>
              <input
                required
                type='tel'
                id='phone'
                placeholder='Enter your phone here'
              />
            </li>
            <li>
              <label for='message'>Message</label>
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
