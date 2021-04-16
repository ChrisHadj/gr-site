import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import styled from 'styled-components/macro'
import imageRhodes from "../../../images/footer/palia-poli-02.jpg";
import imageLindos from "../../../images/footer/lindos.jpg";
import imageTsambika from "../../../images/footer/tsambika.jpg";
import imageNight from "../../../images/footer/nightlife.jpg";
import imagePrasonisi from "../../../images/footer/prasonisi.jpg";

const Beach = () => {
  return (
    <Container className="container-grid">
      <Row>
        <Col className="horizontal gallery-item">
        <Lindos>
          Lindos
        </Lindos>
         <img className="lindos-horizontal" src={imageLindos} alt="lindos-castle" />
        </Col>
        <Col className="horizontal gallery-item">
          <img className="tsambika-horizontal" src={imageTsambika} alt="tsambika church" />
        </Col>
        <Col className="verticale rhodes-img gallery-item">
          <img src={imageRhodes} alt="rhodes-town" />
        </Col>
      </Row>
      <Row>
      <Col className="horizontal gallery-item">
        <img src={imageNight} alt="nightlife" />
      </Col>
      <Col className="horizontal gallery-item">
        <img src={imagePrasonisi} alt="prasonisi" />
      </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
};

export default Beach;


export const Lindos = styled.div`
  position: absolute;
`;