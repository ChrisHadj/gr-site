import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Logo from "../../images/Navbar/flag.png";
import Button from "../button/Button.component";

class Navbarv extends React.Component {
  render() {
    return (
      <Navbar id="home" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="flag-rhodes" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-item mr-auto">
            <Nav.Link href="#link">Visites</Nav.Link>
            <Nav.Link href="#link">Restaurants</Nav.Link>
            <Nav.Link href="/image">Images</Nav.Link>
            <Nav.Link href="#link">Night life</Nav.Link>
          </Nav>
          <Nav className="mr-auto covid-button">
            <Button href="covid" className="covid-button" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbarv;
