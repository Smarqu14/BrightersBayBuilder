import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BRIGHT BAY BUILDERS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home'></i>&nbsp;HOME
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fas fa-users'></i>&nbsp;ABOUT US
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/projects'>
                <Nav.Link>
                  <i className='fas fa-hammer'></i>&nbsp;PROJECTS
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/services'>
                <Nav.Link>
                  <i className='fas fa-paint-roller'></i>&nbsp;SERVICES
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <i className='fas fa-address-card'></i>&nbsp;CONTACT
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/estimate'>
                <Nav.Link>
                  <i className='fas fa-calculator'></i>&nbsp;GET YOUR ESTIMATE
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
