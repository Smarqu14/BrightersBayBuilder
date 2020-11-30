import React from 'react';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
// defaultActiveKey={}
const IndexList = ({ projects }) => {
  const listGroupItem = projects.map((project) => {
    return (
      <LinkContainer to={project._id} key={project._id}>
        <ListGroup.Item action href={`/${project._id}`}>
          {project.name}
        </ListGroup.Item>
      </LinkContainer>
    );
  });

  return (
    <>
      <Tab.Container>
        <Row>
          <Col sm={12}>
            <ListGroup className='testing' variant='flush'>
              {listGroupItem}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default IndexList;
