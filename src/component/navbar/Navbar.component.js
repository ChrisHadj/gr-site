import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Logo from "../../images/Navbar/flag.png";

const Navbarv = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <Navbar
      className={navbar ? "navbar active" : "navbar"}
      id="home"
      bg="light"
      expand="lg"
    >
      <Navbar.Brand href="/">
        <img src={Logo} alt="flag-rhodes" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-item mr-auto">
          <NavDropdown title="Visite" id="basic-nav-dropdown">
            <NavDropdown.Item href="/lindos">Lindos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/restaurants">Restaurants</Nav.Link>
          <Nav.Link href="/image">Images</Nav.Link>
          <Nav.Link href="/night-life">Night life</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarv;
