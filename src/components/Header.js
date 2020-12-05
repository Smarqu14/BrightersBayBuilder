import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logos/bbb-logo.png';
import Fade from 'react-reveal/Fade';

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
          <Fade top cascade>
            <Navbar.Brand as={Link} to='/'>
              <img
                src={logo}
                className='logo'
                alt='brighter bay builder logo'
              />
            </Navbar.Brand>
          </Fade>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Fade top cascade>
                <Nav.Link as={Link} to='/'>
                  <span>
                    <i className='fas fa-home'></i>
                    HOME
                  </span>
                </Nav.Link>
                <Nav.Link as={Link} to='/about'>
                  <span>
                    <i className='fas fa-users'></i>
                    ABOUT US
                  </span>
                </Nav.Link>
                <Nav.Link as={Link} to='/projects'>
                  <span>
                    <i className='fas fa-hammer'></i>
                    PROJECTS
                  </span>
                </Nav.Link>
                <Nav.Link as={Link} to='/services'>
                  <span>
                    <i className='fas fa-paint-roller'></i>
                    SERVICES
                  </span>
                </Nav.Link>
                <Nav.Link as={Link} to='/contact'>
                  <span className='btn-contact'>
                    <i className='fas fa-address-card'></i>CONTACT US
                  </span>
                </Nav.Link>
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
