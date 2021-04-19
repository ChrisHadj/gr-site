import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "./articles/covid/accordion.text";
import AccordionDrop from "./articles/covid/Accordion.drop";
import "./Content.css";

class Content extends React.Component {
  render() {
    return (
      <Container className="container">
        <Row className="row">
          <Col>
            <Accordion />
          </Col>
          <Col className="col-style">
            <AccordionDrop />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
