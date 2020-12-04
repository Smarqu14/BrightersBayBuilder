import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IndexList from '../components/reusable/IndexList';
import ServicesInformation from '../components/servicespage/ServicesInformation';
import { services } from '../data';
import NoMatch from '../components/NoMatch';

const ServiceDetailScreen = ({ match }) => {
  const service = services.find((service) => service._id === match.params.id);

  if (!service) {
    return <NoMatch />;
  }

  return (
    <>
      <Container fluid className='p-5' style={{ marginTop: '120px' }}>
        <Row>
          <Col md='auto' className='mx-0'>
            <IndexList data={services} />
          </Col>
          <Col>
            <ServicesInformation service={service} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceDetailScreen;
