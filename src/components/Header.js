import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar
        bg='primary'
        variant='dark'
        expand='lg'
        collapseOnSelect
        fixed='top'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BRIGHT BAY BUILDERS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home'></i>HOME
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fas fa-users'></i>ABOUT US
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/projects'>
                <Nav.Link>
                  <i className='fas fa-hammer'></i>PROJECTS
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/services'>
                <Nav.Link>
                  <i className='fas fa-paint-roller'></i>SERVICES
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <i className='fas fa-address-card'></i>CONTACT
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/estimate'>
                <Nav.Link>
                  <span className='btn-estimate'>
                    <i className='fas fa-calculator'></i>ESTIMATE
                  </span>
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
