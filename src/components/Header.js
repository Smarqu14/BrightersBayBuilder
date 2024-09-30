import React, { memo } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logos/logo-white.png';
import './css/Header.css';

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/services', label: 'SERVICES' },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/lead-based-paint', label: 'LEAD BASED PAINT' },
  { path: '/about', label: 'ABOUT' },
  { path: '/contact', label: 'CONTACT' },
];

const NavLinks = memo(({ links, currentPath }) => (
  <>
    {links.map(({ path, label }) => (
      <Nav.Link as={Link} to={path} key={path}>
        <span className={`navlink ${currentPath === path ? 'active' : ''}`}>
          {label}
        </span>
      </Nav.Link>
    ))}
  </>
));

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <Navbar expand='lg'>
        <Container className='d-flex justify-content-between align-items-center'>
          <Navbar.Brand as={Link} to='/' className='flex-shrink-0 navbar'>
            <img
              src={logo}
              className='logo logo-header'
              alt='Brighter Bay Builder, Inc.'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <NavLinks links={navLinks} currentPath={location.pathname} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default memo(Header);
