import React from "react";
import { DataContent } from "../../content/visite-page/Lindos.data";
import "./Lindos.style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RuinImg from "../../../images/Lindos/Acropolis_Lindos_Rhodes_1.jpg";
import Castle from "../../../images/Lindos/96696276.jpg";
import FrontBeach from "../../../images/Lindos/Spiaggia-di-Lindos-Isola-di-Rodi.jpg";
import BackBeach from "../../../images/Lindos/St.-Johns-Bay-Lindos-View.jpg";

const Content = () => {
  return (
    <div>
      {DataContent.map((item) => {
        return (
          <>
            <div className="title-container">
              <Container>
                <Row>
                  <Col>
                    <h1>{item.guideTitle}</h1>
                    <h5>{item.textTitle}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>{item.titleLindos}</h3>
                    <div>{item.histoireLindos}</div>
                  </Col>
                  <Col>
                    <img src={RuinImg} alt="lindos" />
                  </Col>
                </Row>
              </Container>
            </div>
            <Container className="info-container" fluid>
              <Row className="info-black-background">
                <Col className="info-text">{item.infoContainer}</Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>{item.textContent}</Col>
                <Col>{item.textContentTwo}</Col>
              </Row>
            </Container>
            <div>
              <Container>
                <Row>
                  <Col>
                    <img className="image" src={Castle} alt="lindos" />
                  </Col>
                  <Col>
                    <img className="image" src={FrontBeach} alt="lindos" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <script
                      data-ad-client="ca-pub-1208243264061405"
                      async
                      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    ></script>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Content;
