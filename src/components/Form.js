import React from 'react';
import { Container } from 'react-bootstrap';

const Form = () => {
  return (
    <Container>
      <div className='contact__container'>
        <div className='contact__details'>
          <div className='contact__details-info'>asdasd</div>
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
