import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hoozz from '../logos/houzz.png';
import buildzoom from '../logos/buildzoom.png';
import angieslist from '../logos/angieslist.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='container__footer'>
        <Row>
          <Col className='pt-3'>
            <img src={hoozz} className='logo' alt='houzz logo' />
            <img src={buildzoom} className='logo' alt='buildzoom logo' />
            <img src={angieslist} className='logo' alt='buildzoom logo' />
          </Col>
          <Col className='pt-3'>
            <ul className='contact__details-info'>
              <li>
                <strong>Bright Bay Builder, Inc</strong>
              </li>
              <li>
                <i className={'fas fa-phone-volume'}></i>
                <a href='tel:415-225-8732'>415-225-8732</a>
              </li>
              <li>
                <i className={'fas fa-envelope'}></i>
                <a href='mailto:andres.brighterbay@gmail.com'>
                  andres.brighterbay@gmail.com
                </a>
              </li>
              <li>
                <i className={'fas fa-link'}></i>
                <a href='http://localhost:3000'>brightBuilder.com</a>
              </li>
              <li>
                <i className='fas fa-map-marked-alt'></i>
                <a href='https://goo.gl/maps/buXhjEiwSP6B6JtP7'>
                  {`Maps & directions`}
                </a>
              </li>
              <li>Copyright &copy; Brighter Bay Builder, Inc.</li>
            </ul>
          </Col>
          <Col className='pt-3'>
            <div className='footer__social-info'>
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
                  href='https://www.twitter.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className={'fab fa-twitter'}></i>
                </a>
              </span>
            </div>
            <span className='designed'>Designed By Steve Marquez</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
