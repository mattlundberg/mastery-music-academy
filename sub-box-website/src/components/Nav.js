import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
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
    );
  }
}

export default Navigation;
