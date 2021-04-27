import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CovidData from './Content.component'
import './Content.css';



const CovidAccordion = () => {

  const myStyle = {
    display: "flex",
    justifyContent: "center"
  };

  return (
    <Accordion style={myStyle} defaultActiveKey="1">
      <Card>
        <Card.Header>
          <Accordion.Toggle className="text-btn" as={Button} variant="link" eventKey="0">
            COVID, Cliquez ici pour plus d'informations
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CovidData />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CovidAccordion;