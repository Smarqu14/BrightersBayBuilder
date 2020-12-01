import React from 'react';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
// defaultActiveKey={}
const IndexList = ({ data }) => {
  const listGroupItem = data.map((item) => {
    return (
      <LinkContainer to={item._id} key={item._id}>
        <ListGroup.Item action href={`/${item._id}`}>
          {item.name}
        </ListGroup.Item>
      </LinkContainer>
    );
  });

  return (
    <>
      <Tab.Container>
        <Row>
          <Col sm={12}>
            <ListGroup variant='flush'>{listGroupItem}</ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default IndexList;
