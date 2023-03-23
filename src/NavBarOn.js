import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
const NavBarOn = () => {
  return (
    <div className="nav">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navb"
      >
        <Navbar.Brand href="#home" className="port">
          Prab@
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="inner">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="inner">
              About
            </Nav.Link>
            <Nav.Link href="#skill" className="inner">
              Skills
            </Nav.Link>
            <Nav.Link href="#project" className="inner">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="inner">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarOn;
