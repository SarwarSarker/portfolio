import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 84 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Navbar fixed="top" expand="lg" className={navbar ? "awake" : null}>
        <Container>
          <Navbar.Brand href="#hero">Sarwar.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav__icon' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="active" href="#hero">
                Home
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
