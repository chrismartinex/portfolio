import React from 'react'
import '../App.css'
import { Col, Container, Row } from 'react-bootstrap';
import IconsMiddle from './IconsMiddle';

export default function Main() {
  return (
    <Container>
      <Row>
        <Col className='MainStyle'>
          <h1 className='MainFont'>HELLO WORLD,</h1>
          <h1 className='MainFont1'>I AM CHRIS MARTINEZ</h1>
        </Col>
        <Row className='lowerMainRow'>
          <Col className='lowerMain'>
            <h1>A FRONT END WEB DEVELOPER</h1>
          </Col>
        </Row>
        <Row>
          <Col className='finalCol'>
          <h3>sdjkkjlsdkjsdllkdjsklsdkjldsjklsk;dkldslksdlsdjlksdlkjksljsdjklksdjsdkl
            skjsdklkjldsjlkdsjklkjdsljkdsjkdsjkljdskklsdkjlsd
          </h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <IconsMiddle />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
