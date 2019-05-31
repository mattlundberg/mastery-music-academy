import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar bg="light" variant="light" expand="lg">
          <Row>
            <Col>
              <Navbar.Brand className="mr-auto" href="/">
                Mastery Music Academy
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-xs-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Navbar>
      </footer>
    );
  }
}

export default Footer;
