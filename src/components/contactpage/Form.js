import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const FormContainer = () => {
  return (
    <Form>
      <Form.Group controlId='formGridName'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' placeholder='Enter name' />
      </Form.Group>

      <Form.Group controlId='formGroupEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group controlId='formGridPhoneNumber'>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type='text' placeholder='Enter phone number' />
      </Form.Group>

      <Form.Group controlId='formGridAddress'>
        <Form.Label>Address</Form.Label>
        <Form.Control type='text' placeholder='Enter project adresss' />
      </Form.Group>

      <Form.Group controlId='formGridTextMessage'>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>

      <Form.Group id='formGridCheckbox'>
        <Form.Check type='checkbox' label='Subscribe to our mailing list' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;
