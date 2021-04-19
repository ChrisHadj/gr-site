import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
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

  const module = typeof window !== `undefined` ? require("module") : null

  window.addEventListener("scroll", changeBackground);
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
          <Nav.Link href="/visites">Visites</Nav.Link>
          <Nav.Link href="/restaurants">Restaurants</Nav.Link>
          <Nav.Link href="/image">Images</Nav.Link>
          <Nav.Link href="/night-life">Night life</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarv;
