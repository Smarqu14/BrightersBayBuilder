import React, { useState, useEffect, memo } from 'react';
import { Tab, Row, Col, ListGroup, Accordion, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const IndexList = memo(({ data }) => {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth });
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  };

  const listGroupItem = data.map((item) => (
    <LinkContainer to={item._id} key={item._id}>
      <ListGroup.Item action>{item.name}</ListGroup.Item>
    </LinkContainer>
  ));

  const sizes = useWindowSize();

  return (
    <>
      {sizes.width < 767 ? (
        <Accordion>
          <Accordion.Toggle as={Button} variant='info' eventKey='0'>
            Navigation&nbsp;
            <i className='fas fa-chevron-circle-down'></i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Tab.Container>
              <Row>
                <Col sm={12}>
                  <ListGroup variant='flush'>{listGroupItem}</ListGroup>
                </Col>
              </Row>
            </Tab.Container>
          </Accordion.Collapse>
        </Accordion>
      ) : (
        <Tab.Container>
          <Row>
            <Col sm={12}>
              <ListGroup variant='flush'>{listGroupItem}</ListGroup>
            </Col>
          </Row>
        </Tab.Container>
      )}
    </>
  );
});

export default IndexList;
