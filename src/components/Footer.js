import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hoozz from '../houzz.png';
import buildzoom from '../buildzoom.png';
import angieslist from '../angieslist.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <img src={hoozz} className='logo' alt='houzz logo' />
            <img src={buildzoom} className='logo' alt='buildzoom logo' />
            <img src={angieslist} className='logo' alt='buildzoom logo' />
          </Col>
          <Col className='py-4'>
            <div className='footer__address'>
              <h4>Company Contact Details</h4>
              <span>
                <i className={'fas fa-map-marked-alt'}></i>
                10 Altura Way, South San Francisco, CA, 94080
              </span>
              <span>
                <i className={'fas fa-phone-volume'}></i>
                415-225-8732
              </span>
              <span>
                <i className={'fas fa-envelope'}></i>
                brighterbaybuilder@gmail.com
              </span>
              <p>Copyright &copy; Brighter Bay Builder, Inc.</p>
            </div>
          </Col>
          <Col className='py-3'>
            <div className='footer__social-info'>
              <h4> About the company</h4>
              <p>
                Hello, we’re Brighters Builders Bay, Inc. your new premium
                construction company. We know you want your dream home. So let
                us take care of that, we’re really good at it, we promise!
              </p>
              <div className='footer__social-icons'>
                <span>
                  <a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className={'fab fa-linkedin'}></i>
                  </a>
                </span>
                <span>
                  <a
                    href='https://www.yelp.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className={'fab fa-yelp'}></i>
                  </a>
                </span>
                <span>
                  <a
                    href='https://www.instagram.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className={'fab fa-instagram'}></i>
                  </a>
                </span>
                <span>
                  <a
                    href='https://www.youtube.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className={'fab fa-youtube'}></i>
                  </a>
                </span>
                <span>
                  <a
                    href='https://www.gmail.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className={'fas fa-envelope'}></i>
                  </a>
                </span>
                <span>
                  <a
                    href='https://www.twitter.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className={'fab fa-twitter'}></i>
                  </a>
                </span>
              </div>
              <p>Designed By Steve Marquez</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
