import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css'

export default function IconsMiddle() {
const github = require("../Assets/github.png");
const lknd = require("../Assets/lknd.png")
const resume = require("../Assets/resume.png")



  return (
    <Container className='centerIcons'>
      <Row>
        <Col>
          <a href={resume} className='resButton' style={{ marginRight: "20px" }}>
            <button>RESUME</button>
          </a>
          <a
            href='https://github.com/chrismartinex'
            style={{ marginRight: "20px" }}
          >
            <img src={github} alt='' className='logo-size' />
          </a>
          <a
            href='https://www.linkedin.com/in/3chrismartinez'
            style={{ marginRight: "20px" }}
          >
            <img src={lknd} alt='' className='logo-size' />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
