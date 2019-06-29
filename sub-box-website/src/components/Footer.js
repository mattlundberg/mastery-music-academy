import React, { Component } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand href="/">Subscription Box</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav class="mr-auto" />
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/subscriptionbox">Subscription Box</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="#">Buy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </footer>
    );
  }
}

export default Footer;
