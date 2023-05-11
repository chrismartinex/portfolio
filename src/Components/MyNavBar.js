import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../App.css';
import { Row, Col } from "react-bootstrap";
import Main from "./Main";


function BasicExample() {
const logo = require("../Assets/CM.PNG")

  return (
    <>
      <Navbar bg='warning' expand='lg' className=''>
        <Container>
          <Navbar.Brand href='#home' className='text-white'>
            <img src={logo} alt='' className='logo-size' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#project' className='text-white my-class'>
                Projects
              </Nav.Link>
              <Nav.Link href='#skills' className='text-white  my-class'>
                Skills
              </Nav.Link>
              <Nav.Link href='#skills' className='text-white my-class'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col>
          <Main />
        </Col>
      </Row>
     
    </>
  );
}

export default BasicExample;
