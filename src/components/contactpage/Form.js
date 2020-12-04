import React from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

class FormContainer extends React.Component {
  state = {
    name: '',
    email: '',
    number: '',
    message: '',
    address: '',
    submitted: false,
  };

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });

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
    this.setState({
      name: '',
      email: '',
      number: '',
      message: '',
    });
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.sendEmail}>
        <Form.Group controlId='formGridName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Enter name'
            value={this.state.name}
            onChange={this.handleOnChange}
            name='name'
          />
        </Form.Group>

        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            onChange={this.handleOnChange}
            value={this.state.email}
          />
        </Form.Group>

        <Form.Group controlId='formGridPhoneNumber'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Enter phone number'
            value={this.state.number}
            onChange={this.handleOnChange}
            name='number'
          />
        </Form.Group>

        <Form.Group controlId='formGridAddress'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter project adresss'
            required
            name='address'
            value={this.state.address}
            onChange={this.handleOnChange}
          />
        </Form.Group>

        <Form.Group controlId='formGridTextMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            required
            name='message'
            value={this.state.message}
            onChange={this.handleOnChange}
          />
        </Form.Group>

        <Form.Group id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Subscribe to our mailing list' />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          disabled={this.state.submitted ? true : false}
        >
          {this.state.submitted ? 'Message Submitted' : 'Submit'}
        </Button>
      </Form>
    );
  }
}

export default FormContainer;
