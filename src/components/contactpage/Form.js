import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import firebase from '../../firebase';

const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pbjcjte',
        'template_ueylrud',
        e.target,
        'user_atqn5FizjiXP13egltGrm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    firebase
      .firestore()
      .collection('form-information')
      .add({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        address: formData.address,
        phoneNumber: formData.number,
      })
      .then(() => {
        console.log('Message was submitted');
      })
      .catch((error) => {
        console.log(error.message);
      });

    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
      address: '',
    });
    setSubmitted(true);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Form onSubmit={sendEmail}>
      <Form.Group controlId='formGridName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          required
          placeholder='Enter name'
          value={formData.name}
          onChange={handleOnChange}
          name='name'
        />
      </Form.Group>

      <Form.Group controlId='formGroupEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          onChange={handleOnChange}
          value={formData.email}
        />
      </Form.Group>

      <Form.Group controlId='formGridPhoneNumber'>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type='text'
          required
          placeholder='Enter phone number'
          value={formData.number}
          onChange={handleOnChange}
          name='number'
        />
      </Form.Group>

      <Form.Group controlId='formGridAddress'>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter project address'
          required
          name='address'
          value={formData.address}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group controlId='formGridTextMessage'>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          required
          name='message'
          value={formData.message}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        disabled={submitted}
        className='contact-button'
      >
        {submitted ? 'Message Submitted' : 'Submit'}
      </Button>
    </Form>
  );
};

export default React.memo(FormContainer);
