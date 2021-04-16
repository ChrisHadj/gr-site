import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import styled from "styled-components/macro";
import imageRhodes from "../../../images/footer/palia-poli-02.jpg";
import imageLindos from "../../../images/footer/lindos.jpg";
import imageTsambika from "../../../images/footer/tsambika.jpg";
import imageNight from "../../../images/footer/nightlife.jpg";
import imagePrasonisi from "../../../images/footer/prasonisi.jpg";

const Beach = () => {
  return (
    <Container className="container-grid">
    <PageTitleContainer>
      <PageTitle>Lieux incontournable de Rhodes</PageTitle>
    </PageTitleContainer>
      <Row>
        <Col className="horizontal gallery-item col">
          <ContainerTitle className="container-title">
            <Title className="title">Lindos</Title>
          </ContainerTitle>
          <img
            className="lindos-horizontal"
            src={imageLindos}
            alt="lindos-castle"
          />
        </Col>
        <Col className="horizontal gallery-item col">
          <ContainerTitle className="container-title">
            <Title className="title">Tsambika</Title>
          </ContainerTitle>
          <img
            className="tsambika-horizontal"
            src={imageTsambika}
            alt="tsambika church"
          />
        </Col>
        <Col className="verticale rhodes-img gallery-item col">
          <ContainerTitle className="container-title">
            <Title className="title">Rhodes</Title>
          </ContainerTitle>
          <img src={imageRhodes} alt="rhodes-town" />
        </Col>
      </Row>
      <Row>
        <Col className="horizontal gallery-item col">
          <ContainerTitle className="container-title">
            <Title className="title">Faliraki</Title>
          </ContainerTitle>
          <img src={imageNight} alt="nightlife" />
        </Col>
        <Col className="horizontal gallery-item col">
          <ContainerTitle className="container-title">
            <Title className="title">Prasonisi</Title>
          </ContainerTitle>
          <img src={imagePrasonisi} alt="prasonisi" />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Beach;

export const ContainerTitle = styled.div`
  position: absolute;
  z-index: 999;
  height: 70px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;

  &:hover {
    opacity: 0.9;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  margin-block-start: 0;
`;

export const PageTitleContainer = styled.div`
  display: block;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const PageTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;