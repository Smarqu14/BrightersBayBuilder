import React, { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hoozz from '../logos/houzz.png';
import './css/Footer.css';

const Footer = memo(() => {
  return (
    <footer className='footer'>
      <Container className='container__footer'>
        <Row>
          <Col className='pt-3'>
            <span>
              <a
                href='https://www.houzz.com/pro/webuser-791354564/brighter-bay-builders-inc'
                target='_blank'
                rel='noreferrer'
              >
                <img src={hoozz} className='logo-footer' alt='houzz logo' />
              </a>
            </span>
            <span>
              <a
                href='https://www.buildzoom.com/contractor/brighter-bay-builders-inc'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='https://badges.buildzoom.com/fod2.png'
                  className='logo-footer'
                  alt='buildzoom logo'
                />
              </a>
            </span>
          </Col>
          <Col className='pt-3'>
            <ul className='contact__details-info'>
              <li>
                <strong>Brighter Bay Builders, Inc.</strong>
              </li>
              <li>
                <i className='fas fa-phone-volume'></i>
                <a href='tel:415-225-8732'>415-225-8732</a>
              </li>
              <li>
                <i className='fas fa-envelope'></i>
                <a href='mailto:andres.brighterbay@gmail.com?subject=Interested in construction services'>
                  andres.brighterbay@gmail.com
                </a>
              </li>
              <li>
                <i className='fas fa-link'></i>
                <a href='https://brighterbaybuilders.com/'>
                  www.brighterbaybuilders.com
                </a>
              </li>
              <li>
                <i className='fas fa-map-marked-alt'></i>
                <a href='https://goo.gl/maps/buXhjEiwSP6B6JtP7'>
                  Maps & directions
                </a>
              </li>
              <li>Copyright &copy; Brighter Bay Builders, Inc.</li>
            </ul>
          </Col>
          <Col className='pt-3'>
            <div className='footer__social-info'>
              {[
                {
                  href: 'https://www.linkedin.com/company/brighterbaybuilders',
                  icon: 'fab fa-linkedin',
                },
                {
                  href: 'https://www.yelp.com/biz/brighter-bay-builders-inc-south-san-francisco',
                  icon: 'fab fa-yelp',
                },
                {
                  href: 'https://www.instagram.com/brighterbaybuilders/',
                  icon: 'fab fa-instagram',
                },
                {
                  href: 'https://www.facebook.com/Brighter-Bay-Builders-105422331428504',
                  icon: 'fab fa-facebook-square',
                },
                {
                  href: 'https://www.youtube.com/watch?v=EUvVeAvoS8k',
                  icon: 'fab fa-youtube',
                },
              ].map(({ href, icon }) => (
                <span key={href}>
                  <a href={href} target='_blank' rel='noreferrer'>
                    <i className={icon}></i>
                  </a>
                </span>
              ))}
            </div>
            <span className='designed'>
              <a href='mailto:steveantonio00@gmail.com?subject=Interested in a website'>
                Designed By Steve Marquez
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});

export default Footer;
