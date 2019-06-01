import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">Mastery Music Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/application">Apply</Nav.Link>
            <NavDropdown title="Other Sites" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://www.facebook.com/lundberg.emilie/"
              >
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                target="_blank"
                href="https://masterymusicacademy.mymusicstaff.com/"
              >
                Class Signup
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
